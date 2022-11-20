import styled from 'styled-components';

export const Button = styled.button`
    background-color: ${props => props.disabled ? "#DE5858" : "#D62E2E"};
    padding: 10px 0px;
    width: 100%;
    border-radius: 36px;
    border: none;
    cursor: ${props => props.disabled ? "no-drop": "pointer"};

    text-align: center;
    font-family: var(--brand-font);
    font-size: medium;
    font-weight: 500;
    color: white;

    transition: .3s;

    :hover {
        background-color: ${props => props.disabled ? "#DE5858" : "#a11f1f"};
    }
`;