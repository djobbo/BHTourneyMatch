import React, { Component } from 'react';

import Player from './Player.js'

class Team extends Component {
    render() {
        return (
            <div className="team">
                <label>Select Color:</label>
                <select>
                    <option value="ada">Red</option>
                    <option value="wu_shang">Blue</option>
                    <option value="brynn">Green</option>
                    <option value="teros">Yellow</option>
                </select>
                <div className="players">
                    <Player />
                    <Player />
                </div>
            </div>
        )
    }
}

export default Team;