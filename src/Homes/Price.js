import React from "react";
import styled from "styled-components";
// import Rheostat from "rheostat";
// import Diagram from "./Diagram";

const PriceChange = styled.div`
	padding: 24px 31px;
  position: relative;
  width: 733px;

  @media screen and (min-width: 991px) {
    width: 326px;
  }
`;

const Title = styled.h3`
  margin: 0 0 24px 0;
  font-size: 18px;
  font-weight: normal;
  @media screen and (min-width: 576px) {
    font-size: 20px;
  }
`;

const Name = styled.p`
  margin: 0;
  padding-bottom: 6px;
  flex-grow: 1;
  font-family: "Circular Air Light", "Arial", "Helvetica", sans-serif;
  font-size: 16px;
  user-select: none;
  @media screen and (min-width: 576px) {
    font-size: 18px;
  }
`;

const Annotation = styled.p`
  margin: 0;
  font-family: "Circular Air Light", "Arial", "Helvetica", sans-serif;
  font-size: 12px;
  user-select: none;
  @media screen and (min-width: 576px) {
    font-size: 14px;
  }
`;

const Histogram = styled.div`
  padding: 32px 16px 0;
  @media screen and (min-width: 576px) {
    padding-left: 40px;
    padding-right: 40px;
  }
`;

export default class extends React.Component {
	state = {
    selected: false
  };

  render () {
		return (
			<PriceChange>
				<Title>Price range</Title>
				<Name>$10 — $1000+</Name>
				<Annotation>The average nightly price is $75.</Annotation>
				<Histogram>
				{/* <Diagram /> */}
				{/* <Rheostat min={10} max={1000} values={[1, 1000]} /> */}
				</Histogram>
			</PriceChange>
		);	
	}

	
}
