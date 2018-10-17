import React from 'react'

const Contact = (props) => (
    <section id="contact">

    
        <div className="inner">
        
            <section>
            <div className="select-wrapper mb-5">
                                                <select name="demo-category" id="demo-category">
                                                    <option defaultValue="">- Sector -</option>
                                                    <option value="1">Manufacturing</option>
                                                    <option value="1">Shipping</option>
                                                    <option value="1">Branding & Sales</option>
                                                    <option value="1">Administration</option>
                                                    <option value="1">Human Resources</option>
                                                </select>
                                            </div>
                <form method="post" action="#">
                    <div className="field half first">
                        <label htmlFor="name">Nom</label>
                        <input type="text" name="name" id="name" />
                    </div>
                    <div className="field half">
                        <label htmlFor="email">Email</label>
                        <input type="text" name="email" id="email" />
                    </div>
                    <div className="field">
                        <label htmlFor="company">NOM DE LA SOCIÉTÉ</label>
                        <input type="text" name="company" id="company" />
                    </div>
                    <div className="field">
                        <label htmlFor="message">Message</label>
                        <textarea name="message" id="message" rows="6"></textarea>
                    </div>
                    <ul className="actions">
                        <li><input type="submit" value="Envoyer" className="special" /></li>
                    </ul>
                </form>
            </section>
            <section className="split">
                <section>
                    <div className="contact-method">
                        <span className="icon alt fa-envelope"></span>
                        <h3>Email</h3>
                        <a href="#">philippe@pandorafr.com</a>
                    </div>
                </section>
                <section>
                    <div className="contact-method">
                        <span className="icon alt fa-phone"></span>
                        <h3>Téléphone</h3>
                        <span>(+33) 445-490 x12387</span>
                    </div>
                </section>
                <section>
                    <div className="contact-method">
                        <span className="icon alt fa-home"></span>
                        <h3>Adresse</h3>
                        <span>185 Rue de la pompe<br />
                        Paris, 75116<br />
                        France</span>
                    </div>
                </section>
            </section>
        </div>
    </section>
)

export default Contact
