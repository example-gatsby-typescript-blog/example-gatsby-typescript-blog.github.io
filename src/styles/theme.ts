import styled, {css, createGlobalStyle} from 'styled-components'

export {css, styled}

export const theme = {
  colors: {
    black: '#000000',
    background: '#fffff8',
    contrast: '#111',
    contrastLightest: '#dad9d9',
    accent: 'red',
    white: '#ffffff',
  },
}

const reset = () => `
html {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

*, *::before, *::after {
  box-sizing: inherit;
}

body {
  margin: 0 !important;
  padding: 0;
}

::selection {
  background-color: ${theme.colors.contrastLightest};
  color: rgba(0, 0, 0, 0.70);
}

a.anchor, a.anchor:hover, a.anchor:link {
  background: none !important;
}

figure {
  a.gatsby-resp-image-link {
    background: none;
  }

  span.gatsby-resp-image-wrapper {
    max-width: 100% !important;
  }
}
`

// These style are based on https://edwardtufte.github.io/tufte-css/
const styles = () => `
html {
  font-size: 15px;
}

body {
  width: 87.5%;
  margin-left: auto;
  margin-right: auto;
  padding-left: 12.5%;
  font-family: Palatino, 'Palatino Linotype', 'Palatino LT STD', 'Book Antiqua', Georgia, serif;
  background-color: white;
  color: #111;
  max-width: 1400px;
}

h1 {
  font-weight: 400;
  margin-top: 4rem;
  margin-bottom: 1.5rem;
  font-size: 3.2rem;
  line-height: 1;
}

h2 {
  font-style: italic;
  font-weight: 400;
  margin-top: 2.1rem;
  margin-bottom: 1.4rem;
  font-size: 2.2rem;
  line-height: 1;
}

h3 {
  font-style: italic;
  font-weight: 400;
  font-size: 1.7rem;
  margin-top: 2rem;
  margin-bottom: 1.4rem;
  line-height: 1;
}

hr {
  display: block;
  height: 1px;
  width: 55%;
  border: 0;
  border-top: 1px solid #ccc;
  margin: 1em 0;
  padding: 0;
}

article {
  position: relative;
  padding: 5rem 0rem;
}

section {
  padding-top: 1rem;
  padding-bottom: 1rem;
}

p,
ol,
ul {
  font-size: 1.4rem;
  line-height: 2rem;
}

p {
  margin-top: 1.4rem;
  margin-bottom: 1.4rem;
  padding-right: 0;
  vertical-align: baseline;
}

blockquote {
  font-size: 1.4rem;
}

blockquote p {
  width: 55%;
  margin-right: 40px;
}

blockquote footer {
  width: 55%;
  font-size: 1.1rem;
  text-align: right;
}

section > p,
section > footer,
section > table {
  width: 55%;
}

section > ol,
section > ul {
  width: 50%;
  -webkit-padding-start: 5%;
}

li:not(:first-child) {
  margin-top: 0.25rem;
}

figure {
  padding: 0;
  border: 0;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline;
  max-width: 55%;
  -webkit-margin-start: 0;
  -webkit-margin-end: 0;
  margin: 0 0 3em 0;
}

figcaption {
  float: right;
  clear: right;
  margin-top: 0;
  margin-bottom: 0;
  font-size: 1.1rem;
  line-height: 1.6;
  vertical-align: baseline;
  position: relative;
  max-width: 40%;
}

figure.fullwidth figcaption {
  margin-right: 24%;
}

a:link,
a:visited {
  color: inherit;
}

img {
  max-width: 100%;
}

div.fullwidth,
table.fullwidth {
  width: 100%;
}

div.table-wrapper {
  overflow-x: auto;
  font-family: 'Trebuchet MS', 'Gill Sans', 'Gill Sans MT', sans-serif;
}

code {
  font-family: Consolas, 'Liberation Mono', Menlo, Courier, monospace;
  font-size: 1rem;
  line-height: 1.42;
}

h1 > code,
h2 > code,
h3 > code {
  font-size: 0.8em;
}

pre.code {
  font-size: 0.9rem;
  width: 52.5%;
  margin-left: 2.5%;
  overflow-x: auto;
}

pre.code.fullwidth {
  width: 90%;
}

.fullwidth {
  max-width: 90%;
  clear: both;
}

.iframe-wrapper {
  position: relative;
  padding-bottom: 56.25%; /* 16:9 */
  padding-top: 25px;
  height: 0;
}

.iframe-wrapper iframe {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

@media (max-width: 760px) {
  body {
    width: 84%;
    padding-left: 8%;
    padding-right: 8%;
  }

  hr,
  section > p,
  section > footer,
  section > table {
    width: 100%;
  }

  pre.code {
    width: 97%;
  }

  section > ol {
    width: 90%;
  }

  section > ul {
    width: 90%;
  }

  figure {
    max-width: 90%;
  }

  figcaption,
  figure.fullwidth figcaption {
    margin-right: 0%;
    max-width: none;
  }

  blockquote {
    margin-left: 1.5em;
    margin-right: 0em;
  }

  blockquote p,
  blockquote footer {
    width: 100%;
  }

  label.margin-toggle:not(.sidenote-number) {
    display: inline;
  }

  label {
    cursor: pointer;
  }

  div.table-wrapper,
  table {
    width: 85%;
  }

  img {
    width: 100%;
  }
}
`

export const GlobalStyle = createGlobalStyle`
${reset()}
${styles()}
`
