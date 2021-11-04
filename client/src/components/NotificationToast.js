import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import logo from '../images/sslogo2.png'
import { faWindowClose } from "@fortawesome/free-solid-svg-icons";

//notification toast
class NotificationToast extends React.Component {

    render() {
        return (
            <div style={{fontSize : "22px", color : this.props.textColor, backgroundColor : this.props.backgroundColor, display: "flex"}}>
            {this.props.message} 
            <button style={{marginLeft: "auto"}} onClick= {() => this.props.closeToast()}>
                   <FontAwesomeIcon icon={faWindowClose}/>
                </button>
           
            </div>
            );
    }   
}

export default NotificationToast;
