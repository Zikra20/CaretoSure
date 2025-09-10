// // import { useState } from "react";
// // import { Link } from "react-router-dom";
// // // import { FaChevronDown } from "react-icons/fa";
// // import doctorsData from "../data/doctorsData";

// // const Doctors = () => {
// //   const [firstSlice, setFirstSlice] = useState(0);
// //   const [secondSlice, setSecondSlice] = useState(9);

// //   const handleSlice = (page: number) => {
// //     if (firstSlice === 0 && page === 2) {
// //       setFirstSlice(9);
// //       setSecondSlice(18);
// //     } else {
// //       setFirstSlice(0);
// //       setSecondSlice(9);
// //     }
// //   };

// //   return (
// //     <>
// //       {/* Hero Section */}
// //       <section className="py-8 px-4 text-white text-center lg:px-16 lg:py-20" style={{ backgroundColor: "#02c0b4" }}>
// //         <h1 className="mb-4 text-balance text-4xl md:text-5xl">
// //           Find your{" "}
// //           <span className="font-playfair-display italic text-white">
// //             health
// //           </span>{" "}
// //           specialists.
// //         </h1>
// //         <p className="px-10 sm:px-40 md:px-60 lg:px-80 xl:px-96">
// //           Connect with experienced healthcare professionals who are dedicated to providing personalized medical care and treatment plans tailored to your specific health needs.
// //         </p>
// //       </section>

// //       {/* Doctors Grid */}
// //       <section className="py-8 px-4 text-teal-950 lg:px-16 lg:py-20">
// //         <h2 className="mb-8 text-4xl font-bold text-center">
// //           Qualified{" "}
// //           <span className="font-playfair-display italic text-teal-500">
// //             Doctors
// //           </span>
// //         </h2>

// //         <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
// //           {doctorsData.slice(firstSlice, secondSlice).map((doctor) => {
// //             return (
// //               <Link key={doctor.id} to={`/doctors/${doctor.id}`}>
// //                 <div className="mb-8 p-2 flex flex-col gap-y-2 bg-teal-100 text-teal-900 rounded-2xl shadow-sm sm:p-4">
// //                   <img
// //                     src={doctor.url}
// //                     alt={`Dr. ${doctor.name}`}
// //                     className="w-full min-w-60 h-64 object-cover object-top rounded-2xl sm:min-w-64"
// //                   />
// //                   <h3 className="text-2xl font-bold">Dr. {doctor.name}</h3>
// //                   <p className="mb-4">{doctor.qualifications}</p>
// //                   <p className="text-sm text-teal-700">{doctor.specialty}</p>
// //                 </div>
// //               </Link>
// //             );
// //           })}
// //         </div>
// //        {/* Bootstrap Pagination */}
// //           <nav aria-label="Page navigation example" className="mt-8">
// //   <div className="w-fit mx-auto flex gap-x-1 text-xl font-semibold">
// //     <button
// //       onClick={(e) => {
// //         e.preventDefault();
// //         handleSlice(1);
// //       }}
// //       className={`px-3 py-1 border-2 border-teal-200 rounded hover:bg-teal-200 transition-colors ${
// //         firstSlice === 0 ? "bg-teal-50 cursor-default" : ""
// //       }`}
// //       disabled={firstSlice === 0}
// //       type="button"
// //     >
// //       ‹
// //     </button>

// //     <button
// //       onClick={(e) => {
// //         e.preventDefault();
// //         handleSlice(1);
// //       }}
// //       className={`px-3 py-1 border-2 border-teal-200 rounded hover:bg-teal-200 transition-colors ${
// //         firstSlice === 0 ? "bg-teal-50 cursor-default" : ""
// //       }`}
// //       type="button"
// //     >
// //       1
// //     </button>

// //     <button
// //       onClick={(e) => {
// //         e.preventDefault();
// //         handleSlice(2);
// //       }}
// //       className={`px-3 py-1 border-2 border-teal-200 rounded hover:bg-teal-200 transition-colors ${
// //         firstSlice === 9 ? "bg-teal-50 cursor-default" : ""
// //       }`}
// //       type="button"
// //     >
// //       2
// //     </button>

// //     <button
// //       onClick={(e) => {
// //         e.preventDefault();
// //         handleSlice(2);
// //       }}
// //       className={`px-3 py-1 border-2 border-teal-200 rounded hover:bg-teal-200 transition-colors ${
// //         firstSlice === 9 ? "bg-teal-50 cursor-default" : ""
// //       }`}
// //       disabled={firstSlice === 9}
// //       type="button"
// //     >
// //       ›
// //     </button>
// //   </div>
// // </nav>
// //         <p className="text-center text-lg mt-4">
// //           Browse our network of certified medical specialists and book appointments with doctors who have extensive experience in their respective fields of medicine.
// //         </p>
// //       </section>
// //     </>
// //   );
// // };

// // export default Doctors;
// import { useState } from "react";
// import { Link } from "react-router-dom";
// import doctorsData from "../data/doctorsData";

// const Doctors = () => {
//   const [firstSlice, setFirstSlice] = useState(0);
//   const [secondSlice, setSecondSlice] = useState(9);

//   // Updated handleSlice function
//   const handleSlice = (page: number) => {
//     if (page === 1) {
//       setFirstSlice(0);
//       setSecondSlice(9);
//     } else if (page === 2) {
//       setFirstSlice(9);
//       setSecondSlice(18);
//     }
//     // Prevent page scroll by keeping focus
//     return false;
//   };

//   return (
//     <>
//       {/* Hero Section */}
//       <section className="py-8 px-4 text-white text-center lg:px-16 lg:py-20" style={{ backgroundColor: "#02c0b4" }}>
//         <h1 className="mb-4 text-balance text-4xl md:text-5xl">
//           Find your{" "}
//           <span className="font-playfair-display italic text-white">
//             health
//           </span>{" "}
//           specialists.
//         </h1>
//         <p className="px-10 sm:px-40 md:px-60 lg:px-80 xl:px-96">
//           Connect with experienced healthcare professionals who are dedicated to providing personalized medical care and treatment plans tailored to your specific health needs.
//         </p>
//       </section>

//       {/* Doctors Grid */}
//       <section className="py-8 px-4 text-teal-950 lg:px-16 lg:py-20">
//         <h2 className="mb-8 text-4xl font-bold text-center">
//           Qualified{" "}
//           <span className="font-playfair-display italic text-teal-500">
//             Doctors
//           </span>
//         </h2>

//         <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
//           {doctorsData.slice(firstSlice, secondSlice).map((doctor) => {
//             return (
//               <Link key={doctor.id} to={`/doctors/${doctor.id}`}>
//                 <div className="mb-8 p-2 flex flex-col gap-y-2 bg-teal-100 text-teal-900 rounded-2xl shadow-sm sm:p-4">
//                   <img
//                     src={doctor.url}
//                     alt={`Dr. ${doctor.name}`}
//                     className="w-full min-w-60 h-64 object-cover object-top rounded-2xl sm:min-w-64"
//                   />
//                   <h3 className="text-2xl font-bold">Dr. {doctor.name}</h3>
//                   <p className="mb-4">{doctor.qualifications}</p>
//                   <p className="text-sm text-teal-700">{doctor.specialty}</p>
//                 </div>
//               </Link>
//             );
//           })}
//         </div>

//         {/* Pagination */}
//         <nav aria-label="Page navigation example" className="mt-8">
//           <div className="w-fit mx-auto flex gap-x-1 text-xl font-semibold">
//             <button
//               onClick={(e) => {
//                 e.preventDefault();
//                 if (firstSlice > 0) handleSlice(1);
//               }}
//               className={`px-3 py-1 border-2 border-teal-200 rounded hover:bg-teal-200 transition-colors ${
//                 firstSlice === 0 ? "bg-teal-50 cursor-default" : ""
//               }`}
//               disabled={firstSlice === 0}
//               type="button"
//             >
//               ‹
//             </button>

//             <button
//               onClick={(e) => {
//                 e.preventDefault();
//                 handleSlice(1);
//               }}
//               className={`px-3 py-1 border-2 border-teal-200 rounded hover:bg-teal-200 transition-colors ${
//                 firstSlice === 0 ? "bg-teal-50 cursor-default" : ""
//               }`}
//               type="button"
//             >
//               1
//             </button>

//             <button
//               onClick={(e) => {
//                 e.preventDefault();
//                 handleSlice(2);
//               }}
//               className={`px-3 py-1 border-2 border-teal-200 rounded hover:bg-teal-200 transition-colors ${
//                 firstSlice === 9 ? "bg-teal-50 cursor-default" : ""
//               }`}
//               type="button"
//             >
//               2
//             </button>

//             <button
//               onClick={(e) => {
//                 e.preventDefault();
//                 if (firstSlice === 0) handleSlice(2);
//               }}
//               className={`px-3 py-1 border-2 border-teal-200 rounded hover:bg-teal-200 transition-colors ${
//                 firstSlice === 9 ? "bg-teal-50 cursor-default" : ""
//               }`}
//               disabled={firstSlice === 9}
//               type="button"
//             >
//               ›
//             </button>
//           </div>
//         </nav>

//         <p className="text-center text-lg mt-4">
//           Browse our network of certified medical specialists and book appointments with doctors who have extensive experience in their respective fields of medicine.
//         </p>
//       </section>
//     </>
//   );
// };

// export default Doctors;
// import { useState } from "react";
// import { Link } from "react-router-dom";
// import doctorsData from "../data/doctorsData";

// const Doctors = () => {
//   const [firstSlice, setFirstSlice] = useState(0);
//   const [secondSlice, setSecondSlice] = useState(9);

//   // Updated handleSlice function with scroll prevention
//   const handleSlice = (page: number, event?: React.MouseEvent) => {
//     if (event) {
//       event.preventDefault();
//       event.stopPropagation();
//     }
    
//     if (page === 1) {
//       setFirstSlice(0);
//       setSecondSlice(9);
//     } else if (page === 2) {
//       setFirstSlice(9);
//       setSecondSlice(18);
//     }
    
//     // Keep the page scroll position
//     window.scrollTo({ top: window.scrollY, behavior: 'instant' });
//     return false;
//   };

//   return (
//     <>
//       {/* Hero Section */}
//       <section className="py-8 px-4 text-white text-center lg:px-16 lg:py-20" style={{ backgroundColor: "#02c0b4" }}>
//         <h1 className="mb-4 text-balance text-4xl md:text-5xl">
//           Find your{" "}
//           <span className="font-playfair-display italic text-white">
//             health
//           </span>{" "}
//           specialists.
//         </h1>
//         <p className="px-10 sm:px-40 md:px-60 lg:px-80 xl:px-96">
//           Connect with experienced healthcare professionals who are dedicated to providing personalized medical care and treatment plans tailored to your specific health needs.
//         </p>
//       </section>

//       {/* Doctors Grid */}
//       <section className="py-8 px-4 text-teal-950 lg:px-16 lg:py-20">
//         <h2 className="mb-8 text-4xl font-bold text-center">
//           Qualified{" "}
//           <span className="font-playfair-display italic text-teal-500">
//             Doctors
//           </span>
//         </h2>

//         <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
//           {doctorsData.slice(firstSlice, secondSlice).map((doctor) => {
//             return (
//               <Link key={doctor.id} to={`/doctors/${doctor.id}`}>
//                 <div className="mb-8 p-2 flex flex-col gap-y-2 bg-teal-100 text-teal-900 rounded-2xl shadow-sm sm:p-4">
//                   <img
//                     src={doctor.url}
//                     alt={`Dr. ${doctor.name}`}
//                     className="w-full min-w-60 h-64 object-cover object-top rounded-2xl sm:min-w-64"
//                   />
//                   <h3 className="text-2xl font-bold">Dr. {doctor.name}</h3>
//                   <p className="mb-4">{doctor.qualifications}</p>
//                   <p className="text-sm text-teal-700">{doctor.specialty}</p>
//                 </div>
//               </Link>
//             );
//           })}
//         </div>

//         {/* Fixed Pagination */}
//         <nav aria-label="Page navigation example" className="mt-8">
//           <div className="w-fit mx-auto flex gap-x-1 text-xl font-semibold">
//             <button
//               onMouseDown={(e) => e.preventDefault()}
//               onClick={(e) => {
//                 e.preventDefault();
//                 e.stopPropagation();
//                 if (firstSlice > 0) handleSlice(1, e);
//               }}
//               className={`px-3 py-1 border-2 border-teal-200 rounded hover:bg-teal-200 transition-colors ${
//                 firstSlice === 0 ? "bg-teal-50 cursor-default" : ""
//               }`}
//               disabled={firstSlice === 0}
//               type="button"
//             >
//               ‹
//             </button>

//             <button
//               onMouseDown={(e) => e.preventDefault()}
//               onClick={(e) => {
//                 e.preventDefault();
//                 e.stopPropagation();
//                 handleSlice(1, e);
//               }}
//               className={`px-3 py-1 border-2 border-teal-200 rounded hover:bg-teal-200 transition-colors ${
//                 firstSlice === 0 ? "bg-teal-50 cursor-default" : ""
//               }`}
//               type="button"
//             >
//               1
//             </button>

//             <button
//               onMouseDown={(e) => e.preventDefault()}
//               onClick={(e) => {
//                 e.preventDefault();
//                 e.stopPropagation();
//                 handleSlice(2, e);
//               }}
//               className={`px-3 py-1 border-2 border-teal-200 rounded hover:bg-teal-200 transition-colors ${
//                 firstSlice === 9 ? "bg-teal-50 cursor-default" : ""
//               }`}
//               type="button"
//             >
//               2
//             </button>

//             <button
//               onMouseDown={(e) => e.preventDefault()}
//               onClick={(e) => {
//                 e.preventDefault();
//                 e.stopPropagation();
//                 if (firstSlice === 0) handleSlice(2, e);
//               }}
//               className={`px-3 py-1 border-2 border-teal-200 rounded hover:bg-teal-200 transition-colors ${
//                 firstSlice === 9 ? "bg-teal-50 cursor-default" : ""
//               }`}
//               disabled={firstSlice === 9}
//               type="button"
//             >
//               ›
//             </button>
//           </div>
//         </nav>

//         <p className="text-center text-lg mt-4">
//           Browse our network of certified medical specialists and book appointments with doctors who have extensive experience in their respective fields of medicine.
//         </p>
//       </section>
//     </>
//   );
// };

// export default Doctors;
// import { useState } from "react";
// import { Link } from "react-router-dom";
// import doctorsData from "../data/doctorsData";

// const Doctors = () => {
//   const [firstSlice, setFirstSlice] = useState(0);
//   const [secondSlice, setSecondSlice] = useState(9);

//   const handleSlice = (page: number) => {
//     if (firstSlice === 0 && page === 2) {
//       setFirstSlice(9);
//       setSecondSlice(18);
//     } else {
//       setFirstSlice(0);
//       setSecondSlice(9);
//     }
//   };

//   return (
//     <>
//       {/* Hero Section */}
//       <section className="py-8 px-4 text-white text-center lg:px-16 lg:py-20" style={{ backgroundColor: "#02c0b4" }}>
//         <h1 className="mb-4 text-balance text-4xl md:text-5xl">
//           Find your{" "}
//           <span className="font-playfair-display italic text-white">
//             health
//           </span>{" "}
//           specialists.
//         </h1>
//         <p className="px-10 sm:px-40 md:px-60 lg:px-80 xl:px-96">
//           Connect with experienced healthcare professionals who are dedicated to providing personalized medical care and treatment plans tailored to your specific health needs.
//         </p>
//       </section>

//       {/* Doctors Grid */}
//       <section className="py-8 px-4 text-teal-950 lg:px-16 lg:py-20">
//         <h2 className="mb-8 text-4xl font-bold text-center">
//           Qualified{" "}
//           <span className="font-playfair-display italic text-teal-500">
//             Doctors
//           </span>
//         </h2>

//         <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
//           {doctorsData.slice(firstSlice, secondSlice).map((doctor) => {
//             return (
//               <Link key={doctor.id} to={`/doctors/${doctor.id}`}>
//                 <div className="mb-8 p-2 flex flex-col gap-y-2 bg-teal-100 text-teal-900 rounded-2xl shadow-sm sm:p-4">
//                   <img
//                     src={doctor.url}
//                     alt={`Dr. ${doctor.name}`}
//                     className="w-full min-w-60 h-64 object-cover object-top rounded-2xl sm:min-w-64"
//                   />
//                   <h3 className="text-2xl font-bold">Dr. {doctor.name}</h3>
//                   <p className="mb-4">{doctor.qualifications}</p>
//                   <p className="text-sm text-teal-700">{doctor.specialty}</p>
//                 </div>
//               </Link>
//             );
//           })}
//         </div>

//         {/* Pagination - Same as Blog.tsx */}
//         <nav aria-label="Page navigation example" className="mt-8">
//           <div className="w-fit mx-auto flex gap-x-1 text-xl font-semibold">
//             <button
//               onClick={(e) => {
//                 e.preventDefault();
//                 handleSlice(1);
//               }}
//               className={`px-3 py-1 border-2 border-teal-200 rounded hover:bg-teal-200 transition-colors ${
//                 firstSlice === 0 ? "bg-teal-50 cursor-default" : ""
//               }`}
//               disabled={firstSlice === 0}
//               type="button"
//             >
//               ‹
//             </button>

//             <button
//               onClick={(e) => {
//                 e.preventDefault();
//                 handleSlice(1);
//               }}
//               className={`px-3 py-1 border-2 border-teal-200 rounded hover:bg-teal-200 transition-colors ${
//                 firstSlice === 0 ? "bg-teal-50 cursor-default" : ""
//               }`}
//               type="button"
//             >
//               1
//             </button>

//             <button
//               onClick={(e) => {
//                 e.preventDefault();
//                 handleSlice(2);
//               }}
//               className={`px-3 py-1 border-2 border-teal-200 rounded hover:bg-teal-200 transition-colors ${
//                 firstSlice === 9 ? "bg-teal-50 cursor-default" : ""
//               }`}
//               type="button"
//             >
//               2
//             </button>

//             <button
//               onClick={(e) => {
//                 e.preventDefault();
//                 handleSlice(2);
//               }}
//               className={`px-3 py-1 border-2 border-teal-200 rounded hover:bg-teal-200 transition-colors ${
//                 firstSlice === 9 ? "bg-teal-50 cursor-default" : ""
//               }`}
//               disabled={firstSlice === 9}
//               type="button"
//             >
//               ›
//             </button>
//           </div>
//         </nav>

//         <p className="text-center text-lg mt-4">
//           Browse our network of certified medical specialists and book appointments with doctors who have extensive experience in their respective fields of medicine.
//         </p>
//       </section>
//     </>
//   );
// };

// export default Doctors;
import { useState } from "react";
import { Link } from "react-router-dom";
import doctorsData from "../data/doctorsData";

const Doctors = () => {
  const [firstSlice, setFirstSlice] = useState(0);
  const [secondSlice, setSecondSlice] = useState(6); // Changed from 7 to 6

  const handleSlice = (page: number) => {
    if (firstSlice === 0 && page === 2) {
      setFirstSlice(6);    // Changed from 7 to 6
      setSecondSlice(10);  // Remains 10 (shows doctors 7-10)
    } else {
      setFirstSlice(0);
      setSecondSlice(6);   // Changed from 7 to 6
    }
  };

  return (
    <>
      {/* Hero Section */}
      <section className="py-8 px-4 text-white text-center lg:px-16 lg:py-20" style={{ backgroundColor: "#02c0b4" }}>
        <h1 className="mb-4 text-balance text-4xl md:text-5xl">
          Find your{" "}
          <span className="font-playfair-display italic text-white">
            health
          </span>{" "}
          specialists.
        </h1>
        <p className="px-10 sm:px-40 md:px-60 lg:px-80 xl:px-96">
          Connect with experienced healthcare professionals who are dedicated to providing personalized medical care and treatment plans tailored to your specific health needs.
        </p>
      </section>

      {/* Doctors Grid */}
      <section className="py-8 px-4 text-teal-950 lg:px-16 lg:py-20">
        <h2 className="mb-8 text-4xl font-bold text-center">
          Qualified{" "}
          <span className="font-playfair-display italic text-teal-500">
            Doctors
          </span>
        </h2>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {doctorsData.slice(firstSlice, secondSlice).map((doctor) => {
            return (
              <Link key={doctor.id} to={`/doctors/${doctor.id}`}>
                <div className="mb-8 p-2 flex flex-col gap-y-2 bg-teal-100 text-teal-900 rounded-2xl shadow-sm sm:p-4">
                  <img
                    src={doctor.url}
                    alt={`Dr. ${doctor.name}`}
                    className="w-full min-w-60 h-64 object-cover object-top rounded-2xl sm:min-w-64"
                  />
                  <h3 className="text-2xl font-bold">Dr. {doctor.name}</h3>
                  <p className="mb-4">{doctor.qualifications}</p>
                  <p className="text-sm text-teal-700">{doctor.specialty}</p>
                </div>
              </Link>
            );
          })}
        </div>

        {/* Pagination */}
        {/* <nav aria-label="Page navigation example" className="mt-8">
          <div className="w-fit mx-auto flex gap-x-1 text-xl font-semibold">
            <button
              onClick={(e) => {
                e.preventDefault();
                handleSlice(1);
              }}
              className={`px-3 py-1 border-2 border-teal-200 rounded hover:bg-teal-200 transition-colors ${
                firstSlice === 0 ? "bg-teal-50 cursor-default" : ""
              }`}
              disabled={firstSlice === 0}
              type="button"
            >
              ‹
            </button>

            <button
              onClick={(e) => {
                e.preventDefault();
                handleSlice(1);
              }}
              className={`px-3 py-1 border-2 border-teal-200 rounded hover:bg-teal-200 transition-colors ${
                firstSlice === 0 ? "bg-teal-50 cursor-default" : ""
              }`}
              type="button"
            >
              1
            </button>

            <button
              onClick={(e) => {
                e.preventDefault();
                handleSlice(2);
              }}
              className={`px-3 py-1 border-2 border-teal-200 rounded hover:bg-teal-200 transition-colors ${
                firstSlice === 6 ? "bg-teal-50 cursor-default" : ""
              }`}
              type="button"
            >
              2
            </button>

            <button
              onClick={(e) => {
                e.preventDefault();
                handleSlice(2);
              }}
              className={`px-3 py-1 border-2 border-teal-200 rounded hover:bg-teal-200 transition-colors ${
                firstSlice === 6 ? "bg-teal-50 cursor-default" : ""
              }`}
              disabled={firstSlice === 6}
              type="button"
            >
              ›
            </button>
          </div>
        </nav>

        <p className="text-center text-lg mt-4">
          Browse our network of certified medical specialists and book appointments with doctors who have extensive experience in their respective fields of medicine.
        </p> */}
        {/* Pagination */}
<nav aria-label="Page navigation example" className="mt-8">
  <div className="w-fit mx-auto flex gap-x-1 text-xl font-semibold">
    <button
      onClick={(e) => {
        e.preventDefault();
        handleSlice(1);
      }}
      className={`px-2 py-1 text-black hover:text-teal-600 transition-colors ${
        firstSlice === 0 ? "opacity-50 cursor-default" : ""
      }`}
      disabled={firstSlice === 0}
      type="button"
    >
      ‹
    </button>

    <button
      onClick={(e) => {
        e.preventDefault();
        handleSlice(1);
      }}
      className={`px-4 py-1 border-2 border-teal-200 rounded hover:bg-teal-200 transition-colors ${
        firstSlice === 0 ? "bg-teal-50 cursor-default" : ""
      }`}
      type="button"
    >
      1
    </button>

    <button
      onClick={(e) => {
        e.preventDefault();
        handleSlice(2);
      }}
      className={`px-4 py-1 border-2 border-teal-200 rounded hover:bg-teal-200 transition-colors ${
        firstSlice === 6 ? "bg-teal-50 cursor-default" : ""
      }`}
      type="button"
    >
      2
    </button>

    <button
      onClick={(e) => {
        e.preventDefault();
        handleSlice(2);
      }}
      className={`px-2 py-1 text-black hover:text-teal-600 transition-colors ${
        firstSlice === 6 ? "opacity-50 cursor-default" : ""
      }`}
      disabled={firstSlice === 6}
      type="button"
    >
      ›
    </button>
  </div>
</nav>
      </section>
    </>
  );
};

export default Doctors;
