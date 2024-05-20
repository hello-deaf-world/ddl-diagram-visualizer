import { Parser } from 'node-sql-parser';

export const SampleSqlPaser = () => {
  const parser = new Parser();
  const sql = `
    -- テーブルの作成
    CREATE TABLE \`Users\` (
      \`userId\` varchar(12),
      \`nameKanji\` varchar(34) COMMENT '名前(漢字)',
      \`nameKana\` varchar(50) COMMENT '名前(カナ)',
      \`dateOfBirth\` date COMMENT '生年月日',
      \`createdDate\` datetime(6),
      PRIMARY KEY (\`userId\`)
    ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COMMENT='ユーザテーブル';
    
    select * from Users;
    select userId from Users;
    select id, createdTime from Logs;
    SELECT s.id, p.name, s.price FROM sales s LEFT JOIN product p ON s.id = p.id;
    `;
  const { tableList, columnList } = parser.parse(sql, {
    database: 'MySQL',
  });

  const strTableList = JSON.stringify(tableList, null, 2);
  const strColumnList = JSON.stringify(columnList, null, 2);

  console.log(sql);
  console.log(strTableList);
  console.log(strColumnList);
  return (
    <div>
      <h3>解析対象SQL文</h3>
      <pre>{sql}</pre>

      <h3>テーブルリスト</h3>
      <pre>{strTableList}</pre>

      <h3>カラムリスト</h3>
      <pre>{strColumnList}</pre>
    </div>
  );
};
