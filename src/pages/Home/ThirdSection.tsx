import styled from "styled-components";

// Components
import Testimonial from "./Testimonial";


const ThirdSection: React.FC = () => {
    return (
        <Section>
            <Testimonial />
            <div className="typo">
                <h1>มีคนอยากใช้แล้ว<br /><span>คุณรออะไรอยู่?</span></h1>
                <p>
                    ให้เราเป็นคนเชื่อมคุณกับพวกเขาเหล่านี้เข้าไว้ด้วยกัน
                    คุณให้เช่า เขาจ่ายเงิน ทุกคนแฮปปี้! 
                </p>
            </div>
        </Section>
    );
}

const Section = styled.div`
    padding: 36px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    height: 70vh;

    h1 {
        margin-top: 16px;
    }

    p {
        margin-top: 10px;
    }

    @media screen and (max-width: 1100px) {
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;
        
        .typo {
            text-align: center;
            * {
                margin: 20px 0px;
            }
        }
    }
`;

export default ThirdSection;