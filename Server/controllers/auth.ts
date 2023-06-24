import { Request, Response } from "express"
import CondominioModel from '../models/condominio'; 

export const condominio = async (req: Request, res: Response) => {
    const data = req.query
    console.log(data);
    
    if (!data) {
      try {
        const condominioData = await CondominioModel.find(); // Ejecuta la consulta a la base de datos para obtener los condominios
    
        res.status(200).json({condominioData}); // Envía los datos de los condominios como respuesta
      } catch (error) {
        console.error(error);
        res.status(500).send('Error al obtener los condominios de la base de datos.');
      }  
    } else {
        try {
            const condominioName = await CondominioModel.find({name:data}); // Ejecuta la consulta a la base de datos para obtener los condominios
        
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


export const createCondominio = (req: Request, res: Response) => {
    const data =   req.body
console.log(data);

     res.send(data)
 } 