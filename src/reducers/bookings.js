import { BOOKINGS_RECEIVED } from "../actions";

const initialState = [];

export default (prevState = initialState, action) => {
  if (action.type === BOOKINGS_RECEIVED) {
    return action.bookings;
  }

  return prevState;
};
