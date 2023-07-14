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
    { score: 5, id: "star5" },
    { score: 4, id: "star4" },
    { score: 3, id: "star3" },
    { score: 2, id: "star2" },
    { score: 1, id: "star1" },
  ];
  return (
    <section className="flex flex-col gap-[4rem]  bg-gradient-to-tl to-[#7cbde6] from-slate-300/10 h-[100%] xl:px-[15rem] lg:px-[5rem] px-[1rem] py-[5rem]">
      <div className="flex md:flex-row flex-col justify-between items-center gap-[2rem] md:gap-0">
        <div className="md:w-[50%] w-[100%] flex flex-col  md:items-start items-center justify-evenly md:gap-[5rem] gap-[1rem]">
          <div className=" flex  md:flex-row flex-col  gap-[2rem] md:text-start text-center md:items-start items-center">
            <AiOutlineMail className=" text-[2rem]  font-bold" />
            <div className="flex-col md:w-[80%] w-[100%]">
              <h2 className="text-2xl"> Chat with us</h2>
              <p>Lorem ipsum dolor</p>
            </div>
          </div>
          <div className=" flex md:flex-row flex-col gap-[2rem] md:text-start text-center md:items-start items-center">
            <BsTelephoneOutbound className=" text-[2rem]  font-bold" />
            <div className="flex-col md:w-[80%] w-[100%]">
              <h2 className="text-2xl"> Phone</h2>
              <p>Lorem ipsum dolor, sit amet consectetur.</p>
            </div>
          </div>
          <div className=" flex md:flex-row flex-col gap-[2rem] md:text-start text-center md:items-start items-center">
            <SlLocationPin className=" text-[2rem]  font-bold" />
            <div className="flex-col md:w-[80%] w-[100%] ">
              <h2 className="text-2xl"> Office</h2>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Error,
                quam adipisci officiis
              </p>
            </div>
          </div>
        </div>
        <form className="md:w-[50%]  w-[100%] md:mx-[4rem]  md:px-[4rem] p-2 m-2 bg-black rounded-xl">
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

              <div className="sm:col-span-4">
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

      <p>
        {" "}
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Error, quam
        adipisci officiis ipsa enim dolorem quos aliquam facilis laudantium
        necessitatibus autem aliquid fuga repellendus assumenda dignissimos in
        ipsum. Ex, dolorum placeat deleniti at, ipsum non corrupti quaerat aut
        vel veritatis enim illum natus blanditiis ab magnam! Numquam, amet dolor
        quos quam ratione magni veritatis aliquam praesentium enim vero quod
        voluptates. Quod tempore itaque et eius, excepturi sunt quam, accusamus
        nesciunt aperiam consectetur distinctio possimus recusandae. Quam
        assumenda vel nesciunt delectus, explicabo aspernatur facere hic facilis
        repudiandae dicta, eos architecto, in unde voluptatum sapiente sed
        doloremque amet quia. Doloribus magnam sapiente cumque labore, fugiat
        tempore architecto. Optio non voluptatem atque, aperiam quam maiores
        nostrum cupiditate, ad reprehenderit tempora magni alias eos, quo minus
        ipsam distinctio autem voluptas sunt voluptate? Quo fugiat nostrum odit
        aut dolor inventore, fugit ipsam consectetur! Hic minus et doloribus ab
        saepe sequi nobis explicabo veniam ducimus possimus!
      </p>
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

            <div class="subscribe text-white">
              <textarea
                placeholder="Your contibutions..."
                class="subscribe-input"
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
