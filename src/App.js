import Card from './components/Card';
import Menu from './components/Menu'
import { Overview } from './components/Overview';
import { Question } from './components/Question';
function App() {
  return (
    <>
    
    <Question />
    < div style={{display:'flex',justifyContent:"space-around",gap:"5em",flexDirection:"row",flexWrap:'wrap'} }>
    
    <Card />
    <Card />
    <Card />
    <Card />
    <Card />
    <Card />
    <Card />
    <Card />
    <Card />
    </div>
    </>
  );
}

export default App;
