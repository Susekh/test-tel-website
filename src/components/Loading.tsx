function Loading() {
  return (
    <div className="flex items-center justify-center space-x-2 py-2 px-3">
      <span className="w-2 h-2 bg-[#FFF] rounded-full animate-bounce"></span>
      <span className="w-2 h-2 bg-[#FFF] rounded-full animate-bounce [animation-delay:-0.2s]"></span>
      <span className="w-2 h-2 bg-[#FFF] rounded-full animate-bounce [animation-delay:-0.4s]"></span>
    </div>
  );
}

export default Loading;
