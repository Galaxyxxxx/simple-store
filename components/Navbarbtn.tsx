import Image from "next/image"

interface NavbarbtnProps {
    isImage: boolean
    text: string
    link: string
}

export default function Navbarbtn({ isImage, text, link }: NavbarbtnProps) {
    return (
        <div className="text-3xl h-full relative">
            <a href={link}>{isImage ? <Image src={text} alt="Logo" layout="fill" className="relative min-w-full aspect-1/1"/>: <div  className="justify-self-center"> {text} </div>}</a>
        </div>
    )
}