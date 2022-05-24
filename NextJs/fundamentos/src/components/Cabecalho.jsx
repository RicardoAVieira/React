import Link from "next/link";
import styles from "../styles/Cabecalho.module.css";

export default function Cabecalho(props) {
	return (
		<div className={styles.Cabecalho}>
			<header>
				<Link href="/">Home</Link>
				<Link href="/estiloso">Estiloso</Link>
				<Link href="/cliente/RS/321">Cliente</Link>
				<Link href="/estado">Estado</Link>
				<Link href="/integracao_1">Integra_API#01</Link>
			</header>
		</div>
	);
}
