import estilos from "./Secao_Capa.module.css";

export default function Secao_Capa() {
    return (
        <div className={estilos.container}>
            <div className={estilos.container_texto}>
                <p>
                    Preços Baixo em
                </p>
                <h1>
                    ÓCULOS DE GRAU E DE SOL
                </h1>
                <p>
                    Você só encontra aqui
                </p>
            </div>
        </div>
    );
};