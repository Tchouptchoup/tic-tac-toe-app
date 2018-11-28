import React, { Component } from 'react';
import { Button, Modal, ModalBody } from 'reactstrap';

class WinnerAlert extends Component {
  constructor(props) {
    super(props)
    this.state = {
      winner: this.props.winner,
      isOpen: false
    }
  }

  static getDerivedStateFromProps(props, state) {
    if (props.winner !== state.winner) {
      return { winner: props.winner }
    }
    else {
      return null
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.winner !== prevState.winner) {
      this.setState({
        isOpen: !this.state.isOpen
      })
    }
  }

  toggle = () => {
    window.location.reload()
  }

  render() {
    return (
      <div>
        <Modal isOpen={this.state.isOpen}>
          <ModalBody>
            <span>{this.state.winner} win ! </span>
            <p className="mt-3"><Button onClick={this.toggle}>Restart ?</Button></p>
          </ModalBody>
        </Modal>
      </div>
    )
  }
}

export default WinnerAlert