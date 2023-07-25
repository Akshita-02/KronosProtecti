import React, { useState } from "react";
import { AiOutlineMail } from "react-icons/ai";
import { BsTelephoneOutbound } from "react-icons/bs";
import { SlLocationPin } from "react-icons/sl";
import "./contact.css";

const ContactUs = () => {
  const [data, setData] = useState({
    FirstName: "",
    LastName: "",
    Email: "",
    Message: "",
  });
  const [rateData, setRateData] = useState({
    Rate: "",
    FeedBack: "",
  });

  const stars = [
    { score: 5, id: "star5" },
    { score: 4, id: "star4" },
    { score: 3, id: "star3" },
    { score: 2, id: "star2" },
    { score: 1, id: "star1" },
  ];

  // const handleChange = (e) => {
  //   const { name, value } = e.target;
  //   setFormData((prevData) => rating({ ...prevData, [name]: value }));
  //   //console.log(name, value);
  // };

  const handleRateDataChange = (event) => {
    //console.log(event.target.value);
    const value = event.target.value;
    const Name = event.target.name;
    setRateData((prevData) => ({
      ...prevData,
      [Name]: value,
    }));
  };

  const handleChange = (event) => {
    const value = event.target.value;
    const Name = event.target.name;
    setData((prevData) => ({
      ...prevData,
      [Name]: value,
    }));
  };
  //console.log(data);
  const handleSubmit = async (event) => {
    event.preventDefault();
    //console.log("clicked");
    const stringed = JSON.stringify(data);

    const url =
      "https://script.google.com/macros/s/AKfycby9I2XKHSDYPfDF_z5Gxqj5yA8HVpUnh1sgLUHOS5s1h-BYttOC_LD7Fb7_oXntTRnO/exec";

    try {
      const response = await fetch(url, {
        method: "POST",
        body: stringed,
      });

      if (response.ok) {
        // Read the response body as JSON
        setRateData({
          FirstName: "",
          LastName: "",
          Email:"",
          Message:"",
        });
        const responseData = await response.text();
        //////console.log("Rate JSON:", responseData);
      } else {
        //console.log("Failed to send data.");
      }
    } catch (error) {
      //console.error("Error while sending data:", error);
    }
  };
  
  const handleRateSubmit = async (event) => {
    event.preventDefault();
    //console.log(rateData);
    const stringed = JSON.stringify(rateData);

    const url =
      "https://script.google.com/macros/s/AKfycby9I2XKHSDYPfDF_z5Gxqj5yA8HVpUnh1sgLUHOS5s1h-BYttOC_LD7Fb7_oXntTRnO/exec";

    try {
      const response = await fetch(url, {
        method: "POST",
        body: stringed,
      });

      if (response.ok) {
        // Read the response body as JSON
        setRateData({
          Rate: "",
          FeedBack: "",
        });
        const responseData = await response.text();
        //////console.log("Rate JSON:", responseData);
      } else {
        //console.log("Failed to send data.");
      }
    } catch (error) {
      //console.error("Error while sending data:", error);
    }
  };

  return (
    <section className="flex flex-col gap-[4rem] w-full bg-gradient-to-tl to-[#7cbde6] from-slate-300/10 w h-[100%] xl:px-[10rem] lg:px-[2rem] px-[1rem] py-[5rem]">
      <div className="flex lg:flex-col flex-col-reverse">
        <div className="flex lg:flex-row flex-col-reverse justify-between items-center gap-[2rem] lg:gap-0">
          <div className="md:w-[30%] w-[100%] flex lg:flex-col flex-col md:flex-row md:items-start items-center justify-evenly md:gap-[5rem] gap-[1rem]">
            <div className="flex md:flex-row flex-col gap-[2rem] md:text-start text-center md:items-start items-center">
              <AiOutlineMail className="text-[2rem] font-bold" />
              <div className="flex-col md:w-[80%] w-[100%]">
                <h2 className="text-2xl">Chat with us</h2>
                <p>k.security@icloud.com</p>
              </div>
            </div>
            <div className="flex md:flex-row flex-col gap-[2rem] md:text-start text-center md:items-start items-center">
              <BsTelephoneOutbound className="text-[2rem] font-bold" />
              <div className="flex-col md:w-[80%] w-[100%]">
                <h2 className="text-2xl">Phone</h2>
                <p>+1(905)321-5540</p>
              </div>
            </div>
            <div className="flex md:flex-row flex-col gap-[2rem] md:text-start text-center md:items-start items-center">
              <SlLocationPin className="text-[2rem] font-bold" />
              <div className="flex-col md:w-[80%] w-[100%] ">
                <h2 className="text-2xl">Office</h2>
                <p>101 Shoreview Pl, Hamilton, ON L8E 0K2, Canada</p>
              </div>
            </div>
          </div>
          <form
            onSubmit={handleSubmit}
            className="md:w-[80%] lg:w-[50%] w-[100%] md:mx-[4rem] md:px-[4rem] p-2 m-2 bg-black rounded-xl"
          >
            <div className="border-b border-gray-900/10 pb-12">
              <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                <div className="sm:col-span-3">
                  <label
                    htmlFor="first-name"
                    className="block text-sm font-medium leading-6 text-gray-300 cursor-pointer"
                  >
                    First name
                  </label>
                  <div className="mt-2">
                    <input
                      onChange={handleChange}
                      value={data.FirstName}
                      type="text"
                      name="FirstName"
                      id="first-name"
                      className="block bg-transparent w-full rounded-md p-[1rem] py-1.5 text-white shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>

                <div className="sm:col-span-3">
                  <label
                    htmlFor="last-name"
                    className="block text-sm font-medium leading-6 text-gray-300 cursor-pointer"
                  >
                    Last name
                  </label>
                  <div className="mt-2">
                    <input
                      value={data.LastName}
                      onChange={handleChange}
                      type="text"
                      name="LastName"
                      id="last-name"
                      className="block bg-transparent w-full rounded-md py-1.5 text-white shadow-sm ring-1 ring-inset ring-gray-300 p-[1rem] placeholder:text-gray-400 focus:ring-2 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>

                <div className="sm:col-span-3">
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium leading-6 text-gray-300 cursor-pointer"
                  >
                    Email address
                  </label>
                  <div className="mt-2">
                    <input
                      value={data.Email}
                      onChange={handleChange}
                      id="email"
                      name="Email"
                      type="email"
                      className="block bg-transparent w-full rounded-md py-1.5 ttext-whiteshadow-sm ring-1 ring-inset p-[1rem] ring-gray-300 placeholder:text-gray-400 focus:ring-2 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
                <div className="col-span-full">
                  <label
                    htmlFor="about"
                    className="block text-sm font-medium leading-6 text-gray-300 cursor-pointer"
                  >
                    Message
                  </label>
                  <div className="mt-2">
                    <textarea
                      value={data.Message}
                      onChange={handleChange}
                      id="about"
                      name="Message"
                      rows={5}
                      className="block bg-transparent w-full rounded-md border-0 py-1.5 ttext-whiteshadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 sm:text-sm sm:leading-6 p-[1rem]"
                    />
                  </div>
                  <p className="mt-3 text-sm leading-6 text-gray-600">
                    Write a few sentences about your need.
                  </p>
                </div>
              </div>
            </div>

            <div className="my-6 flex items-center justify-center gap-x-6">
              <button
                className="btn1 py-4"
                style={{ verticalAlign: "middle" }}
                type="submit"
              >
                <span>Send</span>
              </button>
            </div>
          </form>
        </div>
        <div className="lg:py-[2rem] pb-[4rem]">
          <p>
            {" "}
            Our team of highly trained professionals is ready to address your
            security concerns promptly and efficiently. Whether you require
            security services for your home, business, event, or any other
            setting, Kronos Protection Security Company is here to ensure your
            safety and peace of mind.
          </p>

          <p>
            {" "}
            No matter the size or complexity of your security needs, we are
            equipped to handle them with utmost professionalism and care. At
            Kronos Protection Security Company, we prioritize your safety and
            security above all else.
          </p>
          <p>
            {" "}
            To get in touch with us, please fill out the form, and one of our
            representatives will contact you shortly:
          </p>
        </div>
      </div>
      <div>
        <h3 className="text-center text-2xl font-semibold mb-[4rem]">
          Your FeedBack is valuable to us:
        </h3>
        <form onSubmit={handleRateSubmit}>
          <div>
            <p className="mb-4"> please rate us:</p>
            <div className="flex gap-[2rem] my-[1rem]">
              <div className="px-[1rem] py-[0rem] rounded-3xl w-fit border-2 border-[#1875FF]">
                <div class="rating flex-reverse ">
                  {stars.map((star, index) => {
                    return (
                      <>
                        <input
                          key={index}
                          value={star.score}
                          onClick={handleRateDataChange}
                          name="Rate"
                          id={star.id}
                          type="radio"
                        />
                        <label for={star.id} />
                      </>
                    );
                  })}
                </div>
              </div>
              {/* <button class="btn1" style={{ "vertical-align": "middle" }}>
                <span>Submit</span>
              </button> */}
            </div>
          </div>
          <div>
            <p className="mb-4">What should we do to improve:</p>

            <div className="bg-transparent rounded-lg subscribe focus:outline-none text-white w-full xl:w-[30rem] md:w-[50%]">
              <textarea
                onChange={handleRateDataChange}
                value={rateData.FeedBack}
                placeholder="Your contibutions..."
                className="subscribe-input focus:outline-none bg-transparent border-[#1867df] border rounded-xl w-full p-4 h-[10rem]  "
                name="FeedBack"
              />
              <br />
              <button type="submit" className="submit-btn">
                SUBMIT
              </button>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
};

export default ContactUs;
