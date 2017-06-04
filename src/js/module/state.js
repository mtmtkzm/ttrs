const state = {
  field: [],        // field squares
                    // 0: ブロックなし, 1: 未確定,  2: 確定
  blockType: '',
  gameover: false,  // gameover flag
  point: 0,         // 0 points
  timelimit: 60000      // 1 min
};

export function setField (i, block) {
  state.field[i] = block;

  // ここで再描画する
}

export function setBlockType(type) {
  state.blockType = type;
}

export function get (path) {
  // pathがStringだったら配列にする
  if (!Array.isArray(path)) path = path.split();

  // stateを直接書き換えないように
  let object = state;
  let index = 0;
  let length = path.length;

  while (object !== null && index < length) {
    object = object[path[index++]];
  }

  return object;
}
