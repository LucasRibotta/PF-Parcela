import ParcelaModel from "../models/parcela"
import CondominioModel from '../models/condominio';

const createParcela = async (data:any) => {

    const nuevoParcela = new ParcelaModel(data);
        const parcelaCreado = await nuevoParcela.save();
    const [condominioId] = await CondominioModel.find({name:data.condominio})
        const id = condominioId._id;
        await CondominioModel.findByIdAndUpdate(
          id,
          { $push: { parcelas: parcelaCreado._id.valueOf().toString() } },
          { new: true }
        );
        return parcelaCreado;
}

export default createParcela;