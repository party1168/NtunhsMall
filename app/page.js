"use client";
import { motion } from "framer-motion";
import { HeroHighlight, Highlight } from "./components/ui/hero-highlight";
import Image from "next/image";
import Link from "next/link";
export default function Home() {
    return (
        <div className="hero bg-base-200 min-h-screen">
            <HeroHighlight className={""}>
                <motion.div
                    initial={{
                        opacity: 0,
                        y: 20,
                    }}
                    animate={{
                        opacity: 1,
                        y: [20, -5, 0],
                    }}
                    transition={{
                        duration: 0.5,
                        ease: [0.4, 0.0, 0.2, 1],
                    }}>
                    <div className="hero-content flex-col lg:flex-row-reverse">
                        <Image
                            alt="神通 ARS-HS PLUS C"
                            className="max-w-sm rounded-lg shadow-2xl"
                            width={500}
                            height={500}
                            src="https://www.victorsport.com.tw/files/zh_tw/product/more/107409_0_20231128165241.jpg">
                        </Image>
                        <div>
                            <div>
                                <h1 className="text-5xl font-bold">你需要</h1>
                                <p className="py-6">
                                    我覺得你需要買一個這個，<Highlight>這個真的很棒</Highlight>，你一定會喜歡的。
                                </p>
                            </div>
                            <Link href="/merchandise">
                                <button className="p-[3px] relative">
                                    <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg" />
                                    <div className="px-8 py-2 bg-[#171717] rounded-[6px]  relative group transition duration-200 text-white hover:bg-transparent">
                                        立即購買
                                    </div>
                                </button>
                            </Link>
                        </div>
                    </div>
                </motion.div>
            </HeroHighlight >
        </div>
    );
}
