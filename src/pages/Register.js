import React from 'react';
import { IonPage, IonButton } from '@ionic/react';

class Register extends React.Component {

  render() {
    return ( 
      <IonPage>
        <h1>Register here</h1> 
        <IonButton routerLink='/login'>Login</IonButton> 
      </IonPage>
    );
  }
}











export default Register;

