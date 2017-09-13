## Running site locally

1. Clone repository
2. [Install Yarn](https://yarnpkg.com/en/docs/install)
3. Install dependencies via `yarn` command
4. Start development server via `yarn dev` command

## Make build

1. Start build via `yarn build` command
2. Start server via `yarn start` command

## Deploy

1. Start build via `yarn deploy` command
2. Enjoy

## Nginx config
```
  http {

  ##
  # Basic Settings
  ##

  sendfile on;
  tcp_nopush on;
  tcp_nodelay on;
  keepalive_timeout 65;
  types_hash_max_size 2048;
  # server_tokens off;

  # server_names_hash_bucket_size 64;
  # server_name_in_redirect off;

  include /etc/nginx/mime.types;
  default_type application/octet-stream;
  server {
    listen 80;
    rewrite_log on;
    location / {
      proxy_pass http://127.0.0.1:8000$request_uri;
      proxy_http_version 1.1;
      proxy_set_header Upgrade $http_upgrade;
      proxy_set_header Connection "upgrade";
      proxy_set_header Host $host;
      rewrite ^/(([^/]+/)*)index\.html?$ https://keenethics.com/$1 redirect;
      rewrite ^/(([^/]+/)*)index\.php?$ https://keenethics.com/$1 redirect;
      rewrite ^/(([^/]+/)*)default\.html?$ https://keenethics.com/$1 redirect;
      rewrite ^/(.*)/$ /$1 permanent;
    }
  }
  ##
  # SSL Settings
  ##

  ssl_protocols TLSv1 TLSv1.1 TLSv1.2; # Dropping SSLv3, ref: POODLE
  ssl_prefer_server_ciphers on;

  ##
  # Logging Settings
  ##

  access_log /var/log/nginx/access.log;
  error_log /var/log/nginx/error.log;

  ##
  # Gzip Settings
  ##

  gzip on;
  gzip_disable "msie6";
  gzip_vary on;
  gzip_proxied any;
  gzip_comp_level 6;
  gzip_http_version 1.1;
  gzip_min_length 256;
  gzip_types text/plain text/css application/json application/x-javascript text/xml application/xml application/xml+rss text/javascript application/javascript application/vnd.ms-fontobject application/x-font-ttf font/opentype image/svg+xml image/x-icon;

  ##
  # Virtual Host Configs
  ##

  include /etc/nginx/conf.d/*.conf;
  include /etc/nginx/sites-enabled/*;
}
```
