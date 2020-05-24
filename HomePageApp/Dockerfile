FROM node:alpine AS my-app-build
WORKDIR /app
COPY . .
RUN npm install && npm run build

# stage 2

FROM nginx:alpine
COPY --from=my-app-build /app/dist/sampleApp1 /usr/share/nginx/html
RUN cat "hello" > /usr/share/nginx/html/index.html
copy nginx.conf /etc/nginx/nginx.conf
EXPOSE 80