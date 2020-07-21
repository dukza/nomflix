import React from "react";
import PropTypes from "prop-types";
import styled from 'styled-components';
import Loader from "Components/Loader";
import Section from "Components/Section";
import Message from "Components/Message";
import Poster from "Components/Poster";


const Form = styled.form`
    width:100%;
`;

const Input = styled.input`
    width:100% !important;
    all: unset;
    font-size:24px;
`;

const SearchPresenter = ({movieResults,tvResults,searchTerm,error,loading,handleSubmit,updateTerm}) => (
    <>
        <Form onSubmit={handleSubmit} className="mb-5">
            <Input type="text" placeholder="Search Movies or TV Shows..." 
            value={searchTerm} onChange={updateTerm}/>
        </Form>
        {loading ? <Loader/> : (
            <>
            {movieResults && movieResults.length > 0 && (
                <Section title="Movie Results">
                {movieResults.map(movie => (
                    <Poster
                    key={movie.id}
                    id={movie.id}
                    imageurl={movie.poster_path}
                    title={movie.original_title}
                    rating={movie.vote_average}
                    year={movie.release_date.substring(0, 4)}
                    isMovie={true}
                    />
                ))}
                </Section>
            )}
            {tvResults && tvResults.length > 0 && (
                <Section title="TV Show Results">
                {tvResults.map(show => 
                    (<Poster
                        key={show.id}
                        id={show.id}
                        imageurl={show.poster_path}
                        title={show.original_name}
                        rating={show.vote_average}
                        year={show.first_air_date.substring(0, 4)}
                        />)
                )}
                </Section>
            )}
            {error && <Message text="error" color="#f77272"></Message>}
            {movieResults && tvResults && movieResults.length === 0 && tvResults.length === 0 && <Message text="Nothing found" color="#f77272"></Message>}
            </>
        )}
    </>
);


SearchPresenter.propTypes={
    movieResults:PropTypes.array,
    tvResults:PropTypes.array,
    searchTerm:PropTypes.string,
    error:PropTypes.string,
    loading:PropTypes.bool.isRequired,
    handleSubmit:PropTypes.func.isRequired,
    updateTerm:PropTypes.func.isRequired,
}

export default SearchPresenter;