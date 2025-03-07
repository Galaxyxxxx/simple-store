
interface FooterProps{

}


export default function Footer({}){
  return (
  <div className="w-full h-full flex">
    <div className="bg-gray-900 flex w-1/4 h-full">
      <p className="text-white place-self-center ml-30 ">Copyright © 2025 Simple Store. All rights reserved.</p>
    </div>
    <div className="w-2/4 h-full flex bg-gray-900">
    </div>
    <div className="w-1/4 h-full flex bg-gray-900">
      <p className="text-white place-self-center justify-items-end">Need any help? Contact our support: <a href="/support" className="text-sky-700">here</a></p>
    </div>
  </div>
  )
}