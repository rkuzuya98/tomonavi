/* eslint-disable import/no-cycle */
import React, { useEffect } from 'react'
import { Route, Switch, useLocation } from 'react-router'
import { BrowserRouter } from 'react-router-dom'
import { Home } from './template/Home'
import { About } from './template/about/About'
import { Page404 } from './template/Page404'
import { Find } from './template/Find'
import { Gather } from './template/Gather'
// eslint-disable-next-line import/no-cycle
import { Header } from './component/header/Header'
import { BlankSpace } from './component/UIKit/BlankSpace'
// eslint-disable-next-line import/no-cycle
import { Manager } from './template/Manager'
// eslint-disable-next-line import/no-cycle
import { SignIn } from './template/SiginIn'
// eslint-disable-next-line import/no-cycle
import { SignUp } from './template/SignUp'
// eslint-disable-next-line import/no-cycle
import { MyPage } from './template/MyPage'
// eslint-disable-next-line import/no-cycle
import { Auth } from './Auth'
import { MgComm } from './template/MgComm'
import { Contact } from './template/Contact'
import { Community } from './template/Community'
import { CommPage } from './template/CommPage'
import { Privacy } from './template/Privacy'
import { Terms } from './template/Terms'
import { Footer } from './component/footer/Footer'
import { Sitemap } from './template/Sitemap'
import { SearchCondition } from './template/about/SearchCondition'

export const Router = () => (
  <BrowserRouter>
    <ScrollToTop/>
    <Header />
    <BlankSpace height="60px" />
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/about" component={About} />
      <Route exact path="/about/search-condition" component={SearchCondition} />
      <Route exact path="/privacy" component={Privacy} />
      <Route exact path="/sitemap" component={Sitemap} />
      <Route exact path="/terms" component={Terms} />
      <Route exact path="/gather" component={Gather} />
      <Route exact path="/signin" component={SignIn} />
      <Route exact path="/signup" component={SignUp} />
      <Route exact path="/community" component={Community} />
      <Route exact path="/community/:commPath" component={CommPage} />
      <Route exact path="/contact/" component={Contact} />
      <Route exact path="/manager-community/:idPath" component={MgComm} />
      <Route exact path="/manager/:idPath" component={Manager} />

      <Route exact path="/mypage/:idPath" component={MyPage} />
      {/* <Auth> */}
      {/* </Auth> */}
      <Route path="*" exact component={Page404} />
    </Switch>
    <BlankSpace height="60px"/>
    <Footer/>
  </BrowserRouter>
)

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}