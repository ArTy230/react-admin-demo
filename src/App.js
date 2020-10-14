import React from 'react';
import { Admin, Resource, usePermissions } from 'react-admin';

import restProvider from 'ra-data-json-server';
import PostList from './components/posts/PostList';
import PostCreate from './components/posts/PostCreate';
import PostEdit from './components/posts/PostEdit';

import authProvider from './authProvider';
import UserList from './components/users/UserList';
import UserCreate from './components/users/UserCreate';
import UserEdit from './components/users/UserEdit';
import './App.css';

function App() {
  return (
    <Admin
      dataProvider={restProvider('http://localhost:3000')}
      authProvider={authProvider}
    >
      {(permissions) => [
        <Resource
          key='1'
          name='posts'
          list={PostList}
          create={PostCreate}
          edit={permissions === 'moderator' ? PostEdit : 'null'}
        />,
        <Resource
          key='2'
          name='users'
          list={UserList}
          create={permissions === 'moderator' && null}
          edit={permissions === 'moderator' && null }
        />,
      ]}
    </Admin>
  );
}

export default App;
