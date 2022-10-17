import React, { FC } from 'react';
import loadable from '@loadable/component';
import { Redirect, Route, Switch } from 'react-router';
import { MainHeader, MainLine, MainWrapper, HeaderMenuButton } from './style';
import Logo from '@utils/icon/logo';
import { QueryClient, QueryClientProvider } from 'react-query';

const PostList = loadable(() => import('@pages/PostListPage'));
const Post = loadable(() => import('@pages/PostPage'));
const Test = loadable(() => import('@pages/Test'));

const queryClient = new QueryClient();

const App: FC = () => {
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
