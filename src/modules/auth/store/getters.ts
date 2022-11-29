import { AuthStoreState } from "../interfaces/store.interface"

export const currentState = ( state :AuthStoreState) => {
    return state.status
}

export const username = ( state:AuthStoreState ) => {
    return state.user?.name || ''
}