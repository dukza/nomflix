import React from 'react';
import {HashRouter as Router, Route , Redirect, Switch} from "react-router-dom";
//웹사이트느낌
// import {BrowserRouter as Router, Route} from "react-router-dom";
import Header from 'Components/Header';
import Home from 'Routes/Home';
import TV from 'Routes/TV';
import Search from 'Routes/Search';

import styled from 'styled-components';

const RouteWrap = styled.div`
    margin-top:52px;
    padding:24px;
`;


export default () => (
    <Router>
        <>
        <Header/>
        <Switch>
            <RouteWrap>
                <Route path="/" exact component={Home}></Route>
                <Route path="/tv" exact component={TV}></Route>
                {/* <Route path="/tv/popular" render={() => <h1>popular</h1>}></Route> */}
                <Route path="/search" component={Search}></Route>
            </RouteWrap>
            <Redirect from="*" to="/"/>
       </Switch>
        </>
    </ Router>
)