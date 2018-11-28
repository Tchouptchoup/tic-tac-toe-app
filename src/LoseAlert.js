import React, { Component } from 'react';
import { Button, Modal, ModalBody } from 'reactstrap';

class LoseAlert extends Component {
  constructor(props) {
    super(props)
    this.state = {
      lose: this.props.lose,
      isOpen: false
    }
  }

  static getDerivedStateFromProps(props, state) {
    if (props.lose !== state.lose) {
      return { lose: props.lose }
    }
    else {
      return null
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.lose !== prevState.lose) {
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
            <span>Game over !</span>
            <p className="mt-3"><Button onClick={this.toggle}>Restart ?</Button></p>
          </ModalBody>
        </Modal>
      </div>
    )
  }
}

export default LoseAlert