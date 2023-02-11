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
    box-sizing: border-box;

    width: 100%;
    height: 100%;

    /* display: grid;
    grid-template-columns: 1fr 1fr; */
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 1em;

    .info{
        h2 {
            margin: 0;
            @media screen and (max-width: 440px){
                font-size: 1.2em ;
            }
        }
        
        p {
            color: var(--pale-black);
            text-align: left;
            margin: 0;
        }
    }
`;

const IconBox = styled.div`
    background-color: var(--primary);
    border-radius: 24px;
    width: 100%;
    height: 100%;
    max-width: 100px;
    min-height: 100px;
    max-height: 100px;    

    color: var(--white);
    display: flex;
    justify-content: center;
    align-items: center;

    .large-icon {
        transform: scale(200%);
    }
`;