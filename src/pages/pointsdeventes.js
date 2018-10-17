import React from 'react'
import { Link } from 'gatsby'
import Helmet from 'react-helmet'
import Layout from '../components/layouts'
import BannerLanding from '../components/BannerLanding'

import pic08 from '../assets/images/Iphone01.png'
import pic09 from '../assets/images/Iphone02.png'
import pic10 from '../assets/images/Mac.png'
 
const Landing = (props) => (
    <Layout>
        <Helmet>
            <title>Points de ventes</title>
            <meta name="description" content="Landing Page" />
        </Helmet>

        <BannerLanding />

        <div id="main">
            <section id="one">
                <div className="inner">
                    <header className="major">
                        <h2>DÉCOUVREZ LE VRAI RETAIL OMNICHANNEL</h2>
                    </header>
                    <p>
                        Pandora vous offre plus d'opportunités cross-canal que tout autre partenaire du marché grâce
                        à l'innovation constante et nos partenariats omnichannels. Les consommateurs apprécient toujours
                        la possibilité de tester, d'échantillonner et de conserver votre produit avant de l'acheter. 
                        Une présence dans les magasins de brique et de mortier renforce la réputation de votre marque
                        et augmente vos revenus.
                    </p>
                </div>
            </section>
            <section id="two" className="spotlights">
                <section>
                    <Link to="/generic" className="image">
                        <img src={pic08} alt="" />
                    </Link>
                    <div className="content">
                        <div className="inner">
                            <header className="major">
                                <h3>EN LIGNE</h3>
                            </header>
                            <p>
                                Il est temps d'adopter les marchés en ligne dans le cadre de votre stratégie de vente au
                                détail. Les consommateurs modernes font plus d'achats sur les marketplaces que nimporte
                                où ailleurs en ligne.pandora vous aide à vous assurer que chaque utilisateurs trouvent
                                votre marque.
                            </p>

                        </div>
                    </div>
                </section>
                <section>
                    <Link to="/generic" className="image">
                        <img src={pic10} alt="" />
                    </Link>
                    <div className="content">
                        <div className="inner">
                            <header className="major">
                                <h3>SITES WEB DIRECTS</h3>
                            </header>

                            <p>
                                Le placement sur des sites Web pour directement aux consommateurs élargit votre visibilité
                                et légitime votre marque.Pandora offre des possibilités de placement pour vos produits 
                                fye.com, le principal site Web direct pour les produits de divertissement et de culture populaire.
                            </p>

                        </div>
                    </div>
                </section>
              
            </section>
        </div>

    </Layout>
)

export default Landing
