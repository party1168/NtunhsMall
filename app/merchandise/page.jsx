"use client"
import { Lens } from "../components/ui/lens";
import Image from "next/image";
import { useState } from "react";
import Link from "next/link";
export default function Merchandise() {
  const [hovering, setHovering] = useState(false);
  return (
    <div className="min-h-screen bg-base-100">
      <div className="place-items-center min-w-full min-h-screen">
        <div className="breadcrumbs text-sm">
          <ul>
            <li>
              <Link href='/'>Home</Link>
            </li>
            <li>
              <Link href='/merchandise'>Merchandise</Link>
            </li>
          </ul>
        </div>
        <div className="pt-40 grid grid-cols-2 gap-4">
          <div>
            <Lens hovering={hovering} setHovering={setHovering}>
              <Image
                src="https://www.victorsport.com.tw/files/zh_tw/product/more/107409_0_20231128165241.jpg"
                alt="image"
                width={500}
                height={300}
                className="rounded-2xl"
              />
            </Lens>
          </div>
          <div className="flex flex-col gap-8 border-l-2 border-l-stone-950 pl-4 pb-24">
            <h1 className="text-4xl font-bold">神通 ARS-HS PLUS C</h1>
            <p className="text-lg text-neutral-content grid gird-cols-2 gap-4">
              <span className="font-bold text-red-500">
                塞提阿萬指定裝備
              </span>
              升級版的鞭擊增益系统WES 3.0與高抗扭中管，
              <br/>
              使ARS-HS PLUS連貫平抽更敏捷，
              <br/>
              進攻下壓角度更尖銳，
              <br />
              結合小拍面帶來俐落打感，引領神速新世代。</p>
            <p className="text-2xl font-bold text-primary">定價： 8000</p>
            <button className="p-[3px] relative max-w-fit mt-4">
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg" />
              <div className="px-8 py-2  bg-black rounded-[6px]  relative group transition duration-200 text-white hover:bg-transparent">
                加入購物車
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}