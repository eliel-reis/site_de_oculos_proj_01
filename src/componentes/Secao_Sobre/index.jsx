import estilos from "./Secao_Sobre.module.css";
import Image from "next/image";
import imagem_01 from "../../../public/loja.png";
import imagem_02 from "../../../public/atendimento.png";

export default function Secao_Sobre() {
    return (
        <div id="sobre" className={estilos.container_parte_4_container}>
            <div className={estilos.container_parte_4_texto_sobre_nos}>
                <h3>
                    QUEM SOMOS NÓS?
                </h3>
                <p>
                    Fundada em 2001, em Nova Iguaçu - Rio de Janeiro, a Óticas vida iniciou suas atividades focada no atendimento ao  público de renda mais baixa, sempre com o objetivo de proporcionar ao cliente bom atendimento, qualidade e preço baixo.
                </p>
            </div>

            <div className={estilos.container_parte_4_imagem_e_texto}>

                <div className={estilos.container_parte_4_container_imagem} >
                    <Image className={estilos.container_parte_4_imagem} src={imagem_01} />
                </div>

                <div className={estilos.container_parte_4_texto}>
                    <h4>
                        NOSSAS FILIAIS
                    </h4>
                    <p>
                        Hoje temos mais de 20 filiais pelo Brasil e na América
                    </p>
                </div>

                <div className={estilos.container_parte_4_texto} >
                    <h4>
                        ATENDIMENTO FLEXÍVEL
                    </h4>
                    <p>
                        Nossa equipe possui é treinada para te atender
                    </p>
                </div>

                <div className={estilos.container_parte_4_container_imagem} >
                    <Image className={estilos.container_parte_4_imagem} src={imagem_02} />
                </div>
            </div>
        </div >
    );
};