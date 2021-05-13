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
import Splash from './splash'
import StreamContainer from './stream/stream_container'
import UserPageShowContainer from './user_page/user_page_show_container'
import SongShowContainer from './songs/song_show_container'
import SongUploadContainer from './songs/song_upload_container'

const App = () => (
  <div>
    <Modal/>

    <HeaderContainer/>
    <Switch>
      <Route path="/users/:userId" component={UserPageShowContainer} />
      <Route path="/songs/:songId" component={SongShowContainer} />
      {/* <Route path="/upload" component={SongUploadContainer} /> */}
      {/* <AuthRoute exact path="/discover" component={DiscoverFormContainer} /> */}
      <AuthRoute exact path="/login" component={SignUpFormContainer} />
      <AuthRoute exact path="/" component={Splash} />
      {/* <ProtectedRoute exact path="/discover" component={StreamContainer}/> */}
      <ProtectedRoute exact path ="/upload" component ={SongUploadContainer} />
      <ProtectedRoute exact path ="/stream" component ={StreamContainer} />
    </Switch>
  </div>
)

export default App