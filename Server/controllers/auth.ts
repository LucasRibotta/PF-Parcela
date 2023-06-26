import { Request, Response } from "express"
import CondominioModel from '../models/condominio';
import ParcelaModel from '../models/parcela'; 

export const condominio = async (req: Request, res: Response) => {
    const {name} = req.query
   
    
    if (!name) {
      try {
        const condominioData = await CondominioModel.find(); // Ejecuta la consulta a la base de datos para obtener los condominios
    
        res.status(200).json({condominioData}); // Envía los datos de los condominios como respuesta
      } catch (error) {
        console.error(error);
        res.status(500).send('Error al obtener los condominios de la base de datos.');
      }  
    } else {
         try { 
             const condominioName = await CondominioModel.find({name:name}); // Ejecuta la consulta a la base de datos para obtener los condominios
        
             res.status(200).json({condominioName}); // Envía los datos de los condominios como respuesta
           } catch (error) {
             console.error(error);
             res.status(500).send('Error al obtener los condominios de la base de datos.');
           } 
        
     }

 } 

export const parcela  = (req: Request, res: Response) => {
   const id = req.params.id
    res.send(`parcela con el id: ${id}`)
} 
export const createParcela = async (req: Request, res: Response) => {
    try {
        const { id, lote, area, price, services, image } = req.body;
    
        console.log(req.body);
    
        if (!id || !lote || !area || !price || !services || !image) {
          throw new Error('El campo name e id son requeridos.');
        }
    
        const data = {
          id,
          lote,
          area,
          price,
          services,
          image

          
        };
    
        const nuevoParcela = new ParcelaModel(data);
        const parcelaCreado = await nuevoParcela.save();
    
        res.status(201).json(parcelaCreado);
      } catch (error) {
        console.error(error);
        res.status(500).send('Error al crear el condominio en la base de datos.');
      }
  };

 
export const createCondominio = async (req: Request, res: Response) => {
    try {
        const { id, name, access } = req.body;
    
        console.log(req.body);
    
        if (!id || !name) {
          throw new Error('El campo name e id son requeridos.');
        }
    
        const data = {
          id,
          name,
          access
        };
    
        const nuevoCondominio = new CondominioModel(data);
        const condominioCreado = await nuevoCondominio.save();
    
        res.status(201).json(condominioCreado);
      } catch (error) {
        console.error(error);
        res.status(500).send('Error al crear el condominio en la base de datos.');
      }
  };