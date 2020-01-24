import React, { Component } from 'react';

import Character from './Character.js'

class Player extends Component {
    render() {
        return (
            <div className="player">
                <label>Player Name:</label>
                <input type="text" />
                <Character />
            </div>
        )
    }
}

export default Player;