import React from "react";
import styled from "styled-components";
import buttonMinus from "./images/button-min.svg";
import buttonPlus from "./images/button-plus.svg";


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

const GuestsWrap = styled.div`
  padding: 24px 31px;
  position: relative;
  
`;

const Сriterion = styled.div`
  display: flex;
  position: relative;
  margin-bottom: 32px;
`;

const СriterionName = styled.span`
  font-size: 20px;
  line-height: 23px;
  text-align: left;
  color: #383838;
  position: absolute;
`;

const Count = styled.div`
  font-size: 18px;
  line-height: 30px;
  margin: 0 19px;
`;

const Aside = styled.span`
  font-size: 16px;
  color: #383838;
  position: absolute;
  top: 30px;
`;

const Buttons = styled.div`
  display: flex;
  margin-left: 197px
`;

export default class extends React.Component {

  state = {
    selected: false,
    guests: 0,
    selectedGuests: 0,
  };

  render() {

    return (
      <div>
        <GuestsWrap>
          <Сriterion>
            <СriterionName>Adults</СriterionName>
            <Buttons>
              <ButtonPlus />
                <Count>0</Count>
              <ButtonMinus />
            </Buttons>
          </Сriterion>
          <Сriterion>
            <СriterionName>Children</СriterionName>
            <Aside>Ages 2 — 12</Aside>
            <Buttons>
              <ButtonPlus />
                <Count>0</Count>
              <ButtonMinus />
            </Buttons>
          </Сriterion>
          
          <Сriterion>
            <СriterionName>Infants</СriterionName>
            <Aside>Under 2</Aside>
            <Buttons>
              <ButtonPlus />
                <Count>0</Count>
              <ButtonMinus />
            </Buttons>
          </Сriterion>
          
        </GuestsWrap>
      </div>
    );
  }
}