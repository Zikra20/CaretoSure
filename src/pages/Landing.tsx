import { FaDna, FaStethoscope, FaLaptopMedical } from "react-icons/fa";
import { IoArrowForward } from "react-icons/io5";

import DoctorSlider from "../components/DoctorSlider";

const Landing = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="py-8 px-4 bg-purple-900 text-purple-400 lg:p-16">
        <div className="flex flex-col items-center gap-y-4 mb-8 md:flex-row">
          <h1 className="text-4xl text-balance mr-auto md:basis-1/3 md:text-5xl">
            We provide world class{" "}
            <span className="font-playfair-display text-teal-400 italic">
              treatment
            </span>{" "}
            for everyone.
          </h1>

          <div className="flex flex-col gap-y-4 md:basis-1/3">
            <p className="w-fit">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem
              ipsum quibusdam earum architecto mollitia perspiciatis odio ipsam
              nam praesentium.
            </p>
            <button className="w-fit py-4 px-8 flex items-center gap-x-4 bg-teal-500 font-medium text-white rounded-2xl lg:hover:bg-teal-600 ease-in-out duration-200">
              Make Appointment <IoArrowForward className="text-2xl" />
            </button>
          </div>
        </div>

        <img
          src="/assets/images/hero.jpg"
          alt="Scientist at work"
          className="w-full h-4/5 max-h-[700px] object-cover rounded-2xl"
        />
      </section>

      {/* "Core Values" Section (fields of study) */}
      <section className="py-16 px-4 text-purple-900 lg:p-16">
        <h2 className="text-3xl font-semibold mb-2">
          Our{" "}
          <span className="font-playfair-display italic text-purple-400">
            Core
          </span>{" "}
          Values
        </h2>

        <p className="mb-12">
          Expedita similique soluta vel quibusdam ea repellendus blanditiis
          atque, laudantium assumenda dolor ratione eveniet.
        </p>

        <div className="flex flex-wrap justify-around gap-y-8 [&>*]:rounded-3xl">
          <div className="max-w-80 p-8 flex flex-col gap-y-4 bg-emerald-100">
            <div className="w-fit p-4 text-3xl bg-emerald-200 rounded-full">
              <FaDna />
            </div>

            <h3 className="text-xl font-bold">Early Cancer Detection</h3>

            <p>
              Odit esse deleniti id veniam dicta corporis et magni explicabo,
              distinctio velit harum, provident explicabo dolor corporis iste.
            </p>

            <a className="w-fit text-xl text-teal-400 font-semibold" href="#">
              Read More
            </a>
          </div>

          <div className="max-w-80 p-8 flex flex-col gap-y-4 bg-orange-100">
            <div className="w-fit p-4 text-3xl bg-orange-200 rounded-full">
              <FaStethoscope />
            </div>

            <h3 className="text-xl font-bold">Clinical Neurophysiology</h3>

            <p>
              Odit esse deleniti id veniam dicta corporis et magni explicabo,
              distinctio velit harum, provident explicabo dolor corporis iste.
            </p>

            <a className="w-fit text-xl text-teal-400 font-semibold" href="#">
              Read More
            </a>
          </div>

          <div className="max-w-80 p-8 flex flex-col gap-y-4 bg-purple-100">
            <div className="w-fit p-4 text-3xl bg-purple-200 rounded-full">
              <FaLaptopMedical />
            </div>

            <h3 className="text-xl font-bold">Gastroenterology</h3>

            <p>
              Odit esse deleniti id veniam dicta corporis et magni explicabo,
              distinctio velit harum, provident explicabo dolor corporis iste.
            </p>

            <a className="w-fit text-xl text-teal-400 font-semibold" href="#">
              Read More
            </a>
          </div>
        </div>
      </section>

      {/* Health and well-being Section */}
      <section className="py-8 px-4 bg-purple-400 text-purple-900 lg:px-16 lg:py-24">
        <div className="flex flex-col items-center gap-y-4 mb-8 md:flex-row">
          <h1 className="text-2xl font-bold mr-auto md:basis-2/4 md:text-4xl">
            Finding new ways to improve the{" "}
            <span className="font-playfair-display italic text-purple-50">
              health and well-being
            </span>{" "}
            of people everywhere.
          </h1>

          <div className="flex flex-col gap-y-4 md:basis-1/3">
            <p className="w-fit text-xl">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem
              ipsum quibusdam earum architecto mollitia perspiciatis.
            </p>

            <button className="w-fit py-4 px-8 flex items-center gap-x-4 bg-teal-500 font-medium text-white rounded-2xl lg:hover:bg-teal-600 ease-in-out duration-200">
              Read More <IoArrowForward className="text-2xl" />
            </button>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-x-2 [&>*]:h-full [&>*]:rounded-xl md:gap-x-6">
          <img
            loading="lazy"
            src="/assets/images/consultation-1.jpg"
            alt="A medical consultation."
          />
          <img
            loading="lazy"
            src="/assets/images/consultation-2.jpg"
            alt="A medical consultation."
          />
          <img
            loading="lazy"
            src="/assets/images/consultation-3.jpg"
            alt="A medical consultation."
          />
        </div>
      </section>

      {/* Doctors Showcase Section */}
      <section className="py-8 px-4 text-purple-900 lg:px-16 lg:py-24">
        <div className="flex flex-col items-center gap-y-4 mb-8 md:flex-row">
          <h1 className="text-4xl font-semibold mr-auto md:basis-1/3">
            Discover our Highly Qualified{" "}
            <span className="font-playfair-display text-purple-400 italic">
              Doctors
            </span>
          </h1>

          <button className="w-fit py-4 px-8 self-start flex items-center gap-x-4 bg-teal-500 font-medium text-white rounded-2xl lg:hover:bg-teal-600 ease-in-out duration-200">
            See All Doctors <IoArrowForward className="text-2xl" />
          </button>
        </div>

        <DoctorSlider />
      </section>

      {/* FAQ Section */}
      <section></section>
    </>
  );
};

export default Landing;
