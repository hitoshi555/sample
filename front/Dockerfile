# Node.js のバージョンを指定
FROM node:16-alpine

# アプリケーションディレクトリを設定
WORKDIR /app

# 依存ファイルをインストール
COPY package*.json ./
RUN npm install

# ソースコードをコピー
COPY . .

# アプリをビルド
RUN npm run build

# Nginx を使用して Vue.js アプリを提供
FROM nginx:alpine
COPY --from=0 /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]