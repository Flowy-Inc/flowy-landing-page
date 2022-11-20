import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    :root {
        --background-color: #FFFFFF;
        --primary: #DF4646;
        --secondary: #EC9090;
        --pale-red: #FFCDD2;
        --button-color: #DF4646; // Button color
        --disabled: #DE5858; // disabled
        --hover: #A11F1F;

        --white: #FFFFFF;
        --black: #000000; // Everything which is black
        --pale-black: #9e9e9e;
        --form-grey: #B6B6B6; // Form placeholder, border
        --error: #FE0044; // Error red

        --brand-font: "IBM Plex Sans Thai", sans-serif;
    }
`;