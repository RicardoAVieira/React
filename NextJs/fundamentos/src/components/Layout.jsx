import Cabecalho from "./Cabecalho";
import styles from "../styles/Layout.module.css";

export default function Layout(props) {
	return (
		<div className={styles.layout}>
			<Cabecalho />

			<div className={styles.conteudo}>
				{/* Para acessar os dados enviados do componente  */}
				{props.children}
			</div>
		</div>
	);
}
