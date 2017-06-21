import { FIELD_BLOCKS, N_HORIZONTAL, N_VERTICAL, CELL_SIZE } from './settings';

let state = {
  currentType: '',  // 現在のブロックの種別(そのままクラス名になる)
  blockType: [],
  block: {
    X: (N_HORIZONTAL / 2),
    Y: 0
  }
};

export function get (path) {
  // pathを配列にする
  if (!Array.isArray(path)) path = path.split();

  let object = state;
  let index = 0;
  let length = path.length;

  while (object !== null && index < length) {
    object = object[path[index++]];
  }
  return object;
}

export function setBlockType (x, y) {
  console.log(x, y, blockType);
}

export function setCurrentType (value) {
  state.currentType = value;
}

export function setBlock (value) {
  state.currentType = value;
}
