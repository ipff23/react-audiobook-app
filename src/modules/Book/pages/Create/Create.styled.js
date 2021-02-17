import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-top: 2rem;
  flex-wrap: wrap;
`;

export const Row = styled.div`
  display: flex;
  gap: .5rem;
  width: 25rem;
`;

export const Column = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  gap: 0rem;
`;

export const Label = styled.label`
  font-size: 1.5rem;
  min-width: 13rem;
`
export const RowButton = styled.div`
  justify-content: center;

`
export const Button = styled.button`
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
  padding: .7rem .7rem;
  outline: none;
  min-width: 18rem;

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