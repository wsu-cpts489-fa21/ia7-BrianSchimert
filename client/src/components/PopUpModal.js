import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';


class PopUpModal extends React.Component {


    myFunction(){
        var myArray = []
        var i;
        for(i=0; i < this.props.modalButtons.length; i++){
            myArray[i] = (
                <Button onClick={this.props.modalButtons[i].key()}>
                    {this.props.modalButtons[i].value()}
                </Button>
            );
        }
        return myArray;
    }
//myobj[Object.keys(myobj)[0]];
    render() {
        return(
           <>
      <Modal show={true} onHide={this.props.closeModal}>
        <Modal.Header closeButton>
        </Modal.Header>
        <Modal.Body> {this.props.text} </Modal.Body>
        <Modal.Footer>

         <Button variant="primary" onClick={this.props.closeModal}>
            Close
          </Button>
          <Button variant="primary" onClick={this.props.closeModal}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
           </>
        );
    } 

}

export default PopUpModal;