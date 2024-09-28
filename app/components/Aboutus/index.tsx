import Image from "next/image";
import Link from "next/link";
import { ChevronRightIcon } from '@heroicons/react/20/solid'

interface datatype {
    heading: string;
    imgSrc: string;
    paragraph: string;
    link: string;
}

const Aboutdata: datatype[] = [
    {
        heading: "KILAU SEGAR 450ml",
        imgSrc: "/images/aboutus/imgOne.svg", // Replace with relevant image path
        paragraph: 'Sabun cuci piring KILAU SEGAR memberikan kebersihan maksimal dengan aroma segar jeruk nipis. Mengandung texapon, sodium sulfat, dan citrun untuk membersihkan lemak dengan cepat tanpa merusak tangan.',
        link: 'Pelajari Lagi'
    },
    {
        heading: "Aroma Segar",
        imgSrc: "/images/aboutus/imgTwo.svg", // Replace with relevant image path
        paragraph: 'Diformulasikan dengan aroma jeruk nipis alami yang memberikan kesegaran pada setiap cucian piring. Menjadikan dapur lebih wangi dan nyaman.',
        link: 'Pelajari Lagi'
    },
    {
        heading: "Hemat dan Efisien",
        imgSrc: "/images/aboutus/imgThree.svg", // Replace with relevant image path
        paragraph: 'Dengan KILAU SEGAR, Anda hanya memerlukan sedikit cairan untuk membersihkan banyak piring. Efisien untuk penggunaan sehari-hari dan sangat hemat.',
        link: 'Pelajari Lagi'
    },
]

const Aboutus = () => {
    return (
        <div id="aboutus-section">
            <div className='mx-auto max-w-7xl px-4 py-24 my-32 lg:px-10 bg-lightgrey rounded-3xl relative'>
                <Image src="/images/aboutus/dots.svg" width={100} height={100} alt="dots-image" className="absolute bottom-1 -left-20" />
                <h3 className='text-center text-blue text-lg tracking-widest'> Tentang Kami</h3>
                <h4 className='text-center text-4xl lg:text-65xl font-bold'>Ketahui lebih banyak tentang kami.</h4>
                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 my-16 gap-x-16 lg:gap-x-32'>
                    {Aboutdata.map((item, i) => (
                        <div key={i} className='hover:bg-navyblue bg-white rounded-3xl mt-16 pt-10 pl-8 pb-10 pr-6 shadow-xl group'>
                            <h4 className='text-4xl font-semibold text-black mb-5 group-hover:text-white'>{item.heading}</h4>
                            <Image src={item.imgSrc} alt={item.imgSrc} width={100} height={100} className="mb-5" />
                            <h4 className='text-lg font-normal text-black group-hover:text-offwhite mb-5'>{item.paragraph}</h4>
                            <Link href="#" className='text-lg font-semibold group-hover:text-white text-blue hover-underline'>
                                {item.link}
                                <ChevronRightIcon width={20} height={20} />
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Aboutus;
