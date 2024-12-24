"use client";
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { FaRegTrashCan } from "react-icons/fa6";
import { toast } from 'react-hot-toast';
export default function Cart() {
    const [items, setItems] = useState(() => {
        const saved = localStorage.getItem("cart");
        return saved ? JSON.parse(saved) : [];
    });
    const [totalprice, setTotalPrice] = useState(0);

    useEffect(() => {
        localStorage.setItem("cart", JSON.stringify(items));
        if (items.length > 0) {
            setTotalPrice(items.reduce((acc, item) => acc + item.price * item.quantity, 0));
        } else {
            setTotalPrice(0);
        }
    }, [items]);
    const updateQuantity = (id, quantity) => {
        setItems((prevItems) => {
            return prevItems.map((item) => {
                if (item.id === id) {
                    const newQuantity = Math.max(1, item.quantity + quantity);
                    return { ...item, quantity: newQuantity };
                }
                return item;
            });
        });
    };

    const removeItem = (id) => {
        setItems((prevItems) => {
            return prevItems.filter((item) => item.id !== id);
        });
    };
    const summitOrder = () => {
        toast.success('成功送出訂單！', {
            style: {
                border: '1px solid #713200',
                padding: '16px',
                color: '#713200',
            },
            iconTheme: {
                primary: '#713200',
                secondary: '#FFFAEE',
            },
        });
        setItems([]);
    };
    return (
        <div className="min-h-screen bg-base-100 p-8">
            <div className="max-w-4xl mx-auto">
                <h1 className="text-3xl font-bold mb-8">購物車</h1>
                {items.map(item => (
                    <div key={item.id} className="flex items-center gap-4 py-4">
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
                                onClick={() => updateQuantity(item.id, -1)}
                            >
                                -
                            </button>
                            <span className="w-8 text-center">{item.quantity}</span>
                            <button
                                className="btn btn-circle btn-sm"
                                onClick={() => updateQuantity(item.id, 1)}
                            >
                                +
                            </button>
                        </div>
                        <p className="w-24 text-right">${item.price * item.quantity}</p>
                        <button className='hover:text-red-500' onClick={() => removeItem(item.id)}>
                            <FaRegTrashCan />
                        </button>
                    </div>
                ))}
                <div className="flex justify-between items-center mt-8 border-t">
                    <Link href="/merchandise" className="btn btn-outline">
                        繼續購物
                    </Link>
                    <div className="text-right py-6">
                        <p className="text-2xl font-bold">總計:${totalprice} </p>
                        <button className="btn btn-primary mt-4" onClick={()=>summitOrder()}>結帳</button>
                    </div>
                </div>
            </div>
        </div>
    );
}