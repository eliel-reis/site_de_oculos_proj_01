import Image from "next/image";
import Logo from "@/../public/logo.png";
import Link from "next/link";
import estilos from "./Topo.module.css";

export default function Topo() {
    return (
        <header className={estilos.container}>

            <div className={estilos.container_sub}>

                <div className={estilos.container_image_container} >
                    <Image className={estilos.container_image} src={Logo} alt="Logo, Óticas vida" />
                </div>

                <div className={estilos.container_links_container}>
                    <Link className={estilos.container_links} href="#produtos">PRODUTOS</Link>
                    <Link className={estilos.container_links} href="#sobre">SOBRE</Link>
                    <Link className={estilos.container_links} href="#contato">CONTATO</Link>
                </div>

            </div>
        </header>
    );
};