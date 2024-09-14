'use client'
import Link from "next/link";
import Botao from "./Botao";
import TabelaCategorias from "./Cards";
import { useEffect, useState } from "react";
import { instance } from "../axiosConfig/axios"; // Supondo que você esteja usando axios com uma instância configurada

type Musica = {
  id_musica: number;
  nome_musica: string;
};

type CategoriaComMusicas = {
  categoria: string;
  musicas: Musica[];
};

export default function HomePageComponent() {
  const [categoriasComMusicas, setCategoriasComMusicas] = useState<CategoriaComMusicas[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Buscar dados da API
  useEffect(() => {
    const fetchCategoriasComMusicas = async () => {
      try {
        const response = await instance.get<CategoriaComMusicas[]>('/categorias-com-musicas');
        setCategoriasComMusicas(response.data); // Armazena os dados das categorias com músicas no estado
      } catch (err: any) {
        setError(err.message || 'Erro ao buscar dados.');
      } finally {
        setLoading(false);
      }
    };

    fetchCategoriasComMusicas();
  }, []);

  if (loading) {
    return <p>Carregando...</p>;
  }

  if (error) {
    return <p>Erro: {error}</p>;
  }

  return (
    <div className="flex flex-col justify-center items-center mt-2">
      <div className="flex flex-col justify-center items-start bg-[#484a93] gap-4 rounded-lg p-3 shadow-md shadow-[#1d1d1d]">
        <nav className="flex flex-col justify-between items-center gap-3">
          <Link href="/">
            <h1 className="text-3xl font-bold text-white">SETLIST INTERLÚDIO</h1>
          </Link>
          <ul className="flex flex-row gap-2 items-center justify-between">
            <Botao texto="Cadastrar Músicas" href="musicas" />
            <Botao texto="Gerar SetList" href="setlist" />
            <Botao texto="Cadastrar Categorias" href="categorias" />
          </ul>
        </nav>
      </div>
    
      {/* Renderizando os TabelaCategoriass de músicas por categoria */}
      <div className="mt-5 flex flex-wrap gap-4 w-full max-w-6xl justify-center">
        {categoriasComMusicas.map((categoria, index) => (
          <TabelaCategorias
            key={index}
            nome_categoria={categoria.categoria}
            musicas={categoria.musicas}
          />
        ))}
      </div>
    </div>
  );
}
