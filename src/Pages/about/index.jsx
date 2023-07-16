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
          Why <span className="text-[#6fbff2]">Kronos?</span>
        </h1>
        <TextCard
          src={Image3}
          orientation="flex-row"
          text={<CtaText/>}
        />

        <section className="m-2 font-bold uppercase  flex flex-col justify-center items-center relative">
          <h2 className="xl:text-[20rem] text-[10rem]  text-[#6fbff2] md:-mt-[4rem] -mt-[3rem]">
            200<span className="xl:text-[15rem] text-[8rem]">+</span>
          </h2>
          <h3 className="xl:text-[10rem] md:text-[8rem] text-[5rem] xl:-mt-[10rem] -mt-[5rem] p-0">
            employees
          </h3>
          <Slider1 height="h-[35rem] -z-1" sliderImages={contactSliderImages} />
        </section>
        <section className="my-[4rem] flex flex-col gap-6 justify-center items-center w-full ">
          <div className="flex md:flex-row flex-col h-fit my-4 gap-[3rem] ">
            <article className="md:w-[50%] px-2 h-100% ">
              <h3 className="text-2xl mb-6 font-semibold text-[#5c65e2]">
                Our Mission
              </h3>
              <p>
                {" "}
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Error,
                quam adipisci officiis ipsa enim dolorem quos aliquam facilis
                laudantium necessitatibus autem aliquid fuga repellendus
                assumenda dignissimos in ipsum. Ex, dolorum placeat deleniti at,
                ipsum non corrupti quaerat aut vel veritatis enim illum natus
                blanditiis ab magnam! Numquam, amet dolor quos quam ratione
                magni veritatis aliquam praesentium enim vero quod voluptates.
                Quod tempore itaque et eius, excepturi sunt quam, accusamus
                nesciunt aperiam consectetur distinctio possimus recusandae.
                Quam assumenda vel nesciunt delectus, explicabo aspernatur
                facere hic facilis repudiandae dicta, eos architecto, in unde
                voluptatum sapiente sed
              </p>
            </article>
            <ImageContainer
              src={Image4}
              className="h-[25rem] md:w-[70%] xl:w-[60%]"
            />
          </div>
          <div className="flex md:flex-row flex-col-reverse h-fit my-4 gap-[3rem] ">
            <ImageContainer
              src={Image6}
              className="h-[25rem] md:w-[70%] xl:w-[60%]"
            />
            <article className="md:w-[50%] px-2 h-100%">
              <h3 className="text-2xl mb-6 font-semibold text-[#5c65e2]">
                Our Vision
              </h3>
              <p>
                {" "}
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Error,
                quam adipisci officiis ipsa enim dolorem quos aliquam facilis
                laudantium necessitatibus autem aliquid fuga repellendus
                assumenda dignissimos in ipsum. Ex, dolorum placeat deleniti at,
                ipsum non corrupti quaerat aut vel veritatis enim illum natus
                blanditiis ab magnam! Numquam, amet dolor quos quam ratione
                magni veritatis aliquam praesentium enim vero quod voluptates.
                Quod tempore itaque et eius, excepturi sunt quam, accusamus
                nesciunt aperiam consectetur distinctio possimus recusandae.
                Quam assumenda vel nesciunt delectus, explicabo aspernatur
                facere hic facilis repudiandae dicta, eos architecto, in unde
                voluptatum sapiente sed
              </p>
            </article>
          </div>
        </section>
        <section className="gap-6 flex flex-col">
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Error,
            quam adipisci officiis ipsa enim dolorem quos aliquam facilis
            laudantium necessitatibus autem aliquid fuga repellendus assumenda
            dignissimos in ipsum. Ex, dolorum placeat deleniti at, ipsum non
            corrupti quaerat aut vel veritatis enim illum natus blanditiis ab
            magnam! Numquam, amet dolor quos quam ratione magni veritatis
            aliquam praesentium enim vero quod voluptates. Quod tempore itaque
            et eius, excepturi sunt quam, accusamus nesciunt aperiam consectetur
            distinctio possimus recusandae. Quam assumenda vel nesciunt
            delectus, explicabo aspernatur facere hic facilis repudiandae dicta,
            eos architecto, in unde voluptatum sapiente sed doloremque amet
            quia. Doloribus magnam sapiente cumque labore, fugiat tempore
            architecto. Optio non voluptatem atque, aperiam quam maiores nostrum
            cupiditate, ad reprehenderit tempora magni alias eos, quo minus
            ipsam distinctio autem voluptas sunt voluptate? Quo fugiat nostrum
            odit aut dolor inventore, fugit ipsam consectetur! Hic minus et
            doloribus ab saepe sequi nobis explicabo veniam ducimus possimus!
          </p>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Error,
            quam adipisci officiis ipsa enim dolorem quos aliquam facilis
            laudantium necessitatibus autem aliquid fuga repellendus assumenda
            dignissimos in ipsum. Ex, dolorum placeat deleniti at, ipsum non
            corrupti quaerat aut vel veritatis enim illum natus blanditiis ab
            magnam! Numquam, amet dolor quos quam ratione magni veritatis
            aliquam praesentium enim vero quod voluptates. Quod tempore itaque
            et eius, excepturi sunt quam, accusamus nesciunt aperiam consectetur
            distinctio possimus recusandae. Quam assumenda vel nesciunt
            delectus, explicabo aspernatur facere hic facilis repudiandae dicta,
            eos architecto, in unde voluptatum sapiente sed doloremque amet
            quia. Doloribus magnam sapiente cumque labore, fugiat tempore
            architecto. Optio non voluptatem atque, aperiam quam maiores nostrum
            cupiditate, ad reprehenderit tempora magni alias eos, quo minus
            ipsam distinctio autem voluptas sunt voluptate? Quo fugiat nostrum
            odit aut dolor inventore, fugit ipsam consectetur! Hic minus et
            doloribus ab saepe sequi nobis explicabo veniam ducimus possimus!
          </p>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Error,
            quam adipisci officiis ipsa enim dolorem quos aliquam facilis
            laudantium necessitatibus autem aliquid fuga repellendus assumenda
            dignissimos in ipsum. Ex, dolorum placeat deleniti at, ipsum non
            corrupti quaerat aut vel veritatis enim illum natus blanditiis ab
            magnam! Numquam, amet dolor quos quam ratione magni veritatis
            aliquam praesentium enim vero quod voluptates. Quod tempore itaque
            et eius, excepturi sunt quam, accusamus nesciunt aperiam consectetur
            distinctio possimus recusandae. Quam assumenda vel nesciunt
            delectus, explicabo aspernatur facere hic facilis repudiandae dicta,
            eos architecto, in unde voluptatum sapiente sed doloremque amet
            quia. Doloribus magnam sapiente cumque labore, fugiat tempore
            architecto. Optio non voluptatem atque, aperiam quam maiores nostrum
            cupiditate, ad reprehenderit tempora magni alias eos, quo minus
            ipsam distinctio autem voluptas sunt voluptate? Quo fugiat nostrum
            odit aut dolor inventore, fugit ipsam consectetur! Hic minus et
            doloribus ab saepe sequi nobis explicabo veniam ducimus possimus!
          </p>
        </section>
      </section>
    </>
  );
};

export default AboutUs;
