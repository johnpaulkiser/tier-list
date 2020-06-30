import React from 'react';
import { IonPage, IonButton } from '@ionic/react';

class Login extends React.Component {

  render() {
    return ( 
      <IonPage>
        <h1>Login Here</h1> 
        <IonButton routerLink='/register'>Register</IonButton> 
      </IonPage>
    );
  }
}











export default Login;
