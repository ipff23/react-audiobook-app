import styled from 'styled-components';

export const Wrapper = styled.div`
    background: none;
    display: flex;
    flex-direction: column;
    width: 100%;
`;

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

export const List = styled.ul`
    background: #fff;
    border-radius: 1rem;
    padding: 1rem 0;
    width: 30%;
`;

export const ListItem = styled.li`
    display: flex;
`;

export const ListItemButton = styled.button`
    display: block;
    width: 100%;
    text-align: left;
    border: 0;
    background: none;
    padding: 0.75rem 1.5rem;
    transition: all .2s;
    cursor: pointer;

    &:hover {
        background: #eee;
    }
`;
