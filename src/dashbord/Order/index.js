import ReactPaginate from "react-paginate";
import { useState, useEffect } from "react";
import ".//..//../App.css";
import Button from "../../components/button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { RxCross2 } from "react-icons/rx";
import Box from "@mui/material/Box";

const Order = () => {
  // const [ModetDara]
  const [tableData, setTableData] = useState([]);
  const [orderData, setOrderData] = useState([]);
  const [pageNumber, setPageNumber] = useState(0);
  const [state, setState] = useState({});
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const userperPage = 5;
  const vistedPages = pageNumber * userperPage;
  const count = Math.ceil(tableData.length / userperPage);

  const style = {
    position: "absolute",
    top: "40%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 700,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };
  const ChangePage = (e) => {
    setPageNumber(e.selected);
  };
  const GetData = () => {
    fetch("http://localhost:5000/orders")
      .then((response) => response.json())
      .then((e) => setTableData(e))
      .catch((err) => {
        console.log(err);
      });
  };

  const CheckOurder = (e) => {
    handleOpen();

    let filterOrder = tableData.filter((item) => {
      return item.id === e.id;
    });
    setOrderData(filterOrder);
  };

  const OrderConfirm = (e) => {
    handleClose();

    const updateData = {
      ...e,
      state: "Accepted",
      orderDes: "Your Order is Accepted",
    };

    fetch(`http://localhost:5000/orders/${e.id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updateData),
    })
      .then((response) => response.json())
      .then((data) => console.log(data))
      .error((err) => console.log(err));
  };

  const OrderCancel = (e) => {
    handleClose();

    const updateData = {
      ...e,
      state: "Rejected",
      orderDes: "Your Order is Rejected",
    };
    fetch(`http://localhost:5000/orders/${e.id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updateData),
    })
      .then((response) => response.json())
      .then((data) => console.log(data))
      .error((err) => console.log(err));
  };

  useEffect(() => {
    GetData();
  }, []);
  return (
    <div>
      <h1 className="text-start  text-4xl  text-blue-500 ">Orders</h1>
      <div className="overflow-x-auto relative shadow-md sm:rounded-lg">
        <table className="w-full text-lg text-left text-black  mt-6">
          <thead className="text-lg text-white  bg-blue-500 ">
            <tr>
              <th scope="col" className="py-3 px-6">
                Id
              </th>
              <th scope="col" className="py-6 px-6">
                First Name
              </th>
              <th scope="col" className="py-3 px-6">
                Email
              </th>
              <th scope="col" className="py-3 px-6">
                City
              </th>

              <th scope="col" className="py-3 px-6">
                CheckOder
              </th>
            </tr>
          </thead>
          <tbody>
            {tableData
              .slice(vistedPages, vistedPages + userperPage)
              .map((item) => (
                <tr className="bg-white border-b  " key={item.id}>
                  <td className="py-4 px-6">{item.id}</td>
                  <td className="py-4 px-6">{item.firstname}</td>
                  <td className="py-4 px-6">{item.email}</td>
                  <td className="py-4 px-6">{item.city}</td>
                  <td>
                    <Button
                      varient="bg-blue-500 p-3 my-1 rounded-md text-white ml-4"
                      onClick={(e) => {
                        CheckOurder(item);
                      }}
                    >
                      {"Check Order"}
                    </Button>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div className="flex justify-end border-2 border-black -mt-8 absolute right-0  p-2 bg-gray-200  ">
            <Button
              children=<RxCross2 />
              className="text-2xl "
              onClick={() => {
                handleClose();
              }}
            />
          </div>
          <p className="text-2xl -mt-6 text-blue-500">OderDetails</p>

          <div className="flex justify-between mt-3">
            {orderData.length > 0 &&
              orderData.map((item, id) => (
                <div key={id} className="flex justify-between  w-full">
                  <p>
                    <span className="mr-3">OrderId:</span>
                    {item.id}
                  </p>
                  <p>{item.email}</p>
                </div>
              ))}
          </div>
          <div className="mt-3">
            <table className="w-full text-lg text-left text-black  mt-1">
              <thead className="text-lg text-white  bg-blue-500   ">
                <tr className="flex justify-between  border-2 w-full">
                  <th scope="col" className=" px-6">
                    Name
                  </th>
                  <th scope="col" className=" ">
                    Brand
                  </th>
                  <th scope="col" className=" ">
                    Total
                  </th>
                </tr>
              </thead>
              <tbody>
                {orderData.length > 0 &&
                  orderData[0].products.map((i, id) => (
                    <tr
                      key={id}
                      className="border space-t-2 flex justify-between"
                    >
                      <td>{i.name}</td>
                      <td>{i.brand}</td>
                    </tr>
                  ))}
              </tbody>
            </table>
            <h1 className="mt-2 ">
              <span className="mr-3">TotalAmont:</span>
              {orderData.length > 0 && orderData[0].totalprice}
            </h1>
          </div>
          <div className="flex items-center gap-3 justify-start mt-2">
            <Button
              children="Confrim"
              varient="bg-blue-500 p-3 my-1 rounded-md text-white "
              onClick={(e) => OrderConfirm(orderData[0])}
            />
            <Button
              children="Cancel"
              varient="bg-blue-500 p-3 my-1 rounded-md text-white "
              onClick={(e) => OrderCancel(orderData[0])}
            />
          </div>
        </Box>
      </Modal>

      <div className="mt-3 flex items-center justify-center ml-10">
        <ReactPaginate
          previousLabel="< Pre"
          nextLabel="Next"
          pageCount={count}
          onPageChange={ChangePage}
          pageRangeDisplayed={10}
          marginPagesDisplayed={4}
          containerClassName={"containerClass  "}
          previousLinkClassName={"previousLinkClassName"}
          nextLinkClassName={"nextLinkClassName"}
          disabledClassName="disabled"
          activeClassName={"activeClassName"}
        />
      </div>
    </div>
  );
};

export default Order;
