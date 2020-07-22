import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Loader from 'Components/Loader';


const Container = styled.div`
   
`;


const Content = styled.div`
    padding:24px 48px;
    display: flex;
    align-item:center;
    height:100%;
`;

const Poster = styled.div`
    width: 30%;
    min-width:320px;
    background:url(${props => props.poster}) center;
    border-radius:4px;
`;

const Divider = styled.span`
    padding:0 4px;
    display:inline-block;
`;

const Overview = styled.div`
    width:50%;
    line-height:1.5;
    opacity:.6;
`;

const Backdrop = styled.div`
    position:absolute;
    top:0px;
    width:100%;
    height: 100%;
    background:url(${props => props.backdrop}) center;
    background-size:cover;
    z-index:-1;
    filter: blur(3px);
    opacity: 0.5;
`;

const DetailPresenter = ({result, error, loading}) => {
    console.log({result});
    return(
        loading? <Loader /> : (
        <Container className="h-100 w-100">
            <Backdrop backdrop={`https://image.tmdb.org/t/p/original${result.backdrop_path}`}>배경</Backdrop>
            <Content>
                <Poster poster={result.poster_path ? `https://image.tmdb.org/t/p/original${result.poster_path}` : require('../../assets/noPosterSmall.png')}/>
                <div className="text-white ml-3">
                    <div class="h2 mb-4">{result.original_title ? result.original_title: result.original_name}</div>
                    <div class="font-14 mb-2">
                        {result.release_date ? result.release_date.substring(0,4) : result.first_air_date.substring(0,4)}
                        <Divider>∙</Divider>
                        {result.genres && result.genres.map((genre, index) => index === result.genres.length - 1 ? genre.name : `${genre.name} / `)}
                    </div>
                    <Overview className="font-12">{result.overview}</Overview>
                </div>
            </Content>
        </Container>
        )
    )};


DetailPresenter.propTypes={
    result:PropTypes.object,
    error:PropTypes.string,
    loading:PropTypes.bool.isRequired
}

export default DetailPresenter;