import React, { Component } from 'react';
import { Button, Modal, ModalBody } from 'reactstrap';
import './App.css';

import Header from './Header';
import Grid from './Grid';
import Footer from './Footer';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: true,
      player1: '',
      computer: ''
    };

    this.toggleX = this.toggleX.bind(this);
    this.toggleO = this.toggleO.bind(this);
  }

  toggleX() {
    this.setState({
      modal: !this.state.modal,
      player1: 'X',
      computer: 'O'
    })
  }

  toggleO() {
    this.setState({
      modal: !this.state.modal,
      player1: '0',
      computer: 'X'
    })
  }


  render() {
    return (
      <div>
        <Modal isOpen={this.state.modal} toggle={this.toggleX || this.toggleO} className={this.props.className}>
          <ModalBody>
            <span className="alert-text">X or O ?</span>{' '}
            <Button onClick={this.toggleX}>X</Button>{' '}
            <Button onClick={this.toggleO}>O</Button>
          </ModalBody>
        </Modal>
        <Header />
        <Grid player1={this.state.player1} computer={this.state.computer} />
        <Footer />
      </div>
    );
  }
}

export default App;
