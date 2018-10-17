import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'

const Menu = (props) => (
    <nav id="menu">
        <div className="inner">
            <ul className="links">
                
                <li><Link onClick={props.onToggleMenu} to="/contact">QUI SOMMES-NOUS</Link></li>
                <li><Link onClick={props.onToggleMenu} to="/pointsdeventes">Points de ventes</Link></li>
                <li><Link onClick={props.onToggleMenu} to="/pandorabresil">Pandora Brasil</Link></li>
                
            </ul>
            <ul className="actions vertical">
                <li><a href="/commencez" className="button special fit">Commencez</a></li>

            </ul>
        </div>
        <a className="close" onClick={props.onToggleMenu} href="javascript:;">Close</a>
    </nav>
)

Menu.propTypes = {
    onToggleMenu: PropTypes.func
}

export default Menu
