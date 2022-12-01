// 1. Create a centralised place to store the application state & the logic.
// 2. The functions that handles the logic should be a pure functions.
// 3. Also create some functions to access the store inside any component in the application.
// 4. And the solution should be more declarative.

let store = {
  messageCount: 1,
  messages: [{}, {}],
  friendsList: [{}, {}]
};

function dispatch(action) { // { type: '', payload: {}, virualUpdate:true, ... }
  store = reducer(store, action);
}

function useSelector(fun) {
  return fun(store);
}




function reducer(store, action) {
  if (action.type === 'change_message_count') {
    return { ...store, messageCount: action.payload.messageCount };
  } else if (action.type === 'add_new_message') {
    return { ...store, messages: [...store.messages, { message: action.payload.message }], messageCount: store.messageCount  + 1}
  }
  // ...
  return store;
}
// component

const changeMessageCountAction = {
  type: 'change_message_count',
  payload: { messageCount : 5}
};
dispatch(changeMessageCountAction);

const addMessageAction = {
  type: 'change_message_count',
  payload: { message: 'hi!'}
};
dispatch(addMessageAction);


const messageCount = useSelector((store) => {
  return {
    messageCount: store.messageCount
  }
})
