import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    body {
        color: var(--black);
        background-color: var(--background-color);
        
        display: flex;
        flex-direction: column;
        
        margin: 0;
        padding: 0;
        min-height: 100vh;
        
        font-family: "IBM Plex Sans Thai", sans-serif;

        overscroll-behavior: none;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }

    input[type='number'] {
        -moz-appearance: textfield;
    }

    input::-webkit-outer-spin-button,
    input::-webkit-inner-spin-button {
        -webkit-appearance: none;
    }
`;