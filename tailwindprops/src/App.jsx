import './App.css';
import Card from './components/Card';

function App() {
  return (
    <>
      <h1 className='bg-green-400 text-3xl p-3 rounded-md'>Vite with Tailwind</h1>
      <Card username="Sameer Khan" />
      <Card username='Json' post="Staff Engineer" />
      <Card myArr={[1, 2, 3]} />
    </>
  )
}

export default App;
