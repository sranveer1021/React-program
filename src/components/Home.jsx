import React from 'react'
import Person from "./Person";
import Test from "./components/Test";
import Product from "./components/Product";
import Person2 from "./components/Person2";
import Person3 from "./components/Person3";
import Laptop from "./components/Laptop";
import Event from "./components/Event";
import Counter from "./components/Counter"
import ShowProduct from "./components/ShowProduct";

const Home = () => {
  return (
    <div>
        <>
      <div>
        {/* <Person/> */}
        {/* <h1>App is entry point</h1> */}
        {/* <Test/>
      <Product
        title="Galaxy S24 Ultra"
        brand="Samsung"
        price={150000}
        ram="8 GB"
        rom="128 GB"
        camera="200 mp"
      />

      <Product title="I phone - 16" brand="apple"
       price={145000} />
      <Product title="OnePlus" brand="OnePlus" price={340000} /> */}
      </div>

      <div>
        {/*         
    <Person2 name="Ranveer" age="20" salary={500000} />
    <Person2 name="sohan" age="23" salary={5000}/>
    <Person2 name="spiderman" age="34" salary={1222} ram="ram"/> */}
      </div>

      <div>
        {/* <Person3 name="Ranveer"
       age={28} panCard={true}/> */}

      </div>
      <div>
        {/* <Laptop brandName="hp" model="probook" price={150000} />
        <Laptop brandName="lenovo" model="yoga" price={250000} />
        <Laptop brandName="dell" model="inspiron" price={50000} /> */}
      </div>
      <div>
        {/* <Event/> */}
      </div>
      <div>
        {/* <Counter/> */}
      </div>

  <div>
    <ShowProduct/>
  </div>
    </> 
    </div>
  )
}

export default Home