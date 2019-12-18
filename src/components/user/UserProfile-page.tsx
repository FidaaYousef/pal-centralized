import React from "react";
import { useEffect, useState } from "react";
import "./CSS/UserProfile-page.css";
import { Link } from "react-router-dom";
import "semantic-ui-css/semantic.min.css";
import { Button, Card, Image, Form, Input } from "semantic-ui-react";
import { useSelector, useDispatch } from "react-redux";
import { fetchUser } from "../../actions";

const UserProfile = (props: any) => {
  const users: any = useSelector((state: any) => state.userProfile);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchUser(localStorage.getItem("userId")));
  }, []);

  const user = users.items.user ? users.items.user[0] : "";
  // console.log(user.Name);
  console.log(users.items.user);
  console.log("usertype", localStorage.getItem("userType"));

  return (
    <div style={{ padding: "12rem 1rem", margin: "0rem auto", width: "50%" }}>
      {/* <Card>
        <br></br>
        <br></br>

        <Card.Content>
          <Image floated="left" size="small" src={user.logo} />
          <br></br>
          <br></br>
          <br></br>
          <Card.Header>{user.Name}</Card.Header>

          <Card.Description>
            <br></br>
            <br></br>
            <Card.Header className="header1"> Basic Info </Card.Header>
            <br></br>
            <br></br>
            <br></br>
            <Card.Header className="header"> Email </Card.Header>{" "}
            <p className="pargraph">{user.email}</p>
            <br></br>
            <br></br>
            <Card.Header className="header"> Gender </Card.Header>
            <p className="pargraph">netus</p>
            <br></br>
            <br></br>
            <Card.Header className="header"> Address </Card.Header>
            <p className="pargraph">
              Pellentesque habitant morbi tristique senectus et netus et
            </p>
            <br></br>
            <br></br>
            <Card.Header className="header"> Major </Card.Header>
            <p className="pargraph">
              Pellentesque habitant morbi tristique senectus et netus et
            </p>
            <br></br>
            <br></br>
            <Card.Header className="header"> Education Level </Card.Header>
            <p className="pargraph"> morbi tristique</p>
            <br></br>
            <br></br>
            <Card.Header className="header"> Intrest </Card.Header>
            <p className="pargraph">
              Pellentesque, habitant, morbi tristique, senectus, et netus et
            </p>
            <br></br>
            <br></br>
          </Card.Description>
        </Card.Content>
        <Card.Content extra>
          <Link to="/edituseraccount">
            <Button className="editBTW" basic color="green">
              Edit
            </Button>
          </Link>
        </Card.Content>
      </Card> */}
      <Form>
        <Form.Field>
          <label>User Name</label>
          <Input placeholder={user.Name}></Input>
        </Form.Field>
        <Form.Field>
          <label>Email</label>
          <Input placeholder={user.email}></Input>
        </Form.Field>
        <Form.Field>
          <label>Gender</label>
          <Input placeholder=""></Input>
        </Form.Field>
        <Form.Field>
          <label>Address</label>
          <Input placeholder=""></Input>
        </Form.Field>
        <Form.Field>
          <label>Major</label>
          <Input placeholder=""></Input>
        </Form.Field>
        <Form.Field>
          <label> Education Level</label>
          <Input placeholder=""></Input>
        </Form.Field>
        <Form.Field>
          <label>Intrest</label>
          <Input placeholder=""></Input>
        </Form.Field>
        <br></br>
        <br></br>
        <Button size="huge" color="blue" style={{ margin: "0em 25em 0em" }}>
          Save
        </Button>
      </Form>
    </div>
  );
};

export default UserProfile;
