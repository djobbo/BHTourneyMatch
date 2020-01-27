import React, { Component } from 'react';

class Player extends Component {
    render() {

        // const setMatchContext = this.props.setMatchContext;

        return (
            <div className="player">
                <label>Player Name:</label>
                <input type="text" />
                <div className="character">
                    <div>
                        <label>Score:</label>
                        <input type="text" className="scoreInput"/>
                    </div>
                    <div>
                        <label>Character:</label>
                        <select>
                            <option value="ada">Ada</option>
                            <option value="wu_shang">Wu Shang</option>
                            <option value="brynn">Brynn</option>
                            <option value="teros">Teros</option>
                        </select>
                    </div>
                </div>
            </div>
        )
    }
}

export default Player;