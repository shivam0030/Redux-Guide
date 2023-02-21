import {configureStore as createStore} from "@reduxjs/toolkit"
import rootred from "./redux/reducers/main"

const store = createStore(
 {reducer:rootred}
)

export default store