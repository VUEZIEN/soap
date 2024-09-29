import Image from "next/image";
import Link from "next/link";

const Insta = () => {
    return (
        <div className="mx-auto max-w-2xl pb-16 px-4 sm:px-6 lg:max-w-7xl lg:px-8">
            <div className="mt-24 grid grid-cols-1 gap-y-10 gap-x-16 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                
                {/* Poster 1 */}
                <div className="relative mx-auto imageContainer group">
                    <Image 
                        src="/images/insta/poster.png" 
                        width={306} 
                        height={306} 
                        alt="instaOne" 
                        className="rounded-3xl" 
                    />
                    <Link href={"https://www.instagram.com/kilau.segar/"} target="_blank">
                        <button
                            className="absolute hidden group-hover:flex items-center justify-center text-white font-semibold bg-black bg-opacity-50 w-full h-full rounded-lg z-10"
                            style={{ top: 0, left: 0 }}
                        >
                            <Image src="/images/insta/instagram.svg" alt="instagram" width={36} height={36} />
                        </button>
                    </Link>
                </div>

                {/* Poster 2 */}
                <div className="relative mx-auto imageContainer group">
                    <Image 
                        src="/images/insta/poster2.png" 
                        width={306} 
                        height={306} 
                        alt="instaTwo" 
                        className="rounded-3xl" 
                    />
                    <Link href={"https://www.instagram.com/kilau.segar/"} target="_blank">
                        <button
                            className="absolute hidden group-hover:flex items-center justify-center text-white font-semibold bg-black bg-opacity-50 w-full h-full rounded-lg z-10"
                            style={{ top: 0, left: 0 }}
                        >
                            <Image src="/images/insta/instagram.svg" alt="instagram" width={36} height={36} />
                        </button>
                    </Link>
                </div>

                {/* Poster 3 */}
                <div className="relative mx-auto imageContainer group">
                    <Image 
                        src="/images/insta/poster3.png" 
                        width={306} 
                        height={306} 
                        alt="instaThree" 
                        className="rounded-3xl" 
                    />
                    <Link href={"https://www.instagram.com/kilau.segar/"} target="_blank">
                        <button
                            className="absolute hidden group-hover:flex items-center justify-center text-white font-semibold bg-black bg-opacity-50 w-full h-full rounded-lg z-10"
                            style={{ top: 0, left: 0 }}
                        >
                            <Image src="/images/insta/instagram.svg" alt="instagram" width={36} height={36} />
                        </button>
                    </Link>
                </div>

            </div>
        </div>
    );
}

export default Insta;