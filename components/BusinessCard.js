import Link from "next/link";
import Image from "next/image";
import {FaChevronRight} from "react-icons/fa6"

export function BusinessCard () {
    return (
        <div className="flex flex-col gap-2">
            <div className="flex gap-2">
            <Link href="">
                <Image width={40} height={40} src="/images/demo-logo.png" alt="business logo"/>
            </Link>
               <Link href="#">
                   <span className="text-lg text-lime-800">Unified Trading For Water Packaging Limited</span>
                   <span className="text-xs text-gray-500"> Abaji, FCT</span>
               </Link>
            </div>
            <p className="text-sm text-gray-700">At The Coca‑Cola Company, our Sustainability goals and initiatives are anchored by our purpose — to refresh the world and make a difference — and are core to our growth strategy. This resource provides an overview of our efforts to create a more sustainable business and better shared future, that makes a difference in people’s lives, communities and our planet.</p>

                <blockquote className="grid grid-cols-2 border border-line-400 rounded-md p-2">
                    <p className="text-sm text-line-600 border-r border-line-400">Listed in: Water Production</p>
                    <Link href="#" className="flex justify-end items-center gap-2 text-line-600 text-sm">
                        <span>View Business</span>
                        <FaChevronRight/>
                     </Link>
                </blockquote>
        </div>
    )
}