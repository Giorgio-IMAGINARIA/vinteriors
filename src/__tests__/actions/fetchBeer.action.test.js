import { FETCH_BEER  } from "../../constants/action-types"
import { dispatchBeer } from "../../actions/fetchBeer.action"

const dummyArrayToDispatch = []

describe('dispatchBeer action', () => {
    it('should create an action to set the snackbar state', () => {
        const expectedAction = {
            type: FETCH_BEER , payload: dummyArrayToDispatch
        }
        expect(dispatchBeer(dummyArrayToDispatch)).toEqual(expectedAction)
    })
})