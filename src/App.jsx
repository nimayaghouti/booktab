import './App.scss';
import { FaApple } from 'react-icons/fa';

function App() {
  return (
    <>
      <div className="h1 w-50 mx-auto my-6 text-center text-primary">
        hello world
      </div>
      <div className="h1 w-50 mx-auto my-6 text-center">سلام دنیا</div>
      <FaApple className="text-primary" size={70} />
    </>
  );
}

export default App;
