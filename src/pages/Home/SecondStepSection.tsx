import styled from "styled-components";

// Components
import Testimonial from "./Testimonial";


const FirstStepSection: React.FC = () => {
    return (
        <Section>
            <Wrapper>
                <div id="stepDesc" className="typo">
                    <h1>⏰ <span>จอง</span>เวลาที่ต้องการใช้งาน</h1>
                    <p>
                        เลือกเวลาจากสล็อทเวลาที่ว่างอยู่ โดยมีค่าใช้จ่ายแค่
                        <span>60 บาทต่อชั่วโมง</span>เท่านั้น
                    </p>
                </div>
                <img id="stepImg"src="/images/booking.png" alt="" />
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

        #stepImg {order: 1;}
        #stepDesc {order: 2;}
    }
`;

export default FirstStepSection;