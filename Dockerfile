FROM zenika/alpine-chrome:with-node

ENV PUPPETEER_SKIP_CHROMIUM_DOWNLOAD 1
ENV PUPPETEER_EXECUTABLE_PATH /usr/bin/chromium-browser
WORKDIR /usr/src/app

# RUN npm install pnpm -g
# RUN pnpm install

COPY --chown=chrome . ./

ENTRYPOINT ["tini", "--"]

CMD ["node", "/usr/src/app/dist/index"]
