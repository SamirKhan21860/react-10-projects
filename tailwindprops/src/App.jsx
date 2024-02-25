import './App.css';
import Card from './components/Card';

function App() {

  let myObj = {
    name: 'Hitesh',
    age: 25,
    address: {
        city: 'Bengaluru',
        state: 'Karnataka',
        country: 'India'
    }
  }

  let newArray = [1, 2, 3, 4, 5, 6, 7, 8, 9]

  return (
    <>
      <h1 className='bg-green-400 text-3xl p-3 rounded-md'>Vite with Tailwind</h1>
      <Card username="Sameer Khan" post="Front End Developer"/>
      <Card username='Json' post="Staff Engineer" />
      <Card myArray={newArray}/>
    </>
  )
}

export default App;
