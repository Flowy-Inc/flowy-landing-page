import styled from "styled-components";
import { BorderedButton } from "../../components/button/BorderedButton";

// Global Components
import { Button } from "../../components/button/Button";

const ForthSection: React.FC = () => {
    return (
        <Container>
            <Section>
                <div>
                    <h1><span>อนาคต</span>เริ่มที่ปัจจุบัน</h1>
                    <p>
                        ลงทะเบียนล่วงหน้ากับเราวันนี้<br />
                        เพื่อรับสิทธิพิเศษในการใช้งานจากพวกเรา
                    </p>
                </div>
                <div className="call-to-action">
                    <Button>สมัครเป็นผู้ให้เช่าฟรี!</Button>
                    <BorderedButton>ฉันอยากเป็นผู้เช่า</BorderedButton>
                </div>
                
            </Section>
            <Footer>2022 © Flowy Inc.</Footer>
        </Container>
        
    );
}

const Container = styled.div`
    background-image: url('/images/gradient-background.png');
    background-size: 100%;
    background-repeat: no-repeat;
`;

const Section = styled.div`
    padding: 36px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 60vh;
    

    h1 {
        margin-top: 16px;
        text-align: center;
    }

    p {
        margin-top: 10px;
        text-align: center;
    }

    .call-to-action {
        margin-top: 36px;
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 2em;
        width: 50%;
    }
`;

const Footer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding-bottom: 2em;
    bottom: 0;
    color: var(--pale-black);
`;

export default ForthSection;