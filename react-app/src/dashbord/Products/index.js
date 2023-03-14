import { useState } from "react";
// import AddProduct from "../AddProduct";
import Button from "../Button/button";
import Input from "../Input/Input"
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ShowProducts from "./show";
import { RxCross2 } from "react-icons/rx";
import http from "../../utils/axios";

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
  const [DisplayImage,setDisplayImage] = useState(null)
  const [multiImage,setMultiImage] = useState(null)
  const [imagePath,setImagePath] = useState('')
  const [name, setName] = useState();
  const [img1, setImg1] = useState();
  const [img2, setImg2] = useState();
  const [img3, setImg3] = useState();
  const [img4, setImg4] = useState();

  const [brand, setBrand] = useState("select company");
  const [category, setCategory] = useState("slect categoru");
  const [description, setDescription] = useState("")
  const [stock, setStock] = useState();
  const [price, setprice] = useState();
  const [color, setColor] = useState();
  const [userData, setUserData] = useState([]);
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  function filehandler(e){
    setDisplayImage(e.target.files[0])
    setImagePath(e.target.value)
}

// async function fileupload(e){
//   e.preventDefault();
//     const data= new FormData()
//     data.append('name',name)
//     data.append('image',file)

//       try{
//          await axios.post('http://localhost:5000/image/upload',data)
//       }
//       catch(error){
//         console.log(error)
//       }

// }

  const AddProduct = async (e) => {
    e.preventDefault();

    if (
      name === "" ||
      // img === "" ||

      brand === "" ||
      category === "" ||
      stock === "" ||
      price === ""
    ) {
      toast.error("Fields Cannot be Empty  !", {
        position: toast.POSITION.TOP_RIGHT,
      });
    } else {

      const data= new FormData()
    data.append('name',name)
    for (let i=0; i<multiImage.length; i++) {
    data.append('secondaryImgs',multiImage[i])}
    data.append('displayImg',DisplayImage)
    data.append('category',category)
    data.append('description',description)
    data.append('stock',stock)
    data.append('price',price)
    data.append('brand',brand)

      try{
         const response= await http.post('/products/addproduct',data)
         if (response.status===200) toast.success("Product has been added Successfully!", {
          position: toast.POSITION.TOP_RIGHT,
        })
      }
      catch(error){
        toast.error(error.response.data.message, {
          position: toast.POSITION.TOP_RIGHT,
        })
      }
      // const data = {
      //   name,
      //   img1,
      //   img2,
      //   img3,
      //   img4,
      //   brand,
      //   category,
      //   stock,
      //   price,
      //   quantity: 0,
      // };
      // fetch("http://localhost:5000/products", {
      //   method: "POST",
      //   headers: { "Content-Type": "application/json" },
      //   body: JSON.stringify(data),
      // })
      //   .then((response) => {
      //     response.json();
      //   })
      //   .then((e) => setUserData(e))
      //   .catch((err) => {
      //     toast.error(err, {
      //       position: toast.POSITION.TOP_RIGHT,
      //     });
      //   });
      // toast.success("Product  sucess ", {
      //   position: toast.POSITION.TOP_RIGHT,
      // });
      // setName("");
      // setBrand("");
      // setCategory("");
      // setStock("");
      // setprice("");
      // setColor("");
      // setImg1("");
      // setImg2("");
      // setImg3("");
      // setImg4("");

      // handleClose();
    }
  };
  return (
    <div>
      <div className="flex justify-between">
        <h1 className="text-start  text-4xl  text-blue-500 ">Product</h1>
        <Button
          children="Add Product"
          varient="inline-flex items-center rounded border border-transparent bg-blue-100 px-4 py-1.5 text-base text-center font-medium text-blue-500 hover:bg-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 ml-4"
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
                    onChange={(e) => setName(e.target.value)}
                  />
                  <label>Display Image</label>
                 <input type="file" name="displayImg" value={imagePath} className=" text-sm text-grey-500
            file:mr-5 rounded-full border-0 file:py-2 file:px-6
            file:rounded-full file:border-0
            file:text-sm file:font-medium
            file:bg-blue-50 file:text-blue-700
            hover:file:cursor-pointer hover:file:bg-amber-50
            hover:file:text-amber-700
          "  onChange={filehandler}/>
          
                </div>
                <div className="flex gap-4">
                <label>Secondary Images max limit 3</label>
                 <input type="file" name="secondaryImgs" multiple className=" text-sm text-grey-500
            file:mr-5 rounded-full border-0 file:py-2 file:px-6
            file:rounded-full file:border-0
            file:text-sm file:font-medium
            file:bg-blue-50 file:text-blue-700
            hover:file:cursor-pointer hover:file:bg-amber-50
            hover:file:text-amber-700
          "  onChange={(e)=> setMultiImage(e.target.files)}/>
                  <Input
                    placeholder="Img Link 3"
                    type="text"
                    value={img3}
                    onChange={(e) => setImg3(e.target.value)}
                  />
                </div>
                <div className="flex gap-4">
                  <Input
                    placeholder="Img Link 4"
                    type="text"
                    value={img4}
                    onChange={(e) => setImg4(e.target.value)}
                  />
                  <select
                    
                    onChange={(e) => setBrand(e.target.value)}
                    className="border-4 border-gray-100  rounded-xl w-5/12 p-2 outline-0 focus:border-blue-500 "
                  >
                    <option value="dell">Dell</option>
                    <option value="apple">Apple</option>
                    <option value="Hp">Hp</option>
                    <option value="lenovo">Lenovo</option>
                    <option value="Asus">Asus</option>
                    <option value="Nvidia">Nvidia</option>
                    <option value="Amd">Amd</option>
                    <option value="Zotac">Zotac</option>
                    <option value="Corsair">Corsair</option>
                    <option value="Adata">Adata</option>
                    <option value="RedDragon">RedDragon</option>
                    

                  </select>
                </div>
                <div className="flex gap-4">
                  <select
                    
                    onChange={(e) => setCategory(e.target.value)}
                    className="border-4 border-gray-100  rounded-xl w-5/12 p-2 outline-0 focus:border-blue-500 "
                  >
                    <option value="ram">Ram</option>
                    <option value="Harddrive">Hard drive</option>
                    <option value="mouse">Mouse</option>
                    <option value="Keyboard">Keyboard</option>
                    <option value="Monitors">Monitors</option>
                    <option value="Processors">Processors</option>
                    <option value="Graphic Cards">Graphic Cards</option>
                    <option value="Headphones">Headphones</option>
                  </select>
                  <Input
                    placeholder="stock"
                    type="number"
                    min="0"
                   
                    onChange={(e) => setStock(e.target.value)}
                  />
                </div>
                <div className="flex gap-4">
                  <Input
                    placeholder="price"
                    type="number"
                    min="0"
                    
                    onChange={(e) => setprice(e.target.value)}
                  />
                  <Input
                    placeholder="Description"
                    type="string"
                    min="0"
                    
                    onChange={(e) => setDescription(e.target.value)}
                  />
                </div>
                <Button
                  type="submit"
                  children="Add Product"
                  varient="inline-flex items-center rounded border border-transparent bg-blue-100 px-4 py-1.5 text-base text-center font-medium text-blue-500 hover:bg-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 ml-4 w-32"
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
