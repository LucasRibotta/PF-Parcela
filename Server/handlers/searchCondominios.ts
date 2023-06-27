import CondominioModel from '../models/condominio';

const searchCondominios = async () => {    
    const condominiosData = await CondominioModel.find();
    return condominiosData
}

export default searchCondominios;