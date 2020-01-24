import React, { Component } from 'react';

class Character extends Component {
    render() {
        return (
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
        )
    }
}

export default Character;