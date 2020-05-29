# gqlTestServer_node_gqlyoga_prisma
サーバーを立ち上げる手順

1. 
```
prisma deploy
```
を実行

最初の選択でDemo server + MySQL database      Free development environment hosted in Prisma Cloud を選択。
その後の選択は何も入力せずenterキー押下。

2. 
```
prisma generate
```
を実行

3. 
```
node src/index.js
```
を実行
