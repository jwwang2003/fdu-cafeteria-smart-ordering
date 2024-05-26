import Image from "next/image"

export default function OrderItem() {
  return (
    <div className="flex flex-col w-full bg-white p-2 divide-y gap-2 rounded-lg">
      <div className="flex flex-row justify-between">
        <Image src="/fdu_logo.svg" width={25} height={25} alt="" />
        <p>Merchant Name</p>

        <p>Status</p>
      </div>
      <div className="flex flex-row">
        <div className="aspect-video h-full">
          <Image src="/fdu_logo.svg" width={50} height={50} alt="" />
          <p>test</p>
        </div>
        
        <div className="aspect-video h-full">
          <Image src="/fdu_logo.svg" width={50} height={50} alt="" />
          
        </div>
      </div>
    </div>
  )
}