import { RootState } from '@store/rootReducer'
import { testAction } from '@store/test/actions'
import { useCallback } from 'react'
import {useSelector, useDispatch} from 'react-redux'

export default function useTest() {
    const test = useSelector((root: RootState) => root.testReducer.test)

    const dispatch = useDispatch()

    const __testActionFromHooks = useCallback(() => dispatch(testAction()), [dispatch])

    return {
        test, __testActionFromHooks
    }
}