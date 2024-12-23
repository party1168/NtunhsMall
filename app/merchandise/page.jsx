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
        <div className="pt-40 grid grid-cols-2 gap-20">
          <div>
            <Lens hovering={hovering} setHovering={setHovering}>
              <Image
                src="https://images.unsplash.com/photo-1713869820987-519844949a8a?q=80&w=3500&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="image"
                width={500}
                height={300}
                className="rounded-2xl"
              />
            </Lens>
          </div>
          <div>
            <h1 className="text-4xl font-bold">Product Name</h1>
            <p className="text-lg text-neutral-content">Product Description</p>
            <p className="text-2xl font-bold text-primary">Price</p>
            <button className="btn btn-primary">Add to cart</button>
          </div>
        </div>
      </div>
    </div>
  );
}