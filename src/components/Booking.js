import React from "react";
import { Card, CardText, CardBody, CardTitle, Button } from "reactstrap";
import bookings from "../reducers/bookings";

const Booking = ({ date, city, name, email }) => {
  return (
    <div>
      <Card>
        <CardBody>
          <CardTitle>{city}</CardTitle>
          <CardText>{date}</CardText>
          <CardText>{name}</CardText>
          <CardText>{email}</CardText>
          <Button>Button</Button>
        </CardBody>
      </Card>
    </div>
  );
};

export default Booking;
