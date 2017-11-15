import { FETCHED_ONE_STUDENT, EVAL_STUDENT } from '../actions/students'
import { FETCHED_ONE_BATCH } from '../actions/batches'

export default (state = [], { type, payload } = {}) => {
  switch(type) {

     case FETCHED_ONE_BATCH:
        return [...payload.students]

      case EVAL_STUDENT :
        return state.map((student) => {
          if (student._id === payload._id) {
           return { ...payload }
         }
         return student
       })

     case FETCHED_ONE_STUDENT :
       const studentIds = state.map(s => s._id)
        if (studentIds.indexOf(payload._id) < 0) {
        return [{ ...payload }].concat(state)
   }

      return state.map((student) => {
        if (student._id === payload._id) {
        return { ...payload }
       }
         return student
     })

    default :
      return state
  }
}
