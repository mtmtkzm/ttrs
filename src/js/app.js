export const FIELD_BLOCKS = document.querySelector('.field-block');
export const N_HORIZONTAL = 12; // 横の数
export const N_VERTICAL = 16; // 縦の数
export const CELL_SIZE = 50; // px

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
let b = -4*n;

let BLOCK_ARRANGEMENT = {
  L: [b, b+n, b+(2*n), b+(3*n), b+(3*n)+1, b+(3*n)+2],
  I: [b, b+n, b+(2*n), b+(3*n)],
  G: [b, b+1, b+2, b+n, b+(2*n), b+(2*n)+2, b+(3*n), b+(3*n)+1, b+(3*n)+2]
};

function createBlock (type) {
  let blockType = BLOCK_ARRANGEMENT[type];

  for (let i=0; i<blockType.length; i++) {
    let n = blockType[i];
    if (n < 0 || N_HORIZONTAL*N_VERTICAL < n) {
      // 配列の範囲外の時
    } else {
      // 配列の範囲内の時（= 0 ~ cells.length）
      cells[blockType[i]].classList.add(type);
    }
  }
}

createBlock('L');
