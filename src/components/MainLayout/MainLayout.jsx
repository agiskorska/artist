import React from 'react';
import { Outlet } from 'react-router-dom'

import { Header, Footer } from '../index';

function MainLayout({albums}) {

  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  )
}

export default MainLayout
