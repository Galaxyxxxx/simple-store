import Image from "next/image"

interface NavbarbtnProps {
    isImage: boolean
    text: string
    link: string
}

export default function Navbarbtn({ isImage, text, link }: NavbarbtnProps) {
    return (
        <div className="flex-row">
            <a href={link}>{isImage ? <Image src={text} alt="Logo" width={50} height={50} />: text}</a>
        </div>
    )
}