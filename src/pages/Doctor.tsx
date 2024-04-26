import { useParams } from "react-router-dom";

import doctorsData from "../data/doctorsData";

const Doctor = () => {
  const params = useParams<{ doctorId: string }>();

  return (
    <>
      <section className="py-8 px-4 bg-indigo-950 text-purple-400 lg:px-16 lg:py-20">
        {doctorsData.map((doctor) => {
          if (doctor.id.toString() === params.doctorId)
            return (
              <div className="flex flex-col items-center md:flex-row">
                <img
                  src={doctor.url}
                  className="h-96 mb-6 object-cover object-top rounded-2xl border-8 md:order-2 lg:w-1/3"
                  alt="Doctor image"
                />

                <div className="w-full flex flex-col gap-y-2 md:order-1 md:w-fit md:mr-auto md:gap-y-4">
                  <h1 className="text-4xl font-playfair-display italic xl:text-6xl">
                    Dr. Sudeshna Sinha
                  </h1>
                  <p className="mb-4 text-2xl text-purple-800 font-bold xl:mb-8 xl:text-3xl xl:font-semibold">
                    MBBS, FBPC (Rheumatology)
                  </p>

                  <div className="flex items-center justify-between [&_p]:font-semibold [&_span]:text-teal-300">
                    <div className="flex flex-col">
                      <p>Experience</p>
                      <span>12+</span>
                    </div>

                    <div className="px-8 flex flex-col border-l border-r border-purple-900">
                      <p>Certification</p>
                      <span>16+</span>
                    </div>

                    <div className="flex flex-col">
                      <p>Patients</p>
                      <span>20k</span>
                    </div>
                  </div>
                </div>
              </div>
            );
        })}
      </section>
    </>
  );
};

export default Doctor;
