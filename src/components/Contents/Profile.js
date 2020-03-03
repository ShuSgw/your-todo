import React from "react";
import { Card, CardBody, CardImg } from "reactstrap";
import firebase from "../../Firebase";

const Profile = () => {
  const user = firebase.auth().currentUser;
  const name = user.displayName;
  const email = user.email;
  const photoUrl = user.photoURL;

  return (
    <div>
      <Card style={{ textAlign: "center" }}>
        <div style={{ textAlign: "center" }}>
          <CardImg
            style={{ maxWidth: "260px" }}
            src={photoUrl}
            alt="Profile Image"
          />
        </div>
        <CardBody>
          <h1>Name: {name}</h1>
          <h5>Email: {email}</h5>
        </CardBody>
      </Card>
    </div>
  );
};

export default Profile;
