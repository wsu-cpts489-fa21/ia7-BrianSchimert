import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import logo from '../images/sslogo2.png'
import { faWindowClose } from "@fortawesome/free-solid-svg-icons";


class NotificationToast extends React.Component {

    render() {
        return (
            <div style={{color : this.props.textColor, backgroundColor : this.props.backgroundColor}}>
            {this.props.message} 
            <button onClick= {() => this.props.closeToast()}>
                   <FontAwesomeIcon icon={faWindowClose}/>
                </button>
           
            </div>
            );
    }   
}

export default NotificationToast;
