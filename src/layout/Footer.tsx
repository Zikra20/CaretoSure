import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="w-full px-4 py-8 flex flex-col justify-between gap-y-8 bg-indigo-950 lg:px-12 lg:py-16 lg:flex-row">
      <div className="flex flex-col gap-y-4 lg:basis-1/4 lg:mr-auto">
        <h1 className="text-3xl font-playfair-display font-medium text-teal-500 cursor-default">
          SrMedical
        </h1>

        <p className="text-lg text-purple-400">
          Amet minim mollit non deserut adipisci iusto omnis cupiditate tempora,
          ut itaque soluta vero sequi recusandae.
        </p>

        <div className="flex gap-x-4">
          <input
            type="email"
            placeholder="example@gmail.com"
            className="pl-4 text-purple-400 bg-transparent border border-purple-400 rounded-2xl focus:outline-0 placeholder:text-purple-400"
          />
          <button className="py-2 px-4 bg-teal-500 text-white rounded-xl md:hover:bg-teal-600 ease-in-out duration-200">
            Subscribe
          </button>
        </div>
      </div>

      <div className="flex flex-wrap justify-between gap-y-12 text-purple-400 lg:basis-2/4 lg:flex-nowrap lg:justify-between">
        <div className="flex flex-col gap-y-6 [&>*]:w-fit">
          <span className="text-2xl font-semibold">Menu</span>
          <Link to="/" className="lg:hover:text-teal-400">
            Home
          </Link>
          <Link to="/about" className="lg:hover:text-teal-400">
            About
          </Link>
          <Link to="/service" className="lg:hover:text-teal-400">
            Service
          </Link>
          <Link to="/doctors" className="lg:hover:text-teal-400">
            Partner Team
          </Link>
        </div>

        <div className="flex flex-col gap-y-6 [&>*]:w-fit">
          <span className="text-2xl font-semibold">Legal</span>
          <a>Privacy Policy</a>
          <a>Terms & Conditions</a>
          <a>Service</a>
          <a>Blog Post</a>
        </div>

        <div className="flex flex-col gap-y-6 font-medium [&>*]:w-fit">
          <span className="text-2xl font-semibold">Contact</span>
          <p>
            2115 Thornridge Cir. Syracuse, <br />
            Connecticut 36421
          </p>
          <p>legitdoctors@gmail.com</p>
          <p>+1 387 894552</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
