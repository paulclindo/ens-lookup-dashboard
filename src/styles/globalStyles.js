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
    --primary-color: hsl(242 100% 61%);
    --secondary-color: hsl(210 14% 11%);
    --neutral-color: hsl(0 0% 0%);
    --primary-text: hsl(210 22% 96%);
    --secondary-text: hsl(205 11% 53%);
    --container-width: 1200px;
    --loadMore-height: 40px;
    --topbar-height: 80px;
  }

  body {
    margin: 0;
    font-family: "Nunito Sans", sans-serif;
    background: var(--neutral-color);
    color: var(--primary-text);
  }

  button {
    border: 0;
    cursor: pointer;
  }
`;
