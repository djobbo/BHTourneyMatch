import React, { Component } from 'react';

import Team from './Team.js'

class Set extends Component {
    render() {
        return (
            <div>
                <h2>Brawlhalla Set</h2>
                <div className="teams">
                    <Team />
                    <Team />
                </div>
                <button>Submit Match</button>
            </div>
        )
    }
}

export default Set;