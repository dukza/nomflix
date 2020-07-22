import React from 'react';
import PropTypes from "prop-types";
import styled from 'styled-components';

const Container = styled.div`
    padding:24px;
    :last-child{
        margin-bottom:0px !important;
    }
`;

const Grid = styled.div`
    display:grid;
    grid-template-columns: repeat(auto-fill,125px);
    grid-gap:24px;
`;

const Section = ({title, children}) => (
    <Container className="mb-5">
        <div className="text-white font-weight-bolder mb-2">
            {title}
        </div>
        <Grid>
            {children}
        </Grid>
    </Container>    
)


Section.propTypes = {
    title: PropTypes.string.isRequired,
    children: PropTypes.oneOfType([
      PropTypes.arrayOf(PropTypes.node),
      PropTypes.node
    ])
  };
export default Section;