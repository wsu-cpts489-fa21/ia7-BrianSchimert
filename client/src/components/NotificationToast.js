import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import logo from '../images/sslogo2.png'

class NotificationToast extends React.Component {

    render() {
        return (
            <div>
            <h1 style={{color : this.props.color}}> {this.props.message}  </h1>
            <button onClick= {() => this.props.closeToast}>
                   <FontAwesomeIcon icon="faWindowClose" />
                </button>
           
            </div>
            );
    }   
}

export default NotificationToast;
