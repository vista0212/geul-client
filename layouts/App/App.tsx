import React, { FC } from 'react';
import loadable from '@loadable/component';
import { Redirect, Route, Switch } from 'react-router';
import { HeaderMenuButton, MainHeader, MainLine, MainWrapper } from './style';
import { QueryClient, QueryClientProvider } from 'react-query';

const PostList = loadable(() => import('@pages/PostListPage'));
const Post = loadable(() => import('@pages/PostPage'));
const Test = loadable(() => import('@pages/Test'));

const queryClient = new QueryClient();

const App: FC = () => {
  // 하나를 키면 다른 하나가 꺼지는 스위치처럼 여러 개 중 하나만 선택한다는 의미.
  return (
    <QueryClientProvider client={queryClient}>
      <MainWrapper>
        <MainHeader>
          <HeaderMenuButton onClick={() => (location.href = '/')}>
            POST
          </HeaderMenuButton>
          <HeaderMenuButton onClick={() => (location.href = '/about')}>
            ABOUT
          </HeaderMenuButton>
        </MainHeader>
        <MainLine />
        <Switch>
          <Route exact path="/" component={PostList} />
          <Route exact path="/post/:id" component={Post} />
          <Route exact path="/test" component={Test} />
          <Redirect to="/" />
        </Switch>
      </MainWrapper>
    </QueryClientProvider>
  );
};

export default App;
