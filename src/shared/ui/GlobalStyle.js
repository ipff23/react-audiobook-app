import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';

import colors from './colors';

const remValue = '16px';

const GlobalStyle = createGlobalStyle`
    ${normalize}

    @import url('https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,600;1,300;1,400;1,a600&display=swap');

    html {
        background-color: ${colors.greyDark};
        color: ${colors.white};
    }

    body {
        font-family: 'Open Sans', sans-serif;
        font-size: ${remValue};
    }
`;

export default GlobalStyle;
