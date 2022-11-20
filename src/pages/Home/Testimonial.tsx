import styled from 'styled-components';

// Image Path
import { ProfileImg } from '../../data/ProfileImg';

const Testimonial: React.FC = () => {
    return (
        <Container>
            <Profile>
                <img src={ProfileImg} alt=""/>
                <div className="biography">
                    <h3>Kao Apithep</h3>
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
    border: 1px solid var(--white);
    display: flex;
    flex-direction: column;
    align-items: center;
    cursor: default;
    transition: 1s;

    * {
        margin: 10px 0px;
    }

    :hover {
        transform: scale(103%);
        box-shadow: 0px 0px 40px 0px rgba(223, 70, 70, 0.1);
        border: 1px solid var(--pale-red)
    }

    @media screen and (max-width: 1100px) {
        margin-top: 40px;
    }
`;

const Profile = styled.div`
    display: flex;
    align-items: center;

    img {
        object-fit: cover;
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
    transition: .3s;
    
    p {
        margin-left: 16px;
        text-align: left;
        font-weight: 400;
    }
`;

export default Testimonial;