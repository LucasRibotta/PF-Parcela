
"use client"
import { useAppSession } from '@/app/hook';
import Button from '@/components/Button/Button';
import { useDeleteUserMutation, useGetUsersQuery, useUpdateUserMutation } from '@/redux/services/userApi';
import React, { useState } from 'react'

const Users = () => {
  const [search, setSearch] = useState({name:""});
  const users = useGetUsersQuery(search);
  const { data, isLoading } = useGetUsersQuery(search);
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

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setSearch({name: value});
  }

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSearch({name: ""})

  }


  return (
    <>
      <div className='w-[80%]'>

        <form onSubmit={handleSubmit} className="relative h-10 w-full  mt-[1rem]">
          <input
            type="text"
            className="peer h-full w-[200px] rounded-[7px] border border-blue-gray-200 border-t-transparent  px-3 py-4 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-[#51a8a1] focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
            placeholder=" "
            onChange={handleChange}
            value={search.name}
          />
          <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-[200px] select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-[#51a8a1] peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:border-[#51a8a1] peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:border-[#51a8a1] peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
            Usuario
          </label>
        </form>

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
