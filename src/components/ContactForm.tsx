import { useState } from "react";
import { motion } from "motion/react";
import Loading from "./Loading";
import { Send, CircleCheckBig, Ban } from "lucide-react";
import { AnimatePresence } from "motion/react";
import PhoneInput, { isValidPhoneNumber } from "react-phone-number-input";
import "../assets/css/phone-input.css";
import "react-phone-number-input/style.css";

type Error = {
  name?: "";
  phone?: "";
  email?: "";
  subject?: "";
  message?: "";
};

function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    subject: "",
    body: "",
  });

  const [errors, setErrors] = useState<Error>({});
  const [loading, setLoading] = useState(false);
  const [show, setShow] = useState(false);
  const [error, setError] = useState<string | null>("");

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) {
      newErrors.name = "Full Name is required";
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (!isValidPhoneNumber(formData.phone)) {
      newErrors.phone = "Enter a valid phone number";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Enter a valid email address";
    }

    if (!formData.subject.trim()) {
      newErrors.subject = "Subject is required";
    }

    if (!formData.body.trim()) {
      newErrors.body = "Message cannot be empty";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (validate()) {
      try {
        setLoading(true);
        const response = await fetch(
          "https://formsubmit.co/ajax/courses@telusko.com",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Accept: "application/json",
            },
            body: JSON.stringify(formData),
          },
        );
        if (!response.ok) throw new Error("Something went Wrong!");
        setShow(true);
        setTimeout(() => {
          setShow(false);
        }, 3000);
      } catch (error) {
        if (error instanceof Error) {
          setError(error.message);
        }
        setTimeout(() => {
          setError(null);
        }, 3000);
      } finally {
        setFormData({
          name: "",
          phone: "",
          email: "",
          subject: "",
          body: "",
        });
        setLoading(false);
      }
    }
  }

  return (
    <div className="flex flex-col self-end">
      <motion.form
        initial={{
          opacity: 0,
          x: 40,
        }}
        animate={{
          opacity: 1,
          x: 0,
        }}
        transition={{
          duration: 0.6,
        }}
        onSubmit={(e) => {
          handleSubmit(e);
        }}
        className="flex flex-col gap-2 bg-[#F6F7F9] p-4 rounded-md"
      >
        <label htmlFor="">
          Full Name
          <input
            value={formData.name}
            onChange={handleChange}
            name="name"
            type="text"
            required
          />
        </label>
        {errors.name && <p className="text-red-500 text-sm">{errors?.name}</p>}

        <label>
          Phone No
          <PhoneInput
            placeholder="Enter phone number"
            international
            defaultCountry="IN"
            limitMaxLength
            countryCallingCodeEditable={false}
            value={formData.phone}
            onChange={(value) => {
              setFormData((prev) => ({
                ...prev,
                phone: value || "",
              }));

              setErrors((prev) => ({
                ...prev,
                phone: "",
              }));
            }}
            className="w-full"
          />
        </label>

        {errors.phone && <p className="text-red-500 text-sm">{errors.phone}</p>}

        <label htmlFor="">
          Email ID
          <input
            value={formData.email}
            onChange={handleChange}
            name="email"
            type="email"
            required
          />
        </label>
        <p className="text-red-500 text-sm">{errors?.email}</p>

        <label htmlFor="">
          Subject
          <input
            value={formData.subject}
            onChange={handleChange}
            name="subject"
            type="text"
            required
          />
        </label>
        <p className="text-red-500 text-sm">{errors?.subject}</p>

        <label htmlFor="">
          What do you have in Mind?
          <textarea
            required
            value={formData.body}
            onChange={handleChange}
            name="body"
            id=""
          ></textarea>
        </label>
        <p className="text-red-500 text-sm">{errors?.message}</p>
        <button className="cursor-pointer duration-300 hover:scale-102 hover:bg-black w-fit items-center text-sm justify-center gap-2 text-white  mt-4 flex  font-Grostek font-[600] fon  py-3.5 px-4.5 bg-btn shadow-[4px_4px_0_0_#000]">
          {loading ? (
            <Loading />
          ) : (
            <>
              Submit
              <Send size={16} />
            </>
          )}
        </button>
      </motion.form>
      <AnimatePresence>
        {show && (
          <motion.div
            initial={{
              opacity: 0,
              y: -20,
              scale: 0.95,
            }}
            animate={{
              opacity: 1,
              y: 0,
              scale: 1,
            }}
            exit={{
              opacity: 0,
              y: -20,
              scale: 0.95,
            }}
            className="w-full fixed top-20 left-[50%] flex justify-center font-DM-Sans translate-x-[-50%]  "
          >
            <div className="w-fit bg-black rounded-md">
              <p className="w-fit flex items-center gap-4  p-4 text-white font-medium ">
                The form was submitted successfully
                <CircleCheckBig className=" text-green-600  " />
                <span
                  onClick={() => {
                    setShow(false);
                  }}
                  className="cursor-pointer"
                ></span>
              </p>
              <motion.div
                initial={{
                  width: "100%",
                }}
                animate={{
                  width: 0,
                }}
                transition={{
                  duration: 3,
                }}
                className="w-full h-[4px] bg-green-600 rounded-b-md"
              ></motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {error && (
          <motion.div
            initial={{
              opacity: 0,
              y: -20,
              scale: 0.95,
            }}
            animate={{
              opacity: 1,
              y: 0,
              scale: 1,
            }}
            exit={{
              opacity: 0,
              y: -20,
              scale: 0.95,
            }}
            className="w-full fixed top-20 left-[50%] flex justify-center font-DM-Sans translate-x-[-50%]  "
          >
            <div className="w-fit bg-black rounded-md">
              <p className="w-fit flex items-center gap-4  p-4 text-white font-medium ">
                Something went wrong!
                <Ban className=" text-red-500  " />
              </p>
              <motion.div
                initial={{
                  width: "100%",
                }}
                animate={{
                  width: 0,
                }}
                transition={{
                  duration: 3,
                }}
                className="w-full h-[4px] bg-red-500 rounded-b-md"
              ></motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default ContactForm;
