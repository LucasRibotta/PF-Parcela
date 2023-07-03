import { z } from "zod";

export const validate = z.object({
    name: z.string().nonempty("El nombre es requerido"),
    lote: z.number().nullable(),
    area: z.number().nullable(),
    price: z.number().nullable(),
    location: z.string().nonempty("La ubicación es requerida"),
    description: z.string().nonempty("La descripción es requerida"),
    image: z.array(z.string()).min(1, "Al menos una imagen es requerida"),
  });
  
  