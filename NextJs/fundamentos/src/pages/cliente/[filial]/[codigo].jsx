import Layout from "../../../components/Layout";
import {useRouter} from 'next/router'
/* Com a utilisação do useRouter, conseguimos carregar no laod do servidor os dados da rota e 
criar a pagina dinamicamente para o cliente. 

Com isso, conseguimos criar as pagina personalizadas por cliente.
*/
export default function ClienteParaCodigo(){
    const router = useRouter()

    return(
        <Layout titulo = "Navegação Dinâmica">
            <div>Filial = {router.query.filial}</div>
            <div>Codigo = {router.query.codigo}</div>
        </Layout>
    )
}