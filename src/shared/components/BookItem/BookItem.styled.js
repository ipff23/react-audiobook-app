import styled from 'styled-components';
import {darken} from 'polished';
import colors from '../../ui/colors';


export const IconTrash = styled.span`
  color: ${colors.white}
`;
export const Wrapper = styled.div`
  width: 15rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
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
  justify-content: space-between;
  gap: 0.5rem;
`;

export const Headline = styled.h1`
  font-size: 1.2rem;
  font-weight: 400;
  text-align: left;
`;

export const Time = styled.p`
  font-size: 1rem;
  font-weight: 300;
  text-align: right;
  color: ${darken(0.5, colors.white)}
`;
