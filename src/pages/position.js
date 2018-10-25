import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/layouts'

import pic44 from '../assets/images/position-01.png'
import pic08 from '../assets/images/position-02.png'

const Proteger = (props) => (
    <Layout>
        <Helmet>
            <title>Position avec Pandora</title>
            <meta name="description" content="Generic Page" />
        </Helmet>

               <div id="main" className="alt">
            <section id="one">
                <div className="inner">
                    <header className="major">
                        <h1>Positionner votre entreprise</h1>
                    </header>
                    <span className="image main"><img src={pic44} alt="" /></span>

                    <p>
                    Nous augmentons votre capacité de découverte sur les marchés et nous nous concentrons
                    sur le développement de votre marque pour vous aider à réussir.Positionner vos produits
                    sur la première page des résultats de recherche ne se limite pas à des suppositions. 
                    Grâce notre grande expérience, nous avons développé des pratiques éprouvées
                    pour gagner la traction de vos produits sur les marchés.
                    </p>
        <div className="grid-wrapper">
            <div className="col-6">
                  
                        <h3>Prévisions et planification</h3>
                        <p>
                            Positionner vos produits sur la première page des résultats de recherche ne se limite
                            pas à des suppositions. Grâce à plus d'une décennie d'expérience, nous avons développé
                            des pratiques éprouvées pour gagner la traction de vos produits sur les marchés.
                        </p>
                            
                        <h3>Optimisation du référencement</h3>
                        <p>
                            Nous nous efforçons de positionner vos produits sur la première page des résultats de
                            recherche en créant un contenu de référencement optimisé et en mettant en œuvre des 
                            améliorations SEO.
                        </p>
                            
                        <h3>Intégration Internationale</h3>
                        <p>
                            Nous pouvons vous aider à partager votre marque avec le monde entier en positionnant
                            efficacement vos produits pour des clients internationaux en France, Espagne, Italie,
                            Allemagne, Brésil, Canada et Royaume-Uni.                     
                        </p>
                            
                  
            </div>
            <div className="col-6"><span className="image fit"><img src={pic08} alt="" /></span></div>
        </div>

                    <p>
                        Drop ship est une approche holistique et à faible risque du commerce électronique qui permet
                        à etailz d'offrir l'ensemble de votre catalogue sur les marchés. Souvent, les détaillants 
                        n'achètent que vos meilleurs produits, mais grâce à notre service de livraison directe, nous
                        pouvons représenter tous vos produits, augmentant ainsi la présence de votre marque et capturant
                        des ventes supplémentaires.
                    </p>

                    <blockquote>
                        Pandora a joué un rôle très important dans la croissance de mon entreprise. C'était l'un des meilleurs
                        choix que j'ai faits pour travailler avec eux. Pandora a fait passer ma marque au niveau supérieur.
                    </blockquote>

                    <p>
                    avez-vous besoin d'aide pour augmenter votre découverte sur les marchés ? <a href="/commencez">Essayer Pandora</a>
                    </p>
                    <ul className="pagination">
                                    <li><span className="button small disabled">Position</span></li>
                                    
                                    <li><a href="/croissance" className="button small">Croissance</a></li>
                                    <li><a href="/proteger" className="button small">Protéger</a></li>
                                 
                                </ul>
                </div>
            </section>
        </div>

    </Layout>
)

export default Proteger
