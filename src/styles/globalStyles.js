import { css } from "@emotion/react";
import NunitoSansLight from "../assets/fonts/NunitoSans-Light.ttf";
import NunitoSansSemiBold from "../assets/fonts/NunitoSans-SemiBold.ttf";
import NunitoSansExtraBold from "../assets/fonts/NunitoSans-ExtraBold.ttf";

export const globalStyles = css`
  @font-face {
    font-family: "Nunito Sans";
    font-weight: 300;
    src: url(${NunitoSansLight}) format("truetype");
  }
  @font-face {
    font-family: "Nunito Sans";
    font-weight: 600;
    src: url(${NunitoSansSemiBold}) format("truetype");
  }
  @font-face {
    font-family: "Nunito Sans";
    font-weight: 800;
    src: url(${NunitoSansExtraBold}) format("truetype");
  }

  /* Global styles */
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  :root {
    --color-primary: hsl(242 100% 61%);
    --color-secondary: hsl(210 14% 11%);
    --color-neutral: hsl(0 0% 0%);
    --text-primary: hsl(210 22% 96%);
    --text-secondary: hsl(205 11% 53%);
    --container-width: 1200px;
    --box-shadow-sm: inset 0 -1px 0 hsl(210deg 13% 18%);
  }

  body {
    margin: 0;
    font-family: "Nunito Sans", sans-serif;
    background: var(--color-neutral);
    color: var(--text-primary);
  }

  button {
    border: 0;
    cursor: pointer;
  }
`;
