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
    }).then((response) => response.json());
    // .then((data) => console.log(data));

    fetch(`http://localhost:5000/orders/${e.id}`)
      .then((response) => response.json())
      .then((data) => {
        data?.products?.map((i) => {
          const updateStock = i.stock - i.quantity;

          fetch(`http://localhost:5000/products/${i.id}`, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ ...i, stock: updateStock }),
          })
            .then((response) => response.json())
            .then((data) => console.log(data, "produxts"));
        });
      });
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
              <th scope="col" className="py-3 px-6 text-lg font-light">
                Id
              </th>
              <th scope="col" className="py-3 px-6 text-lg font-light">
                First Name
              </th>
              <th scope="col" className="py-3 px-6 text-lg font-light">
                Email
              </th>
              <th scope="col" className="py-3 px-6 text-lg font-light">
                City
              </th>

              <th scope="col" className="py-3 px-6 text-lg font-light">
                CheckOder
              </th>
            </tr>
          </thead>
          <tbody>
            {tableData
              .slice(vistedPages, vistedPages + userperPage)
              .map((item) => (
                <tr className="bg-white border-b  " key={item.id}>
                  <td className="py-4 px-6 text-lg font-light text-gray-600">
                    {item.id}
                  </td>
                  <td className="py-4 px-6 text-lg font-light text-gray-600">
                    {item.firstname}
                  </td>
                  <td className="py-4 px-6 text-lg font-light text-gray-600">
                    {item.email}
                  </td>
                  <td className="py-4 px-6 text-lg font-light text-gray-600">
                    {item.city}
                  </td>
                  <td>
                    <Button
                      varient="inline-flex items-center rounded border border-transparent bg-blue-100 px-2.5 py-1.5 text-xs font-medium text-blue-500 hover:bg-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 ml-4"
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
          <div className="flex justify-end  -mt-8 absolute right-0  p-2 bg-gray-200  ">
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
                  <p className=" text-lg font-light text-gray-600">
                    <span className="mr-3">OrderId:</span>
                    {item.id}
                  </p>
                  <p className=" text-lg font-light text-gray-600">
                    {item.email}
                  </p>
                </div>
              ))}
          </div>
          <div className="mt-3">
            <table className="w-full text-lg text-left text-black  mt-1">
              <thead className="text-lg text-white  bg-blue-500   ">
                <tr className="flex justify-between  w-full">
                  <th scope="col" className="py-3 px-6 text-lg font-light">
                    Name
                  </th>
                  <th scope="col" className="py-3 px-6 text-lg font-light">
                    Brand
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
                      <td className="py-4 px-6 text-lg font-light text-gray-600">
                        {i.name}
                      </td>
                      <td className="py-4 px-6 text-lg font-light text-gray-600">
                        {i.brand}
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
            <h1 className="mt-2  text-lg font-light text-gray-600 ">
              <span className="mr-3">TotalAmont:</span>
              {orderData.length > 0 && orderData[0].totalprice}
            </h1>
          </div>
          <div className="flex items-center gap-3 justify-start mt-2">
            <Button
              children="Confrim"
              varient="inline-flex items-center rounded border border-transparent bg-blue-100 px-2.5 py-1.5 text-sm font-medium text-blue-500 hover:bg-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 "
              onClick={(e) => OrderConfirm(orderData[0])}
            />
            <Button
              children="Cancel"
              varient="inline-flex items-center rounded border border-transparent bg-blue-100 px-2.5 py-1.5 text-sm font-medium text-blue-500 hover:bg-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 "
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
