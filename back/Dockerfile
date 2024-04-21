# Node.js のバージョンを指定
FROM node:20-alpine

# アプリケーションディレクトリを設定
WORKDIR /usr/src/app

# アプリケーションの依存ファイルをインストール
COPY package*.json ./
RUN npm install
RUN npm i -g @nestjs/cli

# アプリケーションのソースをコピー
COPY . .

# アプリケーションがリッスンするポート番号を指定
EXPOSE 3000

# アプリケーションを起動
CMD ["npm", "run", "start:prod"]