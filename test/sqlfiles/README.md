# テスト用SQLファイル・SQL実行確認

## 概要

こちらは、[SQLパーサー](https://github.com/taozhi8833998/node-sql-parser)のためのテスト用SQLファイルと、そのSQLファイルを実行するための簡易な環境構築（Docker）を格納している。
なお、「DDL」フォルダのテスト用SQLファイルは、主にネットから取得しているためViewやProcedureが混じっている可能性がある。そのため、状況に応じてテスト用SQLファイルを修正する必要がある。

## 対応データベース管理システムについて

現時点、以下の主要なデータベース管理システムに絞ってテスト用SQLファイルと環境構築（Docker）を格納する予定である。
なお、上記のSQLパーサーの対応データベース管理システムは[こちら](https://github.com/taozhi8833998/node-sql-parser?tab=readme-ov-file#supported-database-sql-syntax)。

- BigQuery
- MariaDB
- MySQL
- PostgresQL
- Sqlite
