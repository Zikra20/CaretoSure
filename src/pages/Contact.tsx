import { IoArrowForward } from "react-icons/io5";

const Contact = () => {
  return (
    <>
      {/* Header Section */}
      <section className="py-8 px-4 bg-indigo-950 text-purple-400 text-center lg:px-16 lg:py-20">
        <div className="mb-4 flex flex-col items-center justify-center gap-6">
          <h1 className="text-4xl text-balance font-medium md:text-5xl">
            Book your{" "}
            <span className="text-teal-400 font-playfair-display italic">
              appointment
            </span>
          </h1>

          <p className="md:px-52 lg:px-80">
            Explore our blog for the latest medical knowledge, patient stories,
            and tips to lead a healthier life.
          </p>
        </div>
      </section>

      {/* Appointment form Section */}
      <section className="py-8 px-4 text-purple-900 text-center lg:px-16 lg:py-20">
        <div className="flex flex-col items-center gap-8 lg:flex-row">
          <div className="w-full grid grid-cols-1 gap-2 lg:w-2/4 lg:grid-cols-2">
            <div className="flex flex-col gap-2">
              <label
                htmlFor="name"
                className="w-fit text-lg text-purple-950 font-bold"
              >
                First Name*
              </label>
              <input
                required
                type="text"
                name="name"
                placeholder="Eg.: William"
                className="mb-2 p-2 border border-purple-950 rounded-xl focus:outline-teal-400 placeholder:text-purple-400"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label
                htmlFor="surname"
                className="w-fit text-lg text-purple-950 font-bold"
              >
                Last Name*
              </label>
              <input
                required
                type="text"
                name="surname"
                placeholder="Eg.: Smith"
                className="mb-2 p-2 border border-purple-950 rounded-xl focus:outline-teal-400 placeholder:text-purple-400"
              />
            </div>

            <div className="flex flex-col gap-2 lg:col-span-2">
              <label
                htmlFor="email"
                className="w-fit text-lg text-purple-950 font-bold"
              >
                Email*
              </label>
              <input
                required
                type="email"
                name="email"
                placeholder="Eg.: williamsmith@gmail.com"
                className="mb-2 p-2 border border-purple-950 rounded-xl focus:outline-teal-400 placeholder:text-purple-400"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label
                htmlFor="phone"
                className="w-fit text-lg text-purple-950 font-bold"
              >
                Phone*
              </label>
              <input
                required
                type="number"
                name="phone"
                placeholder="Eg.: +1 444 5555"
                className="mb-2 p-2 border border-purple-950 rounded-xl focus:outline-teal-400 placeholder:text-purple-400"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label
                htmlFor="appointment"
                className="w-fit text-lg text-purple-950 font-bold"
              >
                Appointment Date*
              </label>
              <input
                required
                type="date"
                name="appointment"
                className="mb-2 p-2 text-purple-400 border border-purple-950 rounded-xl focus:outline-teal-400"
              />
            </div>

            <div className="flex flex-col gap-2 lg:col-span-2">
              <label
                htmlFor="state"
                className="w-fit text-lg text-purple-950 font-bold"
              >
                State
              </label>
              <input
                type="text"
                name="state"
                placeholder="Eg.: California"
                className="mb-2 p-2 border border-purple-950 rounded-xl focus:outline-teal-400 placeholder:text-purple-400"
              />
            </div>

            <div className="mb-8 flex flex-col gap-2 lg:col-span-2">
              <label
                htmlFor="note"
                className="w-fit text-lg text-purple-950 font-bold"
              >
                Note*
              </label>
              <textarea
                required
                name="note"
                placeholder="Text"
                className="p-2 border border-purple-950 rounded-xl focus:outline-teal-400 placeholder:text-purple-400"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-fit py-4 px-8 flex items-center gap-x-4 text-white text-xl bg-teal-500 rounded-xl lg:hover:bg-teal-600 ease-in-out duration-200 active:scale-95"
            >
              Submit{" "}
              <span className="text-2xl">
                <IoArrowForward />
              </span>
            </button>
          </div>

          <img
            src="/assets/images/appointment-image.jpg"
            alt=""
            className="w-full h-96 object-cover rounded-2xl lg:w-2/4 lg:h-[600px]"
          />
        </div>
      </section>
    </>
  );
};

export default Contact;
