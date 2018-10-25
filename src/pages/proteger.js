import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/layouts'
import { Link } from 'gatsby'
import pic08 from '../assets/images/Proteger-02.png'
import pic44 from '../assets/images/Proteger-01.png'

const Proteger = (props) => (
    <Layout>
        <Helmet>
            <title>Protéger votre marque - Pandora</title>
            <meta name="description" content="Generic Page" />
        </Helmet>

        <div id="main" className="alt">
            <section id="one">
                <div className="inner">
                    <header className="major">
                        <h1>Protéger votre marque</h1>
                    </header>
                    <span className="image main"><img src={pic44} alt="" /></span>

                    <p>
                    Votre réputation est la base de votre succès sur les marchés. Notre objectif est de faire en sorte qu'il soit aussi simple que possible de veiller à ce que votre marque soit 
                    représentée de manière précise et cohérente sur tous les canaux. C'est votre vision ; nous sommes passionnés par sa protection.
                    </p>
        <div className="grid-wrapper">
            <div className="col-6">
                  
                        <h3>Responsable de compte dédié</h3>
                        <p>Votre point de contact s'engage à vous aider à grandir, à partager les meilleures pratiques et à vous fournir des conseils stratégiques.</p>
                            
                        <h3>Expertise en conformité</h3>
                        <p>Notre équipe interne de conformité vous aide à vous assurer que toutes les normes de conformité du marché en ligne sont respectées.</p>
                            
                        <h3>Liens avec le marché</h3>
                        <p>Nous avons des directeurs de comptes sur tous les principaux marchés pour vous donner accès à des services exclusifs et vous aider à faire face à toute complication qui pourrait survenir.</p>
                            
                  
            </div>
            <div className="col-6"><span className="image fit"><img src={pic08} alt="" /></span></div>
        </div>

                    <p>
                        Puisque Pandora fait la vente finale au consommateur, nous éliminons le casse-tête de la taxe de vente et d'utilisation en déposant une déclaration auprès de chaque état respectif, pour que vous n'ayez pas à le faire.
                        Notre logiciel de surveillance de marque propriétaire vous donne le pouvoir d'identifier les vendeurs non autorisés et de surveiller les prix.
                        Nous avons des directeurs de comptes sur tous les principaux marchés pour vous donner accès à des services exclusifs et vous aider à faire face à toute complication qui pourrait survenir.
                        Atténuez les préoccupations des clients et assurez un service rapide à vos clients.
                    </p>

                    <blockquote>
                        Nous avons trouvé Pandora accessible, professionnel et leur software facile à utiliser. 
                        Nous avons l'impression que vous faites vraiment partie de leur équipe et que vous êtes important. 
                        L'engagement de l'équipe envers notre produit est une source d'inspiration et ils ont été prêts à pousser
                        les frontières à nos côtés                    
                    </blockquote>

                    <p>
                    avez-vous besoin d'aide pour protéger votre marque sur les marchés ? <a href="/commencez">Essayer Pandora</a>
                    </p>
                    <ul className="pagination">
                                    <li><span className="button small disabled">Protéger</span></li>
                                    
                                    <li><a href="/promouvoir" className="button small">promouvoir</a></li>
                                    <li><a href="/croissance" className="button small">Croissance</a></li>
                                 
                                </ul>
                </div>
            </section>
        </div>

    </Layout>
)

export default Proteger
