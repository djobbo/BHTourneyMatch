import React, { Component, createContext } from 'react';

export const SetContext = createContext();

class SetContextProvider extends Component {
    state = { teamCount: 2, playerCount: 1, set: {} }
    setTeamCount = (teamCount) => {
        this.setState({ teamCount })
    }
    setPlayerCount = (playerCount) => {
        this.setState({ playerCount })
    }
    setPlayerProp = (playerID, prop, value) => {
        this.setState(prevState => ({ set: { ...prevState.set, [`${playerID}_${prop}`]: value }}))
    }
    getMarkdownOutput = () => {
        let output = 'OUTPUT HERE';
        return output;
    }
    render() { 
        return (
        <SetContext.Provider value={
            {
                ...this.state,
                setSetContext: this.setSetContext,
                setPlayerName: this.setPlayerProp,
                setTeamCount: this.setTeamCount,
                setPlayerCount: this.setPlayerCount,
                getMarkdownOutput: this.getMarkdownOutput
            }
        }>
            {this.props.children}
        </SetContext.Provider>
        );
    }
}
 
export default SetContextProvider;