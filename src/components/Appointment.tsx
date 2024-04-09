import { IoArrowForward } from "react-icons/io5";

const Appointment = () => {
  return (
    <section className="py-8 px-4 flex flex-col items-center justify-center bg-purple-400 text-purple-900 lg:py-24 [&>*]:w-fit">
      <h4 className="text-4xl font-semibold mr-auto md:basis-1/3">
        Request your{" "}
        <span className="font-playfair-display text-white italic">
          appointment
        </span>
        today
      </h4>

      <p>
        Ready to prioritize your health? Schedule an appointment with one of our
        experienced healthcare professionals today.
      </p>

      <button className="w-fit py-4 px-8 self-start flex items-center gap-x-4 bg-teal-500 font-medium text-white rounded-2xl lg:hover:bg-teal-600 ease-in-out duration-200">
        Schedule an appointment <IoArrowForward className="text-2xl" />
      </button>
    </section>
  );
};

export default Appointment;
