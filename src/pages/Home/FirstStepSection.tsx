import styled from "styled-components";

// Components
import Testimonial from "./Testimonial";


const FirstStepSection: React.FC = () => {
    return (
        <Section>
            <Wrapper>
                <img src="/images/explore.png" alt="" />
                <div className="typo">
                    <h1>👇 <span>จิ้ม</span>เลือกสถานที่ที่ถูกใจ</h1>
                    <p>
                        เลือกสถานที่ที่เหมาะสมกับคุณ และใช้สามารถใช้เครื่องมือตัวกรอง
                        ในการค้นหาสถานที่ที่มีสิ่งอำนวยความสะดวกที่คุณต้องการ 
                    </p>
                </div>
            </Wrapper>
        </Section>
    );
}

const Section = styled.div`
    padding: 24px;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10em;

    
    min-height: 600px;

    
`;

const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10em;
    width: 80%;

    h1 {
        /* margin-top: 16px; */
        font-size: 3em;
    }

    p {
        margin-top: 10px;
    }

    img {
        width: 30%;
        min-width: 200px;
    }

    .typo {
        width: 50%;
    }

    @media screen and (max-width: 1100px) {
        flex-direction: column;
        justify-content: space-around;
        gap: 0;

        h1 {
            font-size: 3em;
        }
        
        .typo {
            min-width: 100%;
            text-align: center;
            * {
                margin: 20px 0px;
            }
        }
    }
`;

export default FirstStepSection;