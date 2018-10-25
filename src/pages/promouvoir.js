import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/layouts'
import pic44 from '../assets/images/Promote-01.png'
import pic08 from '../assets/images/Promote-02.png'

const Proteger = (props) => (
    <Layout>
        <Helmet>
            <title>Promouvoir - Pandora</title>
            <meta name="description" content="Generic Page" />
        </Helmet>

               <div id="main" className="alt">
            <section id="one">
                <div className="inner">
                    <header className="major">
                        <h1>Promouvoir votre marque</h1>
                    </header>
                    <span className="image main"><img src={pic44} alt="" /></span>

                    <p>
                    Nous sommes passionnés par la diffusion du message de votre marque d'une manière qui suscite l'intérêt et stimule l'action. 
                    Grâce à notre approche omnichannel, nous créons des promotions significatives qui ont une portée aussi large que puissante.
                    </p>
        <div className="grid-wrapper">
            <div className="col-6">
                  
                        <h3>marketing de recherche</h3>
                        <p>
                            Votre point de contact s'engage à vous aider à grandir, à partager les meilleures pratiques et à vous fournir des conseils stratégiques.
                        </p>
                            
                        <h3>programme de vélocité des ventes</h3>
                        <p>
                            Accélérer les ventes afin de fournir une exposition aux inscriptions et d'augmenter le nombre de conversions.                        
                        </p>
                            
                        <h3>campagnes de publicité mobile</h3>
                        <p>
                            Nous augmenterons le trafic et ferons la promotion de votre marque grâce à des campagnes ciblées sur Facebook, 
                            Instagram et Pinterest.
                        </p>
                            
                  
            </div>
            <div className="col-6"><span className="image fit"><img src={pic08} alt="" /></span></div>
        </div>

                    <p>
                        Les marques pertinentes ont la possibilité de présenter leurs produits nouveaux et existants par le biais d'un placement promotionnel sur nos sites Web directs.
                        Amplifiez la présence de votre marque et augmentez l'attrait de vos annonces grâce à des influenceurs de confiance dans les médias sociaux.
                        Nos spécialistes en marketing surveillent constamment toutes les campagnes afin de maximiser votre retour sur investissement.
                    </p>

                    <blockquote>
                    Pandora a une énergie dont nous avons été si heureux de profiter en tant qu'entreprise. Ils s'intéressent au développement de notre produit et de notre marque plutôt
                    que de simplement suivre la foule. Ils respectent notre marque et notre entreprise en utilisant un marketing qui fonctionne pour eux et ensuite pour nous.              
                    </blockquote>

                    <p>
                    avez-vous besoin d'aide pour augmenter votre découverte sur les marchés ? <a href="/commencez">Essayer Pandora</a>
                    </p>
                    <ul className="pagination">
                                    <li><span className="button small disabled">promouvoir</span></li>
                                    
                                    <li><a href="/croissance" className="button small">Croissance</a></li>
                                    <li><a href="/proteger" className="button small">Protéger</a></li>
                                 
                                </ul>
                </div>
            </section>
        </div>


    </Layout>
)

export default Proteger
