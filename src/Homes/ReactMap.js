import React from "react";
import styled from "styled-components";
import ReactMap from "google-map-react";

const Wrapper = styled.div`
  display: none;
  position: fixed;
  width: 38%;
  height: 78vh;
  top: 135px;
  left: 24vw;
  margin-left: 520px;

  @media (min-width: 992px) {
    display: block;
  }
`;
export default function() {
  return (
    <Wrapper>
      <ReactMap
        apiKey={process.env.REACT_APP_GOOGLE_API_KEY}
        center={[37.773972, -122.431297]}
        zoom={10}
      />
    </Wrapper>
  );
}
