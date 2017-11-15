import styled from "styled-components";
import arrow from "../arrow.svg";
import scroll from "../scroll.svg";


export const SectionBase = styled.section.attrs({
    className: "container"
  })`
    margin-top: 48px;
    font-family: "Circular", Helvetica Neue, Helvetica, Arial, sans-serif;
    font-weight: 700;
    line-height: 24px;
  
    position: relative;
  `;

  
export const CardBase = styled.a.attrs({
    href: "#"
  })`
    box-sizing: border-box;
    text-decoration: none;
    color: rgba(56, 56, 56, 1);
    padding-left: 8px;
    padding-right: 8px;
  `;

export const Cards = styled.div.attrs({
className: "row"
})`
display: flex;
flex-wrap: nowrap;
justify-content: space-between;
overflow-x: auto;
`;

export const Rating = styled.div`
display: flex;
font-size: 12px;
line-height: 14px;
`;

export const Arrow = styled.img.attrs({
    src: arrow,
    alt: "arrow"
  })`
  
  `;
  

export const SectionHead = styled.div`
display: flex;
box-sizing: border-box;
align-items: center;
`;
