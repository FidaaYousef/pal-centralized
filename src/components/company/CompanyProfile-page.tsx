import React from "react";
import "./CSS/CompanyProfile-page.css";
import "semantic-ui-css/semantic.min.css";
import {
  Button,
  Card,
  Image,
  Container,
  Statistic,
  Form,
  Input
} from "semantic-ui-react";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { fetchCompany } from "../../actions";
import { useSelector, useDispatch } from "react-redux";

// import PropTypes from 'prop-types';

const CompanyProfile = (props: any) => {
  const company: any = useSelector((state: any) => state.companyProfile);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCompany(localStorage.getItem("userId"))); ////userType
  }, []);

  const companys = company.items.user ? company.items.user[0] : "";

  console.log("usertype", localStorage.getItem("userType"));

  return (
    <div style={{ padding: "12rem 1rem", margin: "0rem auto", width: "50%" }}>
      <Form>
        <Form.Field>
          <label>Company Name</label>
          <Input placeholder={companys.Name}></Input>
        </Form.Field>
        <Form.Field>
          <label>Email</label>
          <Input placeholder={companys.email}></Input>
        </Form.Field>
        <Form.Field>
          <label>Description</label>
          <textarea placeholder={companys.description}></textarea>
        </Form.Field>
        <Form.Field>
          <label>Mobile Number</label>
          <Input placeholder={companys.mobileNumber}></Input>
        </Form.Field>
        {/* <Form.Field>
          <label>other links</label>
          <Input placeholder={companys.otherLink}></Input>
        </Form.Field> */}
        <Form.Field>
          <label>Followers</label>
          <Input
            placeholder={
              companys.followersList
                ? companys.followersList.length
                : companys.followersList
            }
          ></Input>
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
export default CompanyProfile;
