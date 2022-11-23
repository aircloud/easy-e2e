import puppeteer from 'puppeteer'

async function main() {
  console.info('e2e begin')
  const browser = await puppeteer.launch({
    // @ts-ignore-error ignore attr error
    bindAddress: "0.0.0.0",
    defaultViewport: { height: 1000, width: 1440 },
    args: [
      "--no-sandbox",
      "--disable-setuid-sandbox",
      "--headless",
      "--disable-gpu",
      "--disable-dev-shm-usage",
      "--remote-debugging-port=9222",
      "--remote-debugging-address=0.0.0.0"
    ]
  });

  /* 用例部分我们可以通过独立的文件和配置来进行组织 */
  const page = await browser.newPage();
  await page.goto("http://niexiaotao.com/", {
    waitUntil: "networkidle2"
  });
  const firstHeader = await page.$eval('body > div.index-container > div.index-middle > div > div:nth-child(1) > div.post-info > a > h3', (element) => element.textContent)
  console.info('firstHeader:', firstHeader)
  /* 这里我们可以增加一些验证逻辑 */
  await page.screenshot({path: "/work/running_screenshot1.png"})

  await browser.close()
  console.info('e2e end')
}

main()