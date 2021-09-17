import firebase from "../config";
import Cliente from "../../core/Cliente";
import ClienteRepositorio from "../../core/ClienteRepositorio";

export default class ColecaoCliente implements ClienteRepositorio {

    #conversor = {
        toFirestore(cliente: Cliente) {
            return {
                nome: cliente.nome,
                cpf: cliente.cpf,
                rg: cliente.rg,
                endereco: cliente.endereco,
                numero: cliente.numero,
                datnascimento: cliente.datnascimento,
                telcomercial: cliente.telcomercial,
                telresidencial: cliente.telresidencial,
                facebook: cliente.facebook,
                instagram: cliente.instagram,
                linkedin: cliente.linkedin,
                twitter: cliente.twitter,
            }
        },
        fromFirestore(snapshot: firebase.firestore.QueryDocumentSnapshot, options: firebase.firestore.SnapshotOptions): Cliente {
            const dados = snapshot.data(options)
            return new Cliente(dados.nome, dados.cpf, dados.rg,
                dados.endereco, dados.numero, dados.datnascimento,
                dados.telcomercial, dados.telresidencial, dados.facebook,
                dados.instagram, dados.linkedin, dados.twitter, snapshot.id)
        }
    }

    async salvar(cliente: Cliente): Promise<Cliente> {
        if (cliente?.id) {
            await this.colecao().doc(cliente.id).set(cliente)
            return cliente
        } else {
            const docRef = await this.colecao().add(cliente)
            const doc = await docRef.get()
            return doc.data()
        }
    }

    async excluir(cliente: Cliente): Promise<void> {
        return this.colecao().doc(cliente.id).delete()
    }

    async obterTodos(): Promise<Cliente[]> {
        const query = await this.colecao().get()
        return query.docs.map(doc => doc.data()) ?? []
    }

    private colecao() {
        return firebase
            .firestore().collection('clientes')
            .withConverter(this.#conversor)
    }
}