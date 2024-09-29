"use client";
import React from "react";
import Slider from "react-slick";
import { StarIcon } from '@heroicons/react/24/solid';
import Image from "next/image";

// Data untuk Carousel
const dataTestimoni = [
  {
    nama: "Fatih Al-hijri",
    profesi: "Pelanggan",
    komentar:
      "Sabun cuci piring Kilau Segar benar-benar mengagumkan! Hanya dengan sedikit cairan, lemak dan noda membandel langsung hilang. Piring-piring saya selalu bersih berkilau.",
    imgSrc: "/images/testimonial/tih.jpg",
  },
  {
    nama: "Ariiq Maazien",
    profesi: "Pelanggan",
    komentar:
      "Sangat puas dengan sabun ini. Wanginya segar dan tidak membuat tangan kering. Harga yang terjangkau dengan kualitas yang luar biasa.",
    imgSrc: "/images/testimonial/rik.jpg",
  },
  {
    nama: "Wanda Sajili",
    profesi: "Pelanggan",
    komentar:
      "Sabun cuci piring Kilau Segar membersihkan dengan cepat dan efektif. Sangat membantu dalam mencuci peralatan masak yang berminyak. Rekomendasi terbaik untuk rumah tangga.",
    imgSrc: "/images/testimonial/wanda.jpg",
  },
];

// Function Component untuk Carousel
const MultipleItems = () => {
  // Pengaturan Carousel
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
          dots: false,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 450,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
    ],
  };

  return (
    <div className="bg-testimonial pt-40 pb-32 lg:py-32" id="testimonial-section">
      <div className="mx-auto max-w-7xl sm:py-4 lg:px-8">
        <div className="text-center">
          <h3 className="text-4xl sm:text-6xl font-bold text-black my-3">
            Lihat apa kata mereka.
          </h3>
          <h3 className="text-4xl sm:text-6xl font-bold text-black text-opacity-50 lg:mr-48 my-4">
            Lihat apa kata mereka.
          </h3>
          <h3 className="text-4xl sm:text-6xl font-bold text-black text-opacity-25 lg:-mr-32 my-4">
            Lihat apa kata mereka.
          </h3>
        </div>

        <Slider {...settings}>
          {dataTestimoni.map((item, i) => (
            <div key={i} className="relative">
              <div className="bg-white test-sha m-3 p-10 my-20 rounded-3xl">
                {/* Gambar testimonial berbentuk lingkaran */}
                <div className="flex justify-center mb-4">
                  <Image
                    src={item.imgSrc}
                    alt={item.nama}
                    width={71}
                    height={71}
                    className="rounded-full object-cover"
                  />
                </div>
                <h4 className="text-base font-medium text-testColor my-4">
                  {item.komentar}
                </h4>
                <hr style={{ color: "lightgrey" }} />
                <div className="flex justify-between">
                  <div>
                    <h3 className="text-base font-medium pt-4 pb-2">
                      {item.nama}
                    </h3>
                    <h3 className="text-xs font-medium pb-2 opacity-50">
                      {item.profesi}
                    </h3>
                  </div>
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <StarIcon key={i} width={20} className="star" />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default MultipleItems;