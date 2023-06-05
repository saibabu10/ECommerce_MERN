import './App.css';
import ECommerceBody from './Component/ECommerceBody';
import ECommerceFooter from './Component/ECommerceFooter';
// import ECommerceHeader from './Component/ECommerceHeader';
import data from './Component/data'

function App() {
  const product = data.map(item=>{
    return(
      <ECommerceBody key={item.id}
      {...item}
      />
    )
  })
  return (
    <div className="App">
      <header>
        {/* <ECommerceHeader/> */}
        <div className='body'>{product}</div>
        <ECommerceFooter/>
      </header>
    </div>
  );
}

export default App;
