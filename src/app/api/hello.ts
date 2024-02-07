// Import NextApiRequest and NextApiResponse from 'next'
import type { NextApiRequest, NextApiResponse } from 'next';

interface HelloResponse {
    content: string
}

// Define a handler for our route
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {

    if ('GET' === req.method) {
        const responseBody: HelloResponse = {
            content: "Success!"
        }
        return res.status(200).send(responseBody);
    } else {
        return res.status(405).send('Method Not Allowed');
    }
}