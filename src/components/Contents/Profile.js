import React from "react";
import { CustomPlaceholder } from "react-placeholder-image";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button
} from "reactstrap";

const Profile = () => {
  return (
    <div>
      <Card>
        <CustomPlaceholder width={500} height={300} />
        <CardBody>
          <CardSubtitle>
            <h3>Card subtitle</h3>
          </CardSubtitle>
          <CardText>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </CardText>
        </CardBody>
      </Card>
    </div>
  );
};

export default Profile;
