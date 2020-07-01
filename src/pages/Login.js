import React from 'react';
import { IonPage, IonContent, IonRow, IonCol, IonRouterLink, IonIcon } from '@ionic/react';
import { mailOutline, lockClosedOutline } from 'ionicons/icons';
import './Login.css';

class Login extends React.Component {

  render() {
    return ( 
      <IonPage>
        <IonContent>
          <div className='container'> 
            <h1 className='is-size-1 has-text-weight-semibold'>Login</h1> 
            <form className='login-form'>
              <div className='control has-icons-left'>
                <input className='input is-rounded is-medium ' type='text' placeholder='email' />
                <span className="icon is-small is-left">
                  <IonIcon icon={mailOutline}/>
                </span>
              </div>
              <div className='control has-icons-left mt-2'>
                <input className='input is-rounded is-medium' type='password' placeholder='password' />
                <span className="icon is-small is-left">
                  <IonIcon icon={lockClosedOutline}/>
                </span>
              </div>
            </form>
            <button className='button is-primary is-large' routerLink='/dashboard'>Login</button> 
            <br />
            <IonRouterLink href='/register'> Need an account? </IonRouterLink>
          </div>
        </IonContent>
      </IonPage>
    );
  }
}











export default Login;
