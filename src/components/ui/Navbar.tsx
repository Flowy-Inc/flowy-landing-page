import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";

// Global Components
import { Button } from "../button/Button";
import { BorderedButton } from "../button/BorderedButton";

export const Navbar: React.FC = () => {
	const [isHamburger, setIsHamburger] = useState<boolean>(false);
  const navigate = useNavigate();

	useEffect(() => {
		minimizeMenu();
	},[]);

	function minimizeMenu() {
		if(window.innerWidth < 440) {
			setIsHamburger(true);
		} else {
			setIsHamburger(false);
		}
	}

  function onLandLordSignUpClick(event: React.MouseEvent<HTMLButtonElement>) {
    event.preventDefault();

    navigate("/flowider-signup", { replace: false });
  }

	window.addEventListener('resize', minimizeMenu);

  return (
    <Container>
      <Link to="/">
        <img src="/logos/flowy-red.png" alt="" />
      </Link>
      <Content>
        {isHamburger ? (
          <BorderedButton onClick={onLandLordSignUpClick}>เริ่มใช้งาน</BorderedButton>
        ) : (
          <>
            <Link to="/flowitizen-signup">ฉันอยากเป็นผู้เช่า</Link>
            <Button onClick={onLandLordSignUpClick}>สมัครเป็นผู้ให้เช่า</Button>
          </>
        )}
      </Content>
    </Container>
  );
};

const Container = styled.div`
  padding: 8px 24px;
  max-height: 64px;
  width: auto;

  display: flex;
  justify-content: space-between;
  align-items: center;

  position: sticky;
  top: 0;
	left: 0;
  z-index: 999;

  // Blur background
  -webkit-backdrop-filter: blur(8px);
  backdrop-filter: blur(8px);
  background-color: rgba(255, 255, 255, 0.8);
  /* background-color: rgba(0, 0, 0, 1); */

  img {
    width: 12vh;
  }
`;

const Content = styled.div`
	width: 30%;

	@media screen and (min-width: 440px) {
		width: auto;
		display: grid;
		grid-template-columns: auto 200px;
		gap: 20px;
		align-items: center;
	}
`;
