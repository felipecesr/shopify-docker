FROM node:14

RUN apt-get update && apt-get install -y \
    git curl python \
    && curl -s https://shopify.github.io/themekit/scripts/install.py | python

RUN npm install -g browser-sync

EXPOSE 3000
