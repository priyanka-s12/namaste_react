import React from 'react';
import Sidebar from './Sidebar';
import MainContainer from './MainContainer';
import { Outlet } from 'react-router-dom';

function Body() {
  return (
    <div className="grid grid-flow-col">
      <Sidebar />
      {/* either have maincontainer or watch page - dynamic - outlet*/}
      {/* <MainContainer /> */}
      <Outlet />
    </div>
  );
}

export default Body;
