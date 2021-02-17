import React, {useState, useEffect} from 'react';

import Shell from '../../shared/layout/Shell';

import BookItem from '../../shared/components/BookItem';
import {secondsToTimeFormat} from '../../shared/utils/strings';

import useBookList from '../../state/hooks/useBookList';


import {Column, ResultsHeader, ResultsHeaderLabel, Row, Wrapper, Input, Form,Button} from './Home.styled';

const Home = () => {
    const [query, setQuery] = useState('');

    const {data, loading, setSearch,setRefresh} = useBookList('');


    const handleSearch =(e) =>{
        e.preventDefault();
        setSearch(query)
    }

    const handleChange = (event) => {
        setQuery(event.target.value);
    };

    useEffect(() => {
        setRefresh('refresh');

        return () => {
            setQuery('')
        };
    }, []);

    return (
        <Shell>
            <Wrapper>
                <Row>
                    <Column>
                        <Form onSubmit={handleSearch}>
                            <Input value={query} onChange={handleChange}/>
                            <ResultsHeader>
                                <Button type='submit'>Search</Button>
                                <ResultsHeaderLabel>
                                    <strong>{query}</strong>
                                </ResultsHeaderLabel>
                            </ResultsHeader>
                        </Form>

                    </Column>
                </Row>

                {loading === true && (
                    <h1>Loading....</h1>
                )}

                {loading === false && data !== null && (<Row>
                    {
                        data.items.map(item => {
                            return (
                                <BookItem
                                    key={item.sys.id}
                                    sysID={item.sys.id}
                                    title={item.fields.title['es-MX']}
                                    duration={secondsToTimeFormat(item.fields.duration['es-MX'])}
                                    cover={item.fields.cover['es-MX']}
                                />
                            )
                        })
                    }
                </Row>)}
            </Wrapper>
        </Shell>
    );
};

export default Home;
