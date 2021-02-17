import React from "react";

import {useHistory, useParams} from 'react-router-dom';
import {secondsToTimeFormat} from '../../../../shared/utils/strings'


import Shell from "../../../../shared/layout/Shell";


import {Button, Headline, Img, Row, RowButton, Time, Wrapper,} from "./View.styled";
import useGetSingleBook from "../../../../state/hooks/useGetSingleBook";
import useDeleteBook from "../../../../state/hooks/useDeleteBook";

const View = () => {
  const {sysID} = useParams();
  const {bookData, loading} = useGetSingleBook({sysID});
  const {removeData} = useDeleteBook();

  const history = useHistory();


  const handleDelete = () => {
    removeData(sysID);
    history.push('/');
  }

  const handleUpdate = () => {
    history.push(`/edit-book/${sysID}`);
  }

  return (
    <Shell>

      {loading === true && (
        <h1>Loading....</h1>
      )}
      {loading === false && bookData !== {} && (
        <Wrapper>
          <Img
            src={bookData.fields.cover['es-MX']}
            alt={`Cover of ${bookData.fields.title['es-MX']}`}
          />
          <Row>
            <Headline>{bookData.fields.title['es-MX']}</Headline>
          </Row>
          <Row>
            <p>Authors: {bookData.fields.authors['es-MX'][0]}</p>
          </Row>
          <Row>
            Narrators: {bookData.fields.narrators['es-MX'][0]}
          </Row>
          <Row>
            Duration: &nbsp;<Time> {secondsToTimeFormat(bookData.fields.duration['es-MX'])}</Time>
          </Row>
          <Row>
            Version: {bookData.sys.version}
          </Row>
          <RowButton>
            <Button onClick={handleUpdate}>Update</Button>
            <Button onClick={handleDelete}>Delete</Button>
          </RowButton>
        </Wrapper>)}

    </Shell>
  );
}

export default View;
