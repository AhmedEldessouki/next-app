// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function helloAPI(req: unknown, res: { status: (arg0: number) => { (): unknown; new(): unknown; json: { (arg0: { name: string; }): void; new(): unknown; }; }; }) {
  res.status(200).json({ name: 'John Doe' })
}
