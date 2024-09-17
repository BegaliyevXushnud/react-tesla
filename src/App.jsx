// App.jsx
import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './components/header';
import ErrorBoundary from './components/error';
import  Footer  from './components/footer';

function App() {
  return (
    <div>
      <Header />
      <ErrorBoundary> {/* ErrorBoundary'ni sahifalarning atrofida o'rab olamiz */}
        <main>
          <Outlet /> {/* Bu yerda sahifalar joylashadi */}
        </main>
        <Footer/>
      </ErrorBoundary>
    </div>
  );
}

export default App;
