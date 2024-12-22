import Image from "next/image";
import Link from "next/link";
export default function Home() {
    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <Image
                    alt="hero image"
                    className="max-w-sm rounded-lg shadow-2xl"
                    width={500}
                    height={500}
                    src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp">
                </Image>
                <div>
                    <div>
                        <h1 className="text-5xl font-bold">你需要</h1>
                        <p className="py-6">
                            我覺得你需要買一個這個，這個真的很棒，你一定會喜歡的。
                        </p>
                    </div>
                    <Link href="/merchandise">
                        <button className="btn btn-primary">
                            立即購買
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
}
