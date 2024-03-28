import './App.css';
import { useState } from 'react';

function App() {

  const [fuitsShopFinal, setFuitsShopFinal] = useState(
    [
      { id: 1, name: "Fritzy's Frits", checked: false },
      { id: 2, name: "Crispy Frits Haven", checked: false },
      { id: 3, name: "Golden Fry Frits", checked: false },
      { id: 4, name: "Frits & Flavors", checked: false },
      { id: 5, name: "The Frits Factory", checked: false },
      { id: 6, name: "Frits Delight", checked: false },
      { id: 7, name: "Sizzling Frits Corner", checked: false },
      { id: 8, name: "Crunchy Frits Co.", checked: false },
      { id: 9, name: "Frits Galore", checked: false },
      { id: 10, name: "Frits Fiesta", checked: false }
    ]
  );
  const [fruitsFinal, setFruitsFinal] = useState([
    { id: 1, name: "Apple", select: false },  
    { id: 2, name: "Banana", select: false },
    { id: 3, name: "Orange", select: false },
    { id: 4, name: "Grapes", select: false },
    { id: 5, name: "Mango", select: false },
    { id: 6, name: "Strawberry", select: false },
    { id: 7, name: "Pineapple", select: false },
    { id: 8, name: "Watermelon", select: false },
    { id: 9, name: "Kiwi", select: false },
    { id: 10, name: "Peach", select: false }
  ]);

  const [fuitsShop, setFuitsShop] = useState(JSON.parse(JSON.stringify(fuitsShopFinal)));
  const [fruits, setFruits] = useState(JSON.parse(JSON.stringify(fruitsFinal)));

  const [shopMappingList, setShopMappinglist] = useState([]);
  const [fruitMappingList, setFruitMappinglist] = useState([]);

  const handleOnShopChange = (val, ind) => {
    console.log(val, ind);
    setShopMappinglist([
      ...shopMappingList, { [ind]: val }
    ])
  }

  const handleOnFruitChange = (val, ind) => {
    setFruitMappinglist([
      ...fruitMappingList, { [ind]: val }
    ])
  }

  console.log('shopMappingList', shopMappingList);
  console.log('fruitMappingList', fruitMappingList);
  return (
    <div className="App">

      {
        fuitsShop.map((list, index) => (
          <div key={index} style={{display:'flex'}}>
            <div>
              <input type="checkbox" value={list.name} onChange={(e) => handleOnShopChange(e.target.value, index)} />
            </div>
            <select onChange={(e) => handleOnFruitChange(e.target.value, index)}>
              <option value="volvo">Volvo</option>
              <option value="saab">Saab</option>
              <option value="mercedes">Mercedes</option>
              <option value="audi">Audi</option>
            </select>
          </div>
        ))

    }

    </div>
  );
}

export default App;
