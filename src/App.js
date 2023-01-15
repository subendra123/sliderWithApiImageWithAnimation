import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import "animate.css";
import axios from "axios";
import { useEffect, useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

function App() {
  const [item, setItem] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get("https://dummyjson.com/products");
      setItem(res.data.products);
      console.log(res.data.products);
    };

    fetchData();
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <>
      <Slider className="slider_style" {...settings}>
        {item.map((pro) => (
          <>
            <div className="image_style">
              <img key={pro.id} src={pro.thumbnail} alt={pro.title} />
            </div>

            <h1>{pro.title}</h1>
          </>
        ))}
      </Slider>
    </>
  );
}

export default App;
