import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/layouts'

import pic44 from '../assets/images/picz.png'
import pic08 from '../assets/images/position-02.png'
import pic12 from '../assets/images/img02.png'
import pic13 from '../assets/images/img03.png'
import pic14 from '../assets/images/img01.png'


const Proteger = (props) => (
    <Layout>
        <Helmet>
            <title>Service Bibliothèque virtuelle</title>
            <meta name="description" content="Generic Page" />
        </Helmet>

               <div id="main" className="alt">
            <section id="one">
                <div className="inner">
                    <header className="major">
                        <h1>Service Bibliothèque virtuelle</h1>
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
                        <div className="col-4">
                        <span className="image fitted right"><img src={pic14} alt="" /></span>
                            <h3>0 déchets</h3>
                                <p> 
                                    Nous vous aidons à ne plus générer de déchets de livres. Pour ce faire, 
                                    nous alignons nos technologies afin d'évaluer la valeur réelle de chaque
                                    livre que vous possédez et voir la probabilité de faire correspondre
                                    les livres avec les acheteurs en ligne dans tous les E-marchés. Cela vous
                                    permet de ne pas avoir à vous soucier de la plupart des livres qui ne
                                    se vendent pas et de développer de nouvelles façons de faire plus d'argent
                                    pour votre bibliothèque.
                                </p>
                        </div>
                        <div className="col-4">
                        <span className="image fitted right"><img src={pic13} alt="" /></span>
                            <h3>Renouveler vos livres</h3>
                                <p>
                                    Nous avons parlé à de nombreux propriétaires de bibliothèques et un thème
                                    revient toujours. Le stock de livres continue de s'empiler et il devient
                                    difficile de gérer l'arrivée de tant de nouveaux livres. Il semble également
                                    impossible de vendre certains de ces nouveaux arrivants qui se transforment
                                    lentement en vieux déchets. Avec ce programme, vous êtes en mesure d'utiliser
                                    notre aide pour obtenir de la valeur de ce stock et garder votre étagère pleine du bon livre. 
                                </p>
                        </div>
                        <div className="col-4">
                        <span className="image fitted right"><img src={pic12} alt="" /></span>
                            <h3>Value immediate</h3>
                                <p>
                                    La liquidité est l'un des facteurs clés du succès d'une entreprise. Peu importe
                                    votre secteur d'activité, nous savons que vous avez toujours besoin d'argent comptant.
                                    C'est pourquoi nous nous assurons de maintenir votre revenu stable après 30 jours
                                    d'utilisation de notre service. Cette constance vous aide à faire des prévisions
                                    et à prendre plus de risques sans jamais perdre complètement
                                </p>
                        </div>
                    </div>

                    <p>
                        Drop ship est une approche holistique et à faible risque du commerce électronique qui permet
                        à Pandora d'offrir l'ensemble de votre catalogue sur les marchés. Souvent, les détaillants 
                        n'achètent que vos meilleurs produits, mais grâce à notre service de livraison directe, nous
                        pouvons représenter tous vos produits, augmentant ainsi la présence de votre marque et capturant
                        des ventes supplémentaires.
                    </p>

                    <blockquote>
                        Pandora a joué un rôle très important dans la croissance de mon entreprise. C'était l'un des meilleurs
                        choix que j'ai faits pour travailler avec eux. Pandora a fait passer ma marque au niveau supérieur.
                    </blockquote>

                    <p>
                    avez-vous besoin d'aide pour augmenter votre découverte sur les marchés ? <a href="https://docs.google.com/forms/d/e/1FAIpQLSfkUuakQcLHDFAZ9LIDX-UViiRWMWK4KHIlfFWmMjMX_Z1NFA/viewform?usp=sf_link">Participer au programme Pandora Books</a>
                    </p>
                    <ul className="pagination">
                                    
                                    
                                    <li><a href="/croissance" className="button small">Croissance</a></li>
                                    <li><a href="/proteger" className="button small">Protéger</a></li>
                                    <li><a href="/position" className="button small">Position</a></li>
                                 
                                </ul>
                </div>
            </section>
        </div>

    </Layout>
)

export default Proteger
