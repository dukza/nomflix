import React from 'react';
import styled from 'styled-components';

const Spinner = styled.div`
    border-color:#3758e0;
    border-right-color: transparent;
`;


export default () => (
    <Spinner className="spinner-border" role="status">
        <span className="sr-only text-brand-blue">Loading...</span>
    </Spinner>
)