import React, { Component } from "react"
import { connect } from "react-redux"
import { makeBookingsReceived, makeDeletedBookingId } from "../actions"
import { Container, ListGroup, ListGroupItem, Row } from "reactstrap"
import Booking from "../components/Booking"

const mapStateToProps = state => ({
  bookings: state.bookings
})

const mapDispatchToProps = dispatch => ({
  onReceivedBookings: bookings => dispatch(makeBookingsReceived(bookings)),
  onDeleteBooking: id => dispatch(makeDeletedBookingId(id))
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
                id={booking._id}
                name={booking.contact.firstName}
                email={booking.contact.email}
                phone={booking.contact.phone}
                deleteBooking={this.props.onDeleteBooking}
                prestations={booking.prestations.map((prestation, index) => (
                  <ListGroupItem key={index} color="info">
                    {prestation.name} - {prestation.type} -{" "}
                    {prestation.duration.minutes} minutes - Quantité:{" "}
                    {prestation.count ? prestation.count : 1}
                  </ListGroupItem>
                ))}
              />
            ))}
          </ListGroup>
        </Row>
      </Container>
    )
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BookingsList)
