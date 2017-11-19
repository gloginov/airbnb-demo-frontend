import React from "react";
import styled from "styled-components";
import { Wrapper } from "../UI";
import Filters from "./Filters";
import Content from "./Content";
import ReactMap from "./ReactMap";

const HomeWrapper = styled.div`
  position: relative;
  top: 130px;
  display: flex;
  justify-content: space-between;
`;

export default function() {
  return (
    <div>
      <Filters />
      <div className="container">
        <HomeWrapper>
          <Content />
          <ReactMap />
        </HomeWrapper>
      </div>
    </div>
  );
}
