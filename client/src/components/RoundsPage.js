import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import RoundsMode  from './RoundsMode.js';
import RoundsTable from './RoundsTable.js';
import RoundForm from './RoundForm.js';
import FloatingButton from './FloatingButton.js'
import PopUpModal from './PopUpModal.js'
import NotificationToast from './NotificationToast.js'

class RoundsPage extends React.Component {
    constructor(props) {
            super(props);
            this.state = {mode: RoundsMode.ROUNDSTABLE,
                          deleteId: -1,
                          editId: -1,                        
                          toastMessage: "",
                          notificationToastOpen: false,
                          toastTextColor: 'black',
                          toastBackgroundColor: 'gray', 
                          popUpModalText: "Are you sure you want to delete this round?",
                          popUpModalOpen: false,
                          popUpModalButtons: {"close": this.closeModal,
                                              "save": this.closeModal }
                        };        
    }

    setMode = (newMode) => {
        this.setState({mode: newMode});
    }

    initiateEditRound = (val) => {
        this.setState({editId: val,
                       mode: RoundsMode.EDITROUND}, 
                       this.props.toggleModalOpen);
    }
    
    initiateDeleteRound = (val) => {
        this.setState({deleteId: val, notificationToastOpen: false, popUpModalOpen: true});
        //() => alert("Confirm delete goes here!"));
        //this.props.deleteRound(val);  test delete
    }

    closeToast = () => {
        this.setState({notificationToastOpen: false});
    
      }
    
      deleteRound = () => {
        this.props.deleteRound(this.state.deleteId);
        this.setState({popUpModalOpen : false, toastMessage : "Round deleted.", notificationToastOpen : true});
        

      }

      cancelDelete = () => {
        this.setState({popUpModalOpen : false, toastMessage : "Round not deleted. Cancelled.", notificationToastOpen : true});
        
      }

    render() {
        switch (this.state.mode) {
        case RoundsMode.ROUNDSTABLE: 
            return (
                <>
                    <RoundsTable rounds={this.props.rounds}
                                initiateDeleteRound={this.initiateDeleteRound}
                                deleteRound={this.props.deleteRound} 
                                deleteId={this.state.deleteId}
                                initiateEditRound= {this.initiateEditRound}
                                updateRound= {this.props.updateRound}
                                setMode={this.setMode} 
                                toggleModalOpen={this.props.toggleModalOpen}
                                menuOpen={this.props.menuOpen} /> 
                    <FloatingButton
                        icon="calendar"
                        label={"Log Round"}
                        menuOpen={this.props.menuOpen}
                        action={()=>this.setState({mode: RoundsMode.LOGROUND},
                                    this.props.toggleModalOpen)} />

                {this.state.popUpModalOpen ? <PopUpModal 
                 deleteRound= {this.deleteRound}
                 cancelDelete={this.cancelDelete}
                 text = {this.state.popUpModalText}
                 modalButtons = {this.state.popUpModalButtons}
                 /> : null } 

                {this.state.notificationToastOpen ? <NotificationToast textColor= {this.state.toastTextColor} 
                            backgroundColor = {this.state.toastBackgroundColor}
                        message = {this.state.toastMessage}   
                            closeToast = {this.closeToast} /> 
                                : null}       
            </>
            );
        case RoundsMode.LOGROUND:
            return (
            <RoundForm mode={this.state.mode}
                    roundData={null}
                    saveRound={this.props.addRound}
                    setMode={this.setMode}
                    toggleModalOpen={this.props.toggleModalOpen} />
            );
        case RoundsMode.EDITROUND:
            let i;
            for (i = 0; i < this.props.rounds.length; ++i) {
                if (this.props.rounds[i].roundNum === this.state.editId) {
                    break;
                }
            }
            return (
            <RoundForm mode={this.state.mode}
                editId = {this.state.editId}
                roundData={this.props.rounds[i]}
                saveRound={this.props.updateRound}
                setMode={this.setMode}
                toggleModalOpen={this.props.toggleModalOpen} />
            );

        case RoundsMode.DELETEROUND:
                this.setState({popUpModalOpen : true});   
        } 
    
    
    }  //ends render

} //ends class

export default RoundsPage;