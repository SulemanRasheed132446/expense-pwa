import React, { lazy, Suspense } from 'react';
import './App.css';
import { ExpenseProvider } from './provider/ExpenseProvider';
import { Header } from './components/Header';

const History = lazy(() => {
  return import('./components/History').then(component => {
    return { default: component.History }
  })
});

const AddTransaction = lazy(() => {
  return import('./components/AddTransaction').then(component => {
    return { default: component.AddTransaction }
  })
});
function App() {
  return (
    <div className="App">
      <ExpenseProvider>
        <Header />
        <Suspense fallback={null} >
          <History />
        </Suspense>
        <Suspense fallback={null}>
          <AddTransaction />
        </Suspense>
      </ExpenseProvider>

    </div>
  );
}

export default App;
