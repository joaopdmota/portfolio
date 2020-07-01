import React, { useState } from 'react';
import Collapse from '@material-ui/core/Collapse';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import MobileStepper from '@material-ui/core/MobileStepper';
import Button from '@material-ui/core/Button';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import styled from 'styled-components';
import Divider from '../Divider';
import PageTitle from '../PageTitle';

const BaseExperience = ({ className }) => {

    const useStyles = makeStyles({
        root: {
            maxWidth: 400,
            flexGrow: 1,
        },
    });
    const classes = useStyles();
    const theme = useTheme();
    const [activeStep, setActiveStep] = useState(0);

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    return (<div className={className}>
        <div
            id="experience"
            className="experience-wrapper"
        >
            <PageTitle title='Experience' />
            <div className="stepper-wrapper">
                <MobileStepper
                    variant="progress"
                    steps={2}
                    position="static"
                    activeStep={activeStep}
                    className={classes.root}
                    nextButton={
                        <Button size="small" onClick={handleNext} disabled={activeStep === 5}>
                            Next
                        {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
                        </Button>
                    }
                    backButton={
                        <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
                            {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
                        Back
                    </Button>
                    }
                />
            </div>
            <div className="journey-wrapper">
                <div className="journey">
                    <Collapse in={activeStep === 0}>
                        <span>Nextel</span>
                        <Divider size={30} />
                        <span>Web developer - intern</span>
                        <Divider />
                        <span>July, 2018 - April, 2019</span>
                        <Divider />
                        <span>
                            Learning web development using asp.net and javascript
                            frameworks (react.JS)
                         </span>
                    </Collapse>
                    <Collapse in={activeStep === 1}>
                        <span>ZRP</span>
                        <Divider size={30} />
                        <span>Software developer</span>
                        <Divider />
                        <span>April, 2019 - Current</span>
                        <Divider />
                        <span>
                            Developing applications using javascript, typescript, nodeJS and
                            javascript frameworks. <br />
                             Working in agile squads (kanban, scrum)
                            with product guidelines
                     </span>
                    </Collapse>
                </div>
            </div>
        </div>
    </div>)
}


const Experience = styled(BaseExperience)`
   & .experience-wrapper {
        width: 100%;
        display: flex;
        flex-direction: column;
        background: #3a3b3a;
        & .stepper-wrapper {
            box-sizing: border-box;
            padding: 20px;
            margin-top: 20px;
            display: flex;
            justify-content: center;
            width: 100%;
        }

        & .journey-wrapper {
            width: 100%;
            justify-content: center;
            display: flex;
            
            & .journey {
                display: flex;
                flex-direction: column;

                span {
                    font-family: 'Raleway-Medium';
                    font-size: 16px;
                    color: white;
                }
                & .nextel {
                    color: rgb(255, 90, 0) !important
                }
            }
        }
    }
`;
export default Experience;