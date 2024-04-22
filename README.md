# sampleについて
frontend側 Vue3, tailwind css, pinia, vue-router, vueuse, nginxを使用してます。
backend側 NestJS, Prisma, Swagger を利用しています。
その他 Docker

## 環境構築について
```
./$ git clone https://github.com/hitoshi555/sample.git
docker-compose up -d
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




