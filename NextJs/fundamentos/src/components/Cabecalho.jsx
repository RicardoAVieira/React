import Link from "next/link";
import styles from "../styles/Cabecalho.module.css";

export default function Cabecalho(props) {
	return (
		<div className={styles.Cabecalho}>
			<header>
				<Link href="/">Home</Link>
				<Link href="/estiloso">Estiloso</Link>
			</header>
		</div>
	);
}
