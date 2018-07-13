import React from "react"
import {
  Card,
  CardText,
  CardBody,
  CardTitle,
  Button,
  ListGroup
} from "reactstrap"

import { fetchDeleteBooking } from "../api/fetchDeleteBooking"

const { DateTime } = require("luxon")

const Booking = ({
  date,
  city,
  name,
  email,
  prestations,
  deleteBooking,
  id
}) => {
  return (
    <div
      style={{
        margin: "auto",
        marginTop: "20px"
      }}
    >
      <Card>
        <CardBody>
          <CardTitle>{city}</CardTitle>
          <CardText>Nom : {name}</CardText>
          <CardText>Email : {email}</CardText>
          <CardText
            style={{
              fontWeight: "bold",
              fontSize: "1.2em"
            }}
          >
            {DateTime.fromISO(date)
              .setLocale("fr")
              .toFormat("cccc dd LLLL HH 'h' mm")}
          </CardText>
          <ListGroup> {prestations}</ListGroup>
          <Button
            onClick={() =>
              fetchDeleteBooking(id).then(response => {
                return deleteBooking(response.bookingId)
              })
            }
            style={{
              marginTop: "20px"
            }}
          >
            Supprimer cette réservation
          </Button>
        </CardBody>
      </Card>
    </div>
  )
}

export default Booking
