import { Button, Upload } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import type { UploadProps } from 'antd';
import { useState } from 'react';
import { SqlsFileState } from '../../types/SqlsFileState';

export const DirectoryUpload = () => {
  const [sqlsfileList, setSqlsfileList] = useState<SqlsFileState[]>([]);

  const props: UploadProps = {
    // ディレクトリ選択を可能にする
    directory: true,

    // SQLファイルのみ受け付ける
    accept: '.sql',

    // デフォルトでは、アップロード時、ボタンの下にアップロードしたファイル名が出力されるが今回は使用しない
    showUploadList: false,

    // アップロード前にファイルを読み込み、内容を状態として保存する
    // 今回はサーバを使用しないため、アップロード処理は行わない
    beforeUpload: (file) => {
      // 非同期読み込みのためのインスタンス作成
      const reader = new FileReader();

      // 非同期読み込みが完了したらファイル名と内容を追加する
      reader.onloadend = (e) => {
        console.log(`「${file.name}」ファイル読み込みを完了しました`);
        // 読み込んだArrayBufferをデコードする
        const enc = new TextDecoder('utf-8');
        const decodedContent = enc.decode(e.target?.result as ArrayBuffer);
        console.log(decodedContent);

        // ファイル名とデコードした内容を追加する
        setSqlsfileList((preSqlsFileList) => [
          ...preSqlsFileList,
          {
            filename: file.name,
            content: decodedContent,
          },
        ]);
      };

      // ファイルの内容をArrayBufferとして読み込む
      reader.readAsArrayBuffer(file);
    },
  };

  return (
    <div>
      <Upload {...props}>
        <Button icon={<UploadOutlined />}>Upload Directory</Button>
      </Upload>
      {sqlsfileList.map((sqlsfile, i) => {
        return (
          <div key={i}>
            <p>＝＝＝「{sqlsfile.filename}」ファイル読込結果＝＝＝</p>
            <p>{sqlsfile.content}</p>
          </div>
        );
      })}
    </div>
  );
};
