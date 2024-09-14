type Musica = {
    id_musica: number;
    nome_musica: string;
  };
  
  type CardProps = {
    nome_categoria: string;
    musicas: Musica[];
  };
  
  export default function TabelaCategorias({ nome_categoria, musicas }: CardProps) {
    return (
      <table className="table-auto w-full text-left text-gray-200 bg-[#6b46c1] rounded-lg"> {/* Cor de fundo mais suave e texto cinza claro */}
        <thead>
          <tr>
            <th className="text-lg text-white p-2 bg-[#553c9a]"> {/* Cor de fundo do cabeçalho mais escura e texto branco */}
              {nome_categoria}
            </th>
          </tr>
        </thead>
        <tbody>
          {musicas.length === 0 ? (
            <tr>
              <td className="border-t border-gray-300 p-2 text-sm leading-tight"> {/* Borda cinza mais suave */}
                Sem músicas cadastradas
              </td>
            </tr>
          ) : (
            musicas.map((musica, index) => (
              <tr key={musica.id_musica}>
                <td className="border-t border-gray-300 p-2 text-sm leading-tight">
                  {index + 1}. {musica.nome_musica}
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    );
  }
  