import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';

// Global Components
import { Button } from '../button/Button';

export const Navbar: React.FC = () => {

    const navigate = useNavigate();

    function onLandLordSignUpClick(event: React.MouseEvent<HTMLButtonElement>) {
        event.preventDefault();

        navigate("/flowider-signup", { replace: false });
    }

    return (
        <Container>
            <Link to="/">
                <img  src="/logos/flowy-red.png" alt="" />
            </Link>
            <Content>
                <Link to="/flowitizen-signup">ฉันอยากเป็นผู้เช่า</Link>
                <Button onClick={onLandLordSignUpClick}>สมัครเป็นผู้ให้เช่า</Button>
            </Content>
        </Container>
    );
}

const Container = styled.div`
    padding: 8px 24px;
    max-height: 64px;

    display: flex;
    justify-content: space-between;
    align-items: center;

    position: sticky;
    top: 0;
    z-index: 999;

    -webkit-backdrop-filter: blur(8px);
    backdrop-filter: blur(8px);
    background-color: rgba(255, 255, 255, 0.5);

    img {
        width: 120px; 
    }
`;

const Content = styled.div`
    display: grid;
    grid-template-columns: auto 200px;
    gap: 20px;
    align-items: center;
`;