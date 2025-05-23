import Logo from '../Logo/Logo';

const logos = ['/logo.svg', '/vite.svg'];

function Header() {

	return (
		<>
			<Logo image={logos[0]} />
		</>
	);
}

export default Header;
