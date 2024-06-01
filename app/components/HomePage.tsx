import Link from "next/link";
import Botao from "./Botao";

export default function HomePageComponent(){
  return(
    <div className="flex justify-center items-center mt-2">
        <div className="flex flex-col justify-center items-start bg-[#484a93] gap-4 rounded-lg p-3 shadow-md shadow-[#1d1d1d]">
          <nav className="flex flex-col justify-between items-center gap-3">
            <Link href="/">
              <h1 className="text-3xl font-bold text-white">SETLIST INTERLÚDIO</h1>
            </Link>
          <ul className="flex flex-row gap-2 items-center justify-between">
            <Botao texto="Cadastrar Músicas" href="musicas"/>
            <Botao texto="Gerar SetList" href="setlist"/>
            <Botao texto="Cadastrar Categorias" href="categorias"/>
          </ul>
          </nav>
        </div>
      </div>
  )
}