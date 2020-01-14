import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
    
    @import url('https://fonts.googleapis.com/css?family=Rubik:400,500,700&display=swap');
    
    html{
        font-family: 'Rubik', sans-serif;
    }
    
    body{
        background: #f2f2f2
    }
    
    h1,h2,h3,h4,h5{
        font-weight:500;
    }
    @media (max-width:900px) {
        html{
            font-size:12.5px;
        }
    }



`;

export default GlobalStyles;
