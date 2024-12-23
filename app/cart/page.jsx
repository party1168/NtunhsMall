"use client";
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
export default function Cart() {
    const [items, setItems] = useState([
        {
            id: 1,
            name: "神通 ARS-HS PLUS C",
            price: 8000,
            quantity: 1,
            image: "https://www.victorsport.com.tw/files/zh_tw/product/more/107409_0_20231128165241.jpg"
        }
    ]);
    return (
        <div className="min-h-screen bg-base-100 p-8">
            <div className="max-w-4xl mx-auto">
                <h1 className="text-3xl font-bold mb-8">購物車</h1>
                {items.map(item => (
                    <div key={item.id} className="flex items-center gap-4 border-b py-4">
                        <Image
                            src={item.image}
                            alt={item.name}
                            width={100}
                            height={100}
                            className="rounded-lg"
                        />
                        <div className="flex-1">
                            <h2 className="text-xl font-semibold">{item.name}</h2>
                            <p className="text-primary">${item.price}</p>
                        </div>
                        <div className="flex items-center gap-2">
                            <button
                                className="btn btn-circle btn-sm"
                                onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            >
                                -
                            </button>
                            <span className="w-8 text-center">{item.quantity}</span>
                            <button
                                className="btn btn-circle btn-sm"
                                onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            >
                                +
                            </button>
                        </div>
                        <p className="w-24 text-right">${item.price * item.quantity}</p>
                    </div>
                ))}
                <div className="flex justify-between items-center mt-8">
                    <Link href="/merchandise" className="btn btn-outline">
                        繼續購物
                    </Link>
                    <div className="text-right">
                        <p className="text-2xl font-bold">總計: </p>
                        <button className="btn btn-primary mt-4">結帳</button>
                    </div>
                </div>
            </div>
        </div>
    );
}