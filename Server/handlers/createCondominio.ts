import CondominioModel from '../models/condominio'; 

const createCondominio = async (data:any) => {
  
   const nuevoCondominio = new CondominioModel(data);
       const condominioCreado = await nuevoCondominio.save()
       return condominioCreado;
}

export default createCondominio;