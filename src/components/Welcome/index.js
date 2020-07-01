import React from 'react';
import styled from 'styled-components';

const pages = ['profile', 'experience', 'contact', 'more'];

const scrollIntoNewView = (page) => {
    document.getElementById(page).scrollIntoView({ behavior: 'smooth'});
}

const WelcomeBase = ({ className }) => <div className={className}>
    <div className="welcome-wrapper">
        <div className="menu">
            {
                pages.map((p, i) => <span key={i} onClick={() => scrollIntoNewView(p)}>{p}</span>)
            }
        </div>
        <div className="gif">
            <iframe src="https://giphy.com/embed/USV0ym3bVWQJJmNu3N" width="480" height="480" frameBorder="0" c></iframe>
        </div>
    </div>
</div>



const Welcome = styled(WelcomeBase)`
    & .welcome-wrapper {
        background: black;
        display: flex;
        width: 100%;
        height: 100vh;
        justify-content: center;
        align-items: center;

    @media screen and (max-width: 768px) {
        flex-direction: column;
    }
        
        & .menu {
            display: flex;
            flex-direction: column;

            @media screen and (max-width: 768px) {
            flex-direction: row;
            flex-wrap: wrap;
            }
            
            & span {
                padding: 15px;
                margin: 10px;
                letter-spacing: 5px;
                font-family: 'Raleway-Medium';
                letter-spacing: 1px;
                color: #ffffff;
                text-transform: uppercase;
            }

            & span:hover {
                background: #ffffff;
                color: black;
                cursor: pointer;
            }
        }

        & .gif {
            
            iframe {
                @media screen and (max-width: 768px) {
                    width: 100%;
                    height: 100%;
                }
            }
        }
    }
`;

export default Welcome;