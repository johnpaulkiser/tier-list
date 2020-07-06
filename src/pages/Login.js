import React from 'react';
import { IonPage, IonContent, IonRouterLink, IonIcon } from '@ionic/react';
import { mailOutline, lockClosedOutline } from 'ionicons/icons';
import './Login.css';

class Login extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: ''
    };
  }
  
   handleLogin = async() => {
    console.log("ok");
    fetch('http://localhost:3000/api/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        user: { 
          email: this.state.email,
          password: this.state.password
        }
      })
    })
    .then((r) => {
      console.log(r.json())
    })
    .catch(() => console.log('rror'));
  };

  handleEmailChange = (e) => {
    this.setState({ email: e.target.value });
  }
  
  handlePasswordChange = (e) => {
    this.setState({ password: e.target.value });
  }

  render() {

    return ( 
      <IonPage>
        <IonContent>
          <div className='container'> 
            <h1 className='is-size-1 has-text-weight-semibold mb-6'>Login</h1> 
            <form className='login-form mb-6'>
              <div className='control has-icons-left'>
                <input className='input is-rounded is-medium ' 
                       type='text' 
                       placeholder='email' 
                       value={this.state.email}
                       onChange={this.handleEmailChange}
                />
                <span className="icon is-small is-left">
                  <IonIcon icon={mailOutline}/>
                </span>
              </div>
              <div className='control has-icons-left mt-4'>
                <input className='input is-rounded is-medium' 
                       type='password' 
                       placeholder='password' 
                       value={this.state.password}
                       onChange={this.handlePasswordChange}
                />
                <span className="icon is-small is-left">
                  <IonIcon icon={lockClosedOutline}/>
                </span>
              </div>
            </form>
            <button className='button is-primary is-large mb-6' onClick={this.handleLogin}>Login</button> 
            <br />
            <IonRouterLink href='/register'> Need an account? </IonRouterLink>
          </div>
        </IonContent>
      </IonPage>
    );
  }
}











export default Login;
