
import React from 'react';
import { IonPage, IonContent, IonRow, IonCol, IonRouterLink, IonIcon } from '@ionic/react';
import { mailOutline, lockClosedOutline } from 'ionicons/icons';
import './Login.css';

class Register extends React.Component {

  render() {
    return ( 
      <IonPage>
        <IonContent>
          <div className='container'> 
            <h1 className='is-size-1 has-text-weight-semibold'>Register</h1> 
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
              <div className='control has-icons-left mt-2'>
                <input className='input is-rounded is-medium' type='password' placeholder='re-type password' />
                <span className="icon is-small is-left">
                  <IonIcon icon={lockClosedOutline}/>
                </span>
              </div>
            </form>
            <button className='button is-primary is-large' routerLink='/dashboard'>Register</button> 
            <br />
            <p>already have an account?
              <IonRouterLink href='/login'> Login</IonRouterLink>
            </p>
          </div>
        </IonContent>
      </IonPage>
    );
  }
}

export default Register;
