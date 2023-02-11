import styled from "styled-components";

// Components
import Testimonial from "./Testimonial";


const ThirdStepSection: React.FC = () => {
    return (
        <Section>
            <Wrapper>
                <img src="/images/ticket.png" alt="" />
                <div className="typo">
                    <h1>💳 <span>จ่าย</span>แล้วเข้าใช้งานได้เลย!</h1>
                    <p>
                        จ่ายค่าบริการล่วงหน้า จากนั้นสามารถเข้าใช้งานตามเวลาที่ได้ทำการจองไว้ได้เลย
                        โดยหากไม่แน่ใจวิธีการเดินทางไปยังจุดหมาย สามารถกดนำทางด้วย Google Maps ได้
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

export default ThirdStepSection;