import { FETCHED_BATCHES, FETCHED_ONE_BATCH } from '../actions/batches/fetch'


export default (state = [], { type, payload } = {}) => {
  switch (type) {
    case FETCHED_BATCHES :
      return [ ...payload ]

    default :
      return state
    }
  }
