import React from 'react';
import User from './User';
import { Consumer } from '../../Context';

const Users = () => {
  return (
    <Consumer>
      {(value) => {
        const { users } = value;
        if (!users || users.length === 0) return <>No user present.</>;
        return (
          <>
            {users.map((user) => (
              <User user={user} key={user.id} />
            ))}
          </>
        );
      }}
    </Consumer>
  );
};

export default Users;
