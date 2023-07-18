import React from "react";

const CtaText = () => {
  return (
    <div className="flex pb-[6rem] md:gap-4 gap-[1rem] text-xl flex-col  text-[#2fdcff] justify-between items-between ">
      <p className="">
        Local :<span className="text-white"> Ontario based Home grown</span>
      </p>
      <p>
        Private :<span className="text-white">  No Board, No investors</span>
      </p>
      <p>
        Leadership :<span className="text-white">People Over Profit</span>
      </p>
      <p>
        In-House Kronos Trained and certified :
        <span className="text-white ">
          <ul className="pt-4">
            <li>1. First Aid/CPR/AED</li>

            <li>2. Crowd Management Certification</li>
            <li>3. Problem Solving</li>

          </ul>
        </span>
      </p>
      <p>
        People :<span className="text-white">$17 per Hour Minimum Pay</span>
      </p>
      <p>
        Ceo :<span className="text-white">On the Job</span>
      </p>
    </div>
  );
};

export default CtaText;
