import React, { Component } from 'react';
import './Grid.css';

import Case from './Case';
import WinnerAlert from './WinnerAlert';
import LoseAlert from './LoseAlert';

class Grid extends Component {
    constructor(props) {
        super(props);
        this.state = {
            player1Tab: '',
            computerTab: '',
            caseComputer: 0,
            winner: '',
            lose: '',
            nbClic: 0
        }
    }

    handlerClick = (id) => {
        if (this.state.nbClic === 8) {
            this.setState({
                lose: 'yes'
            })
        }
        else {
            this.setState({
                player1Tab: this.state.player1Tab.concat(id),
                nbClic: this.state.nbClic + 1
            }, () => this.areYouWinner(this.state.player1Tab))
        }
    }

    handlerClickComputer = (id) => {
        if (this.state.nbClic === 8) {
            this.setState({
                lose: 'yes'
            })
        }
        else {
            this.setState({
                computerTab: this.state.computerTab.concat(id),
                nbClic: this.state.nbClic + 1
            }, () => this.isComputerWinner(this.state.computerTab))
        }
    }

    randomNumber = (player1Tab, computerTab) => {
        let playersTab = player1Tab.split('').map(digit => Number(digit)).concat(computerTab.split('').map(digit1 => Number(digit1)))
        let computerNum = Math.floor(Math.random() * 9) + 1
        if (playersTab.includes(computerNum)) {
            return this.randomNumber(player1Tab, computerTab)
        }
        return computerNum
    }

    areYouWinner = (casesTab) => {
        const winnerTabs = [[1, 2, 3], [4, 5, 6], [7, 8, 9], [1, 4, 7], [2, 5, 8], [3, 6, 9], [1, 5, 9], [3, 5, 7]]
        const playerTab = casesTab.split('').map(digit => Number(digit))
        console.log(playerTab)
        let winnerCount = 0
        if (playerTab.length >= 3) {
            playerTab.push(0)
            for (let i = 0; i < winnerTabs.length; i += 1) {
                if (winnerTabs[i].includes(playerTab[0])) {
                    winnerCount += 1
                }
                if (winnerTabs[i].includes(playerTab[1])) {
                    winnerCount += 1
                }
                if (winnerTabs[i].includes(playerTab[2])) {
                    winnerCount += 1
                }
                if (winnerTabs[i].includes(playerTab[3])) {
                    winnerCount += 1
                }
                if (winnerCount === 3) {
                    return this.setState({
                        winner: 'You'
                    })
                }
                winnerCount = 0
                console.log(winnerCount)
            }
        }
        return this.computerTurn()
    }

    isComputerWinner = (casesTab) => {
        const winnerTabs = [[1, 2, 3], [4, 5, 6], [7, 8, 9], [1, 4, 7], [2, 5, 8], [3, 6, 9], [1, 5, 9], [3, 5, 7]]
        const playerTab = casesTab.split('').map(digit => Number(digit))
        console.log(playerTab)
        let winnerCount = 0
        if (playerTab.length >= 3) {
            playerTab.push(0)
            for (let i = 0; i < winnerTabs.length; i += 1) {
                if (winnerTabs[i].includes(playerTab[0])) {
                    winnerCount += 1
                }
                if (winnerTabs[i].includes(playerTab[1])) {
                    winnerCount += 1
                }
                if (winnerTabs[i].includes(playerTab[2])) {
                    winnerCount += 1
                }
                if (winnerTabs[i].includes(playerTab[3])) {
                    winnerCount += 1
                }
                if (winnerCount === 3) {
                    return this.setState({
                        winner: 'Computer'
                    })
                }
                winnerCount = 0
                console.log(winnerCount)
            }
        }
        return null
    }

    computerTurn = () => {
        let number = this.randomNumber(this.state.player1Tab, this.state.computerTab)
        this.setState({
            caseComputer: number
        })
    }

    render() {
        return (
            <div>
                <WinnerAlert winner={this.state.winner} />
                <LoseAlert lose={this.state.lose} />
                <div className="container">
                    <div className="row d-flex justify-content-center">
                        <div className="col-2 border border-dark Case action={this.handlerClick}">
                            <Case
                                action={this.handlerClick}
                                actionComputer={this.handlerClickComputer}
                                player1={this.props.player1}
                                computer={this.props.computer}
                                id={1}
                                caseComputer={this.state.caseComputer}
                            />
                        </div>
                        <div className="col-2 border-top border-bottom border-dark Case action={this.handlerClick}">
                            <Case
                                action={this.handlerClick}
                                actionComputer={this.handlerClickComputer}
                                player1={this.props.player1}
                                computer={this.props.computer}
                                id={2}
                                caseComputer={this.state.caseComputer}
                            />
                        </div>
                        <div className="col-2 border border-dark Case action={this.handlerClick}">
                            <Case
                                action={this.handlerClick}
                                actionComputer={this.handlerClickComputer}
                                player1={this.props.player1}
                                computer={this.props.computer}
                                id={3}
                                caseComputer={this.state.caseComputer}
                            />
                        </div>
                    </div>
                    <div className="row d-flex justify-content-center">
                        <div className="col-2 border-left border-right border-dark Case action={this.handlerClick}">
                            <Case
                                action={this.handlerClick}
                                actionComputer={this.handlerClickComputer}
                                player1={this.props.player1}
                                computer={this.props.computer}
                                id={4}
                                caseComputer={this.state.caseComputer}
                            />
                        </div>
                        <div className="col-2 border-dark Case action={this.handlerClick}">
                            <Case
                                action={this.handlerClick}
                                actionComputer={this.handlerClickComputer}
                                player1={this.props.player1}
                                computer={this.props.computer}
                                id={5}
                                caseComputer={this.state.caseComputer}
                            />
                        </div>
                        <div className="col-2 border-left border-right border-dark Case action={this.handlerClick}">
                            <Case
                                action={this.handlerClick}
                                actionComputer={this.handlerClickComputer}
                                player1={this.props.player1}
                                computer={this.props.computer}
                                id={6}
                                caseComputer={this.state.caseComputer}
                            />
                        </div>
                    </div>
                    <div className="row d-flex justify-content-center">
                        <div className="col-2 border border-dark Case action={this.handlerClick}">
                            <Case
                                action={this.handlerClick}
                                actionComputer={this.handlerClickComputer}
                                player1={this.props.player1}
                                computer={this.props.computer}
                                id={7}
                                caseComputer={this.state.caseComputer}
                            />
                        </div>
                        <div className="col-2 border-top border-bottom border-dark Case action={this.handlerClick}">
                            <Case
                                action={this.handlerClick}
                                actionComputer={this.handlerClickComputer}
                                player1={this.props.player1}
                                computer={this.props.computer}
                                id={8}
                                caseComputer={this.state.caseComputer}
                            />
                        </div>
                        <div className="col-2 border border-dark Case action={this.handlerClick}">
                            <Case
                                action={this.handlerClick}
                                actionComputer={this.handlerClickComputer}
                                player1={this.props.player1}
                                computer={this.props.computer}
                                id={9}
                                caseComputer={this.state.caseComputer}
                            />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
};

export default Grid;