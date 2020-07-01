import React from 'react';
import styled from 'styled-components';
import Divider from '../Divider';
import PageTitle from '../PageTitle';
import picture from '../../assets/images/76767530_2685544581566310_9023716977406902272_o.jpg';

const BaseProfile = ({ className }) =>
    <div className={className}>
        <div
            id="profile"
            className="profile-wrapper"
        >
            <PageTitle title='Profile' />
            <div className="profile-info">
                <div className="image-wrapper">
                    <img src={picture} alt="me" />
                </div>
                <div className="profile-description">
                    <span>
                        <strong>Hello &nbsp;</strong>
                        I'm João Mota. <br /></span>
                    <Divider />
                    <span>
                        Currently working at ZRP as software developer for almost two years. <br />
                    </span>
                    <Divider size={30} />
                    <span>
                        Here, I worked in a lot of projects and get in touch several challenges both in frontend and backend. <br />
                    </span>
                    <Divider size={30} />
                    <span>
                        I'm Extremely motivated to improve my skills and acquire new knowledges. <br />
                    </span>
                    <Divider size={30} />
                    <span>
                        I am constantly seeking to learn new techologies in order <br />
                        to solve problems, contributing to the development of the company <br />
                        and, consequently, my personal development.
                    </span>
                </div>
            </div>
        </div>
    </div>

const Profile = styled(BaseProfile)`
& .profile-wrapper {
    background: #141413;
}

& .profile-info {
    padding: 20px;
    display: flex;
    box-sizing: border-box;
    @media screen and (max-width: 768px) {
        flex-direction: column;
    }

    & span {
        color: white;
        width: fit-content;
        margin: 10px 0px;
        letter-spacing: 1px;
    }
}

& .profile-description {
    padding: 20px;
    display: flex;
    flex-direction: column;
}

& .image-wrapper {
    @media screen and (max-width: 768px) {
    display: flex;
    width: 100%;
    justify-content: center;
    }

    img {
        max-width: 500px;
        max-height: 500px;
    }

    @media screen and (max-width: 768px) {
        img {
            max-width: 90%;
            max-height: 90%;
        }   
    }
}
`;

export default Profile;