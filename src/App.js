
import './App.css';
import Perfil from './components/Perfil/Perfil';
import Sobre_mim from './components/Sobre_mim/Sobre_mim';
import Projetos from './components/Projetos/Projetos';
import Habilidades from './components/Habilidades/Habilidades';
import Certificados from './components/Certificados/Certificados';

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
