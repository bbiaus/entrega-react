import "./Contact.css";

function Contact() {
  return (
    <div className="contactContainer">
      <form action="action_page.php">
        <label for="fname">Nombre</label>
        <input
					className="contactInput"
          type="text"
          id="fname"
          name="firstname"
          placeholder="Tu nombre..."
        />

        <label for="lname">Apellido</label>
        <input
				className="contactInput"
          type="text"
          id="lname"
          name="lastname"
          placeholder="Tu apellido..."
        />

        <label for="mail">Correo</label>
        <input
				className="contactInput"
          type="email"
          id="mail"
          name="email"
          placeholder="Tu correo electrónico"
        />

        <label for="subject">Motivo de tu consulta</label>
        <textarea
				className="contactInput"
          id="subject"
          name="subject"
          placeholder="Podés escribir aca..."
          style={{ height: "200px" }}
        ></textarea>

				<label>Si necesitás, podés subir un archivo/imágen</label>
        <input type="file" id="myFile" name="filename" className="uploader"/>

        <input type="submit" value="Enviar" className="contactSubmit" />
      </form>
    </div>
  );
}

export default Contact;
