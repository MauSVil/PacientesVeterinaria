import React from 'react';
import PropTypes from 'prop-types'

const Header = (props) => {
    return (
        <div>
            <header>
                <h1 className="text-center">{props.titulo}</h1>
            </header>
        </div>
    );
};
Header.propTypes={
    titulo: PropTypes.string.isRequired
}

export default Header;