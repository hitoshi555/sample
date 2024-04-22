# sampleについて
frontend側 Vue3, tailwind css, pinia, vue-router, vueuse, nginxを使用してます。   
backend側 NestJS, Prisma, Swagger を利用しています。   
その他 Docker   
      　
## 環境構築について
```
./$ git clone https://github.com/hitoshi555/sample.git
docker-compose up -d　frontend, backend, dbを立ち上げる
```
      
## frontend側の開発について
```
./$ cd front
```
docker ps でbackend側のapiが立ち上がっているのを確認   
下記コードを実行することでswaggerを通してbackend api の型を共有する   
```
./front$ npm run codegen
```
./front/src/services/ApiClientRepository.ts で共有されたclient-apiを使ってapiの操作を行っている。   
* 開発時の backendのurlが localhost:3000 ではない場合 package.json を修正   
```
"scripts": {
  ~~~
  codegen": "openapi-generator-cli generate -i http://localhost:3000/api-json -g typescript-axios -o ./codegen/api-client"
  ~~~
}
```   
## backend側の開発について
```
./$ cd back
./back$ npm install -g @nestjs/cli       prismaを操作するためにインストール
./back$ npx prisma migrate dev           DBにテーブルを作成
./back$ npm seed　　　　　　　　　　　　　　classRoom データと teacher データを作成　
./back$ ts-node prisma/student-seed.ts   student データを作成
```

下記zennのように秘密鍵と公開鍵を作成し.envに張り付ける   
[https://zenn.dev/uttk/articles/9095a28be1bf5d](https://zenn.dev/uttk/articles/9095a28be1bf5d#jwt-%E3%81%AE%E9%8D%B5%E7%94%9F%E6%88%90%E3%81%AB%E3%81%A4%E3%81%84%E3%81%A6-%F0%9F%94%91)





