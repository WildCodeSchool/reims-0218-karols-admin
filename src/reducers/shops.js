import { SHOPS_RECEIVED } from "../actions"

const initialState = []

export default (prevState = initialState, action) => {
  if (action.type === SHOPS_RECEIVED) {
    return action.shops
  }

  return prevState
}
