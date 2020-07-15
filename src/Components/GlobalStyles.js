import {createGlobalStyle} from "styled-components";
import reset from "styled-reset";

// export default() => createGlobalStyle`
const globalStyles = createGlobalStyle`
    ${reset};
    a{
        text-decoration:none !important;
    }
    *{
        box-sizing:border-box;
    }
`;

export default globalStyles;