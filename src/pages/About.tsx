import { FaHeadset, FaHandHoldingMedical } from "react-icons/fa";
import { RiTeamFill } from "react-icons/ri";
import { IoArrowForward } from "react-icons/io5";

import DoctorSlider from "../components/DoctorSlider";

const Services = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="py-8 px-4 bg-indigo-950 text-purple-400 lg:px-16 lg:py-20">
        <div className="flex flex-col items-center gap-y-4 mb-8 md:flex-row lg:mb-16">
          <h1 className="text-4xl text-balance mr-auto md:basis-1/3 md:text-5xl">
            Empowering{" "}
            <span className="font-playfair-display text-teal-400 italic">
              health
            </span>{" "}
            and wellness.
          </h1>

          <p className="w-fit md:basis-1/3">
            Our platform is dedicated to providing comprehensive and trustworthy
            healthcare information, empowering individuals to make informed
            decisions about their well-being.
          </p>
        </div>

        <div className="flex items-center gap-x-4 mb-8 [&>*]:object-cover [&>*]:rounded-2xl">
          <img
            src="/assets/images/about/about-hero-1.jpg"
            alt="Image of pediatrician."
            className="w-2/4 h-52 max-h-[700px] md:h-72 lg:h-[400px]"
          />

          <img
            src="/assets/images/about/about-hero-2.jpg"
            alt="Doctor with a vaccine."
            className="w-1/4 h-52 max-h-[700px] object-right md:h-72 lg:h-[400px]"
          />

          <img
            src="/assets/images/about/about-hero-3.jpg"
            alt="Doctor with a vaccine."
            className="w-1/4 h-52 max-h-[700px] md:h-72 lg:h-[400px]"
          />
        </div>

        <div className="flex flex-wrap items-center gap-4 sm:justify-between [&>*]:w-fit">
          <div className="flex flex-col">
            <span className="text-3xl font-semibold">100+</span>
            <p>Medical Staff</p>
          </div>

          <div className="flex flex-col">
            <span className="text-3xl font-semibold">2k+</span>
            <p>Patients serviced every day</p>
          </div>

          <div className="flex flex-col">
            <span className="text-3xl font-semibold">60k+</span>
            <p>Happy patients</p>
          </div>

          <div className="flex flex-col">
            <span className="text-3xl font-semibold">15</span>
            <p>Years of Experience</p>
          </div>
        </div>
      </section>

      {/* Review Section */}
      <section className="py-8 px-4 bg-cyan-400 text-purple-950 lg:px-16 lg:py-20">
        <div className="mx-auto flex gap-x-4 sm:w-2/4">
          <div className="w-4 h-32 bg-purple-500 text-purple-500 rounded-2xl select-none md:h-28">
            #
          </div>

          <div className="flex flex-col gap-y-6 font-semibold">
            <p className="md:text-xl">
              "We had an incredible experience working with SrMedical and were
              impressed they made such a big difference in only three weeks. Our
              team is so grateful for the wonderful improvements they made and
              their ability to get familiar with the concept so quickly."
            </p>

            <div className="flex gap-x-4">
              <img
                src="/assets/images/about/about-reviewer.jpg"
                alt="Reviewer profile picture"
                className="size-12 rounded-full"
              />

              <p>
                <span className="text-lg font-bold">James Wilson</span>
                <br /> Team Manager
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section className="py-8 px-4 text-purple-900 flex flex-col gap-8 md:flex-row lg:px-16 lg:py-24 lg:gap-16">
        <img
          src="/assets/images/about/about-us.jpg"
          alt="Doctor with a patient"
          loading="lazy"
          className="object-cover object-center rounded-3xl md:max-w-[50%]"
        />

        <div className="flex flex-col gap-y-4 lg:p-8">
          <h2 className="text-2xl font-bold md:text-4xl">
            Why choose SrMedical's
            <br />{" "}
            <span className="font-playfair-display italic text-3xl text-purple-400 md:text-4xl">
              health service
            </span>
          </h2>

          <p className="text-xl font-semibold md:text-base">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis
            eveniet libero corporis tempora, maxime minima assumenda eaque
            asperiores tempore odio nesciunt.
          </p>

          <div className="flex flex-col gap-y-4 lg:gap-y-8">
            <div className="flex gap-x-2 md:gap-x-4">
              <span className="h-fit p-4 text-3xl text-teal-500 bg-teal-50 rounded-full">
                <FaHeadset />
              </span>

              <div>
                <h3 className="mb-2 text-xl font-bold">
                  24/7 Medical Consultation
                </h3>
                <p>
                  Animi ea natus placeat tenetur, perferendis repudiandae
                  officiis exercitationem dolores repellendus.
                </p>
              </div>
            </div>

            <div className="flex gap-x-2 md:gap-x-4">
              <span className="h-fit p-4 text-3xl text-green-500 bg-green-50 rounded-full">
                <FaHandHoldingMedical />
              </span>

              <div>
                <h3 className="mb-2 text-xl font-bold">Healthcare Support</h3>
                <p>
                  Animi ea natus placeat tenetur, perferendis repudiandae
                  officiis exercitationem dolores repellendus.
                </p>
              </div>
            </div>

            <div className="flex gap-x-2 md:gap-x-4">
              <span className="h-fit p-4 text-3xl text-yellow-500 bg-yellow-50 rounded-full">
                <RiTeamFill />
              </span>

              <div>
                <h3 className="mb-2 text-xl font-bold">
                  Professional Medical Team
                </h3>
                <p>
                  Animi ea natus placeat tenetur, perferendis repudiandae
                  officiis exercitationem dolores repellendus.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Doctor Showcase Section */}
      <section className="py-8 px-4 text-purple-900 lg:px-16 lg:py-24">
        <div className="flex flex-col items-center gap-y-4 mb-8 md:flex-row">
          <h4 className="text-4xl font-semibold mr-auto md:basis-1/3">
            Discover our Highly Qualified{" "}
            <span className="font-playfair-display text-purple-400 italic">
              Doctors
            </span>
          </h4>

          <button className="w-fit py-4 px-8 self-start flex items-center gap-x-4 bg-teal-500 font-medium text-white rounded-2xl lg:hover:bg-teal-600 ease-in-out duration-200">
            See All Doctors <IoArrowForward className="text-2xl" />
          </button>
        </div>

        <DoctorSlider />

        <span className="text-purple-950 text-center md:hidden">
          *Swipe left or right to see more.
        </span>
      </section>
    </>
  );
};

export default Services;
