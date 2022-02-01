import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  :root {
    --f-bl:         poppins-black;
    --f-bl-it:      poppins-black-italic;

    --f-bo:         poppins-bold;
    --f-bo-it:      poppins-bold-italic;
    --f-ex-bo:      poppins-extra-bold;
    --f-ex-bo-it:   poppins-extra-bold-italic;
    --f-se-bo:      poppins-semi-bold;
    --f-se-bo-it:   poppins-semi-bold-italic;

    --f-li:         poppins-light;
    --f-li-it:      poppins-light-italic;
    --f-ex-li:      poppins-extra-light;
    --f-ex-li-it:   poppins-extra-light-italic;
    
    --f-it:         poppins-italic;

    --f-me:         poppins-medium;
    --f-me-it:      poppins-medium-italic;

    --f-re:         poppins-regular;
    
    --f-th:         poppins-thin;
    --f-th-it:      poppins-thin-italic;

    
    --accent_background: #252525;
    --accent_foreground: #FDDC32;
  }

  *,
  *::after,
  *::before {
    box-sizing: border-box;
    font-family: var(--f-me);
  }
`;
