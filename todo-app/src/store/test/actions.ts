import { TEST_ACTION } from "./modules/actionTypes";

export const testAction = () => ({
    type: TEST_ACTION,
    payload: {}
})

export type TestActionTypes = ReturnType<typeof testAction>