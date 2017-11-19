import React from "react";
import styled from "styled-components";
import close from "./images/close.svg";

const InstantBook = styled.div`
  padding: 24px 31px;
  display: flex;
  justify-content: space-between;
  width: 326px;
`;

const TextWrapper = styled.div`flex-grow: 1;`;

const Title = styled.p`
  margin: 0;
  font-size: 18px;
`;

const Annotation = styled.p`
  margin: 0;
  padding-top: 4px;
  font-family: "Circular Air Light", "Arial", "Helvetica", sans-serif;
  font-size: 14px;
`;

const RadioButton = styled.div`
  margin-left: 30px;
  position: relative;
  min-width: 64px;
  width: 64px;
  height: 42px;
  background-color: rgba(72, 72, 72, 0.08);
  border: 1px solid rgba(72, 72, 72, 0.3);
  border-radius: 24px;
`;

const Circle = styled.div`
  position: absolute;
  top: 0;
  left: -1px;
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  border: 1px solid rgba(72, 72, 72, 0.3);
  border-radius: 50%;
`;

const Icon = styled.img``;

export default class extends React.Component {

  render () {
    return (
      <InstantBook>
        <TextWrapper>
          <Title>InstantBook</Title>
          <Annotation>
            Listings you can book without waiting for host approval.
          </Annotation>
        </TextWrapper>
        <RadioButton>
          <Circle>
            <Icon src={close} />
          </Circle>
        </RadioButton>
      </InstantBook>
    );      
  }
  
}
