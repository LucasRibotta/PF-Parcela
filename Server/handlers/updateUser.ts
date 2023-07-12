import user from "../models/user";
import bcrypt from "bcrypt"


const updateUser = async (
    id: string,
    name: string,
    lastname: string,
    phone: number,
    date: string,
    email: string,
    password: string,
    isAdmin: boolean,
    isCompany: boolean) => {

    if (password.length !== 60) {
        const newHashedPassword = bcrypt.hashSync(password, bcrypt.genSaltSync(10))
        const remaster = await user.findByIdAndUpdate(id, {
            name,
            lastname,
            phone,
            date,
            email,
            password: newHashedPassword,
            isAdmin,
            isCompany,
        }, { new: true });
        return remaster;
    } else {
        const remaster = await user.findByIdAndUpdate(id, {
            name,
            lastname,
            phone,
            date,
            email,
            password,
            isAdmin,
            isCompany,
        }, { new: true });
        return remaster;
    }



}

export default updateUser
