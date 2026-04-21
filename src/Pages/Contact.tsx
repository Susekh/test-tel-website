import { MapPinned, Mail,  PhoneOutgoing, AlarmClock   } from "lucide-react"
import { motion } from "motion/react"
import ContactForm from "../components/ContactForm"
import type React from "react"




const infos = [
  {
    icon : <MapPinned />,
    title : "Our Location",
    description : "Pune, Maharastra, India"
  },
  {
    icon : <Mail />,
    title : "Email Us",
    description : <a className="text-blue-800" href="mailto:connect@telusko.com">connect@telusko.com</a>
  },
  {
    icon : <PhoneOutgoing />,
    title : "Call Us",
    description : <a className="text-blue-800" href="tel:+91-9008963671">+91-9008963671</a>
  },{
    icon : <AlarmClock />,
    title : "Business Hours",
    description : "Monday - Friday: 10am - 6pm IST"
  }

]

type Info = {
    icon : React.ReactNode,
    title : string,
    description : string | React.ReactNode,
  }

function Info({info, index}:{ info:Info, index:number}){


  return (
    <motion.div 
    initial={{
      opacity : 0,
      y : 40
    }}
    animate={{
      opacity : 1,
      y : 0
    }}
    transition={{
      duration : 0.6,
      delay : 0.2 * (index+1)
    }}
    className="flex gap-4">
      <div className="flex items-center p-4 rounded-md justify-center bg-[#F6F7F9]">{info.icon}</div>
      <div>
        <h4 className="text-[1.125rem]">{info.title}</h4>
        <p className="text-[0.75rem] font-[500]">{info.description}</p>
      </div>
    </motion.div>
  )
}




function Contact() {
  return (
    <section className="relative">

      <div className="mt-10 mb-20 flex justify-center">
        <div className="xl-[1200px]:p-8 xl:w-[70%] max-xl:p-8 max-sm:p-4 grid grid-cols-[1fr_1fr] max-lg:gap-10  max-lg:grid-cols-[1fr] min-[1200px]:gap-4 font-DM-Sans">

          <div className="flex flex-col gap-2">
            <motion.h1 
            initial={{
              opacity : 0,
              x: -40
            }}
            animate={{
              opacity: 1,
              x :0
            }}
            transition={{
              duration : 0.6,
              
            }}
            className="font-Caveat text-[#FBB130] max-sm:mb-1 text-[4rem] sm:text-[5.75rem]">Hello</motion.h1>
            <motion.h1 
            initial={{
              opacity : 0,
              x: -40
            }}
            animate={{
              opacity: 1,
              x :0
            }}
            transition={{
              duration : 0.6,
              delay : 0.2  
            }}
            className="-mt-10 text-[2.625rem]  sm:text-[4.125rem] font-DM-Sans font-[600]">Get in touch</motion.h1>
            <motion.p 
            initial={{
              opacity : 0,
              x: -40
            }}
            animate={{
              opacity: 1,
              x :0
            }}
            transition={{
              duration : 0.6,
              delay : 0.4  
            }}
            className=" text-[1.5rem]">Have questions or want to learn more? Reach out to our team and we’ll be happy to help.</motion.p>
            <div className="flex flex-col gap-4">
              <motion.h2 
              
                initial={{
                  opacity : 0,
                  y : 40
                }}
                animate={{
                  opacity: 1,
                  y :0
                }}
                transition={{
                  duration : 0.6
                }}
              className="text-[1.5rem] font-[600]">Contact Information</motion.h2>
              { infos.map((info,index)=>{
                console.log()
                return <Info key={index} info={info} index={index} />
              }) }

              <div className="flex gap-4">
              <a
              className="bg-[#F5F5F5] p-1 rounded-md flex justify-center items-center" 
              href="">
                <svg width="21" height="22" viewBox="0 0 21 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g clip-path="url(#clip0_760_125)" filter="url(#filter0_i_760_125)">
                  <path d="M15.5265 12.1754L16.0914 8.49541H12.5602V6.10736C12.5602 5.10079 13.0533 4.11901 14.6349 4.11901H16.2401V0.986196C16.2401 0.986196 14.7836 0.737732 13.3907 0.737732C10.4828 0.737732 8.58219 2.5005 8.58219 5.69113V8.49605H5.34961V12.176H8.58219V21.0724H12.5602V12.176L15.5265 12.1754Z" fill="#415371"/>
                  </g>
                  <defs>
                  <filter id="filter0_i_760_125" x="0.625" y="0.737183" width="20.334" height="20.9418" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                  <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                  <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                  <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                  <feOffset dy="0.607051"/>
                  <feGaussianBlur stdDeviation="1.13822"/>
                  <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
                  <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.2 0"/>
                  <feBlend mode="normal" in2="shape" result="effect1_innerShadow_760_125"/>
                  </filter>
                  <clipPath id="clip0_760_125">
                  <rect width="20.3347" height="20.3347" fill="white" transform="translate(0.625 0.737183)"/>
                  </clipPath>
                  </defs>
                  </svg>
                </a>

                <a
                className="bg-[#F5F5F5] p-1 rounded-md flex justify-center items-center"  
                href="">
                  <svg width="21" height="22" viewBox="0 0 21 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g filter="url(#filter0_i_689_281)">
                    <g filter="url(#filter1_i_689_281)">
                    <path d="M15.6396 3.09857H18.2766L12.5155 9.68318L19.293 18.6434H13.9863L9.82983 13.2091L5.07392 18.6434H2.4353L8.59741 11.6004L2.0957 3.09857H7.53717L11.2942 8.06573L15.6396 3.09857ZM14.7141 17.065H16.1753L6.74319 4.59406H5.17516L14.7141 17.065Z" fill="#485B7C"/>
                    </g>
                    </g>
                    <defs>
                    <filter id="filter0_i_689_281" x="0.460938" y="0.737366" width="20.334" height="23.7238" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                    <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                    <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                    <feOffset dy="3.38911"/>
                    <feGaussianBlur stdDeviation="6.35459"/>
                    <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.2 0"/>
                    <feBlend mode="normal" in2="shape" result="effect1_innerShadow_689_281"/>
                    </filter>
                    <filter id="filter1_i_689_281" x="2.0957" y="3.09857" width="17.1973" height="18.9339" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                    <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                    <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                    <feOffset dy="3.38911"/>
                    <feGaussianBlur stdDeviation="1.69456"/>
                    <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
                    <feBlend mode="normal" in2="shape" result="effect1_innerShadow_689_281"/>
                    </filter>
                    </defs>
                    </svg>
                </a>

                <a
                className="bg-[#F5F5F5] p-1 rounded-md flex justify-center items-center" 
                href="">
                  <svg width="21" height="22" viewBox="0 0 21 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clip-path="url(#clip0_689_285)" filter="url(#filter0_i_689_285)">
                    <path d="M20.2104 6.25058C20.0953 5.83985 19.871 5.46799 19.5614 5.17454C19.243 4.87206 18.8529 4.6557 18.4277 4.54586C16.8365 4.12645 10.4616 4.12645 10.4616 4.12645C7.80398 4.09622 5.147 4.22921 2.50566 4.52468C2.08049 4.64263 1.69106 4.86383 1.37201 5.16861C1.05851 5.47024 0.831442 5.84219 0.712823 6.24974C0.427877 7.78479 0.289431 9.34344 0.299351 10.9047C0.289184 12.4645 0.42729 14.0227 0.712823 15.5596C0.8289 15.9655 1.05512 16.3357 1.36946 16.6348C1.6838 16.9339 2.07525 17.15 2.50566 17.2644C4.11804 17.6829 10.4616 17.6829 10.4616 17.6829C13.1226 17.7132 15.783 17.5802 18.4277 17.2847C18.8529 17.1749 19.243 16.9585 19.5614 16.656C19.8749 16.3569 20.0977 15.985 20.2096 15.58C20.5019 14.0455 20.6441 12.4862 20.634 10.9242C20.656 9.35552 20.514 7.78887 20.2104 6.24974V6.25058ZM8.43492 13.8058V8.00445L13.7389 10.9055L8.43492 13.8058Z" fill="#485B7C"/>
                    </g>
                    <defs>
                    <filter id="filter0_i_689_285" x="0.298828" y="0.737183" width="20.334" height="23.7238" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                    <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                    <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                    <feOffset dy="3.38911"/>
                    <feGaussianBlur stdDeviation="6.35459"/>
                    <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.2 0"/>
                    <feBlend mode="normal" in2="shape" result="effect1_innerShadow_689_285"/>
                    </filter>
                    <clipPath id="clip0_689_285">
                    <rect width="20.3347" height="20.3347" fill="white" transform="translate(0.298828 0.737183)"/>
                    </clipPath>
                    </defs>
                  </svg>
                </a>

                <a 
                className="bg-[#F5F5F5] p-1 rounded-md flex justify-center items-center" 
                href="">
                  <svg width="21" height="22" viewBox="0 0 21 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g filter="url(#filter0_i_689_290)">
                    <path d="M6.9919 2.96149C4.43767 2.96149 2.35938 5.04101 2.35938 7.59587V14.2148C2.35938 16.7694 4.43889 18.848 6.99376 18.848H13.6127C16.1673 18.848 18.2459 16.7684 18.2459 14.2136V7.59401C18.2459 5.03978 16.1663 2.96149 13.6115 2.96149H6.9919ZM15.0686 5.50332C15.4193 5.50332 15.704 5.78801 15.704 6.13878C15.704 6.48956 15.4193 6.77424 15.0686 6.77424C14.7178 6.77424 14.4331 6.48956 14.4331 6.13878C14.4331 5.78801 14.7178 5.50332 15.0686 5.50332ZM10.3026 6.77424C12.5807 6.77424 14.4331 8.6266 14.4331 10.9047C14.4331 13.1828 12.5804 15.0352 10.3026 15.0352C8.02449 15.0352 6.17213 13.1825 6.17213 10.9047C6.17213 8.62692 8.02449 6.77424 10.3026 6.77424ZM10.3026 8.04516C8.72318 8.04516 7.44305 9.32529 7.44305 10.9047C7.44305 12.4842 8.72318 13.7643 10.3026 13.7643C11.882 13.7643 13.1622 12.4842 13.1622 10.9047C13.1622 9.32529 11.882 8.04516 10.3026 8.04516Z" fill="#485B7C"/>
                    </g>
                    <defs>
                    <filter id="filter0_i_689_290" x="0.134766" y="0.737183" width="20.334" height="23.7238" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                    <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                    <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                    <feOffset dy="3.38911"/>
                    <feGaussianBlur stdDeviation="6.35459"/>
                    <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.2 0"/>
                    <feBlend mode="normal" in2="shape" result="effect1_innerShadow_689_290"/>
                    </filter>
                    </defs>
                    </svg>
                </a>

                <a 
                className="bg-[#F5F5F5] p-1 rounded-md flex justify-center items-center" 
                href="">
                  <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g filter="url(#filter0_i_689_293)">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M1.81641 3.14177C1.81641 2.72875 1.98048 2.33265 2.27253 2.0406C2.56458 1.74855 2.96068 1.58447 3.3737 1.58447H18.8975C19.1022 1.58414 19.305 1.62418 19.4941 1.7023C19.6833 1.78043 19.8553 1.8951 20.0001 2.03975C20.1449 2.1844 20.2597 2.3562 20.3381 2.5453C20.4164 2.7344 20.4566 2.93709 20.4565 3.14177V18.6656C20.4568 18.8703 20.4166 19.0731 20.3384 19.2623C20.2602 19.4515 20.1454 19.6234 20.0007 19.7682C19.856 19.913 19.6841 20.0278 19.495 20.1061C19.3058 20.1845 19.1031 20.2247 18.8984 20.2246H3.3737C3.16913 20.2246 2.96655 20.1843 2.77756 20.106C2.58856 20.0277 2.41685 19.9129 2.27223 19.7682C2.12761 19.6235 2.01292 19.4517 1.93471 19.2627C1.85649 19.0736 1.8163 18.871 1.81641 18.6665V3.14177ZM9.19451 8.69145H11.7186V9.95898C12.0829 9.23032 13.0149 8.57452 14.4154 8.57452C17.1005 8.57452 17.7368 10.0259 17.7368 12.6889V17.6218H15.0196V13.2956C15.0196 11.7789 14.6552 10.9232 13.73 10.9232C12.4464 10.9232 11.9126 11.8459 11.9126 13.2956V17.6218H9.19451V8.69145ZM4.53448 17.5057H7.25255V8.57452H4.53448V17.5048V17.5057ZM7.64145 5.66158C7.64657 5.8943 7.60516 6.12571 7.51964 6.34221C7.43412 6.55871 7.30622 6.75595 7.14344 6.92236C6.98067 7.08876 6.78629 7.22097 6.57172 7.31124C6.35715 7.4015 6.12672 7.448 5.89394 7.448C5.66115 7.448 5.43072 7.4015 5.21615 7.31124C5.00158 7.22097 4.80721 7.08876 4.64443 6.92236C4.48165 6.75595 4.35375 6.55871 4.26823 6.34221C4.18271 6.12571 4.1413 5.8943 4.14642 5.66158C4.15648 5.20477 4.34501 4.77007 4.67164 4.45055C4.99827 4.13104 5.43702 3.95213 5.89394 3.95213C6.35085 3.95213 6.78961 4.13104 7.11623 4.45055C7.44286 4.77007 7.63139 5.20477 7.64145 5.66158Z" fill="#485B7C"/>
                    </g>
                    <defs>
                    <filter id="filter0_i_689_293" x="0.970703" y="0.737183" width="20.334" height="23.7238" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                    <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                    <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                    <feOffset dy="3.38911"/>
                    <feGaussianBlur stdDeviation="6.35459"/>
                    <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.2 0"/>
                    <feBlend mode="normal" in2="shape" result="effect1_innerShadow_689_293"/>
                    </filter>
                    </defs>
                    </svg>
                </a>
            </div>
          </div>
            
          {/* form */}
          </div>
          <ContactForm />
        </div>
        
      </div>

      <svg 
      className="absolute inset-0  -z-[1] w-full h-full max-md:hidden"
      width="1440" height="832" viewBox="0 0 1440 832" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M1640.39 805.978C1295.62 637.23 1177.97 451.133 1135.33 309.955C1087.75 152.395 1112.29 -19.8117 1060.92 -30.5059C1028.03 -37.3561 987.564 26.9477 912.114 167.909C683.312 595.358 678.132 708.872 580.651 738.334C444.093 779.636 359.912 585.332 150.006 589.52C-4.16294 592.603 -128.916 700.789 -213 796.954" stroke="#00DAC5" stroke-opacity="0.09" stroke-width="1.56139" stroke-miterlimit="10"/>
        <path d="M1648.67 789.014C1313.61 623.899 1189.2 443.008 1143.18 310.695C1091.75 162.832 1116.04 -0.479188 1065.21 -8.20305C1032.53 -13.1724 992.822 50.0317 919.941 186.163C698.452 599.803 691.581 714.731 594.85 742.738C457.501 781.948 376.989 573.589 164.858 570.752C160.233 570.691 155.68 570.691 151.121 570.814C0.611615 575.002 -125.92 683.239 -211.802 778.813" stroke="#00DAC5" stroke-opacity="0.09" stroke-width="1.56139" stroke-miterlimit="10"/>
        <path d="M1656.92 772.05C1331.59 610.584 1200.52 435.207 1151 311.445C1095.81 173.495 1119.75 18.8742 1069.47 14.1103C1036.99 11.027 998.042 73.1364 927.751 204.432C713.621 604.243 705.1 720.954 609.012 747.142C470.995 784.759 393.988 561.744 179.672 551.98C174.97 551.764 170.284 551.548 165.597 551.574C12.5996 552.416 -120.51 662.889 -210.632 760.668" stroke="#00DAC5" stroke-opacity="0.09" stroke-width="1.56139" stroke-miterlimit="10"/>
        <path d="M1665.19 755.087C1349.55 597.223 1212.03 427.781 1158.84 312.196C1100.04 184.385 1123.46 38.243 1073.76 36.429C1041.46 35.247 1003.31 96.2362 935.575 222.696C728.778 608.724 718.572 726.972 623.188 751.546C484.436 787.293 410.975 549.811 194.501 533.207C189.697 532.837 184.897 532.483 180.112 532.328C24.6383 527.364 -115.059 642.533 -209.421 742.512" stroke="#00DAC5" stroke-opacity="0.09" stroke-width="1.56139" stroke-miterlimit="10"/>
        <path d="M1673.46 738.123C1367.52 583.908 1223.76 420.751 1166.68 312.946C1104.5 195.495 1127.14 57.6325 1078.03 58.7477C1045.92 59.4723 1008.56 119.341 943.391 240.965C743.932 613.185 732.035 732.974 637.36 755.945C497.832 789.801 427.937 537.791 209.326 514.414C204.418 513.9 199.506 513.386 194.577 513.068C36.6364 503.602 -109.649 622.168 -208.266 724.366" stroke="#00DAC5" stroke-opacity="0.09" stroke-width="1.56139" stroke-miterlimit="10"/>
        <path d="M1681.72 721.159C1385.49 570.588 1235.79 414.148 1174.51 313.702C1109.31 206.811 1130.83 77.037 1082.3 81.0608C1050.35 83.7125 1013.8 142.441 951.201 259.234C759.071 617.645 745.478 738.956 651.522 760.349C511.229 792.288 444.885 525.689 224.141 495.657C219.125 494.973 214.109 494.28 209.053 493.838C48.6502 479.911 -104.254 601.828 -207.095 706.236" stroke="#00DAC5" stroke-opacity="0.09" stroke-width="1.56139" stroke-miterlimit="10"/>
        <path d="M1689.99 704.196C1403.47 557.252 1248.21 407.965 1182.36 314.452C1114.61 218.24 1134.48 96.4673 1086.58 103.379C1054.8 107.963 1019.06 165.561 959.033 277.497C774.236 622.101 758.932 744.922 665.706 764.748C524.616 794.754 461.849 513.514 238.977 476.884C233.838 476.041 228.73 475.178 223.56 474.597C60.7067 456.241 -98.8119 581.487 -205.892 688.09" stroke="#00DAC5" stroke-opacity="0.09" stroke-width="1.56139" stroke-miterlimit="10"/>
        <path d="M1698.26 687.232C1421.45 543.922 1276.35 387.117 1190.19 315.202C1138.01 218.04 1138.14 115.924 1090.86 125.693C1059.23 132.229 1024.3 188.645 966.848 295.792C789.39 626.587 772.375 750.893 679.878 769.178C537.997 797.221 478.806 501.294 253.807 458.137C248.576 457.135 243.339 456.107 238.041 455.378C72.7256 432.638 -93.4222 561.148 -204.727 669.97" stroke="#00DAC5" stroke-opacity="0.09" stroke-width="1.56139" stroke-miterlimit="10"/>
        <path d="M1706.53 670.268C1439.42 530.591 1290.4 377.964 1198.03 315.952C1145.19 227.418 1141.8 135.405 1095.13 148.011C1063.66 156.511 1029.55 211.734 974.671 314.035C804.571 631.022 785.809 756.798 694.047 773.556C551.369 799.611 495.771 488.955 268.634 439.339C263.3 438.172 257.955 436.98 252.528 436.106C84.7516 409.019 -87.9791 540.772 -203.544 651.799" stroke="#00DAC5" stroke-opacity="0.09" stroke-width="1.56139" stroke-miterlimit="10"/>
        <path d="M1714.79 653.304C1457.39 517.261 1304.45 368.822 1205.87 316.703C1152.37 236.792 1145.46 154.908 1099.41 170.324C1068.1 180.803 1034.8 234.839 982.491 332.299C819.699 635.498 799.236 762.703 708.22 777.95C564.73 801.995 512.749 476.581 283.459 420.556C278.022 419.23 272.564 417.878 267.014 416.856C96.7758 385.446 -82.5584 520.411 -202.363 633.648" stroke="#00DAC5" stroke-opacity="0.09" stroke-width="1.56139" stroke-miterlimit="10"/>
        <path d="M1723.06 636.341C1475.36 503.93 1318.5 359.675 1213.71 317.458C1159.56 246.176 1149.12 174.441 1103.69 192.643C1072.54 205.12 1040.05 257.949 990.31 350.553C834.856 639.928 812.661 768.582 722.395 782.344C578.093 804.344 529.741 464.145 298.287 401.773C292.742 400.278 287.177 398.777 281.508 397.6C108.793 361.9 -77.1346 500.051 -201.179 615.492" stroke="#00DAC5" stroke-opacity="0.09" stroke-width="1.56139" stroke-miterlimit="10"/>
        <path d="M1731.33 619.372C1493.35 490.605 1332.54 350.528 1221.54 318.229C1166.73 255.575 1152.79 194.005 1107.97 214.982C1076.99 229.474 1045.3 281.069 998.137 368.858C850.017 644.425 826.09 774.487 736.564 786.779C591.44 806.713 546.746 451.719 313.114 383.037C307.461 381.377 301.808 379.717 295.996 378.412C120.804 338.441 -71.7122 479.747 -199.996 597.398" stroke="#00DAC5" stroke-opacity="0.09" stroke-width="1.56139" stroke-miterlimit="10"/>
        <path d="M1739.6 602.409C1511.32 477.275 1346.61 341.38 1229.38 318.959C1173.91 264.933 1156.49 213.554 1112.24 237.275C1081.44 253.792 1050.55 304.154 1005.95 387.107C865.145 648.865 839.502 780.319 750.742 791.163C604.795 808.99 563.781 439.17 327.939 364.243C322.188 362.414 316.402 360.605 310.466 359.13C132.787 314.935 -66.307 459.34 -198.83 579.222" stroke="#00DAC5" stroke-opacity="0.09" stroke-width="1.56139" stroke-miterlimit="10"/>
        <path d="M1747.85 585.445C1529.29 463.944 1360.67 332.238 1237.22 319.719C1181.1 274.322 1160.19 233.133 1116.52 259.594C1085.9 278.145 1055.79 327.253 1013.77 405.37C880.314 653.325 852.918 786.167 764.914 795.567C618.135 811.261 580.831 426.589 342.769 345.471C336.91 343.472 331.011 341.509 324.967 339.885C144.795 291.455 -60.8712 439.005 -197.665 561.076" stroke="#00DAC5" stroke-opacity="0.09" stroke-width="1.56139" stroke-miterlimit="10"/>
        <path d="M1756.13 568.481C1547.27 450.614 1374.72 323.091 1245.06 320.465C1188.28 283.695 1163.91 252.718 1120.79 281.922C1090.37 302.514 1061.04 350.363 1021.61 423.65C895.49 657.796 866.357 791.98 779.108 799.976C631.501 813.507 597.923 414.04 357.615 326.703C351.654 324.54 345.641 322.428 339.48 320.65C156.795 268.016 -55.4288 418.665 -196.437 542.94" stroke="#00DAC5" stroke-opacity="0.09" stroke-width="1.56139" stroke-miterlimit="10"/>
        <path d="M1764.39 551.517C1565.24 437.283 1388.77 313.943 1252.9 321.215C1195.46 293.074 1167.64 272.312 1125.07 304.225C1094.86 326.868 1066.29 373.458 1029.4 441.908C910.623 662.241 879.753 797.766 793.254 804.37C644.821 815.701 614.994 401.393 372.42 307.946C366.356 305.613 360.23 303.352 353.92 301.425C168.747 244.578 -50.0284 398.299 -195.276 524.764" stroke="#00DAC5" stroke-opacity="0.09" stroke-width="1.56139" stroke-miterlimit="10"/>
        <path d="M1772.66 534.554C1583.22 423.958 1402.83 304.817 1260.74 321.965C1202.67 302.437 1171.4 291.918 1129.34 326.544C1099.36 351.237 1071.54 396.557 1037.23 460.157C925.779 666.682 893.172 803.527 807.429 808.748C658.167 817.844 632.113 388.72 387.246 289.127C381.08 286.619 374.841 284.214 368.433 282.133C180.712 221.165 -44.6215 377.949 -194.093 506.639" stroke="#00DAC5" stroke-opacity="0.09" stroke-width="1.56139" stroke-miterlimit="10"/>
        <path d="M1780.93 517.569C1601.19 410.607 1416.88 295.633 1268.58 322.7C1209.82 311.811 1175.16 311.497 1133.63 348.837C1103.87 375.559 1076.79 419.636 1045.05 478.421C940.938 671.132 906.594 809.288 821.606 813.152C671.512 819.997 649.25 376.063 402.072 270.385C395.807 267.703 389.45 265.154 382.924 262.919C192.659 197.772 -39.1853 357.604 -192.912 488.519" stroke="#00DAC5" stroke-opacity="0.09" stroke-width="1.56139" stroke-miterlimit="10"/>
        <path d="M1789.2 500.611C1619.17 397.318 1432.89 351.031 1276.41 323.471C1217.86 313.157 1178.94 331.123 1137.9 371.176C1108.39 399.954 1082.04 442.761 1052.87 496.71C956.09 675.623 920.014 815.053 835.776 817.577C684.866 822.094 666.412 363.359 416.9 251.597C410.538 248.75 404.052 246.052 397.413 243.663C204.604 174.374 -33.7462 337.243 -191.733 470.347" stroke="#00DAC5" stroke-opacity="0.09" stroke-width="1.56139" stroke-miterlimit="10"/>
        <path d="M1797.46 483.652C1637.13 383.956 1448.53 291.825 1284.25 324.211C1224.98 335.897 1182.73 350.712 1142.18 393.484C1112.91 424.318 1087.29 465.851 1060.69 514.969C971.238 680.073 933.441 820.768 849.948 821.965C698.226 824.144 683.595 350.63 431.73 232.814C425.26 229.793 418.661 226.966 411.898 224.412C216.392 151.382 -28.341 316.888 -190.568 452.202" stroke="#00DAC5" stroke-opacity="0.09" stroke-width="1.56139" stroke-miterlimit="10"/>
        <path d="M1805.73 466.694C1655.12 370.631 1461.32 275.401 1292.08 324.966C1232.06 342.552 1186.53 370.317 1146.45 415.802C1117.45 448.692 1092.53 488.961 1068.51 533.238C986.394 684.539 946.87 826.842 864.123 826.375C711.593 825.511 700.981 337.536 446.556 214.047C439.996 210.84 433.274 207.882 426.391 205.172C228.377 127.825 -22.9184 296.532 -189.369 434.051" stroke="#00DAC5" stroke-opacity="0.09" stroke-width="1.56139" stroke-miterlimit="10"/>
        <path d="M1814 449.735C1673.09 357.311 1473.1 259.08 1299.93 325.727C1038.87 426.214 1016.28 833.143 878.29 830.779C720.986 828.086 717.769 298.696 440.877 185.932C240.365 104.273 -17.5185 276.182 -188.188 415.915" stroke="#00DAC5" stroke-opacity="0.09" stroke-width="1.56139" stroke-miterlimit="10"/>
        </svg>


    </section>
  )
}

export default Contact