import { Request, Response } from "express"
import CondominioModel from '../models/condominio';
import ParcelaModel  from '../models/parcela'; 
import searchParcelas from "../handlers/searchParcelas";
import idParcela from "../handlers/idParcela"
import functionCreate from "../handlers/createParcela"
import createCondo from "../handlers/createCondominio"
import updateParce from "../handlers/updateParcela"
import deletedParce from "../handlers/deleteParcela";

// esta ruta trae por query( el nombre del condominio) sus parcelas  y sin query trae todas las parcelas existentes 
export const parcelas = async (req: Request, res: Response) => {
  
  try {
    const {name } = req.query
      const parcelas= await searchParcelas(name);     
      res.status(200).json(parcelas);
    } catch (error) {
      console.error(error);
      res.status(500).send('Error al obtener los condominios de la base de datos.');
    }

  } 

// parcela por id
export const parcela  =async (req: Request, res: Response) => {
   const {id} = req.params
   try {
    if (!id ) {
      throw new Error('El campo  id no existe .');
    }
    const parcela = await idParcela(id)
    res.status(200).json({parcela})      
   } catch (error) {
    console.error(error);
    res.status(500).send('Error al obtener los parcela de la base de datos.');
   }
   
}

// Crea parcela y guarda en el condominio el id de la parcela 
export const createParcela = async (req: Request, res: Response) => {
    try {
      const {name, lote, area, price, location, image, description, condominio } = req.body;
      
      if ( !name || !lote || !area || !price || !location || !image || !description || !condominio) {
        throw new Error('El campo name e id son requeridos.');
      }
     
        const data = {
          name,
          lote,
          area,
          price,
          location,
          image,
          description,
          condominio
        };
    
      const parcelaCreada =await functionCreate(data);    
        res.status(201).json(parcelaCreada);
      } catch (error) {
        console.error(error);
        res.status(500).send('Error al crear la parcela en la base de datos.');
      }
  };

  //Crear condominio
  export const createCondominio = async (req: Request, res: Response) => {
    try { 
      const { id,  name, location, access, parcelas, description, image } = req.body;
      console.log(req.body)
      if ( !name|| !location|| !access|| !parcelas || !description||! image) {
        throw new Error('El campo name e id son requeridos.');
      }
  
      const data = {
        id,
        name,
        location,
        access,
        description,
        image,
        parcelas
      };
  
      const condominioCreado = await createCondo(data);
      res.status(201).json(condominioCreado);
    } catch (error) {
      console.error(error);
      res.status(500).send('Error al crear el condominio en la base de datos.');
    }
  };

export const updateParcela = async (req: Request, res: Response) => {
    try {
      const { id } = req.params;
      const { name, lote, area, price, location, image, condominio, description} = req.body;  
  
      if (!id) {
        throw new Error('El campo id es requerido.');
      }
      const data = {id,name, lote, area, price, location, image, description, condominio}
      
      const parcelaActualizado = await updateParce(id, name, lote, area, price, location, image, condominio, description)
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

      const borrado = await deletedParce(id)
      if (!borrado) {
        return res.status(404).json({ error: 'Parcela no encontrada.' });
      }
  
      return res.status(200).json(borrado);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: 'Error al eliminar la parcela de la base de datos.' });
    }
  };