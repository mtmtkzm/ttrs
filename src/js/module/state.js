import { FIELD_BLOCKS, N_HORIZONTAL, N_VERTICAL, CELL_SIZE } from './settings';

export default {
  currentType: '',  // 現在のブロックの種別(そのままクラス名になる)
  blockX: (N_HORIZONTAL / 2) - 2,  // Blockの基準のx座標
  blockY: 0                      // Blockの基準のy座標
}

