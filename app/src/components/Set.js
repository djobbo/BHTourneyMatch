import React, { Component } from 'react';

import Team from './Team.js'

class Set extends Component {
    constructor(props) {
        super(props);
        this.state = {
            teamCount: '2',
            playerCount: '1'
        };

        this.setTeamCount = (event) => {
            this.setState({
                teamCount: event.target.value
            });
        }

        this.setPlayerCount = (event) => {
            this.setState({
                playerCount: event.target.value
            });
        }

        this.setMatchContext = (team, player, context) => {
            this.setState({
                matchContext: { team: { player: { context } } }
            })
        }

        this.onSubmit = (event) => {
            this.setState({
                output: ''
            })
        }
    }

    render() {

        const teams = [];

        for (let i = 0; i < this.state.teamCount; i++) {
            const team = `team${i}`;
            teams.push(<Team key={ team } team_id={ team } playerCount={ this.state.playerCount } setMatchContext={ this.setMatchContext } />);
        }

        return (
            <form>
                <h2>Brawlhalla Set</h2>
                <div>
                    <div>
                        <label>Team Count: { this.state.teamCount }</label>
                        <input type="range" min="2" max="5" step="1" value={this.state.teamCount} onChange={this.setTeamCount} />
                    </div>
                    <div>
                        <label>Player Count: { this.state.playerCount }</label>
                        <input type="range" min="1" max="10" step="1" value={this.state.playerCount} onChange= {this.setPlayerCount} />
                    </div>
                </div>
                <div className="teams">
                    { teams }
                </div>
                <button>Submit Match</button>
            </form>
        )
    }
}

export default Set;