const initialState = {
    user: 'KARIM GAY',
    cash: 100
}

const action = {
    type: 'REMOVE CASH',
    payload: 10
}

export function GoldCard(state = initialState, action) {
    switch (action.type) {
      case 'ADD CASH':
        return { ...state, cash: state.cash + action.payload }
      case 'REMOVE CASH':
        return { ...state, cash: state.cash - action.payload }
      default:
        return state
    }
  }