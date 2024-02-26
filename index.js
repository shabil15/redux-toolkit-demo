const store = require('./app/store')

const cakeActions = require('./app/features/cake/cakeSlice').cakeActions
const icecreamActions = require('./app/features/icecream/icecreamSlice').icecreamActions

console.log("initial State ",store.getState())

const unsubscribe = store.subscribe(()=>{
  console.log('updated state',store.getState());
})


store.dispatch(cakeActions.ordered())
store.dispatch(cakeActions.ordered())
store.dispatch(cakeActions.restocked(3))
store.dispatch(icecreamActions.ordered())
store.dispatch(icecreamActions.ordered())
store.dispatch(icecreamActions.ordered())

store.dispatch(icecreamActions.restocked(3))
unsubscribe()