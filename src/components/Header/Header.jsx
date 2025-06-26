import Logo from '../Logo/Logo';
import styles from './Header.module.css';

const logos = ['/logo.svg', '/vite.svg'];

function Header() {

	return (
		<>
			<Logo className={styles.logo} image={logos[0]} />
		</>
	);
}

export default Header;
