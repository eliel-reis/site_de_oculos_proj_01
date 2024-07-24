import estilos from "./Rodape.module.css";

export default function Rodape() {
    return (
        <footer className={estilos.footer} >
            <p>
                &copy; 2022 Óticas Vida. - Todos os direitos reservados.
            </p>
        </footer>
    )
}