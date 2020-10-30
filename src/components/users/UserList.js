import React from 'react';
import {
  List,
  Datagrid,
  TextField,
  EmailField,
  EditButton,
  DeleteButton,
} from 'react-admin';

const UserList = ({ permissions, ...props }) => {
  return (
    <List {...props}>
      <Datagrid>
        <TextField source='id' />
        <TextField source='name' />
        <EmailField source='email' />
        {permissions === 'moderator' ? null : (
          <EditButton basePath='/users' />
        )}
        {permissions === 'moderator' ? null : (
          <DeleteButton basePath='/users' />
        )}
      </Datagrid>
    </List>
  );
};

export default UserList;
