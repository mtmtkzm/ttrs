import * as state from 'module/state';

import Field from 'module/field';
import Block from 'module/block';

let field, block;

// ゲーム開始前の準備処理
function initialize () {
  field = new Field();
  block = new Block();

  block.create('L');
  field.update();
}

initialize();