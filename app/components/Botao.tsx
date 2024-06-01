import Link from "next/link";

type BotaoProps = {
  texto: string
  href: string
}


export default function Botao( {texto, href}: BotaoProps){
  return(
    <Link href={href}>
      <li className="text-white bg-[#7f36b0] p-2 rounded-xl shadow-sm shadow-[#000] hover:bg-[#523068] delay-75 transition">{texto}</li>
    </Link>
  )
}

