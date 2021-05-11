import React from 'react';
import {
  Route,
  Redirect,
  Switch,
  Link,
  HashRouter
} from 'react-router-dom';

import { AuthRoute, ProtectedRoute } from '../util/route_util'
import  HeaderContainer  from './header/header_container'
import  LogInFormContainer  from './user_auth/login_form_container'
import  SignUpFormContainer  from './user_auth/signup_form_container'
import Modal from './modal/modal'

import StreamContainer from './stream/stream_container'
const App = () => (
  <div>
    <Modal/>
    {/* <h2>hello</h2> */}
    <HeaderContainer/>
    <Switch>
      {/* <Route path="/users/:userId" component={UserPageShowContainer} /> */}
      {/* <AuthRoute exact path="/discover" component={DiscoverFormContainer} /> */}
      <AuthRoute exact path="/login" component={LogInFormContainer} />
      <AuthRoute exact path="/" component={StreamContainer} />
      {/* <ProtectedRoute exact path="/discover" component={StreamContainer}/> */}
      <ProtectedRoute exact path ="/stream" component ={StreamContainer} />
    </Switch>
  </div>
)

export default App