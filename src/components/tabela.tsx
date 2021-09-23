import Cliente from "../core/Cliente";
import { IconeEdicao, IconeLixo } from "./Icones";

interface TabelaProps {
    clientes: Cliente[]
    clienteSelecionado?: (cliente: Cliente) => void
    clienteExcluido?: (cliente: Cliente) => void
}

export default function Tabela(props: TabelaProps) {

    const exibirAcoes = props.clienteExcluido || props.clienteSelecionado

    function renderizarCabecalho() {
        return (
            <tr>
                <th className="text-left p-4">Código</th>
                <th className="text-left p-4">Nome</th>
                <td className="text-left p-4">CPF</td>
                <td className="text-left p-4">Rg</td>
                <td className="text-left p-4">Endereco</td>
                <td className="text-left p-4">Numero</td>
                <td className="text-left p-4">Data_Nascimento</td>
                <td className="text-left p-4">Tel_Comercial</td>
                <td className="text-left p-4">Tel_Residencial</td>
                <td className="text-left p-4">Facebook</td>
                <td className="text-left p-4">Instagram</td>
                <td className="text-left p-4">Linkedin</td>
                <td className="text-left p-4">Twitter</td>
                {exibirAcoes ? <th className="p-4">Ações</th> : false}
            </tr>
        )
    }

    function renderizarDados() {
        return props.clientes?.map((cliente, i) => {
            return (
                <tr key={cliente.id}
                    className={`${i % 2 === 0 ? 'bg-purple-200' : 'bg-purple-100'}`}>
                    <td className="text-left p-4">{cliente.id}</td>
                    <td className="text-left p-4">{cliente.nome}</td>
                    <td className="text-left p-4">{cliente.cpf}</td>
                    <td className="text-left p-4">{cliente.rg}</td>
                    <td className="text-left p-4">{cliente.endereco}</td>
                    <td className="text-left p-4">{cliente.numero}</td>
                    <td className="text-left p-4">{cliente.datnascimento}</td>
                    <td className="text-left p-4">{cliente.telcomercial}</td>
                    <td className="text-left p-4">{cliente.telresidencial}</td>
                    <td className="text-left p-4">{cliente.facebook}</td>
                    <td className="text-left p-4">{cliente.instagram}</td>
                    <td className="text-left p-4">{cliente.linkedin}</td>
                    <td className="text-left p-4">{cliente.twitter}</td>
                    {exibirAcoes ? renderizarAcoes(cliente) : false}
                </tr>
            )
        })
    }

    function renderizarAcoes(cliente: Cliente) {
        return (
            <td className="flex justify-center">
                {props.clienteSelecionado ? (
                    <button onClick={() => props.clienteSelecionado?.(cliente)} className={`
                        flex justify-center items-center
                        text-green-600 rounded-full p-2 m-1
                        hover:bg-purple-50
                    `}>
                        {IconeEdicao}
                    </button>
                ) : false}
                {props.clienteExcluido ? (
                    <button onClick={() => props.clienteExcluido?.(cliente)} className={`
                        flex justify-center items-center
                        text-red-500 rounded-full p-2 m-1
                        hover:bg-purple-50
                    `}>
                        {IconeLixo}
                    </button>
                ) : false}
            </td>
        )
    }

    return (
        <table className="w-full rounded-xl overflow-hidden">
            <thead className={`
                text-gray-100
                bg-gradient-to-r from-purple-500 to-purple-800
            `}>
                {renderizarCabecalho()}
            </thead>
            <tbody>
                {renderizarDados()}
            </tbody>
        </table>
    )
}