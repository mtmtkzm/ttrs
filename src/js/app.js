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

let b = 0;
let w = N_HORIZONTAL;

let BLOCK_ARRANGEMENT = {
  L: [b, b+w, b+(2*w), b+(3*w), b+(3*w)+1, b+(3*w)+2],
  I: [b, b+w, b+(2*w), b+(3*w)],
  G: [b, b+1, b+2, b+w, b+(2*w), b+(2*w)+2, b+(3*w), b+(3*w)+1, b+(3*w)+2]
};

console.log(BLOCK_ARRANGEMENT);

function createBlock (type) {
  let blockType = BLOCK_ARRANGEMENT[type];
  for (let i=0; i<BLOCK_ARRANGEMENT.L.length; i++) {
    cells[blockType[i]].classList.add(type);
  }
}

createBlock('L');
