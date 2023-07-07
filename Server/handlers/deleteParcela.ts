import ParcelaModel from '../models/parcela'; 

const deletedParce = async (id: string) => {
    const parcela = await ParcelaModel.findByIdAndUpdate(id, { deleted: true }, { new: true });
  
    return parcela;
  }

export default deletedParce;