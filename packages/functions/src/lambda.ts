import { ApiHandler } from "sst/node/api";
import fetch from 'node-fetch';
import https from 'https';

export const handler = ApiHandler(async (_evt) => {
  const httpsAgent = new https.Agent({
    rejectUnauthorized: false,
  });

  const rawQueryString = _evt.rawQueryString;

  const url = `https://developer.uspto.gov/ibd-api/v1/application/publications?${rawQueryString}`

  const response = await fetch(url, {
    method: 'GET',
    agent: httpsAgent,
  });
  const data = await response.json();

  return {
    statusCode: 200,
    body: JSON.stringify(data)
  };
});
