
import './App.css';
import Perfil from './components/perfil/perfil';
import Sobre_mim from './components/sobre_mim/sobre_mim';
import Projetos from './components/projetos/projetos';
import Habilidades from './components/habilidades/habilidades';
import Certificados from './components/certificados/certificados';

function App() {
  return (
    <div className="bg-custom-gray">
      <div className='space-y-8'>
        <Perfil/>
        <Sobre_mim/>
        <Habilidades/>
        <Projetos/>
        <Certificados/>
      </div>
    </div>
  );
}

export default App;
