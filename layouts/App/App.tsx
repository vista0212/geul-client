import React, { FC } from 'react';
import loadable from '@loadable/component';
import { Route, Switch } from 'react-router';
import { AboutButton, MainHeader, MainLine, MainWrapper } from "./style";
import Logo from "@utils/icon/logo";

const Posts = loadable(() => import('@pages/Posts'))
const Post = loadable(() => import('@pages/Post'))

const App: FC = () => {
  // 하나를 키면 다른 하나가 꺼지는 스위치처럼 여러 개 중 하나만 선택한다는 의미.
  return (
    <MainWrapper>
      <MainHeader>
        <Logo />
        <AboutButton>ABOUT</AboutButton>
      </MainHeader>
      <MainLine />
      <Switch>
        <Route exact path="/" component={Posts} />
        <Route exact path="/post/:id" component={Post} />
      </Switch>
    </MainWrapper>);
};

export default App;