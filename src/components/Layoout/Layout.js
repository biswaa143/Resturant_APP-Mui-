import React from 'react';
import Header from './Header';
import Footer from './Footer';

const Layout = (props) => {
  return (
    <div>
        <Header />
      <h1>{props.children}</h1>
      <Footer />
    </div>
  )
}

export default Layout;
