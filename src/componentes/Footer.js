import "../stylesheets/Footer.css"

function Footer(){
	return (
		<div className="footerContainer">
			<div>
			<p>Desarrollado por: Boris Biaus</p>
			<p>Contacto: biaus.boris@gmail.com</p>
			</div>
			<div className="shopInfo">
				<p>Información del local:</p>
				<p>Teléfono: 2901-12345678</p>
				<p>Correo electrónico: phoenix@solutions.com</p>
				<p>Dirección: Avenida Siempre Viva 123</p>
			</div>
			<div>
				<a target="_blank" rel="noopener noreferrer"  href="https://facebook.com/"><img alt="imagen de red social" src="./images/fbLogo.png"/></a>
				<a target="_blank" rel="noopener noreferrer" href="https://instagram.com/"><img alt="imagen de red social" src="./images/igLogo.png"/></a>
			</div>
		</div>
	)
}

export default Footer;