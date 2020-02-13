import {fromJS} from 'immutable';

const defaultState = fromJS({
    modalVisible:false
});

export default (state=defaultState,action) => {
    if(action.type === 'show_modal'){
        console.log(action)
        return state.set('modalVisible',true)
    }
    return state
}
