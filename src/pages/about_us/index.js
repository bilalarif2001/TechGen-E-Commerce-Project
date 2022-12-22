import Button from "../../components/button";
import { Link } from "react-router-dom";
import { BsFacebook, BsLinkedin, BsTwitter } from "react-icons/bs";

import Cpu from "../../assets/cpu.jpeg";
import team2 from "../../assets/team2.jpeg";
import team1 from "../../assets/team1.jpg";

const AboutUs = () => {
  const TeamMember = [
    {
      name: "Naveed Warraich",
      job: "Web Developer",
      img: team1,
      Facebook: "https://www.facebook.com/home.php",
      linkedIn: "https://www.linkedin.com/feed/",
      twitter: "https://twitter.com/i/flow/single_sign_on",
    },
    {
      name: "Bilal Khan",
      job: "Web Developer",
      img: team2,
      Facebook: "https://www.facebook.com/home.php",
      linkedIn: "https://www.linkedin.com/feed/",
      twitter: "https://twitter.com/i/flow/single_sign_on",
    },

    {
      name: "Naveed Warraich",
      job: "Web Developer",
      img: team2,
      Facebook: "https://www.facebook.com/home.php",
      linkedIn: "https://www.linkedin.com/feed/",
      twitter: "https://twitter.com/i/flow/single_sign_on",
    },
    {
      name: "Naveed Warraich",
      job: "Web Developer",
      img: team2,
      Facebook: "https://www.facebook.com/home.php",
      linkedIn: "https://www.linkedin.com/feed/",
      twitter: "https://twitter.com/i/flow/single_sign_on",
    },
  ];
  return (
    <div className=" w-11/12 mx-auto space-y-10 mb-6">
      <div className="  flex  justify-center gap-6 ">
        <div className="w-8/12 p-10 mt-10">
          <h1 className="text-start mt-4 text-3xl w-32 text-yellow-500 border-b-4  border-yellow-500">
            About Us
          </h1>
          <div>
            <p className="text-lg  text-gray-400 mt-4">
              TechGen Supply story begins with the ambition and entrepreneurial
              spirit of professionals who shared a collective desire to innovate
              and create.
            </p>
          </div>
          <p className="mt-4 text-lg  text-gray-400">
            TechGen Supply began with the vision to provide the best quality
            products hand-picked by our expert team TechGen Supply is a team of
            experts that work together to create a successful and innovative
            business for hardware IT products. By working with the best
            manufacturers, we provide our clients with the best. Our business
            headquarters is based in Wyoming, but our products are sold
            different countries. Our goals and objectives align well to give
            clients best experience with our IT products. With the vision to
            become one of the top IT reseller companies in the world with its
            products, TechGeb n Supply is slowly expanding to reach out to every
            client around the world.
          </p>
          <Link to={"/"}>
            <Button
              varient="bg-yellow-500 hover:bg-white text-white hover:text-yellow-500 hover:border-2 hover:border-yellow-500 text-xl font-medium py-4 px-4 w-44 mt-10 "
              children="Read More"
            />
          </Link>
        </div>
        <div className="w-4/12 mt-10 border h-[550px] ">
          <img className="w-full h-full" src={Cpu} />
        </div>
      </div>
      <div className="mt-10 flex flex-col justify-center ">
        <div className="flex justify-center ">
          <h1 className="text-center  mt-4  w-32  text-3xl text-yellow-500  border-b-4  border-yellow-500">
            Our Team
          </h1>
        </div>
        <div className="flex mx-auto justify-center items-center w-8/12 mb-4 ">
          <p className="text-center text-lg  text-gray-400 mt-6 ">
            Our team comprises trusted and responsible professionals who work
            together in cohesion with the mindset to provide the best to their
            customers.
          </p>
        </div>
        <div className="flex items-center justify-center space-x-10    ">
          {TeamMember.map((item, id) => (
            <div className="bg-gray-100 pt-5 px-5 w-[250px] flex flex-col items-center justify-center space-y-4  rounded-xl ">
              <div>
                <img
                  src={item.img}
                  className="w-[150px] h-[170px] rounded-full "
                />
              </div>
              <p className="text-xl ">{item.name}</p>
              <p>
                <i className="text-center">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Iure, quam dolore debitis impedit ipsa quo autem iste quisquam{" "}
                </i>
              </p>
              <p className="text-xl">{item.job}</p>
              <div className="flex items-center space-x-6 pb-6">
                <a href={item.Facebook} target="black">
                  {" "}
                  <BsFacebook className="text-3xl" />{" "}
                </a>
                <a href={item.linkedIn} target="black">
                  <BsLinkedin className="text-3xl" />{" "}
                </a>
                <a href={item.twitter} target="black">
                  <BsTwitter className="text-3xl" />{" "}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default AboutUs;
