import React from 'react';
import { Link as RouterLink } from 'react-router-dom';

export default function Home() {
  return (
    <>
      <h1>Welcome to simple sign in - sign up showcase app</h1>
      <RouterLink to='/signin'>Sign In</RouterLink>
    </>
  );
}