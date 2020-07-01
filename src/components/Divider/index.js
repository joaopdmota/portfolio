import React from 'react';
import styled from 'styled-components';

const Division = styled.div`
height: ${props => props.size ? `${props.size}px` : "15px"};
`;

const Divider = () => <Division />

export default Divider;