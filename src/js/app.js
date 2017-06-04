import * as state from 'module/state.js';


const FIELD_BLOCKS = document.querySelector('.field-block');

const N_HORIZONTAL = 12; // 横の数
const N_VERTICAL = 16; // 縦の数
const CELL_SIZE = 50; // px

// ゲーム開始前の準備処理
function initialize () {
  createField();
}

function createField () {
  // ゲーム画面の大きさを定義
  FIELD_BLOCKS.style.width = `${ N_HORIZONTAL * CELL_SIZE }px`;
  FIELD_BLOCKS.style.height = `${ N_VERTICAL * CELL_SIZE }px`;

  // cellを生成・並べる
  for (let i = 0; i < N_HORIZONTAL * N_VERTICAL; i++) {
    let cell = document.createElement('div');
    cell.style.width = `${ CELL_SIZE }px`;
    cell.style.height = `${ CELL_SIZE }px`;
    FIELD_BLOCKS.append(cell);

    // フィールドの状態をリセットする。
    state.setField(i, 0);
  }

  console.log(state.get('field'));
}

initialize();