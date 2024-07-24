import Head from "next/head";
import Topo from "@/componentes/Topo";
import Secao_Capa from "@/componentes/Secao_Capa";
import Secao_Produtos from "@/componentes/Secao_Produtos";
import Secao_Sobre from "@/componentes/Secao_Sobre";
import Secao_Contato from "@/componentes/Secao_Contato";
import Rodape from "@/componentes/Rodape";
import styles from "@/styles/Home.module.css";

export default function Home() {
  return (
    <main className={styles.main} >
      <Head>
        <title>Óticas Vida</title>
        <meta name="description" content="Trabalhamos com óculos de grau, óculos de sol, lentes transition nos modelos masculino, feminino e infantil. Todos os nossos preços são acessíveis e contam com a melhor qualidade do mercado." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <Topo />

      <Secao_Capa />

      <Secao_Produtos />

      <Secao_Sobre />

      <Secao_Contato />

      <Rodape />

    </main>
  );
}
