import React, { Component } from 'react';
import styled from "styled-components";
import './index.css';
import Header from './Header';
import 'flexboxgrid2';
import Explore from "./Explore";
import Experiences from "./Experiences";
import Homes from "./Homes";
import Popular from "./Popular";
import Featured from "./Featured";
import Footer from "./Footer";

const Main = styled.main``;

class App extends Component {
  render() {
    return (
      <div>
        <Header></Header>
        <Main>
          <Explore />
          <Experiences />
          <Homes />
          <Popular />
          <Featured />
        </Main>
        <Footer />
      </div>
    );
  }
}

export default App;
