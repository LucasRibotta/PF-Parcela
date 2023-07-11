import User from "../models/user";

const deleteUser = async (id: string) => {
    const user = await User.findByIdAndRemove(id)

    return user;
}

export default deleteUser
