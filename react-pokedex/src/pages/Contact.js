import "./Contact.css";

const Contact = () => {
  return (
    <section>
      <div className="info">
        <h1>React-Pokédex</h1>
        <p>
          Olá! Meu chamo Diego, essa é minha versão de um projeto clássico para
          novatos do React.
        </p>
        <p>
          Caso queira saber mais sobre o projeto, ou sobre mim, fique a vontade
          para entrar em contato.
        </p>
      </div>
      <form action="">
        <label>
          Nome:
          <input type="text" name="name" />
        </label>
        <label>
          Email:
          <input type="email" name="email" />
        </label>
        <label>
          Sua Mensagem:
          <textarea name="message" id="message" rows="20"></textarea>
        </label>
        <button type="submit">Enviar</button>
      </form>
    </section>
  );
};

export default Contact;
