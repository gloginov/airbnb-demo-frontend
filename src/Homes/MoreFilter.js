import React from "react";
import styled from "styled-components";
import buttonMinus from "./images/button-min.svg";
import buttonPlus from "./images/button-plus.svg";
import close from "./images/close.svg";
import down from "./images/down.svg";


const ButtonMinus = styled.div`
background: url(${buttonMinus}) no-repeat center;
width: 32px;
height: 32px;
cursor: pointer;
`;

const ButtonPlus = styled.div`
background: url(${buttonPlus}) no-repeat center;
width: 32px;
height: 32px;
cursor: pointer;
`;

const MoreWrap = styled.div`
padding: 24px 31px;
position: relative;
width: 733px;
`;

const Сriterion = styled.div`
display: flex;
position: relative;
margin-bottom: 32px;
`;

const СriterionName = styled.span`
font-size: 18px;
line-height: 23px;
text-align: left;
color: #383838;
position: absolute;
`;

const Count = styled.div`
font-size: 18px;
line-height: 30px;
margin: 0 12px;
`;

const Buttons = styled.div`
display: flex;
margin-left: 197px
`;

const H2 = styled.h2`
  font-size: 20px;
  color: #383838;
  margin-bottom: 24px;
  margin-top: 30px;
  line-height: 23px;
`;

const FirstTitle = styled.h2`
font-size: 20px;
color: #383838;
margin-bottom: 24px;
line-height: 23px;
`;


const SectionFilter = styled.div`
  border-bottom: 1px solid rgba(72, 72, 72, 0.3)
`;

const MoreOptions = styled.div`
@media screen and (min-width: 576px) {
  width: 60%;
}
`;

const Title = styled.h3`
  margin: 0 0 4px 0;
  font-size: 18px;
  font-weight: normal;
  @media screen and (min-width: 576px) {
    font-size: 20px;
  }
`;

const Row = styled.div`
  padding-top: 20px;
  padding-bottom: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Name = styled.p`
  margin: 0;
  padding-bottom: 6px;
  flex-grow: 1;
  font-size: 16px;
  user-select: none;
  @media screen and (min-width: 576px) {
    font-size: 18px;
  }
`;

const Annotation = styled.p`
  margin: 0;
  padding-bottom: 6px;
  font-size: 14px;
  user-select: none;
  @media screen and (min-width: 576px) {
    font-size: 16px;
  }
`;

const Link = styled.a`
  padding: 4px 0;
  font-size: 14px;
  color: #0f7276;
  text-decoration: none;
  cursor: pointer;
  @media screen and (min-width: 576px) {
    font-size: 16px;
  }
`;

const RadioButton = styled.div`
  position: relative;
  width: 64px;
  height: 42px;
  background-color: rgba(72, 72, 72, 0.08);
  border: 1px solid rgba(72, 72, 72, 0.3);
  border-radius: 24px;
  cursor: pointer;
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

const RowWrap = styled.div``;

const Icon = styled.img``;

const Content = styled.div`
display: none;
@media screen and (min-width: 576px) {
  display: flex;
  flex-wrap: wrap;
  padding-bottom: 16px;
}
`;

const CheckboxWrapper = styled.div`
padding-top: 8px;
padding-bottom: 8px;
width: 50%;
display: flex;
align-items: center;
font-family: "Circular Air Light", "Arial", "Helvetica", sans-serif;
font-size: 18px;
`;

const Checkbox = styled.div`
margin-right: 12px;
width: 24px;
height: 24px;
border: 1px solid rgba(72, 72, 72, 0.3);
border-radius: 4px;
cursor: pointer;
`;

const ExpandButton = styled.button`
padding: 0;
font-size: 14px;
background-color: transparent;
border: none;
color: #0f7276;
cursor: pointer;

`;

export default class extends React.Component {

  state = {
      selected: false
  };

  render() {

    return (
      <MoreWrap>
        <SectionFilter>
          <FirstTitle>Rooms and beds</FirstTitle>
          <Сriterion>
            <СriterionName>Bedrooms</СriterionName>
            <Buttons>
              <ButtonPlus />
                <Count>0+</Count>
              <ButtonMinus />
            </Buttons>
          </Сriterion>
          <Сriterion>
            <СriterionName>Beds</СriterionName>
            <Buttons>
              <ButtonPlus />
                <Count>0+</Count>
              <ButtonMinus />
            </Buttons>
          </Сriterion>
          <Сriterion>
            <СriterionName>Bathrooms</СriterionName>
            <Buttons>
              <ButtonPlus />
                <Count>0+</Count>
              <ButtonMinus />
            </Buttons>
          </Сriterion>
        </SectionFilter>
        <SectionFilter>
          <H2>More options</H2>
          <Row>
            <RowWrap>
              <Name>Instant Book</Name>
              <Annotation>Secure a reservation instantly.</Annotation>
              <Link>Learn more</Link>
            </RowWrap>
            <RadioButton>
              <Circle>
                <Icon src={close} />
              </Circle>
            </RadioButton>
          </Row>
          <Row>
            <RowWrap>
              <Name>Superhost</Name>
              <Annotation>Stay with recognized hosts.</Annotation>
              <Link>Learn more</Link>
            </RowWrap>
            <RadioButton>
              <Circle>
                <Icon src={close} />
              </Circle>
            </RadioButton>
          </Row>
        </SectionFilter>
        <SectionFilter>
          <H2>Amenities</H2>
          <Content>
            <CheckboxWrapper>
              <Checkbox /> Heating
            </CheckboxWrapper>
            <CheckboxWrapper>
              <Checkbox /> Kitchen
            </CheckboxWrapper>
            <CheckboxWrapper>
              <Checkbox /> TV
            </CheckboxWrapper>
            <CheckboxWrapper>
              <Checkbox /> Wireless Internet
            </CheckboxWrapper>
          </Content>
          <ExpandButton>
            See All <Icon src={down} />
          </ExpandButton>
        </SectionFilter>
        <SectionFilter>
          <H2>Facilities</H2>
          <Content>
            <CheckboxWrapper>
              <Checkbox /> Elebator
            </CheckboxWrapper>
            <CheckboxWrapper>
              <Checkbox /> Pool
            </CheckboxWrapper>
            <CheckboxWrapper>
              <Checkbox /> Free parking on premises
            </CheckboxWrapper>
            <CheckboxWrapper>
              <Checkbox /> Wheelchair accessible
            </CheckboxWrapper>
          </Content>
          <ExpandButton>
            See All <Icon src={down} />
          </ExpandButton>
        </SectionFilter>
      </MoreWrap>
    );
  }
}