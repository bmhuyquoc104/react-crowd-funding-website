// Configure the global styled

import { createGlobalStyle } from "styled-components";

export const StyledGlobal = createGlobalStyle`
    *, *::after, *::before {
        margin: 0;
        padding: 0;
        box-sizing:border-box;
    }


    :root{
        --clr_mcyan:hsl(176, 50%, 47%);
        --clr_dcyan:hsl(176, 72%, 28%);
        --clr_b:hsl(0, 0%, 0%);
        --clr_sb:#080808;
        --clr_g:hsl(0, 0%, 48%);
        --fw_s:"400";
        --fw_m:"500";
        --fw_l:"700";
    }
    
    body{
        min-height:100vh;
        font-family:"Commissioner";
        background-color:#fafafa;
    }
`