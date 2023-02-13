import styled from "styled-components";
import { BorderedButton } from "../../components/button/BorderedButton";

// Global Components
import { Button } from "../../components/button/Button";

const EndingSection: React.FC = () => {
    return (
        <Container>
            <Section>
                <div>
                    <h1>รูปแบบการทำงาน<span><br />ในอนาคต</span><br />เริ่มแล้วที่ปัจจุบัน</h1>
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
    background-size: cover;
    background-position: 0 0;
    background-repeat: no-repeat;

    @media screen and (max-width: 440px){
        background-position: bottom;
    }
`;

const Section = styled.div`
    padding: 36px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    min-height: 600px;
    

    h1 {
        margin-top: 16px;
        text-align: center;
        font-size: 3em;

        @media screen and (max-width: 440px){
            font-size: 2.5em;
        }
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
        
        @media screen and (max-width: 440px){
            flex-direction: column;
            width: 100%;
        }
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

export default EndingSection;