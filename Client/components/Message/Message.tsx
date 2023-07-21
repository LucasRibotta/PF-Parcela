"use client"
import { useDeleteMessageMutation, useGetMessageQuery, useUpdateMessageMutation } from '@/redux/services/contactApi'
import React from 'react'
import Button from '../Button/Button';

const Message = () => {

    const dataMessage = useGetMessageQuery("");
    const { data, error, isLoading, isFetching } = useGetMessageQuery("");
    const [updateMessage] = useUpdateMessageMutation();
    const [deleteMessage] = useDeleteMessageMutation();

    const handleClick = async (id: string, status: boolean) => {
        await updateMessage({ id, data: { managed: status } })

        dataMessage.refetch();
    }

    const handleDelete = async (id: string) => {
        await deleteMessage({ id });

        dataMessage.refetch();
    }

    return (
        <>
            <div className='flex flex-col w-full bg-grey-400'>

                <div className='w-full bg-slate-300 grid grid-cols-1 gap-4'>
                    <h2>Pendientes</h2>
                    {
                        data?.map(el => el.managed === false && <div className='bg-white text-black p-10 ' key={el._id}>
                            <h3>Nombre y apellido: {el.firstName} {el.lastName}</h3>
                            <h3>Correo electronico: {el.email}</h3>
                            <h3>Numero telefonico: {el.phone}</h3>
                            <span>Asunto: {el.reason}</span>
                            <p>{el.message}</p>
                            <div onClick={() => handleClick(el._id, true)}>
                                <Button text={"Gestionado"} />
                            </div>
                            <div onClick={() => handleDelete(el._id)}>
                                <Button text={"Eliminar"} />
                            </div>

                        </div>)
                    }
                </div>
                <div className='w-full bg-slate-300 grid grid-cols-1 gap-4'>
                    <h2>Gestionados:</h2>
                    {
                        data?.map(el => el.managed === true && <div className='bg-white text-black p-10 ' key={el._id}>
                            <h3>Nombre y apellido: {el.firstName} {el.lastName}</h3>
                            <h3>Correo electronico: {el.email}</h3>
                            <h3>Numero telefonico: {el.phone}</h3>
                            <span>Asunto: {el.reason}</span>
                            <p>{el.message}</p>
                            <div onClick={() => handleClick(el._id, false)}>
                                <Button text={"Anular gestion"} />
                            </div>
                            <div onClick={() => handleDelete(el._id)}>
                                <Button text={"Eliminar"} />
                            </div>
                        </div>)
                    }
                </div>
            </div>
        </>
    )
}

export default Message
