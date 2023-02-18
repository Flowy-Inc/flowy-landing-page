import styled from "styled-components";

// Global Components
import { IconCard } from "../../components/ui/IconCard";

// Data
import { IconCardDetail } from "../../data/IconCardDetail";

const AnythingAnywhereSection: React.FC = () => {
    return (
        <Section>
            <div>
                <h1>จะทำอะไร <span>ที่ไหนก็ได้</span></h1>
                <p>
                    <span>โฟลววี่</span>เป็นเหมือน Airbnb สำหรับการอ่านหนังสือและโคเวิร์กกิ้งสเปซ<br />
                    คือผู้ใช้งานทำการเช่าพื้นที่ว่างรายชั่วโมงจากผู้ปล่อยให้เช่าเพื่อจุดประสงค์ของตนเอง
                </p>
            </div>
            <div className="icon-card">
                {IconCardDetail.map((elem, key) => {
                    return <IconCard {...elem} />
                })}
            </div>
        </Section>
    );
}

const Section = styled.div`
    padding: 48px 36px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    min-height: 600px;


    h1 {
        margin-top: 16px;
        text-align: center;
    }

    p {
        margin-top: 10px;
        text-align: center;
    }

    .icon-card {
        margin: 40px 0px;
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        gap: 1em;
    }

    @media screen and (max-width: 1200px) {
        .icon-card {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            max-width: 450px;
        }
    }
`;

export default AnythingAnywhereSection;