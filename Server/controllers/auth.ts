import { Request, Response } from "express"
import CondominioModel from '../models/condominio';
import ParcelaModel from '../models/parcela'; 
import searchCondominios from "../handlers/searchCondominios";

// esta ruta trae por query( el nombre del condominio) sus parcelas  y sin query trae todas las parcelas existentes 
export const parcelas = async (req: Request, res: Response) => {
  
  try {
    const {name } = req.query
      const parcelas= await searchCondominios(name);     
      res.status(200).json(parcelas);
    } catch (error) {
      console.error(error);
      res.status(500).send('Error al obtener los condominios de la base de datos.');
    }

  } 


export const parcela  =async (req: Request, res: Response) => {
   const {id} = req.params
   try {
    if (!id ) {
      throw new Error('El campo  id no existe .');
    }
    console.log(id);
    
    const respo = await ParcelaModel.find({_id:id})
    console.log(respo);
    
    
    res.status(200).json({respo})
    
   } catch (error) {
    console.error(error);
    res.status(500).send('Error al obtener los parcela de la base de datos.');
   }
   
}

export const createParcela = async (req: Request, res: Response) => {
    try {
        const { id, name, lote, area, price, location, image, description } = req.body;
    
       
    
        if (!id || !name || !lote || !area || !price || !location || !image || !description) {
          throw new Error('El campo name e id son requeridos.');
        }
    
        const data = {
          id,
          name,
          lote,
          area,
          price,
          location,
          image,
          description
        };
    
        const nuevoParcela = new ParcelaModel(data);
        const parcelaCreado = await nuevoParcela.save();
        

        const parcelaId = await ParcelaModel.find({name:data.name})
        console.log(parcelaId);
        

        const parcelaActualizado = await CondominioModel.findByIdAndUpdate(
          parcelaId,
          { $push: { parcelas: parcelaCreado._id } },
          { new: true }
        );
        console.log(parcelaActualizado);
        
    
        res.status(201).json(parcelaCreado);
      } catch (error) {
        console.error(error);
        res.status(500).send('Error al crear la parcela en la base de datos.');
      }
  };

 
  export const createCondominio = async (req: Request, res: Response) => {
    try {
      const { id, name, location, access, parcelas, description, image } = req.body;
      console.log(req.body)
      if (!id || !name) {
        throw new Error('El campo name e id son requeridos.');
      }
  
      const data = {
        id,
        name,
        location,
        access,
        description,
        image,
        parcelas: parcelas // Inicializa el campo parcelas como un array vacío
      };
  
      const nuevoCondominio = new CondominioModel(data);
      const condominioCreado = await nuevoCondominio.save();
  
      res.status(201).json(condominioCreado);
    } catch (error) {
      console.error(error);
      res.status(500).send('Error al crear el condominio en la base de datos.');
    }
  };

export const updateParcela = async (req: Request, res: Response) => {
    try {
      const { id } = req.params;
      const { area, price, services, image, condominio } = req.body;  
  
      if (!id) {
        throw new Error('El campo id es requerido.');
      }
  
      const parcelaActualizado = await ParcelaModel.findByIdAndUpdate(id, {
        area,
        price,
        services,
        image,
        condominio
      }, { new: true })
  
      if (!parcelaActualizado) {
        return res.status(404).json({ error: 'El documento no existe.' });
      }
  
      return res.status(200).json(parcelaActualizado);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: 'Error al actualizar la parcela en la base de datos.' });
    }
  };

  

  export const deleteParcela = async (req: Request, res: Response) => {
    try {
      const { id } = req.params;
  
      const parcela = await ParcelaModel.findByIdAndUpdate(id, { deleted: true }, { new: true });
  
      if (!parcela) {
        return res.status(404).json({ error: 'Parcela no encontrada.' });
      }
  
      return res.status(200).json(parcela);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: 'Error al eliminar la parcela de la base de datos.' });
    }
  };