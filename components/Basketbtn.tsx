import { ShoppingCart } from 'lucide-react';

interface BasketbtnProps {

}

export default function Basketbtn({}: BasketbtnProps){
    return (
        <div className="flex w-full h-full">
            <a href="#" className='w-full h-full'><ShoppingCart className="w-full h-full" /></a>
        </div>
    )
}