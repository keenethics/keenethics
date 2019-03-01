Author: Oleh Zymnytskiy
Title: Sharing Experiences: From Meteor App to HTTP/2
Subtitle: Sharing Experiences: From Meteor App to HTTP/2 - Keenethics Blog
Meta title: Sharing Experiences: From Meteor App to HTTP/2 - Keenethics Blog
Meta description: Did You Hear About HTTP/2? What Do You Know About Its Benefits? Read on Keenethics Corporate Blog!
Preview image: https://cdn-images-1.medium.com/max/800/1*k_Q-w8RE2ZhEKbyKVZas0g.png

![HTTP2](https://cdn-images-1.medium.com/max/800/1*k_Q-w8RE2ZhEKbyKVZas0g.png)

Did you hear about HTTP/2? What do you know about its benefits?

I don’t want to quote Wikipedia or RFC and will just say that it’s a powerful turbocharger for your website that increases loading speed. And who doesn’t want his website to load fast?

To setup HTTP/2 on your website you’d need:

1. Nginx — fast and useful web server that has HTTP/2 support;
2. Letsencrypt to generate TSL certificate that is required for HTTP/2.

So, let’s start.

## Install Nginx

Nginx supports HTTP/2 starting with 1.9.5, but some distributions have older versions in official repositories. To install newer version you can visit Nginx website and select method that works best for you.

If you are using Ubuntu 14.04, you can install nginx from official ppa:

`add-apt-repository ppa:nginx/stable
apt-get update
apt-get install nginx
`

## Install Letsencrypt and Generate Certificate

Clone Letsencrypt repo as a first step.

`git clone https://github.com/letsencrypt/letsencrypt /opt/letsencrypt`

Then make a temporary Nginx configuration for getting a certificate.

`server {
  listen 80;
  listen [::]:80 ipv6only=on;
  server_name example.com; # your domain
  root /usr/share/nginx/html;
  location ~ /.well-known { # needed for Letsencrypt
    allow all;
  }
}`

Letsencrypt will place files in .well-known folder to check your owning of domain so you have to allow their service to get those files. To apply any changes in Nginx configurations you must restart it:

`nginx -s reload`

Then you can generate certificates.

`/opt/letsecrypt/letsencrypt-auto certonly -a webroot --webroot-path=/usr/share/nginx/html -d example.com`

You probably understood you have to replace example.com with your domain. You can specify more than one domain/subdomain by adding additional -d arguments:

`/opt/letsecrypt/letsencrypt-auto certonly -a webroot --webroot-path=/usr/share/nginx/html -d example.com -d www.example.com
`
This command will create folder in /etc/letsencrypt/ that will contain certificate (fullchain.pem) and private key (privkey.pem).

## Redeploy Meteor Application

If your application is using port 80 you have to change it by changing value of PORT enviroment variable. For example I used mup and changed it in env section of mup.json.

## Setup Nginx

This is example of nginx server configuration. HTTP server just redirects user to HTTPS, that has HTTP/2 support. Value of ssl_ciphers property, is very important since it’s optimal for many browsers.

`server {
  listen 80;
  listen [::]:80 ipv6only=on;
  server_name example.com; # your domain
  return 301 https://$host$request_uri; # just redirect to https
}
server {
  listen 443 ssl http2; #enable HTTP2
  server_name example.com;
  root /usr/share/nginx/html;
  ssl_certificate /etc/letsencrypt/live/example.com/fullchain.pem;
  ssl_certificate_key /etc/letsencrypt/live/example.com/privkey.pem;
  location / {
    proxy_pass http://127.0.0.1:8000$request_uri;
  }
  ssl_session_timeout 1h;
  ssl_session_cache shared:SSL:16m;
  ssl_stapling on;
  ssl_stapling_verify on;
  resolver 8.8.4.4 8.8.8.8 valid=300s;
  resolver_timeout 10s;
  ssl_protocols TLSv1 TLSv1.1 TLSv1.2;
  ssl_ciphers ‘ECDHE-RSA-AES128-GCM-SHA256:ECDHE-ECDSA-AES128-GCM-SHA256:ECDHE-RSA-AES256-GCM-SHA384:ECDHE-ECDSA-AES256-GCM-SHA384:DHE-RSA-AES128-GCM-SHA256:DHE-DSS-AES128-GCM-SHA256:kEDH+AESGCM:ECDHE-RSA-AES128-SHA256:ECDHE-ECDSA-AES128-SHA256:ECDHE-RSA-AES128-SHA:ECDHE-ECDSA-AES128-SHA:ECDHE-RSA-AES256-SHA384:ECDHE-ECDSA-AES256-SHA384:ECDHE-RSA-AES256-SHA:ECDHE-ECDSA-AES256-SHA:DHE-RSA-AES128-SHA256:DHE-RSA-AES128-SHA:DHE-DSS-AES128-SHA256:DHE-RSA-AES256-SHA256:DHE-DSS-AES256-SHA:DHE-RSA-AES256-SHA:AES128-GCM-SHA256:AES256-GCM-SHA384:AES128-SHA256:AES256-SHA256:AES128-SHA:AES256-SHA:AES:DES-CBC3-SHA:!RC4:!aNULL:!eNULL:!MD5:!EXPORT:!EXP:!LOW:!SEED:!CAMELLIA:!IDEA:!PSK:!SRP:!SSLv:!aECDH:!EDH-DSS-DES-CBC3-SHA:!EDH-RSA-DES-CBC3-SHA:!KRB5-DES-CBC3-SHA’;
  ssl_prefer_server_ciphers on;
}
`

Value of proxy_pass must be address of your meteor application plus $request_uri.

Restart Nginx again to apply last changes.

`nginx -s reload`

If you don’t get any errors — congratulations, your website just got HTTP/2 support.

## Static Content

Now nginx is proxying all th requests to our meteor application. But there’s one more thing to improve. Meteor isn’t that good in serving static content (compiled scripts and styles, images and fonts) and we could improve website performance even more by using nginx for it!

I think we shouldn’t miss that. :)

To do it we must setup special locations in nginx.conf before root location:

`location ~ ^/(images|fonts)/.*.(png|jpg|svg|jpeg|ttf|otf|woff|woff2|eot)$ {
  root /opt/yoursitedir/app/programs/web.browser/app;
  access_log off;
  expires max;
}
location ~ \.(css|js|json|html|ttf|otf|woff|woff2|eot)$ {
  root /opt/yoursitedir/app/programs/web.browser;
  access_log off;
  expires max;
}
`

In builded meteor application we have compiled js and css in web.browser/ folder; fonts and other public data is in web.browser/app. You can disable access log for static data and set maximum expires time for cache of these.

## Websockets

By default nginx doesn’t proxy websockets. But you can change it. Just add manually some headers to request of proxy:

`location / {
  proxy_pass http://127.0.0.1:8000$request_uri;
  proxy_http_version 1.1;
  proxy_set_header Upgrade $http_upgrade;
  proxy_set_header Connection "upgrade";
  proxy_set_header Host $host;
}
`

## Results

Our site’s download time has decreased from 411ms to 123ms for primary content (main html, js and css) and from 7s to 5s for secondary content added by JavaScript. This result may be improved if use the server-side rendering.
