import React from 'react'
import { Link } from 'gatsby'
import Helmet from 'react-helmet'
import Layout from '../components/layoutbr'
import BannerLanding from '../components/BannerLandingbr'

import pic08 from '../assets/images/pic08.jpg'
import pic09 from '../assets/images/pic09.jpg'
import pic10 from '../assets/images/pic10.jpg'

const Landing = (props) => (
    <Layout>
        <Helmet>
            <title>Pandore Brasil</title>
            <meta name="description" content="Landing Page" />
        </Helmet>

        <BannerLanding />

        <div id="main">
            <section id="one">
                <div className="inner">
                    <header className="major">
                        <h2>O que fazemos</h2>
                    </header>
                    <p>
                        Damos o tom para o varejo no mercado online. Fazemos parceria com marcas líderes para impulsionar
                        o crescimento de vendas no mercado com software proprietário e estratégias de classe mundial. Nossa
                        abordagem de três etapas de última geração foi aperfeiçoada e fortalecida ao longo de nossos dez
                        anos de experiência em comércio eletrônico.                    
                    </p>
                </div>
            </section>
            <section id="two" className="spotlights">
                
                <section>
                    <Link to="/generic" className="image">
                        <img src={pic09} alt="" />
                    </Link>
                    <div className="content">
                        <div className="inner">
                            <header className="major">
                                <h3>CRESCIMENTO ATRAVÉS DO PODER DOS DADOS</h3>
                            </header>
                            <p>
                                Os dados são a base de tudo o que fazemos. Desenvolvemos o software de mercado mais avançado
                                para ajudá-lo a tomar decisões deliberadas, impulsionar seu crescimento e medir seu sucesso.
                                Damos o tom para o varejo no mercado online. Fazemos parceria com marcas líderes para impulsionar
                                o crescimento de vendas no mercado com software proprietário e estratégias de classe mundial. 
                                Nossa abordagem de ponta, em três etapas, foi aperfeiçoada e fortalecida ao longo de dez anos de
                                experiência no setor de comércio eletrônico.                            
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
                                <h3>DESCUBRA O OMNICHANNEL REAL</h3>
                            </header>
                            <p>
                                A Pandora oferece-lhe mais oportunidades cross-channel do que qualquer outro parceiro de mercado, 
                                graças à constante inovação e às nossas parcerias omnichannel. Os consumidores ainda apreciam a 
                                capacidade de testar, experimentar e armazenar seu produto antes de comprá-lo. A presença em lojas
                                físicas reforça a reputação da sua marca e aumenta sua receita.                         
                            </p>
                            
                        </div>
                    </div>
                </section>
            </section>
        </div>

    </Layout>
)

export default Landing
