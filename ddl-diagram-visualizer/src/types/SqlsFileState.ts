/**
 * SQLファイル一覧情報
 *
 * @type fileobj - ファイルオブジェクト
 * @type filename - ファイル名
 * @type content - ファイル内容
 */
export type SqlsFileState = {
  filename: string;
  content: string;
};