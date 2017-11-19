import React from "react";
import "flexboxgrid2";
import Explore from "./Explore/";
import Experiences from "./Experiences/";
import Homes from "./Homes/";
import Popular from "./Popular/";
import Featured from "./Featured/";
import styled from "styled-components";

const WrapLanding = styled.div`
  position: relative;
  top: 110px;
`;

export default function() {
  return (
    <div className="container">
      <WrapLanding>
        <Explore />
        <Experiences />
        <Homes />
        <Popular />
        <Featured />
      </WrapLanding>
    </div>
  );
}
