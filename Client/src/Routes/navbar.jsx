import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  const navigateToAuthPage = (action) => {
    navigate("/auth", { state: { action } });
    console.log(action);
  };
  const signout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.0 }}
    >
      <nav className="relative mt-4 z-10 m-auto w-[90%] rounded-lg bg-gradient-to-r from-slate-600 to-transparent p-4 backdrop-blur-sm md:w-[95%] xl:w-[75%]">
        <div className="container mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2">
            <motion.div
              initial={{ scale: 0, opacity: 0, rotate: -270 }}
              animate={{ scale: 1, opacity: 1, rotate: 0 }}
              transition={{ duration: 1.2 }}
            ></motion.div>
            <span className="text-lg font-bold text-white"> <NavLink to="/" className="text-white font-extrabold text-3xl hover:text-gray-300">
              MOLECULE
            </NavLink></span>
          </div>

          <div className="hidden space-x-4 md:flex">
            <NavLink to="/codelab" className="text-white hover:text-gray-300">
              Codelab{" "}
            </NavLink>
            {token ? (
              <>
                <NavLink
                  to="/dashboard"
                  className="text-white hover:text-gray-300"
                >
                  Dashboard
                </NavLink>
                <NavLink
                  onClick={signout}
                  className="text-white hover:text-gray-300"
                >
                  Logout
                </NavLink>
              </>
            ) : (
              <>
                <button
                  onClick={() => navigateToAuthPage("signup")}
                  
                  className="text-white hover:text-gray-300"
                >
                  SignUp
                </button>
                <button
                  onClick={() => navigateToAuthPage("signin")}
                  className="text-white hover:text-gray-300"
                >
                  Login
                </button>
              </>
            )}
          </div>
        </div>
      </nav>
    </motion.div>
  );
};

export default Navbar;
