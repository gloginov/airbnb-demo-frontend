import React from "react";
import {
  Header,
  Input,
  Nav,
  Link,
  Logo,
  SeachInput
} from "../styled";

import logo from "../logo.svg";

export default () => {
  return (
    <Header>
      <div className="container">
        <div className="row middle-xs middle-sm middle-md middle-lg middle-xl">
            <Logo src={logo} alt="Logo" />
            <SeachInput>
                <Input type="search" placeholder="Try 'Miami'" />
            </SeachInput>
            <Nav>
                <Link href="#">Become a host</Link>
                <Link href="#">Help</Link>
                <Link href="#">Sign Up</Link>
                <Link href="#">Log In</Link>
            </Nav>
        </div>
      </div>
    </Header>
  );
}