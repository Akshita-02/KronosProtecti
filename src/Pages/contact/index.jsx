import React from "react";
import { AiOutlineMail } from "react-icons/ai";
import { BsTelephoneOutbound } from "react-icons/bs";
import { SlLocationPin } from "react-icons/sl";
import "./contact.css";
import { useState } from "react";
import { useCallback } from "react";

const ContactUs = () => {
  const [rateValue, setRateValue] = useState(0);

  const HandleRateClick = useCallback((e) => {
    setRateValue(() => e.target.value);
  }, []);
  console.log(rateValue);
  const stars = [
    { score: 1, id: "star1" },
    { score: 2, id: "star2" },
    { score: 3, id: "star3" },
    { score: 4, id: "star4" },
    { score: 5, id: "star5" },
  ];
  return (
    <section className="flex flex-col gap-[4rem]  w-full  bg-gradient-to-tl to-[#7cbde6] from-slate-300/10 w h-[100%] xl:px-[10rem] lg:px-[2rem] px-[1rem] py-[5rem]">
      <div className="flex lg:flex-col flex-col-reverse">
        <div className="flex lg:flex-row flex-col-reverse justify-between items-center gap-[2rem] lg:gap-0">
          <div className="md:w-[30%] w-[100%] flex lg:flex-col flex-col md:flex-row  md:items-start items-center justify-evenly md:gap-[5rem] gap-[1rem]">
            <div className=" flex  md:flex-row flex-col  gap-[2rem] md:text-start text-center md:items-start items-center">
              <AiOutlineMail className=" text-[2rem]  font-bold" />
              <div className="flex-col md:w-[80%] w-[100%]">
                <h2 className="text-2xl"> Chat with us</h2>
                <p>k.security@icloud.com</p>
              </div>
            </div>
            <div className=" flex md:flex-row flex-col gap-[2rem] md:text-start text-center md:items-start items-center">
              <BsTelephoneOutbound className=" text-[2rem]  font-bold" />
              <div className="flex-col md:w-[80%] w-[100%]">
                <h2 className="text-2xl"> Phone</h2>
                <p>+1(905)321-5540</p>
              </div>
            </div>
            <div className=" flex md:flex-row flex-col gap-[2rem] md:text-start text-center md:items-start items-center">
              <SlLocationPin className=" text-[2rem]  font-bold" />
              <div className="flex-col md:w-[80%] w-[100%] ">
                <h2 className="text-2xl"> Office</h2>
                <p>xyz@street.com</p>
              </div>
            </div>
          </div>
          <form className="md:w-[80%] lg:w-[50%]   w-[100%] md:mx-[4rem]  md:px-[4rem] p-2 m-2 bg-black rounded-xl">
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
                      type="text"
                      name="first-name"
                      id="first-name"
                      autoComplete="given-name"
                      className="block bg-transparent w-full rounded-md  p-[1rem] py-1.5 text-white shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2   sm:text-sm sm:leading-6"
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
                      type="text"
                      name="last-name"
                      id="last-name"
                      autoComplete="family-name"
                      className="block bg-transparent w-full rounded-md  py-1.5 text-white shadow-sm ring-1 ring-inset ring-gray-300 p-[1rem] placeholder:text-gray-400 focus:ring-2   sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>

                <div className="sm:col-span-3 ">
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium leading-6 text-gray-300 cursor-pointer"
                  >
                    Email address
                  </label>
                  <div className="mt-2">
                    <input
                      id="email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      className="block bg-transparent w-full rounded-md  py-1.5 ttext-whiteshadow-sm ring-1 ring-inset p-[1rem] ring-gray-300 placeholder:text-gray-400 focus:ring-2   sm:text-sm sm:leading-6"
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
                      id="about"
                      name="about"
                      rows={5}
                      className="block bg-transparent w-full rounded-md border-0 py-1.5 ttext-whiteshadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2   sm:text-sm sm:leading-6 p-[1rem]"
                      defaultValue={""}
                    />
                  </div>
                  <p className="mt-3 text-sm leading-6 text-gray-600">
                    Write a few sentences about your need.
                  </p>
                </div>
              </div>
            </div>

            <div className="my-6 flex items-center justify-center gap-x-6">
              <button class="btn1 py-4" style={{ "vertical-align": "middle" }}>
                <span>Send</span>
              </button>
            </div>
          </form>
        </div>
        <div  className="lg:py-[2rem] pb-[4rem]">
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
            To get in touch with us, please fill out the form, and one of
            our representatives will contact you shortly:
          </p>
        </div>
      </div>
      <form>
        <h3 className="text-center text-2xl font-semibold mb-[4rem]">
          Your feed back is valuable to us:
        </h3>
        <div>
          <div>
            <p className="mb-4"> please rate us:</p>
            <div className="flex gap-[2rem] my-[1rem]">
              <div className="px-[1rem] py-[0rem] rounded-3xl w-fit border-2 border-[#1875FF]">
                <div class="rating ">
                  {stars.map((star, index) => {
                    return (
                      <>
                        <input
                          value={star.score}
                          onClick={HandleRateClick}
                          name="rating"
                          id={star.id}
                          type="radio"
                        />
                        <label for={star.id} />
                      </>
                    );
                  })}
                </div>
              </div>
              <button class="btn1" style={{ "vertical-align": "middle" }}>
                <span>Submit</span>
              </button>
            </div>
          </div>
          <div>
            <p className="mb-4">What should we do to improve:</p>

            <div class="bg-transparent subscribe focus:outline-none text-white w-full xl:w-[30rem] md:w-[50%]">
              <textarea
                placeholder="Your contibutions..."
                className="subscribe-input bg-transparent border-[#1867df] border-2 rounded-xl w-full p-4 h-[10rem]  "
                name="contributions"
              />
              <br />
              <div class="submit-btn">SUBMIT</div>
            </div>
          </div>
        </div>
      </form>
    </section>
  );
};

export default ContactUs;
