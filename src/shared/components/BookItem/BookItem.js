import React from "react";
import PropTypes from "prop-types";

import { Wrapper, Img, Row, Headline, Time } from "./BookItem.styled";
import {useHistory} from "react-router-dom";

const BookItem = ({ sysID, title, duration, cover }) => {
  const history = useHistory();

  return (
    <Wrapper onClick={()=> history.push(`/view-book/${sysID}`)}>
      <Img src={cover} alt={`Portada de ${title}`} />
      <Row>
        <Headline>{title}</Headline>
        <Time>{duration}</Time>
      </Row>
    </Wrapper>
  );
};
BookItem.propTypes = {
  title: PropTypes.string.isRequired,
  duration: PropTypes.string.isRequired,
  cover: PropTypes.string,
};
BookItem.defaultProps = {
  cover: "https://www.indigenousmusicawards.com/img/placeholder-music.png",
};

export default BookItem;
