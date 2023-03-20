import "./App"
import Music from "./47-2 JSX, Dynamic content, Dynamic Style in React/Music";
import Person from "./47-3 Create Component, return HTML from a component/Person";
import Friend from "./47-3 Create Component, return HTML from a component/Friend";
import Props from "./47-4 Pass dynamic data to components, props in react/Props";
import Multiple from "./47-5 (advanced) Create multiple components from an array of objects/Multiple";
import Product from "./47-6 Concept Recap, JSX, components, props, display array of objects/Product";
import Counter from "./47-7 (advanced) State, component state hook and set state method/Counter";
import ExternalUsers from "./47-8 (advanced) Load dynamic data, API call useEffect integrate state/ExternalUsers";


function App() {
  const nayikas = ['Rubal', 'BappRaze', 'Kuber', 'jashim'];
  const singers = [
    {name: 'Dr. Mahfuz', job: 'Singer'},
    {name: 'Eva Rahman', job: 'Singer2'},
    {name: 'Agun', job: 'sopno'},
    {name: 'shuvro', job: 'pathor'},
  ]
  const products = [
    {name: 'laptop', price: 153000},
    {name: 'phone', price: 93000},
    {name: 'watch', price: 33000},
    {name: 'tablet', price: 5000},
  ]
  return (
    <div className="App">
      {/* ______ 47-2 JSX, Dynamic content, Dynamic Style in React ____ */}
      <h2>47-3 Create Component, return HTML from a component</h2>
       <Music/> <br /> <br /> <hr />


      {/* ______ 47-3 Create Component, return HTML from a component ____ */}
      <h2>47-3 Create Component, return HTML from a component</h2>
      <Person></Person> 
      <Friend></Friend> <br /> <br /> <hr />

      {/* ______ 47-4 Pass dynamic data to components, props in react ____ */}
      <h2>47-4 Pass dynamic data to components, props in react</h2>
      <Props name="Rubal"></Props> <br /> <br /> <hr />

      
      {/* ______ 47-5 (advanced) Create multiple components from an array of objects ____ */}
      <h2>47-5 (advanced) Create multiple components from an array of objects</h2>
      <h3>Array Map</h3>
      {/* Array er opor map */}
      <div className="displayGrid">
        {
          nayikas.map(nayika => <><Multiple name={nayika} title="nayika"></Multiple></>)
        } 
      </div>

      <h3>object Map</h3>
      {/* Object er opor map */}
      <div className="displayGrid">
        {
          singers.map(singer => <><Multiple name={singer.name} title = "Singer"></Multiple></>)
        } 
      </div>
      <br /> <br /> <hr />


      {/* ______ 47-6 Concept Recap, JSX, components, props, display array of objects ____ */}
      <h2>47-6 Concept Recap, JSX, components, props, display array of objects</h2>
      <div className="displayGrid">
        {
          products.map(product => <><Product name={product.name} price={product.price}></Product></>)
        }
      </div>
      <br /> <br /> <hr />


      {/* ______ 47-7 (advanced) State, component state hook and set state method ____ */}
      <h2>47-7 (advanced) State, component state hook and set state method</h2>
      <Counter></Counter>
      <br /> <br /> <hr />


      {/* ______ 47-8 (advanced) Load dynamic data, API call useEffect integrate state ____ */}
      <h2>47-8 (advanced) Load dynamic data, API call useEffect integrate state</h2>
      {/* <ExternalUsers></ExternalUsers> */}
      <br /> <br /> <hr />





    </div> 
    
  );
}

export default App;
