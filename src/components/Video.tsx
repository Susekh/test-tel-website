import { motion } from "framer-motion"

function Video() {
  return (
    <div className="-mt-10 w-full pb-20 flex justify-center">
      <motion.div
        className="relative w-[70%] max-sm:w-[95%] mt-10"
        initial={{ opacity: 0, scale: 0.9, y: 50 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        style={{
          border: "2.5px solid #000",
          // boxShadow: "8px 8px 0 #000",
          background: "#fff",
          padding: "10px",
        }}
      >
        {/* Top bar — like a browser chrome */}
        <div
          className="flex items-center gap-2 px-3 py-2 mb-2"
          style={{ borderBottom: "2px solid #000" }}
        >
          <span className="w-3 h-3 rounded-full bg-[#FF6B35]" style={{ border: "1.5px solid #000" }} />
          <span className="w-3 h-3 rounded-full bg-[#FFEC3E]" style={{ border: "1.5px solid #000" }} />
          <span className="w-3 h-3 rounded-full bg-[#3DB85F]" style={{ border: "1.5px solid #000" }} />
          <span className="ml-3 text-[11px] font-black uppercase tracking-widest text-black/30">
            Telusko · Featured Video
          </span>
        </div>

        <motion.iframe
          loading="lazy"
          src="https://www.youtube.com/embed/7xIpeyBc-jY?si=k4aUwOZrMec1KMbP&autoplay=1&controls=1&modestbranding=1&rel=0&mute=1&loop=1"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
          className="w-full aspect-video"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        />
      </motion.div>
    </div>
  )
}

export default Video