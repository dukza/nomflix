import React from 'react';
import PropTypes from "prop-types";
import Section from 'Components/Section';
import Loader from 'Components/Loader';
import Message from 'Components/Message';
import Poster from 'Components/Poster';
import styled from 'styled-components';

const HomePresenter = ({nowPlaying,upcoming,popular,error,loading}) =>
loading ? <Loader/> : 
(
    <>
      {nowPlaying && nowPlaying.length > 0 && (
        <Section className="m-2" title="Now Playing">
          {nowPlaying.map(movie => 
          (<Poster
            key={movie.id}
            id={movie.id}
            imageurl={movie.poster_path}
            title={movie.original_title}
            rating={movie.vote_average}
            year={movie.release_date.substring(0, 4)}
            isMovie={true}
          />)
          )}
        </Section>
      )}  
      {upcoming && upcoming.length > 0 && (
        <Section title="Upcoming Movies">
          {upcoming.map(movie => 
          (<Poster
            key={movie.id}
            id={movie.id}
            imageurl={movie.poster_path}
            title={movie.original_title}
            rating={movie.vote_average}
            year={movie.release_date.substring(0, 4)}
            isMovie={true}
          />)
          )}
        </Section>
      )}  
      {popular && popular.length > 0 && (
        <Section title="Popular">
          {popular.map(movie => 
          (<Poster
            key={movie.id}
            id={movie.id}
            imageurl={movie.poster_path}
            title={movie.original_title}
            rating={movie.vote_average}
            year={movie.release_date.substring(0, 4)}
            isMovie={true}
          />)
          )}
        </Section>
      )}  
      {error && <Message text="error" color="#f77272"></Message>}
    </>
);

HomePresenter.propTypes = {
    nowPlaying: PropTypes.array,
    popular: PropTypes.array,
    upcoming: PropTypes.array,
    loading: PropTypes.bool.isRequired,
    error: PropTypes.string
  };
  

export default HomePresenter;