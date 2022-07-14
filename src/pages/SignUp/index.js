import React, { useState } from 'react';
import Layout from '../../components/Layout';
import Navbar from '../../components/SignUpNavbar';
import InitialSignup from '../../components/InitialSignup';

const SignUp = () => {
  const [users,setUsers] = useState([]);
  return (
    <Layout>
    <Navbar></Navbar>
    <InitialSignup users={users} setUsers={setUsers}></InitialSignup>
  </Layout>
  );
}

export default SignUp;
