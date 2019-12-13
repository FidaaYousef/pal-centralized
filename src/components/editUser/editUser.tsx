import React from "react";
import "semantic-ui-css/semantic.min.css";
import "../editUser/editUser.css";
import { Button, Card, Image, Form, Dropdown, Menu } from "semantic-ui-react";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchUser } from "../../actions";
// import { connect } from "react-redux";

const EditUser = (props: any) => {
  const users: any = useSelector((state: any) => state.users);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchUser(3));
  }, []);

  const user = users.items.user ? users.items.user[0] : "";
  // console.log(user.Name);
  console.log(users.items.user);

  return (
    <Form>
      <Card>
        <Image floated="left" size="small" src={user.logo} />
      </Card>

      <Form.Field>
        <label>Full Name</label>
        <input value={user.Name} />
      </Form.Field>
      {/* <Form.Field>
      //     <label>Last Name</label>
      //     <input placeholder="Last Name" />
         </Form.Field> */}
      <Form.Field>
        <label>Email</label>
        <input value={user.email} />
      </Form.Field>
      <Form.Field label="Gender" control="select">
        <option value="male">Male</option>
        <option value="female">Female</option>
      </Form.Field>
      <Form.Field>
        <label>Birthday</label>
        <input placeholder="Birthday" />
      </Form.Field>
      <Form.Field label="Address" control="select">
        <option>Jerusalem</option>
        <option>Safed</option>
        <option>Haifa</option>
        <option>Bisan</option>
        <option>Akka</option>
        <option>Nablus</option>
        <option>Tulkarm</option>
        <option>Qalqilya</option>
        <option>Caesarea</option>
        <option>Ramallah</option>
        <option>Al-Bireh</option>
        <option>Al-Roll</option>
        <option>Jaffa</option>
        <option>Jericho</option>
        <option>Bethlehem</option>
        <option>Hebron</option>
        <option>Ashkelon</option>
        <option>Khan Younis</option>
        <option>Rafah</option>
        <option>Beersheba</option>
      </Form.Field>
      <Form.Field>
        <label>Mobile number</label>
        <input placeholder="Mobile number" />
      </Form.Field>
      <Form.Field label="Specialtiest" control="select">
        <option>Achitecture</option>
        <option>Art</option>
        <option>Business</option>
        <option>Computer</option>
        <option>Media</option>
        <option>Science</option>
        <option>Medicine</option>
        <option>Languages</option>
        <option>Law</option>
        <option>Philosophy</option>
        <option>Political</option>
        <option>Tourisim</option>
        <option>Sports</option>
        <option>History</option>
        <option>Engineering</option>
        <option>IT</option>
        <option>Education</option>
        <option>Literature</option>
      </Form.Field>
      <Form.Field label="Education Level" control="select">
        <option> high school</option>
        <option>diploma</option>
        <option>bachelor's degree</option>
        <option>master's degree</option>
        <option>doctoral degree</option>
      </Form.Field>
      <Form.Field>
        <label>CV</label>
        <input placeholder="upload your CV" />
      </Form.Field>
      <Form.Field label="Tags" control="select">
        <option>Achitecture</option>
        <option>Art</option>
        <option>Business</option>
        <option>Computer</option>
        <option>Media</option>
        <option>Science</option>
        <option>Medicine</option>
        <option>Languages</option>
        <option>Law</option>
        <option>Philosophy</option>
        <option>Political</option>
        <option>Tourisim</option>
        <option>Sports</option>
        <option>History</option>
        <option>Engineering</option>
        <option>IT</option>
        <option>Education</option>
        <option>Literature</option>
      </Form.Field>
      <Form.Field>
        <textarea placeholder="Tags" />
      </Form.Field>
      <Button type="submit">Update</Button>
    </Form>
  );
};

export default EditUser;
