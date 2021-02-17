import styled, { css } from 'styled-components';
import { rgba } from 'polished';
import colors from '../../ui/colors';

export const NavWrapper = styled.nav`
    display: flex;
    flex-direction: row;
    gap: 1rem;
`

export const Link = styled.a`
    display: block;
    color: ${rgba(colors.white, 0.5)};
    font-size: 4rem;
    font-weight: 600;
    text-decoration: none;
    transition: all ease .2s;

    &:hover {
        transform: translateY(0.5rem);
        color: ${colors.white};
    }

    ${({ isActive }) => isActive && css`
        color: ${colors.white};
    `}
`
