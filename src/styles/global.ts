import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  :root {
    --white: #FFFFFF;

    --gray-100: #e1e1e6;
    --gray-300: #a8a8b3;
    --gray-900: #121214;

    --green-580: #0D921B;
    --blue-580: #2C70F4;

  }

  body {
    transition: var(--transition-speed);
    -webkit-font-smoothing: antialiased;


    a {
    text-decoration: none;
  }
}

  body, input, button, textarea {
    font-family: 'Roboto', sans-serif;

  }

  h1, h2, h3, h4, h5, h6, select, strong {
    font-family: 'Roboto', sans-serif;
  }

  button {
    cursor: pointer;
  }

  @media (max-width: 1080px) {
  html {
    font-size: 93.75%;
  }
}

@media (max-width: 720px) {
  html {
    font-size: 87.5%;
  }
}
`;
