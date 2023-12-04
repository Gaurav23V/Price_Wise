import axios from "axios"
import * as cheerio from "cheerio"

export async function scrapeAmazonProduct(productUrl: string) {
  if (!productUrl) return;

  // BrightData proxy configuration

  // curl --proxy brd.superproxy.io:22225 --proxy-user brd-customer-hl_510fb312-zone-unblocker:2f8htxg5aqh1 -k https://lumtest.com/myip.json

  const username = String(process.env.BRIGHTDATA_USERNAME);
  const password = String(process.env.BRIGHTDATA_PASSWORD);
  const port = 22225;
  const session_id = (1000000 * Math.random()) | 0;

  const options = {
    auth: {
      username: `${username}-session-${session_id}`,
      password,
    },
    host: "brd.superproxy.io",
    port,
    rejectUnauthorized: false,
  };

  try {
    // Fetch the product page
    const response = await axios.get(productUrl, options)
    console.log(response.data)
  } catch (error: any) {
    console.log("Failed to scrape product: ", error.message);
  }
}
