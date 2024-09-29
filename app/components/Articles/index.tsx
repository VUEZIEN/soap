"use client";
import Slider from "react-slick";
import React, { Component } from "react";
import Link from "next/link";
import Image from "next/image";

// DATA CAROUSEL

interface DataType {
    time: string;
    heading: string;
    heading2: string;
    date: string;
    imgSrc: string;
    name: string;
}

// DATA CAROUSEL

const postData: DataType[] = [
    {
        time: "5 menit",
        heading: 'Bersih Maksimal',
        heading2: 'Dengan Sabun Cuci Piring',
        name: "KILAU SEGAR",
        date: '2024',
        imgSrc: '/images/articles/bersih.jpg',
    },
    {
        time: "5 menit",
        heading: 'Lembut di Tangan',
        heading2: 'Efektif Menghilangkan Lemak',
        name: "KILAU SEGAR",
        date: '2024',
        imgSrc: '/images/articles/lembut.jpg',
    },
    {
        time: "5 menit",
        heading: 'Hemat dan Efisien',
        heading2: 'Satu Tetes untuk Banyak Piring',
        name: "KILAU SEGAR",
        date: '2024',
        imgSrc: '/images/articles/hemat.jpg',
    },
    {
        time: "5 menit",
        heading: 'Wangi Segar',
        heading2: 'Mengharumkan Dapur',
        name: "KILAU SEGAR",
        date: '2024',
        imgSrc: '/images/articles/jeruk.jpg',
    }
];


// PENGATURAN CAROUSEL

export default class MultipleItems extends Component {

    render() {
        const settings = {
            dots: false,
            infinite: true,
            slidesToShow: 3,
            // centerMode: true,
            slidesToScroll: 2,
            arrows: false,
            autoplay: false,
            speed: 500,
            cssEase: "linear",
            responsive: [
                {
                    breakpoint: 1200,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1,
                        infinite: true,
                        dots: false
                    }
                },
                {
                    breakpoint: 600,
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
            <div className="bg-lightgrey py-20" id="blog-section">
                <div className='mx-auto max-w-7xl sm:py-4 lg:px-8'>

                    <div className="text-center">
                        <h3 className="text-blue text-lg font-normal tracking-widest">ARTIKEL</h3>
                        <h3 className="text-4xl sm:text-6xl font-bold">Postingan Terbaru Kami.</h3>
                    </div>

                    <Slider {...settings}>
                        {postData.map((item, index) => (
                            <div key={index}>

                                <div className='bg-white m-3 px-3 pt-3 pb-12 my-10 shadow-lg rounded-3xl relative'>
                                    <Image src={item.imgSrc} alt="gambar artikel" width={389} height={262} className="inline-block m-auto" />

                                    <Link href="/">
                                        <h3 className="absolute bg-blue text-white hover:bg-black hover:shadow-xl py-3 px-6 rounded-full article-img">{item.time} baca</h3>
                                    </Link>
                                    <h4 className='text-2xl font-bold pt-6 text-black'>{item.heading}</h4>
                                    <h4 className='text-2xl font-bold pt-1 text-black'>{item.heading2}</h4>

                                    <div>
                                        <h3 className='text-base font-normal pt-6 pb-2 opacity-75'>{item.name}</h3>
                                        <h3 className='text-base font-normal pb-1 opacity-75'>{item.date}</h3>
                                    </div>

                                </div>

                            </div>
                        ))}
                    </Slider>
                </div>
            </div>
        );
    }
}
