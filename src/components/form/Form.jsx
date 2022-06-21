import "./form.scss";

export default function Form() {
    return (
        <div className="form">
            <h2>Formulaire de contact</h2>
            <form className="form-fields"
                name="contact"
                method="post"
                data-netlify="true"
                onSubmit="submit"
            >
                {/* Ajout du champ caché pour Netlify: */}
                <input type="hidden" name="form-name" value="contact" />
                <label for="name" >
                    <input type="text" name="name" placeholder="Nom" />
                </label>
                <label for="email">
                    <input type="email" name="email" placeholder="Email" />
                </label>
                <label for="message"></label>
                <textarea className="textarea" name="message" placeholder="Rédigez votre message">

                </textarea>
                <button type="submit">Envoyer</button>
            </form>
        </div>
    )
}

