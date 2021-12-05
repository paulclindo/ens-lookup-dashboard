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

  body {
    margin: 0;
    font-family: "Nunito Sans", sans-serif;
    background: hsl(0, 0%, 100%);
    color: hsl(200, 15%, 8%);
  }

  button {
    border: 0;
    cursor: pointer;
  }
`;
