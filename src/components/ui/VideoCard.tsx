import React from 'react';

import styled from 'styled-components';

export const VideoCard: React.FC = () => {
    return (
        <Card>
        </Card>
    );
}

const Card = styled.div`
    border: none;
    border-radius: 36px;
    background-color: var(--pale-black);

    width: 600px;
    height: 400px;
`;