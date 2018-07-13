import React, { Component } from "react"
import { connect } from "react-redux"
import fetchShops from "../fetchShops"
import { makeShopsReceived, makeBookingsReceived } from "../actions"
import { Container, Row, FormGroup, Label, Input } from "reactstrap"
import fetchBookings from "../fetchBookings"

const mapStateToProps = state => ({
  shops: state.shops
})

const mapDispatchToProps = dispatch => ({
  onReceivedShops: shops => dispatch(makeShopsReceived(shops)),
  onReceivedBookings: bookings => dispatch(makeBookingsReceived(bookings))
})

class SelectShops extends Component {
  constructor(props) {
    super(props)
    this.state = {}

    this.handleChange = this.handleChange.bind(this)
  }
  handleChange(e) {
    console.log(e.target.value)
    fetchBookings(e.target.value).then(bookings =>
      this.props.onReceivedBookings(bookings)
    )
  }

  render() {
    return (
      <Container>
        <Row className="justify-content-center">
          <FormGroup>
            <Label for="selectShop">Select Multiple</Label>
            <Input
              type="select"
              name="selectShop"
              id="selectShop"
              onChange={this.handleChange}
            >
              {this.props.shops.map((shop, index) => (
                <option key={index} value={shop.city}>
                  {shop.city}
                </option>
              ))}
            </Input>
          </FormGroup>
        </Row>
      </Container>
    )
  }

  componentDidMount() {
    fetchShops().then(shops => this.props.onReceivedShops(shops))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SelectShops)
