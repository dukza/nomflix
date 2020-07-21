import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

const Imageurl = styled.div`
    height:180px;
    background:url(${props => props.imageurl}) center;
    background-size:cover;
    border-radius:4px;
    z-index:-1;
    transition:opacity 0.2s ease-in-out;
`;
const Rating = styled.div`
    position:absolute;
    right:8px;
    bottom:8px;
    opacity:0;
    transition:   0.2s ease-in-out;

`;

const Container = styled.div`
    margin-bottom:16px;
    position:relative;
    &:hover{
        ${Imageurl}{
           opacity :0.3;
        }
        ${Rating}{
            opacity :1;
        }
    }
`;


  



const Title = styled.div`
    line-height:1.5;
    
`;

const Poster = ({id, imageurl, title, rating, year,isMovie=false}) => (
    <Link to={isMovie? `/movie/${id}` : `/show/${id}`}>
        <div>
            <Container className="font-12 mb-2">
                <Imageurl imageurl={imageurl ? `https://image.tmdb.org/t/p/w300${imageurl}` : require('../assets/noPosterSmall.png')}></Imageurl>
                <Rating>
                    <span className="mr-1" rating={rating} role="img" aria-label={rating}>⭐</span><span className="text-white d-inlin-block">{rating}/10</span>
                </Rating>
            </Container>
            <Title className="text-white font-14 mb-1">{title.length > 18 ? `${title.substring(0, 18)}...` : title}</Title>
            <div className="text-gray font-12">{year}</div>
        </div>
    </Link>

)

Poster.propTypes={
    id:PropTypes.number.isRequired,
    imageUrl:PropTypes.string,
    title:PropTypes.string.isRequired,
    rating:PropTypes.number,
    year:PropTypes.string,
    isMovie:PropTypes.bool
}

export default Poster;