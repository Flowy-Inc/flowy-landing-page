import styled from "styled-components";

export const BorderedButton = styled.button`
    background-color: var(--white);
    color: var(--primary);
    border: 1px solid var(--primary);
    border-radius: 36px;
    padding: 12px;
    width: 100%;
    cursor: pointer;
    box-sizing: border-box;
    
    text-align: center;
    font-size: medium;
    font-family: var(--brand-font);
    font-weight: 500;
    transition: .3s;
    
    :hover {
        transform: scale(103%);
    }
`;