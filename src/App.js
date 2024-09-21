import logo from './logo.svg';
import './App.css';

import Perfil from './components/perfil';
import Certificado from './components/certificados';
import Habilidades from './components/habilidades';
import SobreMim from './components/sobre_mim';
import Projetos from './components/projetos';

function App() {
  return (
    <div className="bg-custom-gray">
      <header className="space-y-8">
        <Perfil/>
        <SobreMim/>
        <Projetos/>
        <Certificado/>
        <Habilidades/>

      </header>
    </div>
  );
}

export default App;
