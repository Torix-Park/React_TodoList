import { combineReducers} from 'redux'
import testReducer from './test/reducer'

const rootReducer = combineReducers({
    testReducer
})

export default rootReducer

export type RootState = ReturnType<typeof rootReducer>