import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    body {
        color: var(--black);
        background-color: var(--background-color);
        
        display: flex;
        flex-direction: column;

        /* display: block; */
        
        margin: 0;
        padding: 0;
        min-height: 100vh;
        
        font-family: 'IBM Plex Sans Thai', sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-rendering: optimizeLegibility;

        overscroll-behavior: none;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }

    h1 {
        margin: 0;
        font-weight: 200;
        font-size: 4em;
    }

    h2 {
        margin: 0;
        font-weight: 500;
    }

    h3 {
        margin: 0;
        font-weight: 700;
    }

    span {
        margin: 0;
        font-weight: 400;
    }

    p {
        margin: 0;
        font-weight: 300;
    }

    a {
        margin: 0;
        color: var(--primary);
        font-weight: 600;
        text-align: center;
    }

    input[type='number'] {
        -moz-appearance: textfield;
    }

    input::-webkit-outer-spin-button,
    input::-webkit-inner-spin-button {
        -webkit-appearance: none;
    }
`;