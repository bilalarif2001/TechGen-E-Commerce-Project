import { useState } from "react";
import Button from "../../components/button";
import Input from "../../components/Input";
import TextArea from "../../components/TextArea";
import emial from "../../assets/email.png";

const ContactUs = () => {
  const [firstname, setFirstname] = useState();
  const [lastname, setLasrname] = useState();
  const [email, setEmail] = useState();
  const [question, seteQuestion] = useState();

  const SendMessage = () => {
    console.log(email);
  };

  return (
    <div className=" w-11/12 mx-auto space-y-5 mb-6  ">
      <h1 className="text-start mt-4 text-3xl w-40 text-yellow-500 border-b-4  border-yellow-500">
        Contact Us
      </h1>
      <h1 className="text-start mt-4 text-xl  text-yellow-500 ">
        Phone No : 0302-6916119
      </h1>
      <h1 className="text-start mt-4 text-xl  text-yellow-500 ">
        Email : info@techgen@gmail.com
      </h1>
      <p className="text-center mt-10  border-black mt-4 text-3xl  text-yellow-500 ">
        Have Some Question?
      </p>
      <div className="flex  items-center ">
        <div className="w-6/12  flex items-center justify-center  ">
          <img className="h-52 w-48 " src={emial} alt="emil" />
        </div>
        <div className="w-6/12 mb-10 flex flex-col space-y-4 ">
          <Input
            type="text"
            value={firstname}
            placeholder="Enter First Name"
            onChange={(e) => setFirstname(e.target.value)}
          />
          <Input
            type="text"
            value={lastname}
            placeholder="Enter Last Name"
            onChange={(e) => setLasrname(e.target.value)}
          />
          <Input
            type="email"
            placeholder="Enter Your Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextArea
            rows="5"
            placeholder="Enter your Question"
            value={question}
            onChange={(e) => e.target.value}
          />

          <Button
            varient="bg-yellow-500  hover:bg-white text-white hover:text-yellow-500 hover:border-2 hover:border-yellow-500 text-xl font-medium py-4 px-4 w-44  "
            children="Send Message"
            onClick={SendMessage}
          />
        </div>
      </div>
    </div>
  );
};
export default ContactUs;
