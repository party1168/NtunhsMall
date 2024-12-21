import Link from "next/link";
import Image from "next/image";
function HeroSection() {
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
                    <button className="btn btn-primary">
                        <Link href="/merchandise">買一個</Link>
                    </button>
                </div>
            </div>
        </div>
    );
}

export default HeroSection;