import * as state from './state';
import {FIELD_BLOCKS, N_HORIZONTAL, N_VERTICAL, CELL_SIZE} from '../settings';

export default class {
  constructor () {
    this.arrangement = {
      'L': [
        [1],
        [1],
        [1],
        [1,1,1]
      ],
      'I': [
        [1],
        [1],
        [1],
        [1]
      ],
      'G': [
        [1,1,1],
        [1],
        [1,0,1],
        [1,1,1]
      ]
    };
  }

  create (type) {
    state.setBlockType(type);

    let base = N_HORIZONTAL/2 - 1;
    for (let i=0; i<this.arrangement[type].length; i++) {
      for (let j = 0; j < this.arrangement[type][i].length; j++) {
        state.setField(i*N_HORIZONTAL + j + base, 1);
      }
    }
  }

  isMovable(dir) {
    // 今のブロックが dir 方向に動かせるかを判定
    // dir: 'bottom', 'right', 'left'がくる。
    return true;
  };

  move (dir) {
    if (this.isMovable(dir)) {

    }
  }

  isRotatable (dir) {
    return true;
  }

  rotate (dir) {
    if (this.isRotatable(dir)) {

    }
  }
}