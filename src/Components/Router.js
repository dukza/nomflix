import React from 'react';
import {HashRouter as Router, Route , Redirect, Switch} from "react-router-dom";
//웹사이트느낌
// import {BrowserRouter as Router, Route} from "react-router-dom";
import Header from 'Components/Header';
import Home from 'Routes/Home';
import TV from 'Routes/TV';
import Search from 'Routes/Search';
import Detail from 'Routes/Detail';

import styled from 'styled-components';

const RouteWrap = styled.div`
    padding-top:52px;
    height:calc(100%);
`;

// 주소로 콤포넌트를 부른다
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
                <Route path="/movie/:id" component={Detail}></Route>
                <Route path="/show/:id" component={Detail}></Route>
            </RouteWrap>
            <Redirect from="*" to="/"/>
       </Switch>
        </>
    </ Router>
)