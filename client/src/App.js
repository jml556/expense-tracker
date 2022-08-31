import Form from './components/Form';
import Navbar from './components/Navbar'

function App() {
  return (
    <div className="p-5 min-h-[100vh]">
      <Navbar />
      <div className="flex justify-center">
        <Form />
      </div>
    </div>
  );
}

export default App;
