import ParcelaModel from '../models/parcela'; 

const updateParcela = async (
    id: string,
    name: string,
    lote: number,
    area: number,
    price: number,
    location: string,
    image: string,
    description: string,
    condominio: string,
    status: string
  ) => {
    console.log(status)
    const parcelaActualizado = await ParcelaModel.findByIdAndUpdate(id, {
      name,
      lote,
      area,
      price,
      location,
      image,
      description,
      condominio,
      status
    }, { new: true });
  
    return parcelaActualizado;
  }

export default updateParcela;