import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background: ${(props) => props.theme['background']};
    color: ${(props) => props.theme['base-text']};
    -webkit-font-smoothing: antialiased;
  }

  body, input, textarea, button {
      font-family: 'Roboto', sans-serif;
      line-height: 1.3;
    }

  @media (max-width: 768px) {
    body, input, textarea, button {
      font-weight: bold;
      font-size: 0.75rem;
    }
  }

  @media (min-width: 769px) and (max-width: 1023px) {
    body, input, textarea, button {
      font-weight: 400;
      font-size: 0.875rem;
    }
  }

  @media (min-width: 1024px) and (max-width: 1215px) {
    body, input, textarea, button {
      font-weight: 400;
      font-size: 1rem;
    }
  }

  @media (min-width: 1216px) {
    body, input, textarea, button {
      font-weight: 400;
      font-size: 1.25rem;
    }
  }
`
