import { NextApiRequest, NextApiResponse } from 'next';

export type OwnerInfo = {
    fullname: string,
    position: string;

}

export default (req: NextApiRequest, res: NextApiResponse<OwnerInfo>) => {
    console.log(req.method);
    res.status(200).json({
        fullname: "Emmanuel Paul G. Moralde",
        position: "Junior Web Developer"
    });
}