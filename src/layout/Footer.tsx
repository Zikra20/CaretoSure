// import { Link } from "react-router-dom";
// import { useToast } from "../utils/toast-context";

// const Footer = () => {
//   const toast = useToast();

//   return (
//     <div
//       className="w-full px-4 pt-8 lg:px-12 lg:pt-16"
//       style={{
//         background: "linear-gradient(90deg, #41a6d8 0%, #0ba9c1 100%)",
//       }}
//     >
//       <div className="mb-8 flex flex-col justify-between gap-y-8 lg:mb-16 lg:flex-row">
//         <div className="flex flex-col gap-y-4 lg:basis-1/4 lg:mr-auto">
//           <h1 className="text-3xl font-playfair-display font-bold text-teal-900 cursor-default">
//             SrMedical
//           </h1>
//           <p className="text-lg text-white">
//             Amet minim mollit non deserut adipisci iusto omnis cupiditate
//             tempora, ut itaque soluta vero sequi recusandae.
//           </p>
//           <div className="flex gap-x-4">
//             <input
//               type="email"
//               placeholder="example@gmail.com"
//               className="pl-4 text-white bg-transparent border border-white rounded-2xl focus:outline-teal-400 placeholder:text-white"
//             />
//             <button
//               onClick={() =>
//                 toast?.open("Succesfully subscribed to newsletter.")
//               }
//               className="py-2 px-4 bg-teal-800 text-white font-bold rounded-xl md:hover:bg-teal-600 ease-in-out duration-200 active:scale-95"
//             >
//               Subscribe
//             </button>
//           </div>
//         </div>

//         <div className="flex flex-wrap justify-between gap-y-12 text-white lg:basis-2/4 lg:flex-nowrap lg:justify-between">
//           <div className="flex flex-col gap-y-6 [&>*]:w-fit">
//             <span className="text-2xl font-semibold">Menu</span>
//             <Link to="/" className="lg:hover:text-teal-400 text-white">
//               Home
//             </Link>
//             <Link to="/about" className="lg:hover:text-teal-400 text-white">
//               About
//             </Link>
//             <Link to="/services" className="lg:hover:text-teal-400 text-white">
//               Service
//             </Link>
//             <Link to="/doctors" className="lg:hover:text-teal-400 text-white">
//               Partner Team
//             </Link>
//           </div>
//           <div className="flex flex-col gap-y-6 [&>*]:w-fit">
//             <span className="text-2xl font-semibold">Legal</span>
//             <a href="#" className="lg:hover:text-teal-400 text-white">
//               Privacy Policy
//             </a>
//             <a href="#" className="lg:hover:text-teal-400 text-white">
//               Terms & Conditions
//             </a>
//             <a href="#" className="lg:hover:text-teal-400 text-white">
//               Service
//             </a>
//             <a href="#" className="lg:hover:text-teal-400 text-white">
//               Blog Post
//             </a>
//           </div>
//           <div className="flex flex-col gap-y-6 font-medium [&>*]:w-fit">
//             <span className="text-2xl font-semibold">Contact</span>
//             <p className="text-white">
//               2115 Thornridge Cir. Syracuse, <br />
//               Connecticut 36421
//             </p>
//             <p className="text-white">legitdoctors@gmail.com</p>
//             <p className="text-white">+1 387 894552</p>
//           </div>
//         </div>
//       </div>

//       <p className="py-4 text-xl font-bold text-white [&>a]:font-bold [&>a]:text-teal-900 border-t border-teal-700">
//         Images sourced from{" "}
//         <a
//           href="//www.freepik.com"
//           target="_blank"
//           className="hover:underline font-bold text-teal-900"
//         >
//           Freepik
//         </a>{" "}
//         and{" "}
//         <a
//           href="//www.unsplash.com"
//           target="_blank"
//           className="hover:underline font-bold text-teal-900"
//         >
//           Unsplash
//         </a>
//         .
//       </p>
//     </div>
//   );
// };

// export default Footer;
import { Link } from "react-router-dom";
import { useToast } from "../utils/toast-context";

const Footer = () => {
  const toast = useToast();

  return (
    <div
      className="w-full px-4 pt-8 lg:px-12 lg:pt-16"
      style={{
        background: "linear-gradient(90deg, #41a6d8 0%, #0ba9c1 100%)",
      }}
    >
      <div className="mb-8 flex flex-col justify-between gap-y-8 lg:mb-16 lg:flex-row">
        <div className="flex flex-col gap-y-4 lg:basis-1/4 lg:mr-auto">
          {/* Logo image with white background */}
          <Link
            to="/"
            className="flex items-center hover:opacity-80 transition-opacity w-fit"
          >
            <img
              src="/public/assets/images/logos/CTS.png"
              alt="CaretoSure Logo"
              className="h-12 w-15 bg-white rounded-lg px-2 py-1"
            />
          </Link>
          
          <p className="text-lg text-white">
            Providing comprehensive healthcare solutions with advanced medical technology and compassionate care from our team of expert professionals.
          </p>
          <div className="flex gap-x-4">
            <input
              type="email"
              placeholder="example@gmail.com"
              className="pl-4 text-white bg-transparent border border-white rounded-2xl focus:outline-teal-400 placeholder:text-white"
            />
            <button
              onClick={() =>
                toast?.open("Successfully subscribed to newsletter.")
              }
              className="py-2 px-4 bg-teal-800 text-white font-bold rounded-xl md:hover:bg-teal-600 ease-in-out duration-200 active:scale-95"
            >
              Subscribe
            </button>
          </div>
        </div>

        {/* Rest of the footer content remains the same */}
        <div className="flex flex-wrap justify-between gap-y-12 text-white lg:basis-2/4 lg:flex-nowrap lg:justify-between">
          <div className="flex flex-col gap-y-6 [&>*]:w-fit">
            <span className="text-2xl font-semibold">Menu</span>
            <Link to="/" className="lg:hover:text-teal-400 text-white">
              Home
            </Link>
            <Link to="/about" className="lg:hover:text-teal-400 text-white">
              About
            </Link>
            <Link to="/services" className="lg:hover:text-teal-400 text-white">
              Services
            </Link>
            <Link to="/doctors" className="lg:hover:text-teal-400 text-white">
              Doctors
            </Link>
            <Link to="/blog" className="lg:hover:text-teal-400 text-white">
              Blog
            </Link>
            <Link to="/contact" className="lg:hover:text-teal-400 text-white">
              Contact
            </Link>
          </div>
          <div className="flex flex-col gap-y-6 [&>*]:w-fit">
            <span className="text-2xl font-semibold">Legal</span>
            <a href="#" className="lg:hover:text-teal-400 text-white">
              Privacy Policy
            </a>
            <a href="#" className="lg:hover:text-teal-400 text-white">
              Terms & Conditions
            </a>
            <a href="#" className="lg:hover:text-teal-400 text-white">
              Cookie Policy
            </a>
            <a href="#" className="lg:hover:text-teal-400 text-white">
              Disclaimer
            </a>
          </div>
          <div className="flex flex-col gap-y-6 font-medium [&>*]:w-fit">
            <span className="text-2xl font-semibold">Contact</span>
            <p className="text-white">
              2115 Thornridge Cir. Syracuse, <br />
              Connecticut 36421
            </p>
            <p className="text-white">info@caretosure.com</p>
            <p className="text-white">+1 (555) CARE-123</p>
          </div>
        </div>
      </div>

      <p className="py-4 text-xl font-bold text-white [&>a]:font-bold [&>a]:text-teal-900 border-t border-teal-700">
        Images sourced from{" "}
        <a
          href="//www.freepik.com"
          target="_blank"
          className="hover:underline font-bold text-teal-900"
        >
          Freepik
        </a>{" "}
        and{" "}
        <a
          href="//www.unsplash.com"
          target="_blank"
          className="hover:underline font-bold text-teal-900"
        >
          Unsplash
        </a>
        .
      </p>
    </div>
  );
};

export default Footer;
