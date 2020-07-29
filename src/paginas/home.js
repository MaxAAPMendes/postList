import React from 'react';
import Principal from '../componentes/Principal';
import Divider from '@material-ui/core/Divider';
import ListaPosts from '../componentes/ListaPosts';

const Home = ()=> {
  return (
    <div>
      <Principal />
      <Divider />
      <ListaPosts />
    </div>
  );
};

export default Home;