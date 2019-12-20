import React from "react";
import { Container, Image, Menu, Button } from "semantic-ui-react";
import { Link } from "react-router-dom";
import "../../style.css/form.css";
import logo from "../../logo.png";

// const LogoImg = () => (
//   <Image
//     src="https://react.semantic-ui.com/images/wireframe/square-image.png"
//     size="medium"
//     circular
//   />
// );
const HomePageHeader = () => {
  return (
    <div>
      <Menu
        fixed="top"
        inverted
        style={{ height: "5rem", margin: "0em 0em 0em" }}
      >
        <Container>
          <Menu.Item position="left">
            <Link to="login">
              <Button primary style={{ margin: "0em -6em 0em" }}>
                <h4>Login</h4>
              </Button>
            </Link>
          </Menu.Item>

          <Menu.Item
            as="a"
            header
            centered
            // pointing="top left"
            // style={{ marginLeft: "-200000rem" }}
          >
            <Link to="/">
              <Image
                size="small"
                src={logo}
                // centered
                style={{
                  margin: "auto  35rem "
                }}
              />
            </Link>
          </Menu.Item>
        </Container>
      </Menu>
    </div>
  );
};

export default HomePageHeader;
