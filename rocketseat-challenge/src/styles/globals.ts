'use client'

import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
  :root {
    /* Colors */
    --brand-blue: #115D8C;
    --brand-orange: #F25D27;
    --title: #123952;
    --text: #617480;
    --complement: #A0ACB3;
    --shape-1: #FFFFFF;
    --shape-2: #DCE2E6;
    --delete: #DE3838;
    --green: #51B853;
    --light-gree: #DCF5DD;
    --light-blue: #DDE9F0;
    --light-orange: #FFA585;
    --yellow: #EFB866;
    /* Font sizes */
    --text-logo: 40px;
    --text-section: 24px;
    --text-sm: 12px;
    --text-md: 14px;
    --text-lg: 16px;
    --text-xlg: 20px;
  }

  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }

  html,
  body {
    max-width: 100vw;
    overflow-x: hidden;
    background-color: var(--shape-2);
  }
`
