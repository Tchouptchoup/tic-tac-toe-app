import React, { Component } from 'react';
import './Case.css';

class Case extends Component {
    constructor(props) {
        super(props);
        this.state = {
            caseText: '',
            id: props.id,
            caseComputer: props.caseComputer
        }
    }

    handleClick = () => {
        this.setState({ caseText: this.props.player1 })
        this.props.action(this.state.id)
    }

    static getDerivedStateFromProps(props, state) {
        if (props.caseComputer !== state.caseComputer) {
            return { caseComputer: props.caseComputer }
        }
        else {
            return null
        }
    }

    componentDidUpdate(prevProps, prevState) {
        if (this.state.caseComputer !== prevState.caseComputer) {
            this.computerAction()
        }
    }

    computerAction = () => {
        if (this.state.id === this.state.caseComputer) {
            this.setState({
                caseText: this.props.computer
            })
            this.props.actionComputer(this.state.id)
        }
    }

    render() {
        return (
            <div>
                <button className="bouton" type="button" onClick={this.handleClick}>
                    {this.state.caseText}
                </button>
            </div>
        )
    }
};

export default Case;