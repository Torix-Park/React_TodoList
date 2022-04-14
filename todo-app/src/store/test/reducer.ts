import { TestActionTypes } from "./actions"
import { TEST_ACTION } from "./modules/actionTypes"

export type TestStateType = {
    test: 'hello world!'
}

const initialState : TestStateType = {
    test: 'hello world!'
}

const testReducer = (
    prev: TestStateType = initialState,
    {type, payload}: TestActionTypes
): TestStateType => {
    switch(type) {
        case TEST_ACTION: return {
            test: 'hello world!'
        }

        default: return prev
    }
}

export default testReducer