import React, { Component } from "react"
import { connect } from "react-redux"
import { makeBookingsReceived } from "../actions"
import fetchBookings from "../fetchBookings"
import { Container, ListGroup, ListGroupItem, Row } from "reactstrap"
import Booking from "../components/Booking"

const mapStateToProps = state => ({
  bookings: state.bookings
})

const mapDispatchToProps = dispatch => ({
  onReceivedBookings: bookings => dispatch(makeBookingsReceived(bookings))
})

class BookingsList extends Component {
  render() {
    return (
      <Container>
        <Row className="justify-content-center">
          <ListGroup>
            {this.props.bookings.map((booking, index) => (
              <Booking
                key={index}
                {...booking}
                name={booking.contact.firstName}
                email={booking.contact.email}
                prestations={booking.prestations.map((prestation, index) => (
                  <ListGroupItem key={index} color="info">
                    {prestation.name} - {prestation.type} -{" "}
                    {prestation.duration.minutes} minutes
                  </ListGroupItem>
                ))}
              />
            ))}
          </ListGroup>
        </Row>
      </Container>
    )
  }

  componentDidMount() {
    fetchBookings("paris").then(bookings =>
      this.props.onReceivedBookings(bookings)
    )
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BookingsList)
