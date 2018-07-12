import { combineReducers } from "redux"

import bookings from "./bookings"
import shops from "./shops"

export default combineReducers({ bookings, shops })
