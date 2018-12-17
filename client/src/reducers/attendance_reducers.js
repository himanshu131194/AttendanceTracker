import {ADD_STUDENT, LIST_STUDENT} from '../actions/types';

export default function(state=[], action){
      switch (action.type) {
        case LIST_STUDENT:
          return [...action.payload];
          break;
        default:
          return state;
      }
}
