import { Request, Response} from 'express'
import { IUser } from './user.interface';

export const getUser = (request: Request , response: Response) => {

    //obtenha o id de dentro da request via console.log
    //console.log(request.params.id);

    const {id} = request.params

    const user: IUser ={
        id: Number(id),
        name: 'João Jorge',
        age: 18
    };
    response.json(user);
};

