import { ShoppingCart } from 'lucide-react';

interface BasketbtnProps {

}

export default function Basketbtn({}: BasketbtnProps){
    return (
        <div className="flex">
            <a href="#"><ShoppingCart className="w-auto h-auto" /></a>
        </div>
    )
}