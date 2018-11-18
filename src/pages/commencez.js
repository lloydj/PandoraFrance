import React from 'react'
import { Link } from 'gatsby'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import BannerLanding from '../components/BannerLanding'

import pic08 from '../assets/images/shoes.png'
import pic09 from '../assets/images/logos.png'
import pic10 from '../assets/images/pic10.jpg'

const Landing = (props) => (
    <Layout>
        <Helmet>
            <title>Commencez - Pandora</title>
            <meta name="Commencez" content="Pandora en détail" />
        </Helmet>

        <div id="main">
            <section id="one">
                <div className="inner">
                    <header className="major">
                        <h2>VOUS AVEZ DES QUESTIONS, NOUS AVONS LES RÉPONSES</h2>
                    </header>
                    <p>
                    Qui vend mes produits et où sont-ils vendus ?
                    Comment augmenter les ventes sur les marchés ?
                    Comment puis-je gagner de la traction sur les marchés ?
                    Quelle est la meilleure façon de prendre le contrôle de mon canal Amazon ?
                    Comment puis-je me développer à l'international ?                       
                    </p>
                </div>
            </section>
            <section id="two" className="spotlights">
                <section>
                    
                        <img src={pic08} alt="" />
                   
                    <div className="content">
                        <div className="inner">
                            <header className="major">
                                <h3>
                                    Cesser d'être une marchandise, Devenez une marque
                                </h3>
                                <h4>
                                Il nous ont fait confiance 
                                </h4>
                                <img src={pic09} alt="" />
                            </header>
                        </div>
                    </div>
                </section>
               
            
            </section>
        </div>

    </Layout>
)

export default Landing
