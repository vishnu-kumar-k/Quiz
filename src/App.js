import Card from './components/Card';
import Menu from './components/Menu'
function App() {
  return (
    <>
    <Menu />
    <br /> 
    <br /> 
    < div style={{display:'flex',justifyContent:"space-evenly"}}>
    
    <Card /><Card />
    <Card />
    </div>
    </>
  );
}

export default App;
