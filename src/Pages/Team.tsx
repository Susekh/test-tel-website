import { motion } from "motion/react";

const employees = [
    { 
        name: "Navin Reddy",
        image: "NavinReddyheadshot.webp",
        linkedin: "https://www.linkedin.com/in/navinreddy20",
        youtube : "https://www.youtube.com/@Telusko",
        x :"https://x.com/navinreddy20",
        instagram : "https://www.instagram.com/navinreddyofficial/"
    },
    {
        name : "Kiran Reddy",
        image : "kiranreddy.webp",
         linkedin: "https://www.linkedin.com/in/kiran-reddy-4b5397111"
    },
    { 
        name: "Harsh Rawal", 
        image: "harsh.jpeg" ,
         linkedin: "https://www.linkedin.com/in/harsh-rawal-385550125"
    },
    { 
        name: "Hyder Abbas", 
        image: "hyderabbas.webp",
         linkedin: "https://www.linkedin.com/in/hyder-abbas-081820150/"
    },
    { 
        name: "Pravin Reddy", 
        image: "Pravin-Reddy.webp" ,
         linkedin: ""
    },
    { 
        name: "Gaurav Sharma", 
        image: "Gaurav-Sharma.webp" ,
         linkedin: "https://www.linkedin.com/in/gaurav4044/"
    },
    { 
        name: "Ishan Berry", 
        image: "Ishann.webp" ,
         linkedin: "https://www.linkedin.com/in/ishan-berry-989045203/"
    },
    { 
        name: "Naman Pahariya",
        image: "Naman.webp" ,
         linkedin: "https://www.linkedin.com/in/naman-pahariya"
    },
    { 
        name: "Hitesh Malik",  
        image: "hitesh1.webp" ,
         linkedin: "https://www.linkedin.com/in/hitesh-malik-4816221a4"
    },
    { 
        name: "Shramik Masti", 
        image: "Shramik-Masti.jpeg" ,
        linkedin: "https://www.linkedin.com/in/shramik-masti-5bb3a1212"
    },
    {
        name : "Sushil Rawal",
        image : "Sushil.webp",
         linkedin: "https://www.linkedin.com/in/sushil-rawal-03909a207"
    },
    {
        name : "Shiva Srivastava",
        image : "shivas.jpg",
        linkedin: "https://www.linkedin.com/in/shivasrivastava1/"
    },
    { 
        name: "Muskan Garg",
        image: "Muskan-Garg.webp" ,
         linkedin: "https://www.linkedin.com/in/muskangarg03"
    },
    { 
        name: "Akshay Agarwal", 
        image: "Akshay.webp" ,
         linkedin: "https://www.linkedin.com/in/akshayagarwal448/"
    },
    
    { 
        name: "Manish Rawal", 
        image: "Manish-Rawal.webp" ,
         linkedin: "https://www.linkedin.com/in/mr-consultants-445manish"
    },
    
    { 
        name: "Siddhartha Hazra", 
        image: "Siddhartha-Hazra.jpeg" ,
         linkedin: "https://www.linkedin.com/in/siddhartha-hazra-69689012a"
    },
    {
        name : "Subhranshu Khilar",
        image : "subhranshu.png",
         linkedin: "https://www.linkedin.com/in/subhkhilar/"

    },
    {
        name : "Cyprian Kujur",
        image : "cp.webp",
         linkedin: "https://www.linkedin.com/in/iamcypriank/"

    }
];


type Employee = {
    name : string,
    image : string,
    linkedin :string,
    youtube ?: string,
    x ?: string,
    instagram ?: string
}



function Card({ employee }: { employee: Employee }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="p-2 border-1 border-gray-200 bg-[#F5F5F5] rounded-md flex flex-col"
    >
      <div className="w-full aspect-square overflow-hidden rounded-lg ">
        <img
          loading="lazy"
          src={"/team/" + employee.image}
          alt={employee.name}
          className="w-full h-full object-cover object-top flex-shrink-0"
        />
      </div>
      <div className="mt-3 text-center bg-white rounded-md py-2 flex flex-col items-center gap-2 flex-1">
        <h3 className="text-lg font-semibold font-Aileron-regular">
          {employee.name}
        </h3>
        <div className="mt-auto flex gap-2 xl:gap-4">

          {/* linkedin */}
          {employee.linkedin != "" && (
            <div className="my-2">
              <a target="_blank" href={employee.linkedin}>
                <div className="p-2 bg-[#F5F5F5] rounded-xl">
                  <svg
                    width="21"
                    height="20"
                    viewBox="0 0 21 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M0.982422 1.88288C0.982422 1.45085 1.15404 1.03651 1.45954 0.731022C1.76503 0.425531 2.17936 0.253908 2.61139 0.253908H18.8497C19.0638 0.253559 19.2758 0.295442 19.4737 0.377159C19.6716 0.458877 19.8514 0.578824 20.0029 0.730134C20.1544 0.881444 20.2745 1.06115 20.3565 1.25895C20.4384 1.45675 20.4805 1.66877 20.4804 1.88288V18.1211C20.4806 18.3353 20.4386 18.5474 20.3568 18.7453C20.275 18.9432 20.155 19.123 20.0036 19.2745C19.8522 19.4259 19.6725 19.546 19.4746 19.628C19.2767 19.7099 19.0647 19.752 18.8505 19.7519H2.61139C2.3974 19.7519 2.1855 19.7097 1.98781 19.6278C1.79011 19.5459 1.6105 19.4258 1.45922 19.2745C1.30795 19.1231 1.18798 18.9434 1.10617 18.7457C1.02435 18.5479 0.982306 18.336 0.982422 18.122V1.88288ZM8.70007 7.68795H11.3403V9.01381C11.7214 8.25162 12.6963 7.56565 14.1613 7.56565C16.9699 7.56565 17.6355 9.08383 17.6355 11.8694V17.0293H14.7932V12.504C14.7932 10.9175 14.4121 10.0224 13.4443 10.0224C12.1016 10.0224 11.5432 10.9875 11.5432 12.504V17.0293H8.70007V7.68795ZM3.82558 16.9078H6.66874V7.56565H3.82558V16.9069V16.9078ZM7.07554 4.51865C7.0809 4.76208 7.03758 5.00413 6.94813 5.2306C6.85867 5.45707 6.72489 5.66339 6.55462 5.83745C6.38435 6.01151 6.18102 6.14981 5.95658 6.24422C5.73214 6.33864 5.4911 6.38728 5.2476 6.38728C5.00411 6.38728 4.76307 6.33864 4.53863 6.24422C4.31418 6.14981 4.11086 6.01151 3.94059 5.83745C3.77032 5.66339 3.63653 5.45707 3.54708 5.2306C3.45763 5.00413 3.41431 4.76208 3.41967 4.51865C3.43019 4.04082 3.6274 3.5861 3.96906 3.25189C4.31071 2.91767 4.76966 2.73052 5.2476 2.73052C5.72555 2.73052 6.18449 2.91767 6.52615 3.25189C6.86781 3.5861 7.06502 4.04082 7.07554 4.51865Z"
                      fill="#485B7C"
                    />
                  </svg>
                </div>
              </a>
            </div>
          )}

          {/* youtube */}
          {("youtube" in employee)  && (
            <div className="my-2">
              <a target="_blank" href={employee.youtube}>
                <div className="p-2 bg-[#F5F5F5] rounded-xl">
                  <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <g clip-path="url(#clip0_688_2803)" filter="url(#filter0_i_688_2803)">
                      <path d="M20.824 5.76803C20.7036 5.33839 20.469 4.94942 20.1451 4.64246C19.8121 4.32606 19.404 4.09974 18.9593 3.98485C17.2949 3.54614 10.6266 3.54614 10.6266 3.54614C7.84664 3.51451 5.06738 3.65363 2.30449 3.96269C1.85975 4.08607 1.4524 4.31745 1.11866 4.63626C0.79074 4.95177 0.553219 5.34084 0.429141 5.76714C0.131082 7.37284 -0.0137357 9.00322 -0.00335926 10.6363C-0.0139945 12.2679 0.130468 13.8978 0.429141 15.5055C0.55056 15.93 0.787195 16.3173 1.116 16.6302C1.44481 16.943 1.85427 17.169 2.30449 17.2887C3.99107 17.7265 10.6266 17.7265 10.6266 17.7265C13.4101 17.7582 16.1929 17.619 18.9593 17.3099C19.404 17.195 19.8121 16.9687 20.1451 16.6523C20.4731 16.3395 20.7061 15.9504 20.8231 15.5268C21.129 13.9217 21.2777 12.2906 21.2672 10.6567C21.2902 9.01586 21.1416 7.37711 20.824 5.76714V5.76803ZM8.50662 13.6709V7.60261L14.0547 10.6372L8.50662 13.6709Z" fill="#485B7C"/>
                      </g>
                      <defs>
                      <filter id="filter0_i_688_2803" x="0" y="0" width="21.2715" height="24.8156" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                      <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                      <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                      <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                      <feOffset dy="3.54509"/>
                      <feGaussianBlur stdDeviation="6.64704"/>
                      <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
                      <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.2 0"/>
                      <feBlend mode="normal" in2="shape" result="effect1_innerShadow_688_2803"/>
                      </filter>
                      <clipPath id="clip0_688_2803">
                      <rect width="21.2705" height="21.2705" fill="white"/>
                      </clipPath>
                      </defs>
                      </svg>

                </div>
              </a>
            </div>
          )}


          {/* x */}
          {("x" in employee)  && (
            <div className="my-2">
              <a target="_blank" href={employee.x}>
                <div className="p-2 bg-[#F5F5F5] rounded-xl">
                 <svg width="18" height="17" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g filter="url(#filter0_i_688_2800)">
                    <path d="M14.1672 0H16.9256L10.8993 6.88764L17.9887 16.2602H12.4378L8.09006 10.5758L3.11528 16.2602H0.355222L6.80092 8.89306L0 0H5.69189L9.62185 5.19575L14.1672 0ZM13.1991 14.6091H14.7275L4.86137 1.56431H3.22118L13.1991 14.6091Z" fill="#485B7C"/>
                    </g>
                    <defs>
                    <filter id="filter0_i_688_2800" x="0" y="0" width="17.9883" height="19.8053" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                    <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                    <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                    <feOffset dy="3.54509"/>
                    <feGaussianBlur stdDeviation="1.77254"/>
                    <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
                    <feBlend mode="normal" in2="shape" result="effect1_innerShadow_688_2800"/>
                    </filter>
                    </defs>
                    </svg>


                </div>
              </a>
            </div>
          )}


          {/* instgram */}
          {("instagram" in employee)  && (
            <div className="my-2">
              <a target="_blank" href={employee.instagram}>
                <div className="p-2 bg-[#F5F5F5] rounded-xl">
                  <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4.84572 0C2.17394 0 0 2.17522 0 4.84766V11.7712C0 14.4433 2.17522 16.6176 4.84766 16.6176H11.7712C14.4433 16.6176 16.6176 14.4424 16.6176 11.7699V4.84572C16.6176 2.17394 14.4424 0 11.7699 0H4.84572ZM13.2941 2.65881C13.661 2.65881 13.9588 2.9566 13.9588 3.32352C13.9588 3.69043 13.661 3.98822 13.2941 3.98822C12.9272 3.98822 12.6294 3.69043 12.6294 3.32352C12.6294 2.9566 12.9272 2.65881 13.2941 2.65881ZM8.30879 3.98822C10.6918 3.98822 12.6294 5.92583 12.6294 8.30879C12.6294 10.6918 10.6914 12.6294 8.30879 12.6294C5.92583 12.6294 3.98822 10.6914 3.98822 8.30879C3.98822 5.92616 5.92583 3.98822 8.30879 3.98822ZM8.30879 5.31763C6.65667 5.31763 5.31763 6.65667 5.31763 8.30879C5.31763 9.96091 6.65667 11.3 8.30879 11.3C9.96091 11.3 11.3 9.96091 11.3 8.30879C11.3 6.65667 9.96091 5.31763 8.30879 5.31763Z" fill="#485B7C"/>
                  </svg>

                


                </div>
              </a>
            </div>
          )}


        </div>
      </div>
    </motion.div>
  );
}

function Team() {
  return (
    <section className="p-4 sm:p-8 lg:px-40 my-10">
      <motion.h1
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="text-[3.875rem] font-[600] max-sm:text-[2.625rem]"
      >
        Meet Our{" "}
        <span className="text-[#2E47D6] font-Caveat font-bold">Team</span>
      </motion.h1>

      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={{
          hidden: {},
          visible: {
            transition: { staggerChildren: 0.15 }
          }
        }}
        viewport={{ once: true }}
        className="mt-10 grid gap-6 sm:grid-cols-2 md:grid-cols-3"
      >
        {employees.map((employee, index) => (
          <Card key={index} employee={employee} />
        ))}
      </motion.div>

    </section>
  );
}

export default Team;