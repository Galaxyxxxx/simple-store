import Image from "next/image"

interface NavbarbtnProps {
    isImage: boolean
    text: string
    link: string
}

export default function Navbarbtn({ isImage, text, link }: NavbarbtnProps) {
    return (
        <div className="flex-row text-6xl relative">
            <a href={link}>{isImage ? <Image src={text} alt="Logo" layout="fill" className="relative h-132 min-w-full"/>: text}</a>
        </div>
    )
}