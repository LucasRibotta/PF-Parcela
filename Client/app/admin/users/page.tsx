
"use client"
import { useAppSession } from '@/app/hook';
import Button from '@/components/Button/Button';
import { useDeleteUserMutation, useGetUsersQuery, useUpdateUserMutation } from '@/redux/services/userApi';
import React from 'react'

const Users = () => {
  const users = useGetUsersQuery(null);
  const { data, isLoading } = useGetUsersQuery(null);
  const { user, session } = useAppSession();
  const [deleteUser] = useDeleteUserMutation();
  const [updateUser] = useUpdateUserMutation();

  const handleDeleteUser = async (id: string) => {
    await deleteUser({ id });
    users.refetch();
  };

  const handleUpdateAdmin = async (
    id: string,
    name: string,
    lastname: string,
    phone: number,
    date: string,
    email: string,
    password: string,
    isAdmin: boolean,
    isCompany: boolean) => {
    const data = { name, lastname, phone, date, email, password, isAdmin: !isAdmin, isCompany }
    await updateUser({ id, data });
    users.refetch();
  }
  const handleUpdateCompany = async (
    id: string,
    name: string,
    lastname: string,
    phone: number,
    date: string,
    email: string,
    password: string,
    isAdmin: boolean,
    isCompany: boolean) => {
    const data = { name, lastname, phone, date, email, password, isAdmin, isCompany: !isCompany }
    await updateUser({ id, data });
    users.refetch();
  }


  return (
    <>
      <div className='w-[80%]'>

        <div className='grid grid-cols-3 w-30 gap-2'>
          {
            data?.map(el => {
              return (
                <>
                  <div className='px-5 py-4 bg-gray-300 grid grid-cols-4 items-center rounded-lg' key={el._id}>
                    <div className='flex flex-col col-span-3 gap-4'>
                      <h2>Nombre: {el.name}</h2>
                      <p>correo: {el.email}</p>
                      <p>id: {el._id}</p>
                      <p>Admin: {el.isAdmin ? "administrador": "no admin"}</p>
                      <p>Corporativo: {el.isCompany ? "Corporativo": "no corporativo"}</p>
                    </div>
                    <div className='flex flex-col gap-4'>
                      <div onClick={() => handleDeleteUser(el._id)}>
                        <Button text="Eliminar" />
                      </div>
                      <div onClick={() => handleUpdateAdmin(el._id, el.name, el.lastname, el.phone, el.date, el.email, el.password, el.isAdmin, el.isCompany)}>
                        <Button text="Admin" />
                      </div>
                      <div onClick={() => handleUpdateCompany(el._id, el.name, el.lastname, el.phone, el.date, el.email, el.password, el.isAdmin, el.isCompany)}>
                        <Button text="Company" />
                      </div>
                    </div>
                  </div>
                </>
              )
            })
          }
        </div>
      </div>
    </>
  )
}

export default Users
