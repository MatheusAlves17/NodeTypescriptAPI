import { Request, Response } from "express"

interface ICidade{
    nome: String;
}

export const Create = (req: Request<{}, {}, ICidade>, res: Response) => {
    return res.send(`Create ${req.body.nome}`);
}