import React from 'react'
import { Link } from 'gatsby'
import Helmet from 'react-helmet'
import Layout from '../components/layouts'
import Banner from '../components/Banner'
 
import pic01 from '../assets/images/ProtegerF.png'
import pic02 from '../assets/images/PositionF.png'
import pic03 from '../assets/images/PromoF.png'
import pic04 from '../assets/images/CroissanceF.png'
import pic05 from '../assets/images/ContactF.png'
import pic06 from '../assets/images/PartoutF.png'


class HomeIndex extends React.Component {
    render() {

        return (
            <Layout>
                <Helmet
                    title="Pandora I.O"
                    meta={[
                        { name: 'description', content: 'Sample' },
                        { name: 'keywords', content: 'sample, something' },
                    ]}
                >
                </Helmet>

                <Banner />

                <div id="main">
                    <section id="one" className="tiles">
                        <article style={{backgroundImage: `url(${pic01})`}}>
                            <header className="major">
                                <h3>PROTÉGER</h3>
                                <p>L'intégrité de votre marque pour garder une longueur d'avance
Nous collaborons avec vous pour nous assurer que vos annonces sont conformes et que votre marque est représentée avec précision.
</p>
                            </header>
                            <Link to="/proteger" className="link primary"></Link>
                        </article>
                        <article style={{backgroundImage: `url(${pic02})`}}>
                            <header className="major">
                                <h3>POSITION</h3>
                                <p>Vos produits pour augmenter vos ventes
Nous augmentons votre capacité de découverte sur les marchés et nous nous concentrons sur le développement de votre marque pour vous aider à réussir.
</p>
                            </header>
                            <Link to="/position" className="link primary"></Link>
                        </article>
                        <article style={{backgroundImage: `url(${pic03})`}}>
                            <header className="major">
                                <h3>PROMOUVOIR</h3>
                                <p>Votre marque pour générer du trafic
Nous augmentons vos conversions grâce à des campagnes stratégiques et percutantes.</p>
                            </header>
                            <Link to="/promouvoir" className="link primary"></Link>
                        </article>
                        <article style={{backgroundImage: `url(${pic04})`}}>
                            <header className="major">
                                <h3>CROISSANCE</h3>
                                <p> a travers la
puissance des données Les données sont à la base de tout ce que nous faisons. Nous avons développé le logiciel de marché le plus avancé pour vous aider à prendre des décisions délibérées, à alimenter votre croissance et à mesurer votre succès.</p>
                            </header>
                            <Link to="/croissance" className="link primary"></Link>
                        </article>
                        <article style={{backgroundImage: `url(${pic05})`}}>
                            <header className="major">
                                <h3>ILS NOUS ONT FAIT CONFIANCE</h3>
                                <p>Parlez aujourd'hui à l'un de nos stratège  </p>

                            </header>
                            <Link to="/commencez" className="link primary"></Link>
                        </article>
                        <article style={{backgroundImage: `url(${pic06})`}}>
                            <header className="major">
                                <h3>SOYEZ PARTOUT</h3>
                                <p>c'est essentiel Nous lançons le commerce de détail dans l'ère moderne. Où et quand les consommateurs achètent, votre marque doit être prête pour eux. Nous offrons des opportunités sans précédent sur tous les principaux marchés en ligne, plus de 250 vitrines de magasins, listes en ligne et les principaux sites Web directement aux consommateurs.</p>
                            </header>
                            <Link to="/pointsdeventes" className="link primary"></Link>
                        </article>
                    </section>
                    <section id="two">
                        <div className="inner">
                            <header className="major">
                                <h2>LE PLUS SOPHISTIQUÉ DU MARCHÉ</h2>
                            </header>
                            <p>Nous donnons le ton pour la vente au détail sur le marché en ligne. Nous nous associons à des marques de premier plan pour les guider dans la croissance de leurs ventes sur le marché grâce à nos logiciels exclusifs et à nos stratégies de premier ordre. Notre méthode en trois étapes, à la pointe de l'industrie, a été perfectionnée et renforcée au cours de nos dix années
                            d'expérience dans le commerce électronique.</p>
                            <ul className="actions">
                                <li><Link to="/commencez" className="button next">Commencez</Link></li>
                            </ul>
                        </div>
                    </section>
                </div>

            </Layout>
        )
    }
}

export default HomeIndex
