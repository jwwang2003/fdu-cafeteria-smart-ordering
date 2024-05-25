import Image from 'next/image';

export default function Header() {
  return (
    <div className="ml-3 mt-3 p-1 text-black flex flex-row items-center rounded-l-full shadow-xl bg-blue-100">
      <Image className="mr-5" src="/fdu_logo.svg" width={50} height={50} alt="Fudan Logo"/> 
      <p className="text-3xl font-bold text-blue-900">
        复旦食堂智订
      </p>
    </div>
  )
}