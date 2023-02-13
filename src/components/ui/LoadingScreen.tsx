import React from "react";
import FadeIn from "react-fade-in";
import Lottie from "react-lottie";

import * as successData from "../../data/successLoader.json";

import styled from "styled-components";

const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: successData,
    // rendererSettings: {
    //   preserveAspectRatio: "xMidYMid slice"
    // }
  };

export const LoadingScreen: React.FC = () => {
    return (
        <Loader>
            <FadeIn>
            {/* <Loader>
                <img src={"/icons/loading-circle.gif"} alt="" />
            </Loader> */}
                <Lottie options={defaultOptions} height={200} width={200}/>
            </FadeIn>
        </Loader>
    );
}

export const Loader = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: var(--white);
  width: 100vw;
  height: 100vh;
  z-index: 999;
 
  img {
    width: 50px;
  }
`;