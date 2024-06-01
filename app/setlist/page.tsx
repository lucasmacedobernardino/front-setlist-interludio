"use client";
import React, { useEffect } from 'react'
import Link from "next/link";
import { instance } from "../axiosConfig/axios";
import { useState } from "react";

type Categoria = {
  id_categoria: number,
  nome_categoria: string
}

type Musica = {
  id_musica: number;
  nome_musica: string;
  nome_artista: string;
  link_youtube: string;
  id_categoria: number
  fk_musica_categoria: number
};

export default function SetListPage(){
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
  const [modalOpen, setModalOpen] = useState(false);
  const [setList, setSetList] = useState<Musica[]>([]);
  const [message, setMessage] = useState('');
  const [showMessage, setShowMessage] = useState(false);
  const [musica1, setMusica1] = useState('');
  const [musica2, setMusica2] = useState('');
  const [musica3, setMusica3] = useState('');
  const [musica4, setMusica4] = useState('');
  const [musica5, setMusica5] = useState('');
  const [musica6, setMusica6] = useState('');
  const [musica7, setMusica7] = useState('');
  const [musica8, setMusica8] = useState('');
  const [musica9, setMusica9] = useState('');
  const [musica10, setMusica10] = useState('');


  async function gerarSetList(e: React.FormEvent) {
    e.preventDefault();

    const idsCategoriasSelecionadas = [
      musica1, musica2, musica3, musica4, musica5,
      musica6, musica7, musica8, musica9, musica10
    ];
    const idCategoriasString = idsCategoriasSelecionadas.join(',');
    try {
      const response = await instance.get<Musica[]>(`setlist?id_categoria=${idCategoriasString}`);
      const setlist = response.data
      console.log(setlist)
      setSetList(setlist);
      setMessage('SetList gerada com sucesso!');
      setShowMessage(true)
      setTimeout(() => {
        setShowMessage(false);
        setModalOpen(true);
      }, 2000); 
    } catch (error: any) {
      if (error.response) {
        setMessage(error.response.data.error || 'Erro ao gerar SetList. Tente novamente.');
      } else {
        setMessage('Erro ao gerar SetList. Tente novamente.');
      }
    }
  }
  return (
    <div className="flex justify-center items-center mt-2">
      <div className="flex flex-col justify-center items-start border-[#4a45cd] border-2 bg-[#484a93] gap-4 rounded-lg p-3 shadow-md shadow-[#4a45cd]">
        <div className="flex items-center justify-between gap-2">
          <Link href="/">
            <p className="text-[#fff] bg-[#ff6d00] p-2 rounded-md">Voltar</p>
          </Link>
          <h1 className="text-3xl font-bold text-white">INTERLÚDIO SETLIST</h1>
        </div>
        {showMessage && (
          <div className={`p-2 rounded-md ${message.includes('sucesso') ? 'bg-green-500' : 'bg-red-500'} fade-in`}>
            <p className="text-white">{message}</p>
          </div>
        )}
        <div className='flex flex-col gap-4 w-full'>
        <div className="flex flex-row gap-2 justify-between">
          <label htmlFor="categoria" className="text-white">01:</label>
          <select value={musica1} onChange={(e)=>{
            setMusica1(e.target.value)
          }} name="categoria" id="categoria" className="border border-x-cyan-50 rounded-lg bg-[#ccc] text-[#4a45cd]" required>
            <option value="">Escolha uma opção</option>
            {categorias.map((categoria) => (
              <option key={categoria.id_categoria} value={categoria.id_categoria} >
                {categoria.nome_categoria}
              </option>
            ))}
          </select>
          <div></div>
        </div>
        <div className="flex flex-row gap-2 justify-between">
          <label htmlFor="categoria" className="text-white">02:</label>
          <select value={musica2} onChange={(e)=>setMusica2(e.target.value)} name="categoria" id="categoria" className="border border-x-cyan-50 rounded-lg bg-[#ccc] text-[#4a45cd]" required>
            <option value="">Escolha uma opção</option>
            {categorias.map((categoria) => (
              <option key={categoria.id_categoria} value={categoria.id_categoria}>
                {categoria.nome_categoria}
              </option>
            ))}
          </select>
          <div></div>
        </div>
        <div className="flex flex-row gap-2 justify-between">
          <label htmlFor="categoria" className="text-white">03:</label>
          <select value={musica3} onChange={(e)=>setMusica3(e.target.value)} name="categoria" id="categoria" className="border border-x-cyan-50 rounded-lg bg-[#ccc] text-[#4a45cd]" required>
            <option value="">Escolha uma opção</option>
            {categorias.map((categoria) => (
              <option key={categoria.id_categoria} value={categoria.id_categoria}>
                {categoria.nome_categoria}
              </option>
            ))}
          </select>
          <div></div>
        </div>
        <div className="flex flex-row gap-2 justify-between">
          <label htmlFor="categoria" className="text-white">04:</label>
          <select value={musica4} onChange={(e)=>setMusica4(e.target.value)} name="categoria" id="categoria" className="border border-x-cyan-50 rounded-lg bg-[#ccc] text-[#4a45cd]" required>
            <option value="">Escolha uma opção</option>
            {categorias.map((categoria) => (
              <option key={categoria.id_categoria} value={categoria.id_categoria}>
                {categoria.nome_categoria}
              </option>
            ))}
          </select>
          <div></div>
        </div>
        <div className="flex flex-row gap-2 justify-between">
          <label htmlFor="categoria" className="text-white">05:</label>
          <select value={musica5} onChange={(e)=>setMusica5(e.target.value)} name="categoria" id="categoria" className="border border-x-cyan-50 rounded-lg bg-[#ccc] text-[#4a45cd]" required>
            <option value="">Escolha uma opção</option>
            {categorias.map((categoria) => (
              <option key={categoria.id_categoria} value={categoria.id_categoria}>
                {categoria.nome_categoria}
              </option>
            ))}
          </select>
          <div></div>
        </div>
        <div className="flex flex-row gap-2 justify-between">
          <label htmlFor="categoria" className="text-white">06:</label>
          <select value={musica6} onChange={(e)=>setMusica6(e.target.value)} name="categoria" id="categoria" className="border border-x-cyan-50 rounded-lg bg-[#ccc] text-[#4a45cd]" required>
            <option value="">Escolha uma opção</option>
            {categorias.map((categoria) => (
              <option key={categoria.id_categoria} value={categoria.id_categoria}>
                {categoria.nome_categoria}
              </option>
            ))}
          </select>
          <div></div>
        </div>
        <div className="flex flex-row gap-2 justify-between">
          <label htmlFor="categoria" className="text-white">07:</label>
          <select value={musica7} onChange={(e)=>setMusica7(e.target.value)} name="categoria" id="categoria" className="border border-x-cyan-50 rounded-lg bg-[#ccc] text-[#4a45cd]" required>
            <option value="">Escolha uma opção</option>
            {categorias.map((categoria) => (
              <option key={categoria.id_categoria} value={categoria.id_categoria}>
                {categoria.nome_categoria}
              </option>
            ))}
          </select>
          <div></div>
        </div>
        <div className="flex flex-row gap-2 justify-between">
          <label htmlFor="categoria" className="text-white">08:</label>
          <select value={musica8} onChange={(e)=>setMusica8(e.target.value)} name="categoria" id="categoria" className="border border-x-cyan-50 rounded-lg bg-[#ccc] text-[#4a45cd]" required>
            <option value="">Escolha uma opção</option>
            {categorias.map((categoria) => (
              <option key={categoria.id_categoria} value={categoria.id_categoria}>
                {categoria.nome_categoria}
              </option>
            ))}
          </select>
          <div></div>
        </div>
        <div className="flex flex-row gap-2 justify-between">
          <label htmlFor="categoria" className="text-white">09:</label>
          <select value={musica9} onChange={(e)=>setMusica9(e.target.value)} name="categoria" id="categoria" className="border border-x-cyan-50 rounded-lg bg-[#ccc] text-[#4a45cd]" required>
            <option value="">Escolha uma opção</option>
            {categorias.map((categoria) => (
              <option key={categoria.id_categoria} value={categoria.id_categoria}>
                {categoria.nome_categoria}
              </option>
            ))}
          </select>
          <div></div>
        </div>
        <div className="flex flex-row gap-2 justify-between">
          <label htmlFor="categoria" className="text-white">10:</label>
          <select value={musica10} onChange={(e)=>setMusica10(e.target.value)} name="categoria" id="categoria" className="border border-x-cyan-50 rounded-lg bg-[#ccc] text-[#4a45cd]" required>
            <option value="">Escolha uma opção</option>
            {categorias.map((categoria) => (
              <option key={categoria.id_categoria} value={categoria.id_categoria}>
                {categoria.nome_categoria}
              </option>
            ))}
          </select>
          <div></div>
        </div>  
        <button onClick={gerarSetList} className="text-white bg-[#7f36b0] p-2 rounded-xl shadow-sm shadow-[#000] w-full">
          Gerar SetList
        </button>
        {modalOpen && (
        <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-black bg-opacity-50">
          <div className="bg-white p-4 rounded-lg">
            <h2 className="text-lg font-bold mb-2">SetList Gerada</h2>
            <ul>
            {(setList && setList.length >  0) && setList.map((musica, index) => (
              <li key={musica.id_musica}>
                {index + 1}: {musica.nome_musica} - {musica.nome_artista}
              </li>
          ))}
            </ul>
            <button onClick={() => setModalOpen(false)} className="text-white bg-[#7f36b0] p-2 rounded-xl mt-4">
              Fechar
            </button>
          </div>
        </div>
      )}
        </div>
      </div>
    </div>
  )
}
