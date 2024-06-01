"use client";
import Link from "next/link";
import { instance } from "../axiosConfig/axios";
import { useEffect, useState } from "react";

type Categoria = {
  id_categoria: number,
  nome_categoria: string
}

export default function MusicasPage(){
  const [categorias, setCategorias] = useState<Categoria[]>([]);
  const [nomeMusica, setNomeMusica] = useState('');
  const [nomeArtista, setNomeArtista] = useState('');
  const [linkYoutubeMusica, setLinkYoutubeMusica] = useState('');
  const [fkMusicaCategoria, setFkMusicaCategoria] = useState('');
  const [message, setMessage] = useState('');

  useEffect(() => {
    getCategorias();
  }, []);

  async function getCategorias() {
    try {
      const response = await instance.get<Categoria[]>("categoria");
      setCategorias(response.data);
    } catch (error) {
      console.log(error);
    }
  }

  async function postMusica(e: React.FormEvent) {
    e.preventDefault();
    try {
      const response = await instance.post("musica", {
        nome_musica: nomeMusica,
        nome_artista: nomeArtista,
        link_youtube_musica: linkYoutubeMusica,
        fk_musica_categoria: parseInt(fkMusicaCategoria, 10)
      });
      setMessage("Música cadastrada com sucesso!");
    } catch (error: any) {
      if (error.response) {
        setMessage(error.response.data.error || "Erro ao cadastrar música. Tente novamente.");
      } else {
        setMessage("Erro ao cadastrar música. Tente novamente.");
      }
    }
  }

  return (
    <div className="flex justify-center items-center mt-2">
      <form onSubmit={postMusica} className="flex flex-col justify-center items-start border-[#4a45cd] border-2 bg-[#484a93] gap-4 rounded-lg p-3 shadow-md shadow-[#4a45cd]">
        <div className="flex items-center justify-between gap-2">
          <Link href="/">
            <p className="text-[#fff] bg-[#ff6d00] p-2 rounded-md">Voltar</p>
          </Link>
          <h1 className="text-3xl font-bold text-white">Cadastro e Seleção de Músicas</h1>
        </div>
        {message && (
          <div className={`p-2 rounded-md ${message.includes('sucesso') ? 'bg-green-500' : 'bg-red-500'}`}>
            <p className="text-white">{message}</p>
          </div>
        )}
        <div className="flex flex-row gap-2">
          <label htmlFor="categoria" className="text-white">Categoria:</label>
          <select onChange={(e)=>setFkMusicaCategoria(e.target.value)} name="categoria" id="categoria" className="border border-x-cyan-50 rounded-lg bg-[#ccc] text-[#4a45cd]" required>
            <option value="">Escolha uma opção</option>
            {categorias.map((categoria) => (
              <option key={categoria.id_categoria} value={categoria.id_categoria}>
                {categoria.nome_categoria}
              </option>
            ))}
          </select>
        </div>
        <div className="flex flex-row gap-2">
          <label htmlFor="nome_musica" className="text-white">Título da Música:</label>
          <input onChange={(e)=>setNomeMusica(e.target.value)} value={nomeMusica} name="nome_musica" id="nome_musica" type="text" className="border border-x-cyan-50 rounded-lg bg-[#ccc] text-[#4a45cd]" required/>
        </div>
        <div className="flex flex-row gap-2">
          <label htmlFor="nome_artista" className="text-white">Nome do Artista:</label>
          <input onChange={(e)=>setNomeArtista(e.target.value)} value={nomeArtista} name="nome_artista" id="nome_artista" type="text" className="border border-x-cyan-50 rounded-lg bg-[#ccc] text-[#4a45cd]" required/>
        </div>
        <div className="flex flex-row gap-2">
          <label htmlFor="link_youtube" className="text-white">Link do Youtube:</label>
          <input onChange={(e)=>setLinkYoutubeMusica(e.target.value)} value={linkYoutubeMusica} name="link_youtube" id="link_youtube" type="text" className="border border-x-cyan-50 rounded-lg bg-[#ccc] text-[#4a45cd]" required/>
        </div>
        <button type="submit" className="text-white bg-[#7f36b0] p-2 rounded-xl shadow-sm shadow-[#000]">
          Cadastrar Música
        </button>
      </form>
    </div>
  )
}
