import state from './module/state';
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
let x = state.blockX; // ブロック左上マスの x座標
let y = state.blockY; // ブロック左上マスの y座標

let BLOCK_ARRANGEMENT = {
  L: [(y+0)*n+x, (y+1)*n+x, (y+2)*n+x, (y+3)*n+x, (y+3)*n+x+1, (y+3)*n+x+2],
  I: [(y+0)*n+x, (y+1)*n+x, (y+2)*n+x, (y+3)*n+x],
  G: [(y+0)*n+x, (y+0)*n+x+1, (y+0)*n+x+2, (y+1)*n+x, (y+2)*n+x, (y+2)*n+x+2, (y+3)*n+x, (y+3)*n+x+1, (y+3)*n+x+2]
};

function createBlock (type) {
  state.currentType = type;
  state.blockType = BLOCK_ARRANGEMENT[type];

  updateField();
}

function updateField() {
  for (let i=0; i<state.blockType.length; i++) {
    let n = state.blockType[i];
    if (n < 0 || N_HORIZONTAL*N_VERTICAL < n) {
      // 配列の範囲外の時
    } else {
      // 配列の範囲内の時（= 0 ~ cells.length）
      cells[state.blockType[i]].classList.add(state.currentType);
    }
  }
}

createBlock('L');


function gravity () {
  
}