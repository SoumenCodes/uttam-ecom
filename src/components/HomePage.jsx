import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";

import axios from "axios";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setProducts } from "../slice/productSlice";
import API_URL from "../api/config";

const HomePage = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products);

  useEffect(() => {
    // axios
    //   .get("http://localhost:5000/products")
    //   .then((response) => dispatch(setProducts(response.data)))
    //   .catch((error) => console.error(error));
    fetchdata();
  }, [dispatch]);

  async function fetchdata() {
    console.log("fetch data");
    await axios
      .get(`${API_URL}/posts`)
      .then((response) => dispatch(setProducts(response.data)))
      .catch((error) => console.error(error));
  }

  return (
    <div>
      {/* <div className="bg-white">
        <div>
          <h2 className="text-4xl font-bold tracking-tight text-gray-900 text-center">
            Best Products of the Market
          </h2>

          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              padding: "1rem",
              justifyContent: "center",
            }}
          >
            {products.map((product) => (
              <Card
                sx={{
                  minWidth: 345,
                  maxWidth: 600,
                  bgcolor: "#111827",
                  color: "white",
                  margin: "1rem",
                  padding: "4px",
                }}
                key={product?.id}
              >
                <CardMedia
                  sx={{ height: 140 }}
                  image={product.image}
                  title="green iguana"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {product.name}
                  </Typography>
                  <Typography gutterBottom variant="h6" component="div">
                    {"$"} {product.price}
                  </Typography>
                  <Typography variant="body2" color="text">
                    {product.brand}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button
                    size="small"
                    variant="contained"
                    sx={{ backgroundColor: "#4f46e5", color: "white" }}
                  >
                    <Link to={`../product/${product.id}`}>Details</Link>
                  </Button>
                </CardActions>
              </Card>
            ))}
          </div>
        </div>
      </div> */}
      <div>
        <div className="flex justify-between mt-7 m-2 text-2xl md:text-4xl font-bold text-start ">
          <div>Products</div>
          {/* <div className="flex w- items-center space-x-2 md:w-1/3">
              <input
                value={search}
                onChange={(e) => {
                  setSearch(e.target.value);
                }}
                className="flex h-10  w-20 md:w-full rounded-md border border-black/30 bg-transparent px-3 py-2 text-sm placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                type="email"
                placeholder="Search"
              ></input>
              <button
                type="button"
                onClick={() => {
                  SearchPost();
                }}
                className="hover:bg-indigo-500 rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
              >
                Search
              </button>
            </div> */}
        </div>
        <div className="mx-auto grid w-full max-w-7xl items-center space-y-4 px-2 py-4 md:grid-cols-2 md:gap-6 md:space-y-0 lg:grid-cols-4">
          {products.map((items, i) => (
            <div key={i} className="rounded-md border bg-slate-800 p-2">
              <img
                src={items.image}
                alt="Laptop"
                className="aspect-[16/9] w-full rounded-md md:aspect-auto md:h-[300px] lg:h-[200px]"
              />
              <div className="p-4">
                <h1 className=" items-center text-start text-xl font-semibold text-white">
                  Rs {items.price}
                </h1>
                <p className="mt-2 text-sm text-gray-400">{items.dec}</p>

                <button
                  type="button"
                  className="mt-4 w-full rounded-sm bg-indigo-500 px-2 py-1.5 text-md font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                >
                  <Link to={`/product/${items.id}`}> Order Details</Link>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
