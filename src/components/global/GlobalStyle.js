import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
*,
*::before,
*::after{
    padding: 0;
    margin: 0;
    box-sizing: border-box;

    transition: all ease;
}

.no-margin {
    margin: 0 !important;
}
`;
