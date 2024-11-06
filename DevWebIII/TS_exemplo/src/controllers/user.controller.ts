import { Request, Response} from 'express'
import { IUser } from './user.interface';

export const getUser = (_request: Request , response: Response) => {
    const user: IUser ={
        id: 1,
        name: 'João Jorge',
        age: 18
    };
    response.json(user);
};

