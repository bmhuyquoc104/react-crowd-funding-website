import { createGlobalStyle } from "styled-components";

export const StyledGlobal = createGlobalStyle`
    *, *::after, *::before {
        margin: 0;
        padding: 0;
        box-sizing:border-box;
    }


    :root{
        --clr_mcyan:"hsl(176, 50%, 47%)";
        --clr_dcyan:"hsl(176, 72%, 28%)";
        --clr_b:"hsl(0, 0%, 0%)";
        --clr_g:"hsl(0, 0%, 48%)";
        --fw:"400";
        --fw:"500";
        --fw:"700";
    }
    
    body{
        min-height:100vh;
        font-family:"Commissioner";
    }


`