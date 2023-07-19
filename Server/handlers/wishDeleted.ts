import user from "../models/user";

const wishDeleted = async (id: string, idParcel: string) => {
  let infoUser = await user.findById(id)
  if(infoUser){
    infoUser.wishes = infoUser.wishes?.filter(el => el._id !== idParcel);
    await infoUser.save();
    return true;
  }
  return false;
};

export default wishDeleted;