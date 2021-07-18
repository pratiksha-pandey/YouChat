import React from 'react';
import { GoogleOutlined, FacebookOutlined } from '@ant-design/icons';
import firebase from "firebase/app"

import { auth } from '../firebase';

const Login = () => {
	return (
		<div id="login-page">
		<div id='login-card'>
        	<h2>Welcome to YouChat!</h2>

        	<p>Login or Register with:</p>
        	<br/>

        	<div
          	className="btn btn-danger"
            onClick={() => auth.signInWithRedirect(new firebase.auth.GoogleAuthProvider())}
        	>
        	
          	<GoogleOutlined /> Google
        	</div>

        	<br/>
        	<br/>

        	<div
          	className="btn btn-primary"
            onClick={() => auth.signInWithRedirect(new firebase.auth.FacebookAuthProvider()) }
        	>
        	
          	<FacebookOutlined /> Facebook
        	</div>

        	
        </div>
    	</div>

	);
}

export default Login;