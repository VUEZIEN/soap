"use client";
import Slider from "react-slick";
import React, { Component } from "react";
import { StarIcon } from '@heroicons/react/24/solid';
import Image from "next/image";

// Data untuk Carousel
interface DataType {
    profesi: string;
    komentar: string;
    imgSrc: string;
    nama: string;
}

const dataTestimoni: DataType[] = [
    {
        nama: "Daryoko",
        profesi: 'Costummer',
        komentar: 'Saya sangat puas dengan hasil cetakan dari percetakan ini. Kualitas cetakannya luar biasa dan sesuai dengan desain yang saya berikan.',
        imgSrc: '/images/testimonial/user1.svg',
    },
    {
        nama: "Siti Aminah",
        profesi: 'Costummer',
        komentar: 'Harganya juga sangat wajar untuk kualitas yang diterima. Pelayanan pelanggannya sangat memuaskan; stafnya sangat membantu dan ramah.',
        imgSrc: '/images/testimonial/user2.svg',
    },
    {
        nama: "Farhan Maulana",
        profesi: 'Costummer',
        komentar: ' Pelayanan pelanggannya sangat baik, stafnya sangat cepat dalam menanggapi dan membantu.',
        imgSrc: '/images/testimonial/user3.svg',
    },
    {
        nama: "Daryoko",
        profesi: 'Costummer',
        komentar: 'Proses pemesanannya sangat sederhana dan waktu pengirimannya sesuai jadwal. Saya juga merasa harga yang dikenakan sangat adil.',
        imgSrc: '/images/testimonial/user1.svg',
    },
    {
        nama: "Siti Aminah",
        profesi: 'Costummer',
        komentar: 'Hasil cetakan sesuai dengan ekspektasi saya, dengan detail yang jelas dan warna yang cerah.',
        imgSrc: '/images/testimonial/user2.svg',
    },
    {
        nama: "Farhan Maulana",
        profesi: 'Costummer',
        komentar: 'Pengalaman saya dengan percetakan ini sangat positif. ',
        imgSrc: '/images/testimonial/user3.svg',
    },
];

// Pengaturan Carousel
export default class MultipleItems extends Component {

    render() {
        const settings = {
            dots: false,
            infinite: true,
            slidesToShow: 3,
            slidesToScroll: 2,
            arrows: false,
            autoplay: false,
            speed: 500,
            autoplaySpeed: 2000,
            cssEase: "linear",
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
            <div className="bg-testimonial pt-40 pb-32 lg:py-32" id="testimonial-section">
                <div className='mx-auto max-w-7xl sm:py-4 lg:px-8 '>
                    <div className="text-center">
                        <h3 className="text-4xl sm:text-6xl font-bold text-black my-3">Lihat apa kata mereka.</h3>
                        <h3 className="text-4xl sm:text-6xl font-bold text-black text-opacity-50 lg:mr-48 my-4">Lihat apa kata mereka.</h3>
                        <h3 className="text-4xl sm:text-6xl font-bold text-black text-opacity-25 lg:-mr-32 my-4">Lihat apa kata mereka.</h3>
                    </div>

                    <Slider {...settings}>
                        {dataTestimoni.map((item, i) => (
                            <div key={i} className="relative">
                                <div className='bg-white test-sha m-3 p-10 my-20 rounded-3xl'>
                                    <Image src={item.imgSrc} alt={item.imgSrc} width={71} height={71} className="inline-block m-auto absolute test-pos" />
                                    <h4 className='text-base font-medium text-testColor my-4'>{item.komentar}</h4>
                                    <hr style={{ color: "lightgrey" }} />
                                    <div className="flex justify-between">
                                        <div>
                                            <h3 className='text-base font-medium pt-4 pb-2'>{item.nama}</h3>
                                            <h3 className='text-xs font-medium  pb-2 opacity-50'>{item.profesi}</h3>
                                        </div>
                                        <div className="flex">
                                            <StarIcon width={20} className="star" />
                                            <StarIcon width={20} className="star" />
                                            <StarIcon width={20} className="star" />
                                            <StarIcon width={20} className="star" />
                                            <StarIcon width={20} className="star" />
                                        </div>
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
