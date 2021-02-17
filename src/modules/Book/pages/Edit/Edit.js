import React, {useState} from "react";

import {useHistory, useParams} from 'react-router-dom';

import Shell from "../../../../shared/layout/Shell";


import {Button, Img, Input, Label, Row, RowButton, Wrapper,} from "./Edit.styled";
import useGetSingleBook from "../../../../state/hooks/useGetSingleBook";
import useUpdateBook from "../../../../state/hooks/useUpdateBook";

const Edit = () => {
  const [inputs, setInputs] = useState({});

  const {sysID} = useParams();

  const {bookData, loading} = useGetSingleBook({sysID});
  const { updateData } = useUpdateBook();

  const history = useHistory();

  const handleInputChange = (event) => {
    event.persist();
    setInputs((inputs) => ({
      ...inputs,
      [event.target.name]: event.target.value,
    }));
  };


  const handleUpdate = () => {
    const initialData ={
      cover: bookData.fields.cover['es-MX'],
      title: bookData.fields.title['es-MX'],
      authors: bookData.fields.authors['es-MX'][0],
      narrators: bookData.fields.narrators['es-MX'][0],
      duration: bookData.fields.duration['es-MX'],
      sysID: bookData.sys.id,
      version: bookData.sys.version
    }
    const allData  = { ...initialData, ...inputs}
    try {
       updateData(allData)

    }catch(err) {

    } finally {
      history.push('/');
    }


  }

  const handleCancel = () => {
    history.push('/');
  }

  return (
    <Shell>
      {loading === true && (
        <h1>Loading....</h1>
      )}
      {loading === false && bookData !== {} && (
        <Wrapper>
          <Row>
            <Img src={bookData.fields.cover['es-MX']} alt={`Cover of ${bookData.fields.title['es-MX']}`}/>
          </Row>

          <Row>
            <Label><p>Cover:</p></Label>
            <Input name='cover' onChange={handleInputChange} defaultValue={bookData.fields.cover['es-MX']} type="text"/>
          </Row>


          <Row>
            <Label><p>Title:</p></Label>
            <Input name='title' onChange={handleInputChange} defaultValue={bookData.fields.title['es-MX']}/>
          </Row>
          <Row>
            <Label><p>Author(s): </p></Label>
            <Input name='authors' onChange={handleInputChange} defaultValue={bookData.fields.authors['es-MX'][0]}></Input>
          </Row>
          <Row>
            <Label><p>Narrator(s):</p></Label>
            <Input name='narrators' onChange={handleInputChange} defaultValue={bookData.fields.narrators['es-MX'][0]}></Input>
          </Row>

          <Row>
            <Label><p>Duration (sec):</p></Label>
            <Input name='duration' onChange={handleInputChange} defaultValue={bookData.fields.duration['es-MX']}/>
          </Row>

          <RowButton>
            <Button onClick={handleUpdate} >Save</Button>
            <Button onClick={handleCancel}>Cancel</Button>
          </RowButton>
        </Wrapper>)}

    </Shell>
  );
}

export default Edit;
