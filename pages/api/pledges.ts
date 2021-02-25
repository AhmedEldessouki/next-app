// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { pledges } from '../../data/pledges'

export default function helloAPI(req: unknown, res: { status: (arg0: number) => { (): unknown; new(): unknown; json: { (arg0: typeof pledges): void; new(): unknown; }; }; }) {
  res.status(200).json(pledges)
}
