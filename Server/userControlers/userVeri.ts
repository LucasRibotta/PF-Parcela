
import User from '../models/user'
import { Request, Response}  from 'express'

const userVeri = async (req: Request, res: Response) => {
    
    const {name, email} = req.body;
        
    let userVerify = await User.findOne({email})
    
    if(userVerify) {        
        return res.status(200).json(userVerify)
    }else return res.status(404).json({message: 'no existe usuario'})
}
export default userVeri
