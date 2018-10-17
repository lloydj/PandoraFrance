import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/layouts'

import pic44 from '../assets/images/pic11.jpg'
import pic08 from '../assets/images/pic11.jpg'

const Proteger = (props) => (
    <Layout>
        <Helmet>
            <title>Croissance - Pandora</title>
            <meta name="description" content="Generic Page" />
        </Helmet>

               <div id="main" className="alt">
            <section id="one">
                <div className="inner">
                    <header className="major">
                        <h1>CROISSANCE A TRAVERS LA PUISSANCE DES DONNÉES</h1>
                    </header>
                    <span className="image main"><img src={pic44} alt="" /></span>

                    <p>
                        Les données sont à la base de tout ce que nous faisons. Nous avons développé le logiciel de 
                        marché le plus avancé pour vous aider à prendre des décisions délibérées, à alimenter votre 
                        croissance et à mesurer votre succès. Nous donnons le ton pour la vente au détail sur le marché
                        en ligne. Nous nous associons à des marques de premier plan pour les guider dans la croissance
                        de leurs ventes sur le marché grâce à nos logiciels exclusifs et à nos stratégies de premier 
                        ordre. Notre méthode en trois étapes, à la pointe de l'industrie, a été perfectionnée et renforcée
                        au cours de nos dix années d'expérience dans l'industrie du commerce électronique.
                    </p>

        <div className="grid-wrapper">
            <div className="col-6">
                  
                        <h2>EN TROIS ÉTAPES</h2>
                        <p>
                            En utilisant notre technologie exclusive, nous protégeons, positionnons et faisons la promotion
                            de votre marque. Nous commençons par surveiller la présence de votre marque, les prix et les 
                            vendeurs sur le marché grâce à notre logiciel de surveillance de marque. Avec une bonne base en
                            place, nous positionnons vos inscriptions grâce à nos meilleures pratiques et à notre technologie
                            de gestion des stocks. Maintenant, il est temps de promouvoir votre marque. Au fil d'une grande
                            expérience, nous avons développé des services marketing qui ciblent stratégiquement les 
                            consommateurs les plus pertinents et affinent continuellement chaque campagne en fonction des
                            résultats.
                        </p>
                            
                            
                  
            </div>
            <div className="col-6"><span className="image fit"><img src={pic08} alt="" /></span></div>
        </div>


                    <ul className="pagination">
                                    <li><span className="button small disabled">Croissance</span></li>
                                    
                                    <li><a href="/promouvoir" className="button small">promouvoir</a></li>
                                    <li><a href="/proteger" className="button small">Protéger</a></li>
                                 
                     </ul>
                </div>
            </section>

                                        <div className="box alt">
                                    <div className="grid-wrapper">
                                        <div className="col-4">
                                        <span className="image fit"><img src={pic08} alt="" /></span>
                                        <h2>PROTÉGER</h2>
                                        <p>
                                            L'intégrité de votre marque pour garder une longueur d'avance.
                                        </p>
                                        </div>
                                        <div className="col-4"><span className="image fit"><img src={pic08} alt="" /></span></div>
                                        <div className="col-4"><span className="image fit"><img src={pic08} alt="" /></span></div>
                                   
                                    </div>
                                </div>
        </div>

    </Layout>
)

export default Proteger
