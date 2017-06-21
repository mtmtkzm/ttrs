import * as state from './module/state';

import { FIELD_BLOCKS, N_HORIZONTAL, N_VERTICAL, CELL_SIZE } from './module/settings';

FIELD_BLOCKS.style.width = `${ N_HORIZONTAL * CELL_SIZE }px`;
FIELD_BLOCKS.style.height = `${ N_VERTICAL * CELL_SIZE }px`;

let cells = [];

// cellを生成・並べる
for (let i = 0; i < N_HORIZONTAL * N_VERTICAL; i++) {
  let cell = document.createElement('div');
  cell.style.width = `${ CELL_SIZE }px`;
  cell.style.height = `${ CELL_SIZE }px`;

  cells.push(cell);
  FIELD_BLOCKS.append(cell);
}

let n = N_HORIZONTAL; 
let x = state.get('blockX'); // ブロック左上マスの x座標
let y = state.get('blockY'); // ブロック左上マスの y座標

let BLOCK_ARRANGEMENT = {
  L: [(y+0)*n+x, (y+1)*n+x, (y+2)*n+x, (y+3)*n+x, (y+3)*n+x+1, (y+3)*n+x+2],
  I: [(y+0)*n+x, (y+1)*n+x, (y+2)*n+x, (y+3)*n+x],
  G: [(y+0)*n+x, (y+0)*n+x+1, (y+0)*n+x+2, (y+1)*n+x, (y+2)*n+x, (y+2)*n+x+2, (y+3)*n+x, (y+3)*n+x+1, (y+3)*n+x+2]
};


function createBlock (type) {

  // 今アクティブなのがどの種類のブロックかを見る
  state.currentType = type;

  // 生成するブロックの配列を定義
  state.blockType = BLOCK_ARRANGEMENT[type];

  // アクティブなものにクラスをあてる（色ぬり）
  updateField();
}

function updateField() {
  for (let i=0; i<state.get('blockType').length; i++) {

    let n = state.get('blockType')[i];

    if (n < 0 || N_HORIZONTAL*N_VERTICAL < n) {} 
    else {
      // 配列の範囲内の時（= 0 ~ cells.length）
      cells[state.get('blockType')[i]].classList.add(state.get('currentType'));
    }
  }
}

createBlock('L');
gravity();

function gravity () {
  setInterval(() => {
    console.log('a');
  }, 1000);
}