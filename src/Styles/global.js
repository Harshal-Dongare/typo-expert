import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`

@import url(https://fonts.googleapis.com/css?family=IBM+Plex+Mono:100,100italic,200,200italic,300,300italic,regular,italic,500,500italic,600,600italic,700,700italic);

*{
  box-sizing: border-box;
}

body {
  background-color: #000518;
  color: white;
  margin: 0;
  padding: 0;
  transition: all 0.2s linear;
  font-family: "IBM Plex Mono", monospace;
}

.canvas{
  display: grid;
  width: 100vw;
  min-height: 100vh;
  grid-auto-flow: row;
  grid-template-rows: auto 1fr auto;
  gap: 0.5rem;
  padding: 2rem;
  align-items: center; // align vertically in each row
  text-align: center; // align horizontally 
}

.typeBox{
  display: block; // not necessary to write this
  max-width: 1000px;
  height: 250px;
  margin: 0 auto;
  overflow: hidden;
}

.typeBox--words{
  font-size: 3rem;
  display: flex;
  flex-wrap: wrap;
  gap: 1.5rem;
}

.typeBox--word{
  
}

`;
