const About = () => {
  return (
    <>
      <section className="py-8 px-4 bg-purple-900 text-purple-400 lg:p-16">
        <div className="flex flex-col items-center gap-y-4 mb-8 md:flex-row">
          <h1 className="text-4xl text-balance mr-auto md:basis-1/3 md:text-5xl">
            Our{" "}
            <span className="font-playfair-display text-teal-400 italic">
              services
            </span>
          </h1>

          <div className="flex flex-col gap-y-4 md:basis-1/3">
            <p className="w-fit">
              We believe that good health is the foundation for a fulfilling and
              prosperous life, and our mission is to provide reliable
              information, expert guidance and personalized support to help you
              achieve your health goals.
            </p>
          </div>
        </div>

        <div className="flex items-center gap-x-4 [&>*]:object-cover [&>*]:position-center [&>*]:rounded-2xl">
          <img
            src="/assets/images/about-1.jpg"
            alt="Image of pediatrician."
            className="w-2/4 h-52 max-h-[700px] md:h-72 lg:h-[400px]"
          />

          <img
            src="/assets/images/about-2.jpg"
            alt="Doctor with a vaccine."
            className="w-2/4 h-52 max-h-[700px] md:h-72 lg:h-[400px]"
          />
        </div>
      </section>
    </>
  );
};

export default About;
