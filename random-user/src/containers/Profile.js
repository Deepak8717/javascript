import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const Profile = () => {
  const [data, setData] = useState({
    content: {},
    loading: false,
    error: false,
  });
  const { content, loading, error } = data;
  const { name, phone, email } = content;
  const items = [
    {
      label: 'Name',
      value: name,
    },
    { label: 'Phone', value: phone },
    { label: 'Email', value: email },
  ];
  const UserWrapper = styled.div`
    text-align: center;
  `;
  useEffect(() => {
    setData({ ...data, loading: true });
    (async () => {
      const r = await fetch(`https://jsonplaceholder.typicode.com/users/1`);
      const j = await r.json();
      return j;
    })()
      .then((d) => setData({ ...data, content: d, loading: false }))
      .catch((e) => setData({ ...data, error: true }));
    // eslint-disable-next-line
  }, []);
  if (loading) return <div>Loading...</div>;
  if (loading || error) return <div>Error...</div>;
  return (
    <UserWrapper>
      {items.map((item) => (
        <div key={item.label}>{item.value}</div>
      ))}
    </UserWrapper>
  );
};

export default Profile;
