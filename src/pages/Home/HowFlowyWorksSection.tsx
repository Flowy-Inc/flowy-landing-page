import styled from "styled-components";

// Global Components
import { IconCard } from "../../components/ui/IconCard";

// Data
import { IconCardDetail } from "../../data/IconCardDetail";

const HowFlowyWorksSection: React.FC = () => {
    return (
        <Section>
            <div>
                <h1>โฟล์ววี่<span>ใช้งานอย่างไร?</span></h1>
                <p>
                    <span>จิ้ม-จอง-จ่าย</span>จองง่ายใน 3 ขั้นตอน จากนั้นเข้าใช้งานได้เลย
                </p>
            </div>
        </Section>
    );
}

const Section = styled.div`
    padding: 48px 36px;
    display: flex;
    flex-direction: column;
    align-items: center;

    h1 {
        margin-top: 16px;
        text-align: center;

        @media screen and (max-width: 1100px) {
            font-size: 3em;
        }
    }

    p {
        margin-top: 10px;
        text-align: center;
    }
`;

export default HowFlowyWorksSection;