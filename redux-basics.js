const redux = require('redux');
const createStore = redux.createStore;

const initialState = {
  counter: 0
};
// Reducer
const rootReducer = (state = initialState, action) => {
  if(action.type === 'INC_COUNTER') {
    return {
      counter: state.counter + 1,
    };
  }
  if(action.type === 'ADD_COUNTER') {
    return {
      counter: state.counter + action.value,
    };
  }
  return state;
};

// Store
const store = createStore(rootReducer);
console.log('state before->', store.getState());

// Subscription
store.subscribe(() => {
  console.log('[Subscription] new state ', store.getState())
});

// Dispatching action
store.dispatch({
  type: 'INC_COUNTER',
});
store.dispatch({
  type: 'ADD_COUNTER',
  value: 5
});
console.log('state after->', store.getState());
