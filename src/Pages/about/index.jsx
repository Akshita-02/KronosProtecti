import React from "react";
import "./about.css";
import ImageContainer from "../../Components/ImageContainer";

import { Slider1 } from "../../Components/slider";
import TextCard from "../../Components/TextCard";
import { contactSliderImages } from "../../data";
import { Image6, Image3, Image4 } from "../../assets";
import CtaText from "./components/CtaText";

const AboutUs = () => {
  return (
    <>
      <section className=" m-4 xl:px-[5rem] md:mx-[5rem] ">
        <h1 className="text-center my-4 text-[3rem] font-semibold uppercase">
          Why <span className="text-[#2fdcff]">Kronos?</span>
        </h1>
        <TextCard src={Image3} orientation="flex-row" text={<CtaText />} />

        <section className="m-2 font-bold uppercase  flex flex-col justify-center items-center relative">
          <h2 className="xl:text-[20rem] sm:text-[10rem] text-[8rem]  text-[#6fbff2] md:-mt-[4rem] sm:-mt-[5rem] -mt-[6rem]">
            200<span className="xl:text-[15rem] sm:text-[8rem] text-[4rem]">+</span>
          </h2>
          <h3 className="xl:text-[10rem] md:text-[8rem] sm:text-[5rem] text-[4rem] xl:-mt-[10rem] sm:-mt-[5rem] -mt-[3rem] p-0">
            employees
          </h3>
          <Slider1 height="md:h-[30rem] lg:h-[40rem] xl:h-[50rem] xl:w-[60rem] lg:w-[50rem] h-[20rem] w-full md:w-[35rem]" sliderImages={contactSliderImages} />
        </section>
        <section className="my-[4rem] flex flex-col gap-6 justify-center items-center w-full ">
          <div className="flex md:flex-row flex-col h-fit my-4 gap-[3rem] ">
            <article className="md:w-[50%] px-2 h-100% ">
              <h3 className="text-2xl mb-6 font-semibold text-[#2fdcff]">
                Our Mission
              </h3>
              <p>
                {" "}
                At Kronos Protection, our mission is to safeguard individuals
                and organizations by providing comprehensive human security
                solutions. We are dedicated to ensuring the safety, well-being,
                and peace of mind of our clients in today’s ever-changing world.
                Through the expertise of our highly trained professionals and
                the use of advanced technologies, we create a secure environment
                where individuals can thrive and organizations can operate with
                confidence.
              </p>
            </article>
            <ImageContainer
              src={Image4}
              className="h-[25rem] lg:w-[70%] xl:w-[60%]"
            />
          </div>
          <div className="flex lg:flex-row flex-col-reverse h-fit my-4 gap-[3rem] ">
            <ImageContainer
              src={Image6}
              className="h-[25rem] lg:w-[70%] xl:w-[60%]"
            />
            <article className="md:w-[50%] px-2 h-100%">
              <h3 className="text-2xl mb-6 font-semibold text-[#2fdcff]">
                Our Vision
              </h3>
              <p>
                {" "}
                Our vision at Kronos Protection is to be the unrivaled leader in
                the human security industry, renowned for our unwavering
                commitment to safeguarding individuals and organizations
                worldwide. We aim to set the highest standards of excellence and
                innovation, earning the trust and confidence of our clients as
                their trusted security partner. Central to our vision is a
                client-centric approach, where we prioritize understanding the
                unique needs, challenges, and aspirations of our clients. By
                fostering collaborative partnerships and delivering customized
                security solutions, we strive to surpass expectations, becoming
                the preferred choice for their security needs.
              </p>
            </article>
          </div>
        </section>
        <section className="gap-6 flex flex-col">
          <p>
            Welcome to Kronos Protection, a premier human security company
            dedicated to providing comprehensive security solutions to
            individuals and organizations worldwide. With a relentless
            commitment to excellence, professionalism, and client satisfaction,
            we are your trusted partner in safeguarding lives and assets in an
            ever-changing world. At Kronos Protection, we understand that
            security is not just a service; it’s a fundamental need that impacts
            the peace of mind and well-being of our clients. Our team of highly
            trained professionals brings together a wealth of expertise,
            experience, and unwavering dedication to deliver unparalleled
            security solutions tailored to meet your specific needs.
          </p>
          <p>
            What sets us apart is our client-centric approach. We listen
            carefully to your concerns, aspirations, and unique challenges,
            allowing us to develop customized security strategies that address
            your individual requirements. Whether you are an executive in need
            of personal protection, a high-profile event organizer, or a
            corporation seeking comprehensive security solutions, we have the
            expertise and resources to meet and exceed your expectations. Our
            commitment to excellence extends beyond our personnel. We embrace
            cutting-edge technologies, leveraging state-of-the-art surveillance
            systems, access control solutions, and advanced threat intelligence
            tools to enhance our security operations. By staying at the
            forefront of technological advancements, we ensure that you receive
            the most effective and efficient security measures available.
          </p>
          <p>
            At Kronos Protection, we are driven by a strong set of values.
            Integrity, professionalism, and trustworthiness are at the core of
            everything we do. We operate with the utmost discretion and
            confidentiality, respecting your privacy and safeguarding your
            sensitive information. We are also deeply committed to ethical
            practices and social responsibility. We strive to create a positive
            impact within the communities we serve, engaging in community
            outreach programs, supporting local initiatives, and promoting
            education and awareness about personal safety and security. Our
            success lies in the long-standing relationships we build with our
            clients. We believe in open communication, transparent partnerships,
            and a collaborative approach to security. When you choose Kronos
            Protection, you can expect a dedicated team that is responsive,
            proactive, and committed to ensuring your safety and peace of mind.
          </p>
          <p>
            Explore our range of services, from executive protection and risk
            assessments to event security and residential security. Contact us
            today to discuss your security needs and experience the Kronos
            Protection difference. Together, we can create a secure environment
            where you can thrive.
          </p>
        </section>
      </section>
    </>
  );
};

export default AboutUs;
