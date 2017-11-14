import { FETCHED_BATCHES, FETCHED_ONE_BATCH } from '../actions/batches/fetch'


export default (state = [], { type, payload } = {}) => {
  switch (type) {
    case FETCHED_BATCHES :
      return [ ...payload ]

      case FETCHED_ONE_BATCH :
      const batchIds = state.map(i => i._id)
      if (batchIds.indexOf(payload._id) < 0) {
        return [{ ...payload }].concat(state)
      }
      return state.map((batch) => {
        if (batch._id === payload._id) {
          return { ...payload }
        }
        return batch
      })

    default :
      return state
    }
  }
