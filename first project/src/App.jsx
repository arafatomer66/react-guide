
import Header from './components/Header/Header.jsx';

import CoreConcepts from './components/CoreConcepts.jsx';
import Exmaples from './components/Examples.jsx';

function App() {
  console.log('APP COMPONENT EXECUTING');

  return (
    <div>
      <Header />
      <main>
        <CoreConcepts/>
        <Exmaples/>
      </main>
    </div>
  );
}

export default App;
