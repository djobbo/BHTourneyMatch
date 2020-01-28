import React, { Component } from 'react';
import { SetContext } from '../contexts/SetContext';

class Player extends Component {
    render() {
        return (
            <SetContext.Consumer>{(setContext) => {
                const { set, setPlayerName } = setContext;
                const { playerID } = this.props;
                return (
                    <div className="player">
                        <label>({ playerID }) Player Name:</label>
                        <input type="text" value={set[`${playerID}_name`] || ''} onChange={e => setPlayerName(playerID, 'name', e.target.value)} />
                        <div className="character">
                            <div>
                                <label>Score:</label>
                                <input type="text" className="scoreInput" value={set[`${playerID}_score`] || ''} onChange={e => setPlayerName(playerID, 'score', e.target.value)} />
                            </div>
                            <div>
                                <label>Character:</label>
                                <select value={set[`${playerID}_char`] || ''} onChange={e => setPlayerName(playerID, 'char', e.target.value)} >
                                    <option value="ada">Ada</option>
                                    <option value="wu_shang">Wu Shang</option>
                                    <option value="brynn">Brynn</option>
                                    <option value="teros">Teros</option>
                                </select>
                            </div>
                        </div>
                    </div>
                )
            }}
            </SetContext.Consumer>
        )
    }
}

export default Player;