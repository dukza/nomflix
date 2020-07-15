import React from 'react';
import {Link, withRouter} from "react-router-dom";
import styled from 'styled-components';
import 'css/short.css';

const NavTop = styled.div`
    height:52px;
    top:0px;
`;

const NavItem = styled(Link)`
    border-bottom:4px solid ${props => props.current ? "#007bff" : "transparent"};
    height:100%;
    display:flex;
    align-items:center;
    transition:border-bottom .6s ease-in-out;
`;
 
export default withRouter(({location:{pathname}}) => (
    <header className="col-12">
        {/* {console.log(props)} */}
        <NavTop className="row w-100 shadow align-items-center position-fixed"> 
            <NavItem current={pathname === "/"} className="col-auto" to="/">
                Home
            </NavItem>
            <NavItem current={pathname === "/tv"} className="col-auto" to="/tv">
                tv
            </NavItem>
            <NavItem current={pathname === "/search"} className="col-auto" to="/search">
                search
            </NavItem>          
        </NavTop>
    </header>
));

// const Header = (props) => (
//     <header>
//     </header>
// )
// export default withRouter(Header);
