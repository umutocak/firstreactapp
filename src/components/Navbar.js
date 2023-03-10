import React from "react";
import PropTypes from 'prop-types';

function Navbar(props){
    return (
        <dvi>
            <h3>{props.title}</h3>
        </dvi>
    );
}
Navbar.propTypes = {
    title : PropTypes.string.isRequired
}

Navbar.defaultProps = {
    title : "Default"
}

export default Navbar;