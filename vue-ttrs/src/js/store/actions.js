import * as types from './mutation-types'

export const updateField = ({ commit }, arr) => {
  commit(types.UPDATE_FIELD, arr);
};
