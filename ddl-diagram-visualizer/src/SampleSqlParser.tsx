import { Parser } from 'node-sql-parser';
import { useState } from 'react';
import Select, { SingleValue } from 'react-select';

interface OptionType {
  value: string;
  label: string;
}

const options: OptionType[] = [
  { value: 'MySQL', label: 'MySQL' },
  { value: 'PostgreSQL', label: 'PostgreSQL' },
  { value: 'MariaDB', label: 'MariaDB' },
  { value: 'BigQuery', label: 'BigQuery' },
  { value: 'Sqlite', label: 'Sqlite' },
];

export const SampleSqlParser = () => {
  const [database, setDatabase] = useState('MySQL');
  const enc = new TextDecoder('utf-8');

  // セレクトボックスの選択がトリガー
  // 別コンポーネントとして作成したほうがいいが、
  // その方法が複雑なため、ひとまずここに記載する
  // 参考サイト：https://qiita.com/Hitomi_Nagano/items/c00df24dc24e0329167d
  const onChange = (value: SingleValue<OptionType>) => {
    console.log(`onChange selected:`, value);
    // 読み込んだファイルの内容を状態に追加
    setDatabase(value?.value as string);
  };

  // ファイルアップロードをトリガーにしている
  // 別コンポーネントとして作成したほうがいいが、
  // その方法が複雑なため、ひとまずここに記載する
  // 参考URL：https://zenn.dev/dove/articles/1927889e1c4153
  function onDirInputChange(e: React.ChangeEvent<HTMLInputElement>) {
    // アップロードされたファイル一覧を取得
    const files = e.currentTarget.files;

    // ファイルがなければ終了
    if (!files || files?.length === 0) return;

    // 各ファイルを読み込んでAST解析をする
    for (const file of files) {
      // 非同期読み込みのためのインスタンス作成
      const reader = new FileReader();

      // 非同期読み込みが完了したら以下の関数が実行される
      reader.onloadend = (e) => {
        console.log(`「${file.name}」ファイル読み込みを完了しました`);
        // 読み込んだArrayBufferをデコードして解析関数実行
        const decodedContent = enc.decode(e.target?.result as ArrayBuffer);
        sqlparse(decodedContent);
      };

      // ファイルの内容をArrayBufferとして読み込む
      reader.readAsArrayBuffer(file);
    }
  }

  // getFile関数実行によって読み込みしたsqlを解析する
  // データベースのデフォルトはMySQLなので状況に応じて変更が必要
  function sqlparse(parseSql: string) {
    const parser = new Parser();

    // AST解析
    console.log('＝＝＝選択したデータベース＝＝＝');
    console.log(database);
    console.log('＝＝＝解析対象sql文＝＝＝');
    console.log(parseSql);
    console.log('＝＝＝＝＝＝＝＝＝＝＝＝');
    console.log('sql文からASTを解析します');
    try {
      const ast = parser.astify(parseSql, { database: database });
      console.log('AST解析に成功しました');
      console.log('＝＝＝ast解析結果＝＝＝');
      console.log(ast);
    } catch (error) {
      console.log('AST解析に失敗しました');
      console.error(error);
    }
    console.log('');
  }

  return (
    <div>
      <Select options={options} defaultValue={options[0]} onChange={onChange} />
      <br />
      <input
        id="inputfile"
        title="inputfile"
        type="file"
        accept=".sql"
        onChange={onDirInputChange}
        webkitdirectory="true"
      />
    </div>
  );
};
