import React from 'react';
import { Admin, Resource } from 'react-admin';
import restProvider from 'ra-data-json-server';
import PostList from './components/posts/PostList'
import PostCreate from './components/posts/PostCreate'
import PostEdit from './components/posts/PostEdit'

import UserList from './components/users/UserList'
import UserCreate from './components/users/UserCreate'
import UserEdit from './components/users/UserEdit'
import './App.css';


function App() {
  return <Admin dataProvider={restProvider('http://localhost:3000')}>
    <Resource
      name='posts'
      list={PostList}
      create={PostCreate}
      edit={PostEdit}
    />
    <Resource
      name='users'
      list={UserList}
      create={UserCreate}
      edit={UserEdit}
    />
  </Admin>
}

export default App;
