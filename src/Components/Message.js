import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';


const MessageText = styled.div`
    color:${props => props.color};
`;

const Message  = ({text,color}) => {
     console.log(color)
     return(<MessageText color={color}>{text}</MessageText>)
}
    

Message.propTypes = {
    text:PropTypes.string.isRequired,
    color:PropTypes.string.isRequired
}


export default Message;