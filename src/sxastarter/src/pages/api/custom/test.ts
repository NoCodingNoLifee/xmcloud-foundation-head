import type { NextApiRequest, NextApiResponse } from 'next';

const TestApi = async (req: NextApiRequest, res: NextApiResponse): Promise<void> => {
  return res.status(200).send("Custom Endpoint works");
};

export default TestApi;
