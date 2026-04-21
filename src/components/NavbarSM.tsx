import { useState } from "react";
import { X, Menu } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";


function NavbarSM({ setShow }:{ setShow:React.Dispatch<React.SetStateAction<boolean>> }) {
  const [open, setOpen] = useState(false);

  // Parent nav animation
  const containerVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.05
      },
    },
    exit: {
      opacity: 0,
      y: -20,
      transition: {
        staggerChildren: 0.05,
        staggerDirection: -1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: 30 },
    visible: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: 30 },
  };

  return (
    <div className="">
        

      <div className="w-full flex justify-end">
        {open ? (
          <motion.button
          exit={{
            scale : 0,
          }} 
          onClick={() => setOpen(false)}>
            <X />
          </motion.button>
        ) : (
          <button onClick={() => {
            setOpen(true)
            setShow(false); 
            }}>
            <Menu />
          </button>
        )}
      </div>

      <AnimatePresence>
        {open && (
          <motion.nav
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="bg-white absolute flex flex-col top-18  min-[825px]:px-16.5 md:top-20 w-full right-0 items-start px-4 gap-4 shadow-xl rounded-b-2xl p-4 z-[999]"
          >
          
            
            
            <motion.a
              onClick={()=>{
                setOpen(false);
              }}
              variants={itemVariants}
              href="https://aliencoach.com/"
              target="_blank"
              className="font-Grostek font-[600] text-gray-700 hover:underline underline-offset-4 cursor-pointer"
            >
              AI Alien Coach
            </motion.a>

            {/* <motion.a
              onClick={()=>{
                setOpen(false);
              }}
              variants={itemVariants}
              href="https://blogs.telusko.com/"
              target="_blank"
              className="font-Grostek font-[600] text-gray-700 hover:underline underline-offset-4 cursor-pointer"
            >
              Blog
            </motion.a> */}

            <motion.a
              onClick={()=>{
                setOpen(false);
              }}
              variants={itemVariants}
              href="https://docs.telusko.com/"
              target="_blank"
              className="font-Grostek font-[600] text-gray-700 hover:underline underline-offset-4 cursor-pointer"
            >
              Docs
            </motion.a>

             <Link 
             onClick={()=>{
                setOpen(false);
              }}
             to="/career">
            <motion.a variants={itemVariants} className="font-Grostek font-[600] text-gray-700 hover:underline underline-offset-4 cursor-pointer">
              Career
            </motion.a>
            </Link>

            <Link
            onClick={()=>{
                setOpen(false);
              }} 
            to="/contact-us"> 
            <motion.span variants={itemVariants} className="font-Grostek font-[600] text-gray-700 hover:underline underline-offset-4 cursor-pointer">
              Contact Us
            </motion.span>
            </Link>

            <motion.div variants={itemVariants}>
              <button className="bg-btn hover:scale-102 cursor-pointer hover:bg-black active:scale-95 transition-all duration-200 py-2 px-8 shadow-[4px_4px_0_0_#000] text-white font-Grostek font-semibold text-sm">
                <a href="https://courses.telusko.com/learn/account/signin">Login</a>
              </button>
            </motion.div>
          </motion.nav>
        )}
      </AnimatePresence>
      
    </div>
  );
}

export default NavbarSM;