import React from "react";
import styled from "styled-components";
import homes from "./homes.png";
import experiences from "./experiences.png";
import restaraunts from "./restaraunts.png";
import { H1, Cards, CardBase, mediaMin } from "../styled";
import { Link } from "react-router-dom";
import link from "../index.css";

const Card = CardBase.extend.attrs({})`
  border: 1px solid rgba(72, 72, 72, 0.2);
  box-shadow: 0px 2px 4px rgba(72, 72, 72, 0.08);
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-left: 0;
  padding-right: 0;
  ${mediaMin.md`flex-direction: row; `};
`;

const Img = styled.img`
  width: 100%;
  ${mediaMin.md`width: 40%;`};
`;

const CardText = styled.p`
  font-size: 17px;
  margin-right: auto;
  padding-left: 16px;
`;

const SecCard = props => (
  <div className="col-xs-6 col-md-5 col-lg-4">
    <Link to={props.to} className="link">
      <Card href={props.url}>
        <Img src={props.src} alt={props.name} />
        <CardText>{props.name}</CardText>
      </Card>
    </Link>  
  </div>
);

export default () => {
  return (
    <div className="container">
      <H1>Explore Airbnb</H1>
      <Cards>
        <SecCard src={homes} name="Homes" to="/homes" />
        <SecCard src={experiences} name="Experiences" to="/experiences" />
        <SecCard src={restaraunts} name="Restaraunts" to="/restaraunts" />
      </Cards>
    </div>
  );
};
