import styled from "styled-components";
import { darken } from "polished";
import colors from "../../../../shared/ui/colors";

export const IconTrash = styled.span`
  color: ${colors.white};
`;
export const Wrapper = styled.div`
  width: 20rem;
  display: flex;
  flex-direction: column;
  margin: auto;
  margin-top: 5rem;
`;

export const Img = styled.img`
  width: 15rem;
  height: 15rem;
  object-fit: cover;
  border-radius: 1.5rem;
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const Headline = styled.h1`
  font-size: 1.8rem;
  font-weight: 600;
  text-align: left;
`;

export const Time = styled.p`
  font-size: 1rem;
  font-weight: 300;
  text-align: right;
  color: ${darken(0.5, colors.white)};
`;

export const RowButton = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 1rem;
`;
export const Button = styled.button`
  left: 50%;
  top: 50%;
  background: #333;
  color: #ccc;
  width: 8rem;
  height: 3.74rem;
  border: 0;
  font-size: 1.125rem;
  border-radius: 4px;
  font-family: "Raleway", sans-serif;
  transition: 0.6s;
  overflow: hidden;

  &:focus {
    outline: 0;
  }

  &:hover {
    background: #338033;
    cursor: pointer;
  }
`;

export const Input = styled.input`
  display: flex;
  flex: 1;
  border: 0;
  border-radius: 1rem;
  padding: 0.7rem 0.7rem;
  outline: none;

  &::placeholder {
    font-style: italic;
  }
`;

export const ResultsHeader = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 1rem;
`;

export const ResultsHeaderLabel = styled.p`
  flex: none;
  font-size: 1.5rem;
`;
