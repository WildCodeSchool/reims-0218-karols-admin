import React, { Component } from "react";
import { connect } from "react-redux";
import { makeBookingsReceived } from "../actions";
import fetchBookings from "../fetchBookings";

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({
  onReceivedBookings: bookings => dispatch(makeBookingsReceived(bookings))
});

class BookingsList extends Component {
  render() {
    return <div>Liste des bookings</div>;
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
