import estilos from "./Secao_Contato.module.css";
import imagem_local from "../../../public/local.png";
import imagem_telefone from "../../../public/telefone.png";
import imagem_email from "../../../public/email.png";
import imagem_facebook from "../../../public/fb.png";
import imagem_instagram from "../../../public/ig.png";
import imagem_twiter from "../../../public/tt.png";
import Image from "next/image";

export default function Secao_Contato() {
    return (
        <div id="contato" className={estilos.container_parte_5_container}>

            <div className={estilos.container_parte_5_texto}>
                <h3>
                    Fale conosco
                </h3>
                <p>
                    Não perca tempo, venha conhecer uma de nossas lojas ou entre em contato através de nossas redes sociais ou da central de atendimento.
                </p>
            </div>

            <div className={estilos.container_parte_5_cards}>
                <div className={estilos.container_parte_5_card} >
                    <div className={estilos.container_parte_5_card_h3}>
                        <h3>
                            Nossos Contatos
                        </h3>
                    </div>

                    <div className={estilos.container_parte_5_card_span}>
                        <span>
                            <Image className={estilos.container_parte_5_icones} src={imagem_local} /> Nova Iguaçu, RJ
                        </span>
                        <span>
                            <Image className={estilos.container_parte_5_icones} src={imagem_telefone} /> (21) 9999-9999
                        </span>
                        <span>
                            <Image className={estilos.container_parte_5_icones} src={imagem_email} /> contato@oticavida.com
                        </span>
                    </div>
                </div>

                <div className={estilos.container_parte_5_card} >
                    <div className={estilos.container_parte_5_card_h3}>
                        <h3>
                            Nossos Redes Sociais
                        </h3>
                    </div>

                    <div className={estilos.container_parte_5_card_span}>
                        <span>
                            <Image className={estilos.container_parte_5_icones} src={imagem_facebook} /> /OticaVida
                        </span>
                        <span>
                            <Image className={estilos.container_parte_5_icones} src={imagem_instagram} /> @oticavidarj
                        </span>
                        <span>
                            <Image className={estilos.container_parte_5_icones} src={imagem_twiter} /> @oticavidarj
                        </span>
                    </div>
                </div>
            </div>

        </div>
    );
};