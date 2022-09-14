import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import AboutUs from "./components/AboutUs";
import Basket from "./components/Basket";
import HomePage from "./components/HomePage";
import ErrorPage from "./components/ErrorPage";

function App() {
  const stockList = [
    {
      id: "1",
      name: "Lessons",
      author: "Ian McEwan",
      description:
        "An epic tour de force that takes in the key political events of the postwar world, Lessons finds the masterful McEwan addressing the interconnectedness of personal motivation and the merciless onrush of the tide of history.",
      price: 17.99,
      imageUrl:
        "https://cdn.waterstones.com/override/v3/large/2928/3770/2928377082260.jpg",
    },
    {
      id: "2",
      name: "Landlines",
      author: "Raynor Winn",
      description:
        "The author of the beloved bestsellers The Salt Path and The Wild Silence documents her and her husband Moth's most ambitious journey yet, as they walk from the north-west corner of Scotland down the south-west coast path, reflecting on community and the environment along the way.",
      price: 16.99,
      imageUrl:
        "https://cdn.waterstones.com/override/v1/large/2928/3770/2928377094997.jpg",
    },
    {
      id: "3",
      name: "The Ballad of Never After",
      author: "Stephanie Garber",
      description:
        "Another sumptuous adventure full of passion, intrigue and forbidden magic awaits Evangeline Fox and the Prince of Hearts in the sequel to Stephanie Garber's bestselling Once Upon A Broken Heart.",
      price: 14.99,
      imageUrl:
        "https://cdn.waterstones.com/override/v1/large/9781/5293/9781529380965.jpg",
    },
    {
      id: "4",
      name: "HTML, XHTML and CSS",
      author: "Ed Tittel",
      description:
        "The indispensable introductory reference guide to HTML, XHTML and CSS Even though new technologies enable people to do much more with the Web, in the end HTML, XHTML and CSS are still at the root of any Web site. The newest edition of this bestselling guide is fully updated and revised for the latest technology changes to the field, including HTML5 and CSS3.",
      price: 21.99,
      imageUrl:
        "https://cdn.waterstones.com/bookjackets/large/9780/4709/9780470916599.jpg",
    },
    {
      id: "5",
      name: "React",
      author: "Lionel Lopez",
      description:
        "Quickstart Step-By-Step Guide To Learning React Javascript Library",
      price: 12.27,
      imageUrl:
        "https://cdn.waterstones.com/bookjackets/large/9781/9762/9781976210235.jpg",
    },
    {
      id: "6",
      name: "The Book Eaters",
      author: "Sunyi Dean",
      description:
        "A poignant, richly imagined tale about family, betrayal and the price of loyalty, Dean's spellbinding debut about six old families subsisting on a diet of stories and legends is an irresistible slice of dark fantasy.",
      price: 14.99,
      imageUrl:
        "https://cdn.waterstones.com/override/v1/large/2928/3771/2928377101480.jpg",
    },
    {
      id: "7",
      name: "How To Live When You Could Be Dead",
      author: "Deborah James",
      description:
        "The journalist and podcast host tells her inspirational and courageous story of living with incurable bowel cancer and how developing a positive mindset was key to enabling her to cope with her diagnosis.",
      price: 7.99,
      imageUrl:
        "https://cdn.waterstones.com/bookjackets/large/9781/7850/9781785043598.jpg",
    },
    {
      id: "8",
      name: "The Atlas Six",
      author: "Olivie Blake",
      description:
        "Opening the doors to a world of magic, ancient wisdom and secret societies, this slice of richly imagined and unputdownable fantasy follows six uniquely talented young magicians as they are invited to an initiation that will change their lives forever.",
      price: 6.99,
      imageUrl:
        "https://cdn.waterstones.com/bookjackets/large/9781/5290/9781529095258.jpg",
    },
  ];

  const [basket, setBasket] = useState([]);
  const [basketTotal, setBasketTotal] = useState(0);

  useEffect(()=>{
    calculateBasketTotal();
  },[basket])

  const addToBasket = (book) => {
    const basketCopy = [...basket];
    basketCopy.push(book);
    setBasket(basketCopy);
  };

  const removeFromBasket = (id) => {
    const basketCopy = [...basket];
    const indexLocation = basketCopy.indexOf(id);
    basketCopy.splice(indexLocation, 1);
    setBasket(basketCopy);
  };

  const calculateBasketTotal = () => {
    const basketPrices = basket.map((book) => book.price);
    const totalPrice = basketPrices.reduce((currentTotal, price) => 
      currentTotal + price, 0
    );
    setBasketTotal(totalPrice);
  };

  return (
    <Router>
      <NavBar />
      <hr></hr>
      <Routes>
        <Route
          exact
          path="/"
          element={<HomePage stockList={stockList} addToBasket={addToBasket} />}
        />
        <Route
          path="/basket"
          element={
            <Basket basket={basket} removeFromBasket={removeFromBasket} basketTotal={basketTotal}/>
          }
        />
        <Route path="/about" element={<AboutUs />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </Router>
  );
}

export default App;
