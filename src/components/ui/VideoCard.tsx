import React from 'react';

import styled from 'styled-components';

export const VideoCard: React.FC = () => {
    // const VIDEO_PATH = "https://assets.mixkit.co/videos/preview/mixkit-woman-doing-home-office-in-dining-room-4955-large.mp4";
    const VIDEO_PATH = "/videos/welcome.mp4";
    
    return (
        <Card>
            <video id="background-video" autoPlay={true} controls={false} loop muted playsInline={true} preload="metadata">
                <source src={VIDEO_PATH} type="video/mp4" />
            </video>
        </Card>

    );
}

const Card = styled.div`
    box-sizing: border-box;
    
    border-radius: 36px;
    // background
    /* background-image: url('https://images.unsplash.com/photo-1594732832278-abd644401426?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80'); */
    /* background-image: url('https://assets.mixkit.co/videos/preview/mixkit-office-meeting-261-large.mp4'); */
    /* background-size: cover; */
    /* background-position: center; */

    display: flex;
    justify-content: center;
    align-items: center;

    video {
        object-fit: cover;
        /* box-sizing: border-box; */
        border: none;
        border-radius: 36px;
        border: 8px solid rgba(255, 255, 255, 0.6);
        width: 600px;
        height: 400px;

        @media screen and (max-width: 1200px) {
            width: 90%;
        }
    }
`;