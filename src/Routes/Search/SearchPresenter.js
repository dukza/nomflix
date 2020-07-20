import React from "react";
import PropTypes from "prop-types";
import styled from 'styled-components';
import Loader from "Components/Loader";
import Section from "Components/Section";


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
                    <span key={movie.id}>{movie.title}</span>
                ))}
                </Section>
            )}
            {tvResults && tvResults.length > 0 && (
                <Section title="TV Show Results">
                {tvResults.map(show => (
                    <span key={show.id}>{show.name}</span>
                ))}
                </Section>
            )}
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