import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDiceOne } from '@fortawesome/free-solid-svg-icons';
import React, { Component } from 'react';

class Die extends Component {
    render() {
        return (
            <FontAwesomeIcon icon="fa-solid fa-dice-one" />
        )
    }
}

export default Die;