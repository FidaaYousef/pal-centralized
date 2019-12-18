import React, { useEffect, useState } from "react";
import {
  Container,
  Grid,
  Header,
  Segment,
  Form,
  Button,
  Modal
} from "semantic-ui-react";
import "../../style.css/form.css";
import { Link } from "react-router-dom";
const HomePageFooter = () => {
  const [userType, setuserType] = useState(localStorage.getItem("token"));

  // let userType = localStorage.getItem("userType");
  // check if there is a user logged or not

  useEffect(() => {
    setuserType(localStorage.getItem("userType"));
  }, []);

  return (
    <div>
      <Segment
        inverted
        vertical
        style={{
          margin: "auto auto 0em "
        }}
      >
        <Container
          textAlign="center"
          //  style={{ padding: "5em 0em" }}
        >
          <Grid divided inverted stackable>
            <Grid.Column width={5}>
              <Modal
                trigger={
                  <Header
                    inverted
                    as="h6"
                    style={{ margin: "-1em 0em 0em", padding: "5em 0em" }}
                  >
                    About Us
                  </Header>
                }
                centered={false}
              >
                <Modal.Header>About Us</Modal.Header>
                <Modal.Content className="about">
                  seek-ps Our mission is to organize the opportunities and make
                  it available to all
                  <br></br>
                  <br></br>
                  the Palestinian around the world in a way that benefits them.
                  <br></br>
                  <br></br>
                  <Button
                    color="blue"
                    className="close"
                    style={{ margin: "-2em 25em 0em" }}
                  >
                    Close
                  </Button>
                </Modal.Content>
              </Modal>
            </Grid.Column>
            <Modal
              trigger={
                <Header
                  inverted
                  as="h6"
                  style={{ margin: "0em 0em 0em 8em", padding: "5em 0em" }}
                >
                  Contact Us
                </Header>
              }
              centered={false}
            >
              <Modal.Header>Send Email</Modal.Header>
              <Modal.Content form>
                <Form>
                  <Form.Field>
                    <label> Name</label>
                    <input />
                  </Form.Field>
                  <Form.Field>
                    <label>Email</label>
                    <input />
                  </Form.Field>
                  <Form.Field>
                    <label>Message</label>
                    <textarea />
                  </Form.Field>
                  <Button color="blue" style={{ margin: "0em 25em 0em" }}>
                    Send
                  </Button>
                </Form>
              </Modal.Content>
            </Modal>
            <Grid.Column width={5}>
              <Header
                inverted
                as="h6"
                content="CopyRight"
                style={{ margin: "-0.8em 0em 0em 12em", padding: "5em 0em" }}
              />
            </Grid.Column>
          </Grid>
        </Container>
      </Segment>
    </div>
  );
};
export default HomePageFooter;
