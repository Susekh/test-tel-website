import React from 'react';

type SocialProps = {
  url: string;
  src: string;
  children: React.ReactNode;
  index: number;
};

const buttonPalettes = [
  {
    bg: 'bg-[#5865F2] hover:bg-[#4752C4]',   
    text: 'text-white',
    border: 'border-[#2B2D31]',        
    shadow: 'shadow-[4px_4px_0_0_#1E1F22]',
  },
  {
    bg: 'bg-[#FF0000] hover:bg-[#e60000]',
    text: 'text-white',
    border: 'border-[#b30000]',
    shadow: 'shadow-[4px_4px_0_0_#800000]',
  },
  {
    bg: 'bg-[#5865F2] hover:bg-[#4f5bda]',
    text: 'text-white',
    border: 'border-[#424549]',
    shadow: 'shadow-[4px_4px_0_0_#23272a]',
  }
  ,
  
  {
    bg: 'bg-[#1877F2] hover:bg-[#166fe5]',
    text: 'text-white',
    border: 'border-[#1158b4]',
    shadow: 'shadow-[4px_4px_0_0_#0d4386]',
  },
  {
    bg: 'bg-gradient-to-br from-purple-500 via-pink-500 to-orange-400 hover:from-purple-600 hover:via-pink-600 hover:to-orange-500',
    text: 'text-white',
    border: 'border-purple-800',
    shadow: 'shadow-[4px_4px_0_0_#3b0764]', 
  },

  {
    bg: 'bg-slate-100 hover:bg-slate-200',
    text: 'text-slate-800',
    border: 'border-slate-400',
    shadow: 'shadow-[4px_4px_0_0_#64748b]',
  },
  {
    bg: 'bg-sky-500 hover:bg-sky-600',
    text: 'text-white',
    border: 'border-sky-700',
    shadow: 'shadow-[4px_4px_0_0_#0c4a6e]',
  }
];



function Social({  url,src , index, children }: SocialProps) {
  const palette = buttonPalettes[index % buttonPalettes.length];

  return (
    <a
      target='blank'
      href={url}
      className={`
        flex items-center justify-center gap-3
        cursor-pointer w-[150px] px-6 py-3 border-2 font-bold
        transition-all hover:scale-103 duration-300 ease-in-out
        active:translate-x-1 active:translate-y-1 active:shadow-none
        ${palette.bg} 
        ${palette.text} 
        ${palette.border} 
        ${palette.shadow}
      `}
    >
      <img 
        className="h-6"
        src={src} 
        alt={children as string} 
      />
      <h3 className="text-base font-dm-sans whitespace-nowrap">
        {children}
      </h3>
    </a>
  );
}

export default Social;