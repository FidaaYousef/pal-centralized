import React from "react";
import { useEffect, useState } from "react";
import "./CSS/UserProfile-page.css";
import { Link } from "react-router-dom";
import "semantic-ui-css/semantic.min.css";
import { Button, Card, Image, Form, Input, Dropdown } from "semantic-ui-react";
import { useSelector, useDispatch } from "react-redux";
import { fetchUser } from "../../actions";
import { majorOptions } from "../general/Search";

const addressOptions = [
  { key: "a1", value: "t1", text: "Jerusalem" },
  { key: "a2", value: "t2", text: "Safed" },
  { key: "a3", value: "t3", text: "Haifa" },
  { key: "a4", value: "t4", text: "Bisan" },
  { key: "a5", value: "t5", text: "Akka" },
  { key: "a6", value: "t6", text: "Nablus" },
  { key: "a7", value: "t7", text: "Tulkarm" },
  { key: "a8", value: "t8", text: "Qalqilya" },
  { key: "a9", value: "t9", text: "Caesarea" },
  { key: "a10", value: "t10", text: "Ramallah" },
  { key: "a11", value: "t11", text: "Al-Bireh" },
  { key: "a12", value: "t12", text: "Al-Roll" },
  { key: "a13", value: "t13", text: "Jaffa" },
  { key: "a14", value: "t14", text: "Jericho" },
  { key: "a15", value: "t15", text: "Bethlehem" },
  { key: "a16", value: "t16", text: "Hebron" },
  { key: "a17", value: "t17", text: "Khan" },
  { key: "a18", value: "t18", text: "Rafah" },
  { key: "a19", value: "t19", text: "Beersheba" }
];
const educationOptions = [
  { key: "a1", value: "t1", text: " high school" },
  { key: "a2", value: "t2", text: "diploma" },
  { key: "a3", value: "t3", text: "bachelor's degree" },
  { key: "a4", value: "t4", text: "doctoral degree" }
];

const genderOptions = [
  { key: "a1", value: "t1", text: " male" },
  { key: "a2", value: "t2", text: "female" }
];

const intrestOptions = [
  { key: "a1", value: "m1", text: "Achitecture" },
  { key: "a2", value: "m2", text: "Art" },
  { key: "a3", value: "m3", text: "Business" },
  { key: "a4", value: "m4", text: "Media" },
  { key: "a5", value: "m5", text: "Computer" },
  { key: "a6", value: "m6", text: "Science" },
  { key: "a7", value: "m7", text: "Medicine" },
  { key: "a8", value: "m8", text: "Languages" },
  { key: "a9", value: "m9", text: "Law" },
  { key: "a10", value: "m10", text: "Philosophy" },
  { key: "a11", value: "m11", text: "Political" },
  { key: "a12", value: "m12", text: "Tourisim" },
  { key: "a13", value: "m13", text: "Sports" },
  { key: "a14", value: "m14", text: "History" },
  { key: "a15", value: "m15", text: "Engineerong" },
  { key: "a16", value: "m16", text: "IT" },
  { key: "a17", value: "m17", text: "Education" },
  { key: "a18", value: "m18", text: "Literature" }
];

// const UserProfile = (props: any) => {
//   const users: any = useSelector((state: any) => state.userProfile);
//   const dispatch = useDispatch();
//   useEffect(() => {
//     dispatch(fetchUser(localStorage.getItem("userId")));
//   }, []);

//   const user = users.items.user ? users.items.user[0] : "";
//   // console.log(user.Name);
//   console.log(users.items.user);
//   console.log("usertype", localStorage.getItem("userType"));

////my testing////---------------------------------------------------_______________________________//////
const UserProfile = (props: any) => {
  const users: any = useSelector((state: any) => state.users);
  const dispatch = useDispatch();

  // useEffect(() => {
  //   // const dispatch = useDispatch();
  //   dispatch();
  // }, []);
  useEffect(() => {});

  let [name, setName] = useState("");
  let [email, setEmail] = useState("");
  let [gender, setGender] = useState("");
  let [address, setAddress] = useState("");
  let [major, setMajor] = useState("");
  let [education, setEducation] = useState("");
  let [intrest, setIntrest] = useState("");

  // to take the value from input  field --------------------------
  const hundleChange = (e: any) => {
    console.log("name from input", e.target.name);
    switch (e.target.name) {
      case "name":
        setName(e.target.value);
        break;
      case "email":
        setEmail(e.target.value);
        break;
    }
  };
  // to take the value of dropdowns  by Gender ----------------------
  const hundleDropDownChangeByGender = (e: any) => {
    setMajor(e.target.textContent);
  };

  // to take the value of dropdowns  by Major ----------------------
  const hundleDropDownChangeByMajor = (e: any) => {
    setMajor(e.target.textContent);
  };

  // to take the value of dropdownsby Address ----------------------
  const hundleDropDownChangeByAddress = (e: any) => {
    setAddress(e.target.textContent);
  };
  // to take the value of dropdowns  by Education ----------------------
  const hundleDropDownChangeByEducation = (e: any) => {
    setEducation(e.target.textContent);
  };

  // to take the value of dropdownsby Intrest ----------------------
  const hundleDropDownChangeByIntrest = (e: any) => {
    setIntrest(e.target.textContent);
  };

  const hundleSubmite = (e: any) => {
    const newUser = {
      userID: localStorage.getItem("userId"),
      name: name,
      email: email,
      gender: gender,
      address: address,
      major: major,
      education: education,
      intrest: intrest
    };
  };

  return (
    <div style={{ padding: "12rem 1rem", margin: "0rem auto", width: "50%" }}>
      <Form>
        <Form.Field>
          <label>User Name</label>
          <Input onChange={hundleChange}></Input>
        </Form.Field>
        <Form.Field>
          <label>Email</label>
          <Input onChange={hundleChange}></Input>
        </Form.Field>
        <Form.Field>
          <label>Birthday</label>
          <Input onChange={hundleChange}></Input>
        </Form.Field>
        <Form.Field>
          <label>Mobile Number</label>
          <Input onChange={hundleChange}></Input>
        </Form.Field>
        <Form.Field>
          <label>Gender</label>
          <Dropdown
            placeholder="choose gender..."
            fluid
            search
            selection
            options={genderOptions}
            onChange={hundleDropDownChangeByGender}
          ></Dropdown>
        </Form.Field>
        <Form.Field>
          <label>Address</label>
          <Dropdown
            placeholder="choose address..."
            fluid
            search
            selection
            options={addressOptions}
            onChange={hundleDropDownChangeByAddress}
          ></Dropdown>
        </Form.Field>
        <Form.Field>
          <label>Major</label>
          <Dropdown
            placeholder="choose major..."
            fluid
            search
            selection
            options={majorOptions}
            onChange={hundleDropDownChangeByMajor}
          ></Dropdown>
        </Form.Field>
        <Form.Field>
          <label> Education Level</label>
          <Dropdown
            placeholder="choose Education Level..."
            fluid
            search
            selection
            options={educationOptions}
            onChange={hundleDropDownChangeByEducation}
          ></Dropdown>
        </Form.Field>
        <Form.Field>
          <label>Intrest</label>
          <Dropdown
            placeholder="choose Intrest..."
            fluid
            search
            selection
            options={intrestOptions}
            onChange={hundleDropDownChangeByIntrest}
          ></Dropdown>
        </Form.Field>
        <br></br>
        <br></br>
        <Button
          type="submit"
          size="huge"
          color="blue"
          style={{ margin: "0em 25em 0em" }}
        >
          Save
        </Button>
      </Form>
    </div>
  );
};

export default UserProfile;
