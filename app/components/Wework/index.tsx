"use client"
import Slider from "react-slick";
import React from "react";
import Image from "next/image";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

// DATA CAROUSEL
const postData = [
    {
        profession: 'Produksi',
        name: 'Fawwaz',
        imgSrc: '/images/wework/fmw.jpg',
        instagramLink: 'https://www.instagram.com/fmz_mw/' // Tambahkan link Instagram masing-masing
    },
    {
        profession: 'Designer',
        name: 'Abdul Aziz',
        imgSrc: '/images/wework/ziz.jpg',
        instagramLink: 'https://www.instagram.com/zizzz.dul_/' 
    },
    {
        profession: 'Bendahara',
        name: 'Rayya D',
        imgSrc: '/images/wework/ray.jpg',
        instagramLink: 'https://www.instagram.com/raydisayidan._/' 
    },
    {
        profession: 'Sekretaris',
        name: 'Zaky R',
        imgSrc: '/images/wework/zaky.jpg',
        instagramLink: 'https://www.instagram.com/caamarros/' 
    },
];

// SETTING CAROUSEL
const MultipleItems = () => {
    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows: false,
        autoplay: true,
        speed: 3500,
        autoplaySpeed: 2000,
        cssEase: "ease-in-out",
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false
                }
            },
            {
                breakpoint: 800,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false
                }
            },
            {
                breakpoint: 450,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false
                }
            }
        ]
    };

    return (
        <div className="bg-wework py-20">
            <div className='mx-auto max-w-2xl lg:max-w-7xl sm:py-6 lg:px-8'>
                <div className="text-center mb-16">
                    {/* Shadow effect pada heading */}
                    <h3 className="text-5xl sm:text-6xl font-bold text-black leading-tight mb-4">
                        Terbaik untuk Anda.
                    </h3>
                    <h3 className="text-5xl sm:text-6xl font-bold text-black opacity-50 -translate-y-2 relative lg:mr-48">
                        Terbaik untuk Anda.
                    </h3>
                    <h3 className="text-5xl sm:text-6xl font-bold text-black opacity-25 lg:-mr-32">
                        Terbaik untuk Anda.
                    </h3>
                </div>
            </div>

            <Slider {...settings}>
                {postData.map((items, i) => (
                    <div key={i} className="group">
                        <div className='bg-white m-3 py-12 px-6 text-center shadow-2xl rounded-3xl transition duration-300 transform group-hover:scale-105'>
                            <div className='relative'>
                                {/* Gambar Bulat */}
                                <Image
                                    src={items.imgSrc}
                                    alt="profile"
                                    width={150}
                                    height={150}
                                    className="inline-block m-auto rounded-full shadow-lg" 
                                />
                                {/* Gambar LinkedIn */}
                                <a href={items.instagramLink} target="_blank" rel="noopener noreferrer">
                                    <Image
                                        src={'/images/wework/ig.png'}
                                        alt="Instagram"
                                        width={32}
                                        height={32}
                                        className="absolute top-0 right-0 transform translate-x-2 -translate-y-2 opacity-0 group-hover:opacity-100 transition-opacity"
                                    />
                                </a>
                            </div>
                            <h4 className='text-3xl font-bold pt-8'>{items.name}</h4>
                            <h3 className='text-xl font-normal pt-2 pb-4 text-gray-500'>{items.profession}</h3>
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    );
}

export default MultipleItems;