import { ParsedQs } from 'qs';
import CondominioModel from '../models/condominio';
import ParcelaModedel from "../models/parcela"

const searchCondominios = async (name: string | string[] | ParsedQs | ParsedQs[] | undefined) => { 
     
    if (!name) {
          const parcelasData = await ParcelaModedel.find() ;     
          return parcelasData
      } else {
        
          const [parcelasData] = await CondominioModel.find({ name: name });
          
          const parcelasIds = parcelasData.parcelas.map(parcela => parcela.toString());
       return parcelasIds
      } 
    }   

export default searchCondominios;