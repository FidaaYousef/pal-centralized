import React, { useState } from "react";
import DatePicker from "react-datepicker";
import {
  Button,
  Form,
  Dropdown,
  Label,
  Container,
  Input
} from "semantic-ui-react";
import { reduxForm } from "redux-form";

const majorOptions = [
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

const Profilesubmit = () => {
  let [majorQuery, setMajorQuery] = useState("");
  let [addressQuery, setAddressQuery] = useState("");
  let [nameQuery, setNameQuery] = useState("");
  let [imageQuery, setImageQuery] = useState("");
  let [emailQuery, setEmailQuery] = useState("");
  let [dateQuery, setDateQuery] = useState("");
  let [mobileQuery, setMobileQuery] = useState("");
  let [educationQuery, setEducationQuery] = useState("");
  let [cvQuery, setCvQuery] = useState("");
  let [tagQuery, setTagQuery] = useState("");
  let [genderQuery, setGenderQuery] = useState("");

  // to take the value of dropdowns For Majors --------------------
  const handleMajorChange = (e: any) => {
    setMajorQuery(e.target.textContent);
  };

  // to take the value of dropdowns of Address-----------------
  const handleAddressChange = (e: any) => {
    setAddressQuery(e.target.textContent);
  };

  // to take the value from input Name field
  const handleNameChange = (e: any) => {
    setNameQuery(e.target.value);
  };
  // to take the value from  Image field
  const handleImageChange = (e: any) => {
    setImageQuery(e.target.value);
  };
  // to take the value from  Email field
  const handleEmailChange = (e: any) => {
    setEmailQuery(e.target.value);
  };

  // to take the value from  Date field
  const handleDateChange = (e: any) => {
    setDateQuery(e.target.value);
  };

  // to take the value from  Mobile field
  const handleMobileChange = (e: any) => {
    setMobileQuery(e.target.value);
  };
  // to take the value from  Education Level field
  const handleEducationChange = (e: any) => {
    setEducationQuery(e.target.value);
  };
  // to take the value from  CV field
  const handleCVChange = (e: any) => {
    setCvQuery(e.target.value);
  };
  // to take the value from  Tags field
  const handleTagChange = (e: any) => {
    setTagQuery(e.target.value);
  };
  // to take the value from  Gender field
  const handleGenderChange = (e: any) => {
    setGenderQuery(e.target.value);
  };

  // Handle the search button
  const onSearch = () => {
    // console.log(majorQuerySearch, typeQuerySearch, enteredQuerySearch);
  };

  // const EditUser = (props: any) => {
  //   const users: any = useSelector((state: any) => state.users);
  //   const dispatch = useDispatch();
  //   useEffect(() => {
  //     dispatch(fetchUser(3));
  //   }, []);

  //   const user = users.items.user ? users.items.user[0] : "";
  //   // console.log(user.Name);
  //   console.log(users.items.user);

  return (
    <div style={{ margin: "10rem auto", width: "100%" }}>
      {/* // Image Input--------------- */}
      <Container>
        <Input>
          {/* <DatePicker placeholderText="Click to select a date" />; */}
        </Input>
        <Form pointing>
          <Form.Field>
            <Label>Profile Image</Label>
            <Input onChange={handleImageChange} />
          </Form.Field>
          {/* // Name Input--------------- */}

          <Form.Field>
            <Label>Full Name</Label>
            <Input onChange={handleNameChange} />
          </Form.Field>
          {/* // Email Input--------------- */}

          <Form.Field>
            <Label>Email</Label>
            <Input onChange={handleEmailChange} />
          </Form.Field>

          {/* //////////////// handle Gender Change --------------- */}

          <Form.Field>
            <Label>Gender</Label>
            <Dropdown
              placeholder="Gender"
              fluid
              search
              selection
              options={genderOptions}
              onChange={handleGenderChange}
            />
          </Form.Field>
          {/* // Birthday Input--------------- */}

          <Form.Field>
            <Label>Birthday</Label>
            <Input onChange={handleDateChange} />
          </Form.Field>

          {/* //////////////// handle Address Change --------------- */}

          <Form.Field>
            <Label>Address</Label>
            <Dropdown
              placeholder="Address"
              fluid
              search
              selection
              options={addressOptions}
              onChange={handleAddressChange}
            />
          </Form.Field>

          {/* // Mobile Input--------------- */}

          <Form.Field>
            <Label>Mobile Number</Label>
            <Input onChange={handleMobileChange} />
          </Form.Field>
          {/* ///----------------Major Changes----------- */}
          <Form.Field>
            <Label>Major</Label>
            <Dropdown
              placeholder="choose Major..."
              fluid
              search
              selection
              options={majorOptions}
              onChange={handleMajorChange}
            />
          </Form.Field>
          {/* ///----------------Education Level Changes----------- */}
          <Form.Field>
            <Label>Education Level</Label>
            <Dropdown
              placeholder="Education Level..."
              fluid
              search
              selection
              options={educationOptions}
              onChange={handleEducationChange}
            />
          </Form.Field>
          {/* // CV Input--------------- */}

          <Form.Field>
            <Label>Tags</Label>
            <Dropdown
              placeholder="Tags..."
              fluid
              search
              selection
              options={majorOptions}
            />
            <Input onChange={handleCVChange} />
          </Form.Field>
          <Button type="submit" primary onClick={onSearch}>
            Update
          </Button>
        </Form>
      </Container>
    </div>
  );
};

export default Profilesubmit;
