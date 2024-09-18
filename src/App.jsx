import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Header from './components/header';
import ErrorBoundary from './components/error';
import Footer from './components/footer';

function App() {
  const [activeLink, setActiveLink] = useState('/');

  return (
    <div>
      <Header onLinkClick={setActiveLink} />
      <ErrorBoundary> {/* Wrap routes with ErrorBoundary */}
        <main>
          <Outlet context={{ setActiveLink }} /> {/* Provide context to nested routes */}
        </main>
      </ErrorBoundary>
      <Footer activeLink={activeLink} />
    </div>
  );
}

export default App;
