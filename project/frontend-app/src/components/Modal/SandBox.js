import React, { Component, Fragment } from 'react';
import Modal from '../Modal';

class Sandbox extends Component {
    state = {
        isOpen: false,
    };

    openModal = () => {
        this.setState({ isOpen: true });
    };

    handleSubmit = () => {
        console.log('Submit function!');
        this.setState({ isOpen: false });
    };

    handleCancel = () => {
        console.log('Cancel function!');
        this.setState({ isOpen: false });
    };

    render() {
        return (
            <Fragment>
                <h2><span>1. Base Dialog (Modal) window:</span></h2>
                <button onClick={this.openModal}>Show modal</button>
                <Modal
                    title="Test Dialog window"
                    isOpen={this.state.isOpen}
                    onCancel={this.handleCancel}
                    onSubmit={this.handleSubmit}
                >
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a</p>
                </Modal>
                {console.log(this.state.isOpen)}
            </Fragment>
        );
    }
}

export default Sandbox;