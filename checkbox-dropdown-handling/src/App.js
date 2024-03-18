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
  const [mappingDetails, setMappingDetails] = useState({
    shops_mapping_details: [],
    fruits_mapping_details: []
  });

  const shopHandleOnChange = (val, index) => {
    setMappingDetails(prevState => ({
      ...prevState,
      shops_mapping_details: [
        { ...prevState.shops_mapping_details, ind: index, name: val.name, checked: !val.checked }
      ]
    }));

    setFuitsShop(

    )
  };

  console.log(mappingDetails);

  const handleOnChange = (val, index) => {
    console.log(val, index);
  }

  return (
    <div className="App">

      <div className='flex'>
        <div>
          {fuitsShop.length > 0 &&
            fuitsShop.map((shop, index) =>
              <div className='mb-15' key={index}>
                <input type="checkbox" checked={shop.checked} onChange={(e) => shopHandleOnChange(shop, index)} />
                <label>{shop.name}</label>
              </div>
            )
          }
        </div>
        <div>
          {fruits.length > 0 &&
            fruits.map((fruit, index) =>
              <div className='mb-15 ml-15' key={index}>
                <select onChange={(e) => handleOnChange(e.target.value, index)}>
                  {
                    fruits.map((fruit) =>
                      <option key={fruit.id} value={JSON.stringify(fruit)}>{fruit.name}</option>
                    )
                  }
                </select>
              </div>
            )
          }
        </div>
      </div>

    </div>
  );
}

export default App;
