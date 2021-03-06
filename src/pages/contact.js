import React from 'react'
import { Link } from 'gatsby'
import Helmet from 'react-helmet'
import Layout from '../components/layouts'
import BannerLanding from '../components/BannerLandingct'

import pic08 from '../assets/images/team.png'
import pic09 from '../assets/images/PhilnLloyd.png'
import pic10 from '../assets/images/Truck.png'

const Landing = (props) => (
    <Layout>
        <Helmet>
            <title>Contact</title>
            <meta name="description" content="Landing Page" />
        </Helmet>

        <BannerLanding />

        <div id="main">
            <section id="one">
                <div className="inner">
                    <header className="major">
                        <h2>MARCHÉ DU DÉTAIL EN LIGNE</h2>
                    </header>
                    <p>
                        Grâce à une passion incroyable, une ténacité absolue et une mentalité de bootstrap, Pandora
                        a connu une croissance continue et rentable depuis sa fondation en 2016. Notre équipe reste
                        animée par la culture travaillante, curieuse et pleine d'entrain que nous entretenons depuis
                        le premier jour. Ce dévouement à la culture et à l'innovation a permis à etailz de devenir 
                        le leader de la distribution et de l'expertise sur le marché.
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
                                <h3>NOUS DONNONS LE TON</h3>
                            </header>
                            <p>
                                Pandora est un endroit où les idées sont célébrées, où les employés sont valorisés et où
                                il y a toujours quelque chose de nouveau et d'excitant à apprendre. etailz est créatif, 
                                encourageant, engageant, responsabilisant et stimulant. Que demander de plus dans un lieu
                                de travail ?                                
                             </p>
                            <ul className="actions">
                                
                            </ul>
                        </div>
                    </div>
                </section>
                <section>
                    <Link to="/generic" className="image">
                        <img src={pic09} alt="" />
                    </Link>
                    <div className="content">
                        <div className="inner">
                            <header className="major">
                                <h3>NOTRE HISTOIRE</h3>
                            </header>
                            <p>
                                le concept pandora a été créé à partir des opportunités évidentes que Philippe, le fondateur, voyait dans le
                                commerce électronique alors qu'il vivait à Montréal.  De retour à Paris, avec l'aide de son jeune frère Lloyd,
                                ils ont décidé de prendre un risque calculé et ont construit cette nouvelle option pour permettre aux petites
                                et moyennes marques de vendre et d'être visibles en ligne. L'objectif est d'uniformiser les règles du jeu
                                pour tous et de vous permettre d'atteindre de nouveaux clients. Après beaucoup d'apprentissage, d'adaptation
                                et de perfectionnement,
                                nous avons fait de Pandora le détaillant le plus sophistiqué sur Amazon, Jet, eBay, Walmart et Wish,
                                et nous n'avons pas l'intention de ralentir. Cette passion 
                                incroyable et cette approche honnête ont permis à Pandora de se positionner comme le partenaire de
                                confiance sur le marché de la vente au détail de nombreuses marques.                                
                            </p>
                            <ul className="actions">
                               
                            </ul>
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
                                <h3>PANDORA FRANCE</h3>
                            </header>
                            <p>
                                Nous lançons le commerce de détail dans l'ère moderne. Où et quand les consommateurs achètent, votre
                                marque doit être prête pour eux. Pandora offre des opportunités sans précédent sur tous les principaux
                                marchés en ligne et les principaux sites Web directement aux consommateurs.
                            </p>
                            <ul className="actions">
                                <li><Link to="/commencez" className="button">Commencez</Link></li>
                            </ul>
                        </div>
                    </div>
                </section>
            </section>
        </div>

    </Layout>
)

export default Landing