import css from "styled-jsx/css";

export default css.global`
@font-face {
  font-family: "FreightTextPro";
  src: url("/static/fonts/freight-text-pro.woff") format("woff"),
    url("/static/fonts/freight-text-pro.svg") format("svg"),
    url("/static/fonts/freight-text-pro.otf") format("otf"),
    url("/static/fonts/freight-text-pro.eot") format("eot"),
    url("/static/fonts/freight-text-pro.ttf") format("truetype");
  font-weight: 500;
  font-display: swap;
  font-style: normal;
}

@font-face {
  font-family: Averta;
  font-style: normal;
  font-weight: 600;
  font-display: swap;
  src: url("/static/fonts/avertastd-semibold-webfont.woff") format("woff"),
    url("/static/fonts/avertastd-semibold-webfont.woff2") format("woff2");
}
`;
