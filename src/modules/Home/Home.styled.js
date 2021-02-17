import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-top: 2rem;
`;

export const Row = styled.div`
  display: flex;
  gap: 4rem;
  flex-wrap: wrap;
`;
export const Form = styled.form`
  background: none;
  display: flex;
  flex-direction: column;
  width: 100%;
`


export const Button = styled.button`
  margin-top: 1rem;
  left: 50%;
  top: 50%;
  background: #333;
  color: #ccc;
  width: 12.5rem;
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

`

export const Input = styled.input`
    display: flex;
    flex: 1;
    border: 0;
    border-radius: 1rem;
    padding: 1.5rem 1.5rem;
    font-size: 1.5rem;
    outline: none;

    &::placeholder {
        font-style: italic;
    }
`;


export const Column = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  gap: 0rem;
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