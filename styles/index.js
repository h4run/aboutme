import css from "styled-jsx/css";

export default css.global`
  body {
    margin: 0;
  }
  .container {
    max-width: 640px;
    padding-left: 20px;
    padding-right: 20px;
    margin-left: auto;
    margin-right: auto;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: Averta, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
      Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
      sans-serif;
    color: #301d28;
    text-rendering: optimizeLegibility;
    line-height: 1.25;
    margin-top: 0;
    font-weight: 600;
  }

  body {
    font-family: "FreightTextPro", serif;
    color: #62535c;
    font-size: 100%;
    line-height: 1.5;
    padding-top: 8vh;
    padding-bottom: 5vh;
  }

  :focus {
    outline: none;
  }

  ::-moz-selection {
    background: #fefeca;
    color: inherit;
    text-shadow: none;
  }

  ::selection {
    background: #fefeca;
    color: inherit;
    text-shadow: none;
  }

  p {
    font-size: 21px;
    letter-spacing: -0.25px;
  }

  p:last-child {
    margin-bottom: 0;
  }

  h1 {
    font-size: 30px;
    margin-bottom: 40px;
    letter-spacing: -0.75px;
    color: #ff5d47;
    text-align: center;
  }
  h2 {
    font-size: 24px;
    letter-spacing: -0.25px;
    padding-top: 9pt;
    margin-bottom: 9pt;
  }

  h3 {
    margin-bottom:.8em;
  }
  h3 .img {
    margin-right: 3px;
    margin-bottom: .2em;
  }

  .img {
    max-width:100%;
    height:auto;
    vertical-align:middle;
  }

  blockquote {
    font-size: 0;
    font-style: italic;
    margin: 20px 0;
    padding: 24px 0;
    position: relative;
    width: 100%;
    clear: both;
    color: #301d28;
    max-width: 40pc;
    margin-bottom: 24px;
    background: url(/static/img/dash-neutral.svg) repeat-x -9pt top,
      url(/static/img/dash-neutral.svg) repeat-x -9pt bottom;
  }

  blockquote p {
    margin: 0;
  }

  a {
    color: #0077b5;
  }

  ol,
  ul {
    padding-left: 20px;
    margin: 0 0 24px;
  }

  ul {
    font-size: 21px;
    letter-spacing: -0.25px;
  }
  ul li {
    list-style: none;
  }
  ul li + li {
    margin-top: 10px;
  }
  ul li:before {
    content: "";
    display: inline-block;
    vertical-align: top;
    width: 6px;
    height: 6px;
    background-color: #27cba4;
    margin: 0.666em 9pt 0 -18px;
    color: #27cba4;
  }

  @media screen and (max-width: 680px) {
    h1 {
      font-size: 22px;
    }
    h2 {
      font-size: 20px;
    }
    h3 {
      font-size: 16px;
    }
    h4 {
      font-size: 14px;
    }
    ul,
    p {
      font-size: 16px;
    }

    .img.mobile-app + .img.mobile-app {
      margin-top:30px;
    }
  }
`;
