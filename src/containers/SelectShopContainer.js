import React, { Component } from "react"
import { connect } from "react-redux"
import fetchShops from "../fetchShops"
import { makeShopsReceived } from "../actions"
import { Container, Row, FormGroup, Label, Input } from "reactstrap"

const mapStateToProps = state => ({
  shops: state.shops
})

const mapDispatchToProps = dispatch => ({
  onReceivedShops: shops => dispatch(makeShopsReceived(shops))
})

class SelectShops extends Component {
  render() {
    return (
      <Container>
        <Row className="justify-content-center">
          <FormGroup>
            <Label for="selectShop">Select Multiple</Label>
            <Input type="select" name="selectShop" id="selectShop">
              {this.props.shops.map(shop => (
                <option value={shop.city}>{shop.city}</option>
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
