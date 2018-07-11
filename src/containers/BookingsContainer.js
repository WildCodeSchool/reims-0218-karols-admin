import React, { Component } from "react";
import { connect } from "react-redux";
import { makeBookingsReceived } from "../actions";
import fetchBookings from "../fetchBookings";
import { Container, ListGroup, ListGroupItem } from "reactstrap";
import Booking from "../components/Booking";

const mapStateToProps = state => ({
  bookings: state.bookings
});

const mapDispatchToProps = dispatch => ({
  onReceivedBookings: bookings => dispatch(makeBookingsReceived(bookings))
});

class BookingsList extends Component {
  render() {
    return (
      <Container>
        <ListGroup>
          {this.props.bookings.map(booking => (
            <Booking
              {...booking}
              name={booking.contact.firstName}
              email={booking.contact.email}
            />
          ))}
        </ListGroup>
      </Container>
    );
  }

  componentDidMount() {
    fetchBookings("paris").then(bookings =>
      this.props.onReceivedBookings(bookings)
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BookingsList);
