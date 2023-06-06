import React from 'react'
import {BrowserRouter as Router,Link,Routes,Route} from 'react-router-dom' 
import Route1 from "./Routes/Route1"
import Route2 from "./Routes/Route2"
import Route3 from "./Routes/Route3"
import Route4 from "./Routes/Route4"
import Route5 from "./Routes/Route5"
 function ECommerceHeader() {
  return (
    <Router>
      <div className="search">
        <input type='search' className='SearchArea' placeholder='Product Name'/>
<button className='Button'>Search🔍</button>
      </div>
      <div>
    <div className='Links'>
      <Link to="/Routes1" style={{textDecoration:'none'}}>Furniture</Link>
      <Link to="/Routes2" style={{textDecoration:'none'}}>Electronics</Link>
      <Link to="/Routes3" style={{textDecoration:'none'}}>Fashion</Link>
      <Link to="/Routes4" style={{textDecoration:'none'}}>Grocery</Link>
      <Link to="/Routes5" style={{textDecoration:'none'}}>Top Deals</Link>
    </div>
    <Routes>
      <Route exact path = '/Routes1' element={<Route1/>}></Route>
      <Route exact path = '/Routes2' element={<Route2/>}></Route>
      <Route exact path = '/Routes3' element={<Route3/>}></Route>
      <Route exact path = '/Routes4' element={<Route4/>}></Route>
      <Route exact path = '/Routes5' element={<Route5/>}></Route>
    </Routes>
    </div>
    </Router>
  )
}
export default ECommerceHeader
