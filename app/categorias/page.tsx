"use client";
import React, { useEffect } from 'react'
import Link from "next/link";
import { instance } from "../axiosConfig/axios";
import { useState } from "react";

type Categoria = {
  id_categoria: string,
  nome_categoria: string
}

export default function CategoriasPage(){
  useEffect(() => {
    getCategorias();
  }, []);

  async function getCategorias() {
    try {
      const response = await instance.get<Categoria[]>("categoria");
      console.log(response.data)
      setCategorias(response.data);
    } catch (error) {
      console.log(error);
    }
  }
  const [categorias, setCategorias] = useState<Categoria[]>([]);
  const [idCategoria, setIdCategoria] = useState('');
  const [nomeCategoria, setNomeCategoria] = useState('');
  const [message, setMessage] = useState('');
  const [showMessage, setShowMessage] = useState(false);
  async function postCategoria(e: React.FormEvent) {
    e.preventDefault();
    try {
      const response = await instance.post("categoria", {
        id_categoria: parseInt(idCategoria),
        nome_categoria: nomeCategoria,
      });
      setMessage("Categoria cadastrada com sucesso!");
    } catch (error: any) {
      if (error.response) {
        console.log(error.response)
        setMessage(error.response.data.error || "Erro ao cadastrar categoria. Tente novamente.");
      } else {
        console.log(error)
        setMessage("Erro ao cadastrar categoria. Tente novamente.");
      }
    }
  }

  return (
    <div className="flex justify-center items-center mt-2">
      <form onSubmit={postCategoria} className="flex flex-col justify-center items-start border-[#4a45cd] border-2 bg-[#484a93] gap-4 rounded-lg p-3 shadow-md shadow-[#4a45cd]">
        <div className="flex items-center justify-between gap-2">
          <Link href="/">
            <p className="text-[#fff] bg-[#ff6d00] p-2 rounded-md">Voltar</p>
          </Link>
          <h1 className="text-3xl font-bold text-white">Cadastro de Categorias</h1>
        </div>
        {message && (
          <div className={`p-2 rounded-md ${message.includes('sucesso') ? 'bg-green-500' : 'bg-red-500'}`}>
            <p className="text-white">{message}</p>
          </div>
        )}
        <div className="flex flex-row gap-2">
          <label htmlFor="id_categoria" className="text-white">ID:</label>
          <input onChange={(e)=>setIdCategoria(e.target.value)} value={idCategoria} name="id_categoria" id="id_categoria" type="number" className="border border-x-cyan-50 rounded-lg bg-[#ccc] text-[#4a45cd]" required/>
        </div>
        <div className="flex flex-row gap-2">
          <label htmlFor="nome_categoria" className="text-white">Nome da Categoria:</label>
          <input onChange={(e)=>setNomeCategoria(e.target.value)} value={nomeCategoria} name="nome_categoria" id="nome_categoria" type="text" className="border border-x-cyan-50 rounded-lg bg-[#ccc] text-[#4a45cd]" required/>
        </div>
        <div className='w-full h-px bg-[#cea637]'>
        </div>
        <div className='flex flex-col bg-black justify-center mx-auto my-0 p-4 rounded-lg'>
          <h2 className='text-2xl font-bold text-white'>Categorias já cadastradas</h2>
          <div className='w-full h-px bg-[#e86060]'>
        </div>
          <div className='flex justify-around flex-row w-full'>
            <ul className='flex flex-col justify-start w-full gap-2'>
          {categorias.map((categoria) => (
                <li className='text-white' key={categoria.id_categoria}>
                  {categoria.id_categoria} {categoria.nome_categoria}
                </li>
            ))}
            </ul>
          </div>
        </div>
        <button type="submit" className="text-white bg-[#7f36b0] p-2 rounded-xl shadow-sm shadow-[#000]">
          Cadastrar Categoria
        </button>
      </form>
    </div>
  )
}
