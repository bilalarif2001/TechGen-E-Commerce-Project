import { useState } from "react";
// import AddProduct from "../AddProduct";
import Button from "../../components/button";
import Input from "../../components/Input";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ShowProducts from "./show";
import { RxCross2 } from "react-icons/rx";

const style = {
  position: "absolute",
  top: "40%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 1000,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const Products = () => {
  const [name, setName] = useState();
  const [img, setImg] = useState();
  const [brand, setBrand] = useState("select company");
  const [category, setCategory] = useState("slect categoru");
  const [stock, setStock] = useState();
  const [price, setprice] = useState();
  const [color, setColor] = useState();
  const [userData, setUserData] = useState([]);
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const AddProduct = (e) => {
    e.preventDefault();
    console.log("submit");

    if (
      name === "" ||
      img === "" ||
      img === "" ||
      brand === "" ||
      category === "" ||
      stock === "" ||
      price === ""
    ) {
      toast.error("Fields Cannot be Empty  !", {
        position: toast.POSITION.TOP_RIGHT,
      });
    } else {
      const data = { name, img, brand, category, stock, price, quantity: 0 };
      console.log(data);
      fetch("http://localhost:5000/products", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      })
        .then((response) => {
          response.json();
        })
        .then((e) => setUserData(e))
        .catch((err) => {
          toast.error(err, {
            position: toast.POSITION.TOP_RIGHT,
          });
        });
      toast.success("Product  sucess ", {
        position: toast.POSITION.TOP_RIGHT,
      });
      setName("");
      setBrand("");
      setCategory("");
      setStock("");
      setprice("");
      setColor("");
      setImg("");
      handleClose();
    }
  };
  return (
    <div>
      <div className="flex justify-between">
        <h1 className="text-start  text-4xl  text-blue-500 ">Product</h1>
        <Button
          children="Add Product"
          varient=" p-2 w-36 bg-blue-500 hover:bg-white text-white hover:text-blue-500 hover:border-2 hover:border-blue-500 rounded-md text-xl "
          onClick={handleOpen}
        />
      </div>
      <ShowProducts />

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div className="flex justify-end -mt-8 absolute right-0  p-2 bg-gray-200  ">
            <Button
              children=<RxCross2 />
              className="text-2xl"
              onClick={() => {
                handleClose();
              }}
            />
          </div>
          <div>
            <form onSubmit={AddProduct}>
              <div className="flex flex-col mt-10 space-y-7">
                <div className="flex gap-4">
                  <Input
                    placeholder="Item Name"
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                  <Input
                    placeholder="Img Link"
                    type="text"
                    value={img}
                    onChange={(e) => setImg(e.target.value)}
                  />
                </div>
                <div className="flex gap-4">
                  <select
                    value={brand}
                    onChange={(e) => setBrand(e.target.value)}
                    className="border-4 border-gray-100  rounded-xl w-5/12 p-2 outline-0 focus:border-blue-500 "
                  >
                    <option value="dell">Dell</option>
                    <option value="apple">Apple</option>
                    <option value="Hp">Hp</option>
                    <option value="lenovo">Lenovo</option>
                  </select>
                  <select
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    className="border-4 border-gray-100  rounded-xl w-5/12 p-2 outline-0 focus:border-blue-500 "
                  >
                    <option value="ram">Ram</option>
                    <option value="Harddrive">Hard drive</option>
                    <option value="mouse">Mouse</option>
                    <option value="keybord">Keybord</option>
                  </select>
                </div>
                <div className="flex gap-4">
                  <Input
                    placeholder="stock"
                    type="number"
                    min="0"
                    value={stock}
                    onChange={(e) => setStock(e.target.value)}
                  />
                  <Input
                    placeholder="price"
                    type="number"
                    min="0"
                    value={price}
                    onChange={(e) => setprice(e.target.value)}
                  />
                </div>
                <div className="flex gap-4"></div>
                <Button
                  type="submit"
                  children="Add Product"
                  varient=" p-2 w-36 bg-blue-500 hover:bg-white text-white hover:text-blue-500 hover:border-2 hover:border-blue-500 rounded-md text-xl "
                />
              </div>
              <ToastContainer />
            </form>
          </div>
        </Box>
      </Modal>
    </div>
  );
};

export default Products;

// <AddProduct />
