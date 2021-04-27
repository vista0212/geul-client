import React, { FC } from 'react';
import loadable from '@loadable/component';
import { Route, Switch } from 'react-router';
import { AboutButton, MainHeader, MainWrapper } from "./style";
import Logo from "@utils/icon/logo";

const Posts = loadable(() => import('@pages/Posts'))

const App: FC = () => {
  // 하나를 키면 다른 하나가 꺼지는 스위치처럼 여러 개 중 하나만 선택한다는 의미.
  return (
    <MainWrapper>
      <MainHeader>
        <Logo></Logo>
        <AboutButton>ABOUT</AboutButton>
      </MainHeader>
      <Switch>
        <Route exact path="/" component={Posts}/>
      </Switch>
    </MainWrapper>);
};

export default App;