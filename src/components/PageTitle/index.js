import React from 'react';
import styled from 'styled-components';

const H1 = styled.h1`
    color: white;
    letter-spacing: 2px;
    padding: 10px 20px;
    font-size: 18px;
`

const Line = styled.div`
    background: red;
    height: 3px;
    width: 100%;
`

const Container = styled.div`
    width: 100%;
`

const PageTitle = ({ title }) => <Container>
    <H1> {title}</H1>
    <Line />
</Container>

export default PageTitle;