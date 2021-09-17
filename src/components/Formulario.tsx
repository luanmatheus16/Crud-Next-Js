import { useState } from "react";
import Cliente from "../core/Cliente";
import Botao from "./botao";
import Entrada from "./Entrada";

interface FormularioProps {
    cliente: Cliente
    clienteMudou?: (cliente: Cliente) => void
    cancelado?: () => void
}

export default function Formulario(props: FormularioProps) {
    const id = props.cliente?.id
    const [nome, setNome] = useState(props.cliente?.nome ?? '')
    const [cpf, setcpf] = useState(props.cliente?.cpf ?? 0)
    const [rg, setrg] = useState(props.cliente?.rg ?? 0)
    const [endereco, setendereco] = useState(props.cliente?.endereco ?? '')
    const [numero, setnumero] = useState(props.cliente?.numero ?? 0)
    const [datnascimento, setdatnascimento] = useState(props.cliente?.datnascimento ?? 0)
    const [telcomercial, settelcomercial] = useState(props.cliente?.telcomercial ?? 0)
    const [telresidencial, settelresidencial] = useState(props.cliente?.telresidencial ?? 0)
    const [facebook, setfacebook] = useState(props.cliente?.facebook ?? '')
    const [instagram, setinstagram] = useState(props.cliente?.instagram ?? '')
    const [linkedin, setlinkedin] = useState(props.cliente?.linkedin ?? '')
    const [twitter, settwitter] = useState(props.cliente?.twitter ?? '')

    return (
        <div className={`
        w-full divide-x flex: table-caption;
    `}>
            {id ? (
                <Entrada
                    somenteLeitura
                    texto="Código"
                    valor={id}
                    className="mb-1"
                />
            ) : false}

            <Entrada
                texto="Nome"
                valor={nome}
                valorMudou={setNome}
                className="mb-1, w-4/5"
            />

            <Entrada
                texto="CPF"
                valor={cpf}
                valorMudou={setcpf}
                className="mb-1, w-2/5"
            />
            <Entrada
                texto="RG"
                valor={rg}
                valorMudou={setrg}
                className="mb-1, w-2/5"
            />
            <Entrada
                texto="Endereço"
                valor={endereco}
                valorMudou={setendereco}
                className="mb-1, w-4/5"
            />
            <Entrada
                texto="Numero"
                valor={numero}
                valorMudou={setnumero}
                className="mb-1, w-1/5"
            />
            <div>
                <Entrada
                    texto="Data de Nascimento"
                    valor={datnascimento}
                    valorMudou={setdatnascimento}
                    className="mb-1, w-1/5"
                />
                <Entrada
                    texto="Telefone Comercial"
                    valor={telcomercial}
                    valorMudou={settelcomercial}
                    className="mb-1, w-2/5"
                />
                <div className={`
        w-full flex:flex-grow ;

    `}>
                    <Entrada
                        texto="Telefone Residencial"
                        valor={telresidencial}
                        valorMudou={settelresidencial}
                        className="mb-1, w-2/5"
                    />
                    <div className={`
       flex
    `} >
                        <Entrada
                            texto="Facebook"
                            valor={facebook}
                            valorMudou={setfacebook}
                            className="mb-1"
                        />


                        <Entrada
                            texto="Instagram"
                            valor={instagram}
                            valorMudou={setinstagram}
                            className="mb-1"
                        />

                        <Entrada
                            texto="Linkedin"
                            valor={linkedin}
                            valorMudou={setlinkedin}
                            className="mb-1"
                        />

                        <Entrada
                            texto="Twitter"
                            valor={twitter}
                            valorMudou={settwitter}
                            className="mb-5"
                        />
                    </div>
                </div>
            </div>
            <div className="flex justify-end mt-1">
                <Botao cor="blue" className="mr-2"
                    onClick={() => props.clienteMudou?.(new Cliente(nome, cpf, rg,
                        endereco, numero, datnascimento, telcomercial, telresidencial,
                        facebook, instagram, linkedin, twitter, id))}>
                    {id ? 'Alterar' : 'Salvar'}
                </Botao>
                <Botao onClick={props.cancelado}>
                    Cancelar
                </Botao>
            </div>
        </div>
    )
}