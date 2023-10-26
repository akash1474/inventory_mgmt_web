import Image from "next/image"

const Header=()=>{

	return (
		<nav className="header__container">
		<div className="header__title">
			<Image className="header__logo" src='/product.svg' alt="Icon" width={32} height={32} />
			<p>Inventory Management System</p>		
		</div>
		<button className="header__button">Logout</button>
		</nav>
		);
}

export default Header;