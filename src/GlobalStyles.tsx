import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
    *,
    *::before,
    *::after {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }

    img {
        display: block;
    }

    body {
        font-family: 'Kumbh Sans', sans-serif;
        font-optical-sizing: auto;
        font-weight: 400;
        font-style: normal;
        font-variation-settings: 'YOPQ' 300;
    }
`;

export default GlobalStyles;
