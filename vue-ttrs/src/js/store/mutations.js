import * as types from './mutation-types'

export default {

  [types.UPDATE_FIELD] (state, arr) {
    state.field = arr;
  }

};
