import React, { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';

import {
    Wrapper,
    Input,
    List,
    ListItem,
    ListItemButton,
} from './AutoComplete.styled';

import booksData from '../../../assets/mocks/books.json';

const AutoCompleteItem = ({ title, onClick }) => {
    const handleClick = (event) => {
        event.preventDefault();
        onClick(title);
    };

    return (
        <ListItem>
            <ListItemButton onClick={handleClick}>
                {title}
            </ListItemButton>
        </ListItem>
    );
};

const AutoComplete = ({ value, onChange }) => {
    const [internalValue, setInternalValue] = useState(value);
    const timeout = useRef(null);

    const [results, setResults] = useState([]);

    const handleChange = (event) => {
        setInternalValue(event.target.value);
        onChange(event);
    };

    const setResultsDebounce = (query) => {
        timeout.current = setTimeout(() => {
            filterResults(query);
        }, 500);
    };

    const filterResults = (query = '') => {
        if (query.trim() === '') {
            setResults([]);
        } else {
            const filteredResults = booksData
                .map(book => ({ ...book, searchKey: book.title.toLowerCase() }))
                .filter(book => {
                    return book.searchKey.includes(query.toLowerCase());
                });
            setResults(filteredResults);
        }
    };

    const handleSelect = (title) => {
        setInternalValue(title);
        setResults([]);
    };

    useEffect(() => {
        setResultsDebounce(value);

        return () => {
            clearTimeout(timeout.current);
        };
    }, [ value ]);

    return (
        <Wrapper>
            <Input
                placeholder='En las montañas de la locura...'
                value={internalValue}
                onChange={handleChange}
            />
            {Boolean(results.length) && (
                <List>
                    {
                        results.map(result => {
                            return (
                                <AutoCompleteItem
                                    key={nanoid()}
                                    title={result.title}
                                    onClick={handleSelect}
                                />
                            )
                        })
                    }
                </List>
            )}
        </Wrapper>
    );
};
AutoComplete.propTypes = {
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func,
};
AutoComplete.defaultProps = {
    onChange: () => null,
};

export default AutoComplete;