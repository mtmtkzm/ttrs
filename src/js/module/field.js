import * as state from './state';
import {FIELD_BLOCKS, N_HORIZONTAL, N_VERTICAL, CELL_SIZE} from '../settings';

export default class {
  constructor () {
    // ゲーム画面の大きさを定義
    FIELD_BLOCKS.style.width = `${ N_HORIZONTAL * CELL_SIZE }px`;
    FIELD_BLOCKS.style.height = `${ N_VERTICAL * CELL_SIZE }px`;

    this.cells = [];
    // cellを生成・並べる
    for (let i = 0; i < N_HORIZONTAL * N_VERTICAL; i++) {
      let cell = document.createElement('div');
      cell.style.width = `${ CELL_SIZE }px`;
      cell.style.height = `${ CELL_SIZE }px`;
      this.cells.push(cell);
      FIELD_BLOCKS.append(cell);

      // フィールドの状態をリセットする。
      state.setField(i, 0);
    }
  }

  update () {
    let field = state.get('field');

    for (let i=0; i<field.length; i++) {
      if (field[i] === 1) {
        this.cells[i].classList.add(state.get('blockType'));
      }
    }
  }

}