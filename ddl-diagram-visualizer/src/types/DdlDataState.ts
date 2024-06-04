/**
 * DdlType の 列挙型
 *
 * @enum DDL_TABLE - テーブル
 * @enum VIEW_TABLE - ビュー
 */
export enum DdlTypeEnum {
  DDL_TABLE = 'DDL_TABLE',
  VIEW_TABLE = 'VIEW_TABLE',
}

/**
 * DdlDataの状態
 *
 * @type tableName - テーブル名
 * @type attributeList - 属性リスト
 * @type ddlType - DDLの種類
 * @type style - スタイル情報
 */
export type DdlDataState = {
  tableName: string;
  attributeList: AttributeState[];
  ddlType: DdlTypeEnum;
  style: StyleState;
};

/**
 * DDLの属性情報
 *
 * @type attributeName - 属性名
 * @type attributeType - 属性の型
 * @type isPrimaryKey - 主キーかどうか
 * @type isNotNull - NULL制約
 * @type isUnique - ユニーク制約
 * @type isAutoIncrement - オートインクリメント
 * @type isUnsigned - 符号なし
 * @type defaultValue - デフォルト値
 * @type comment - コメント
 */
export type AttributeState = {
  attributeName: string;
  attributeType: string;
  isPrimaryKey?: boolean;
  isNotNull?: boolean;
  isUnique?: boolean;
  isAutoIncrement?: boolean;
  isUnsigned?: boolean;
  defaultValue?: string;
  comment?: string;
};

/**
 * テーブルノードのスタイル情報
 *
 * @type width - 幅
 * @type height - 高さ
 * @type backgroundColor - 背景色
 */
export type StyleState = {
  width: number;
  height: number;
  backgroundColor: string;
};
