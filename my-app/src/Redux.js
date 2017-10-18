To create app in redux or existing app in to redux there are four main steps:
1. create Store
It needs two things Reducer and state.

//syntax to crete Store
const store = createStore(reducer, "state"); //here current state is defined eg: peace

2. Reducer: this is an agent, which do whatever we define. it also require two things.
state - what is the current state 
and action - what action it need to Take.

//syntax
const reducer =function(state,action){
    if(action.type === "value"){    //value is the change in state eg: attack
        return action.payload   //here action we need to take if the state changes
    }
    return state;
}

3. subscribe: getting connected to base or activity or get the current state

//syntax
store.subscribe(() => {
    console.log("store in now", store.getState()); //get new state of store

})



4. dispatch: some action need to Take.

//syntax

store.dispatch({type: "value", payload: "action"})// here value = attack  and action is the changes we need to make according to change in state for eg: protect 