import Image from "next/image";
import Oculos_de_grau from "../../../public/oculos01.png";
import Oculos_transition from "../../../public/oculos02.png";
import Oculos_de_sol from "../../../public/oculos03.png";
import Oculos_infantil from "../../../public/oculos04.png";
import estilos from "./Secao_Produtos.module.css";

export default function Secao_Produtos() {
    return (
        <div id="produtos" className={estilos.container}>

            <div className={estilos.container_parte_1}>

                <h3>
                    Nossos produtos
                </h3>

                <p>
                    Trabalhamos com óculos de grau, óculos de sol, lentes transition nos modelos masculino, feminino e infantil.
                </p>

                <p>
                    Todos os nossos preços são acessíveis e contam com a melhor qualidade do mercado.
                </p>

            </div>

            <div className={estilos.container_parte_2_container}>
                <div className={estilos.container_parte_2}>

                    <h4>
                        Óculos de grau
                    </h4>

                    <Image className={estilos.container_parte_2_image} src={Oculos_de_grau} />

                    <p>
                        R$ 500,00
                    </p>

                </div>
                <div className={estilos.container_parte_2}>

                    <h4>
                        Óculos transition
                    </h4>

                    <Image className={estilos.container_parte_2_image} src={Oculos_transition} />

                    <p>
                        R$ 750,00
                    </p>

                </div>
                <div className={estilos.container_parte_2}>

                    <h4>
                        Óculos de sol
                    </h4>

                    <Image className={estilos.container_parte_2_image} src={Oculos_de_sol} />

                    <p>
                        R$ 700,00
                    </p>

                </div>
                <div className={estilos.container_parte_2}>

                    <h4>
                        Óculos infantil
                    </h4>

                    <Image className={estilos.container_parte_2_image} src={Oculos_infantil} />

                    <p>
                        R$ 500,00
                    </p>

                </div>

            </div>


            <div className={estilos.container_parte_3_container}>
                <div className={estilos.container_parte_3_h3}>
                    <h3>
                        Todos os nossos produtos incluem:
                    </h3>
                </div>


                <div className={estilos.container_parte_3_lista}>
                    <ul>
                        <li>
                            Garantia de 1 ano
                        </li>

                        <li>
                            Manutenção preventiva
                        </li>

                        <li>
                            Desconto especiais na compra da segunda unidade
                        </li>

                        <li>
                            Flexibilidade de pagamento
                        </li>

                    </ul>
                </div>
            </div>

        </div>
    );
};