import styled from 'styled-components';

// Image Path
import { ProfileImg } from '../../data/ProfileImg';

const Testimonial: React.FC = () => {
    return (
        <Container>
            <Profile>
                <img src={ProfileImg} alt=""/>
                <div className="biography">
                    <h3>Aueboon Ruenekhamfu</h3>
                    <p>Senior Computer Engineering Student</p>
                </div>
            </Profile>
            <Comment>
                <p>
                    “ปัญหานี้ยิ่งต่างจังหวัดเป็นปัญหาเรื้อรังที่สะสมมา
                    แต่กลับถูกเมินตลอด ไม่ใช่แค่เด็กมหาลัย แต่เด็กมัธยม ประถม พนักงาน ลูกจ้าง บุคคลทั่วไป ใครก็ต้องการที่อ่านหนังสือทั้งนั้น”
                </p>
            </Comment>
        </Container>
    );
}

const Container = styled.div`
    padding: 16px 24px;
    border-radius: 36px;
    display: flex;
    flex-direction: column;
    align-items: center;

    * {
        margin: 10px 0px;
    }

    @media screen and (max-width: 1100px) {
        margin-top: 40px;
        transform: scale(0.7);
    }
`;

const Profile = styled.div`
    display: flex;
    align-items: center;

    img {
        object-fit: fill;
        border-radius: 360px;
        height: 100px;
    }

    .biography {
        margin: 0px 16px;
        p {
            margin: -2px 0px;
            color: var(--pale-black);
            text-align: left;
        }
    }
`;

const Comment = styled.div`
    width: 420px;
    border-left: 3px solid var(--primary);
    
    p {
        margin-left: 16px;
        text-align: left;
        font-weight: 400;
    }
`;

export default Testimonial;