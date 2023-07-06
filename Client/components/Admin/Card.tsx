"use client"
import { useDeleteParcelaMutation } from "@/redux/services/parcelApi"
import Button from "../Button/Button"
import Swal from 'sweetalert2'
import { useAppDispatch } from "@/redux/hooks"
import Link from "next/link"

type Card = {
    name: string
    id: string
}


const Card = ({ name, id }: Card) => {

    const [deleteParcela] = useDeleteParcelaMutation()
    const dispatch = useAppDispatch();


    const deleteParcel = () => {
        Swal.fire({
            title: 'Deseas eliminar esta parcela?',
            text: "Esta eliminacion no se puede revertir",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Si, eliminalo',
            cancelButtonText: 'Cancelar'
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire(
                    'Eliminado',
                    'Tu parcela a sido eliminada',
                    'success'
                )
                deleteParcela({ id: id });
            }
        })
    }

    return (
        <>
            <div className="w-full flex justify-between m-2 bg-slate-50 p-4 rounded-lg">
                <h2>{name}</h2>
                <div className="flex gap-1">
                    <Link href={`/form/${id}`}>
                        <div className="[&>button]:rounded-md">
                            <Button text={"Editar"}></Button>
                        </div>
                    </Link>
                    <div className="[&>button]:rounded-md" onClick={deleteParcel}>
                        <Button text={"Eliminar"} />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Card
