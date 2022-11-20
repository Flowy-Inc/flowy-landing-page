import React from 'react';

// MUIs
import MenuBookRoundedIcon from '@mui/icons-material/MenuBookRounded';
import PeopleAltRoundedIcon from '@mui/icons-material/PeopleAltRounded';
import WorkspacesRoundedIcon from '@mui/icons-material/WorkspacesRounded';

import styled from 'styled-components';

interface CardData {
    headline: string;
    detail: string;
    icon: string;
};

export const IconCard: React.FC<CardData>= (elem: CardData) => {

    function renderSwitchCase(action: CardData){
        switch(action.icon){
            case 'MenuBookRoundedIcon':
                return <MenuBookRoundedIcon className="large-icon" />;
            case 'PeopleAltRoundedIcon':
                return <PeopleAltRoundedIcon className="large-icon" />;
            case 'WorkspacesRoundedIcon':
                return <WorkspacesRoundedIcon className="large-icon" />;
            default:
                return;
        }
    }
    
    return (
        <Card>
            <IconBox>
                {renderSwitchCase(elem)}
            </IconBox>
            <div className="info">
                <h2>{elem.headline}</h2>
                <p>
                    {elem.detail}
                </p>
            </div>
        </Card>
    );
}

const Card = styled.div`
    padding: 16px;
    border-radius: 24px;
    background-color: var(--white);
    box-shadow: 0px 0px 40px 0px rgba(223, 70, 70, 0.1);
    height: 100px;
    cursor: default;

    display: grid;
    grid-template-columns: auto 1fr;
    align-items: center;
    gap: 1em;

    transition: .3s;

    .info{
        h2 {
            margin: 0;
        }
        
        p {
            color: var(--pale-black);
            text-align: left;
            margin: 0;
        }
    }

    :hover {
        transform: scale(105%);
    }
`;

const IconBox = styled.div`
    background-color: var(--primary);
    border-radius: 24px;
    width: 100px;
    height: 100px;

    color: var(--white);
    display: flex;
    justify-content: center;
    align-items: center;

    .large-icon {
        transform: scale(200%);
    }
`;