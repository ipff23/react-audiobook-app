import React, { useState } from "react";

import Shell from "../../../../shared/layout/Shell";
 import {useHistory} from 'react-router-dom'
import { Button, Input, Label, Row, RowButton, Wrapper } from "./Create.styled";
import useCreateBook from "../../../../state/hooks/useCreateBook";

const Create = () => {
  const [inputs, setInputs] = useState({});

  const { createData } = useCreateBook();


  const history = useHistory();

  const handleInputChange = (event) => {
    event.persist();
    setInputs((inputs) => ({
      ...inputs,
      [event.target.name]: event.target.value,
    }));
  };

  const handleCreateNewBook = async () => {
    try {
       await createData(inputs);
    } catch (err) {
    } finally {
      history.push('/');
    }
  };

  return (
    <Shell>
      <Wrapper>
        <Row>
          <Label>Title</Label>
          <Input type="text" name="bookName" onChange={handleInputChange} />
        </Row>
        <Row>
          <Label>Author(s)</Label>
          <Input name="author" onChange={handleInputChange} />
        </Row>
        <Row>
          <Label>Cost</Label>
          <Input name="costPlay" onChange={handleInputChange} />
        </Row>
        <Row>
          <Label>Narrator(s)</Label>
          <Input name="narrators" onChange={handleInputChange} />
        </Row>
        <Row>
          <Label>Duration (sec)</Label>
          <Input name="duration" onChange={handleInputChange} />
        </Row>
        <Row>
          <Label>Cover</Label>
          <Input name="cover" onChange={handleInputChange} />
        </Row>
        <RowButton>
          <Button onClick={handleCreateNewBook}>Save</Button>
        </RowButton>
      </Wrapper>
    </Shell>
  );
};

export default Create;
