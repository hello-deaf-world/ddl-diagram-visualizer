# Dockerコンテナ上でのフロントエンド開発の仕方

### 構成
```
├ {プロジェクト名(リポジトリ名)}/
    ├ docker-compose.yml
    ├ .env
    ├ docker/
        ├ dev/
            ├ Dockerfile
        ├ (prd/)
            ├ (Dockerfile)
    ├ dev/
        ├ [ビルドが必要なソースの開発する場所]
    ├ (prd/)
        ├ [本番サーバのディレクトリ構成を倣って管理する場所]
```

### Dockerコンテナ`dev`の使い方
1. DockerをPCにインストールしてない人は下記を参考にインストールする．
    - [Windows(村山作成)](https://docs.google.com/document/d/1Da619B97SEhid4y1OxsUhr4kOfouElfsJ_2O0jr1-x0/edit)
    - Mac(Docker for Macインストールだけで普通にターミナルからいけるはず)
1. `{プロジェクト名(リポジトリ名)}/.env`の下記設定を必要あれば変更
    - `SHARED_WORKSPACE_HOST_DEV`
        - コンテナ`dev`用のコンテナがマウントするホスト側のディレクトリ．
        - 基本的に変更しないこと．
    - `SHARED_WORKSPACE_CONTAINER_DEV`
        - コンテナ`dev`用のマウントするコンテナ側のディレクトリ．
        - 基本的に変更しないこと．
    - `APPNAME_DEV`
        - コンテナ`dev`用のPJまたはアプリ名．
        - Dockerイメージ名やコンテナ名にも反映される．
    - `NODE_VERSION_DEV`
        - NodeJSのバージョン
        - 基本的にStable版に合わせたい
1. 下記コマンドでコンテナ起動し，コンテナ(のターミナル)に入る<span id="docker-compose-up"></span>
    ```
    cd {プロジェクト名(リポジトリ名)}/
    docker-compose up -d
    docker exec -it {APPNAME} bash
    ```
1. NodeJSのコマンドの動作確認
    ```
    node --version
    npm --version
    npx --version
    ```
    - localhostでのViteのテストサーバの実行例下記．
        ```
        npm run dev -- --host 0.0.0.0 --port 8001
        ```
- コンテナ停止は下記コマンド
    ```
    docker-compose stop
    ```
- コンテナ再始動は下記コマンド
    ```
    docker-compose start
    ```
    - ただしコンテナに必要なnetworkやvolumeが削除されたなどすると起動できないので，[`docker-compose up -d`](#docker-compose-up)を再度やる必要あり．  
    この時はDB系コンテナのデータも初期化される．
- コンテナ削除は下記コマンド
    ```
    docker-compose down
    docker rmi {APPNAME}
    ```
    - Dockerコンテナの削除が難しい場合はdockerコマンドで個別に削除する．
        ```
        docker rm {コンテナ名|コンテナID}
        ```
