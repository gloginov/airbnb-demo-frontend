import React from "react";
import styled from "styled-components";
import entire from "./images/entire-home.svg";
import privat from "./images/privat-room.svg";
import shared from "./images/shared-room.svg";

const RoomType = styled.div`
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
`;

const Checkbox = styled.div`
  margin-right: 12px;
  width: 24px;
  height: 24px;
  align-self: flex-start;
  border: 1px solid rgba(72, 72, 72, 0.3);
  border-radius: 4px;
`;

const Name = styled.p`
  margin: 0;
  padding-top: 3px;
  padding-bottom: 6px;
  flex-grow: 1;
  font-family: "Circular Air Light", "Arial", "Helvetica", sans-serif;
  font-size: 16px;
  user-select: none;
  @media screen and (min-width: 576px) {
    font-size: 18px;
  }
`;

const Row = styled.div`
  padding: 8px 0;
  display: flex;
  align-items: center;
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

const Icon = styled.img`
  display: none;
  @media screen and (min-width: 576px) {
    display: block;
    align-self: flex-end;
  }
`;

const TextWrapper = styled.div`flex-grow: 1;`;

export default class extends React.Component {

  state = {
    selected: false
  };

  render () {

    return (
      <RoomType>
        <Title>Room type</Title>
        <Row>
          <Checkbox />
          <TextWrapper>
            <Name>Entire home</Name>
            <Annotation>Have a place to yourself</Annotation>
          </TextWrapper>
          <Icon src={entire} />
        </Row>
        <Row>
          <Checkbox />
          <TextWrapper>
            <Name>Private room</Name>
            <Annotation>
              Have your own room and share some common spaces
            </Annotation>
          </TextWrapper>
          <Icon src={privat} />
        </Row>
        <Row>
          <Checkbox />
          <TextWrapper>
            <Name>Shared room</Name>
            <Annotation>Stay in a shared space, like a common room</Annotation>
          </TextWrapper>
          <Icon src={shared} />
        </Row>
      </RoomType>
    );
  }
}
