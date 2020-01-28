import React, { Component } from 'react';
import { SetContext } from '../contexts/SetContext';
import Team from './Team.js'

class Set extends Component {
    render() {
        return (
            <SetContext.Consumer>{(setContext) => {
                const { teamCount, playerCount, setTeamCount, setPlayerCount, getMarkdownOutput } = setContext;
                const teams = [];
                for (let i = 0; i < teamCount; i++) {
                    teams.push(<Team key={ i } teamID={ i } playerCount={ playerCount } />);
                }
                return(
                    <form>
                        <h2>Brawlhalla Set</h2>
                        <div>
                            <div>
                                <label>Team Count: { teamCount }</label>
                                <input type="range" min="2" max="5" step="1" value={teamCount} onChange={e => setTeamCount(e.target.value)} />
                            </div>
                            <div>
                                <label>Player Count: { playerCount }</label>
                                <input type="range" min="1" max="10" step="1" value={playerCount} onChange={e => setPlayerCount(e.target.value)} />
                            </div>
                        </div>
                        <div className="teams">
                            { teams }
                        </div>
                        <p>
                            { getMarkdownOutput() }
                        </p>
                    </form>
                )
            }}
            </SetContext.Consumer>
        )
    }
}

export default Set;