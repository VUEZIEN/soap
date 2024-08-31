"use client"
import { useState } from 'react';
import { Switch } from '@headlessui/react';
import Image from 'next/image';

const Manage = () => {
    const [enabled, setEnabled] = useState(false);
    const [selectedCategory, setSelectedCategory] = useState('monthly');

    const toggleEnabled = () => {
        setEnabled(!enabled);
        setSelectedCategory(enabled ? 'monthly' : 'yearly');
    }

    const services = [
        {
            heading: "Stempel Otomatis",
            price: 50000,
            user: 'per layanan, per pesanan',
            button: "Pesan Sekarang",
            profiles: 'Undangan, Stempel, Nota, Kop Surat',
            posts: 'Buku Yasin, Memo, Stiker, Faktur, Surat Jalan',
            templates: "Desain Undangan dan Stempel",
            view: "Layanan Percetakan",
            support: 'Dukungan Pelanggan 24/7',
            category: 'yearly'
        },
        {
            heading: "Baner",
            price: 35000,
            user: 'Per Meter',
            button: "Pesan Sekarang",
            profiles: 'Spanduk, Baner, Plang, Plastik, Plakat',
            posts: 'Vandel, Shopping Bag, Nama Dada, Cutting Stiker',
            templates: "Desain Spanduk dan Baner",
            view: "Layanan Percetakan",
            support: 'Dukungan Pelanggan 24/7',
            category: 'yearly'
        },
        {
            heading: "Plat Nomer Motor",
            price: 50000,
            user: 'Ukuran standar',
            button: "Pesan Sekarang",
            profiles: 'Neon Box, Map, Brosur Separasi, ID Card, Piagam',
            posts: 'Company Profile, Kartu Nama, Plat Nomer',
            templates: "Desain Neon Box dan Plakat",
            view: "Layanan Percetakan",
            support: 'Dukungan Pelanggan VIP 24/7',
            category: 'yearly'
        },
        {
            heading: "Plat Nomer Motor + Tempat",
            price: 80000,
            user: 'Ukuran standar + Tempat',
            button: "Pesan Sekarang",
            profiles: 'Neon Box, Map, Brosur Separasi, ID Card, Piagam',
            posts: 'Company Profile, Kartu Nama, Plat Nomer',
            templates: "Desain Neon Box dan Plakat",
            view: "Layanan Percetakan",
            support: 'Dukungan Pelanggan VIP 24/7',
            category: 'yearly'
        },
        {
            heading: "Plat Nomer Motor (Baut Tanam)",
            price: 120000,
            user: 'Ukuran standar dengan Baut Tanam',
            button: "Pesan Sekarang",
            profiles: 'Neon Box, Map, Brosur Separasi, ID Card, Piagam',
            posts: 'Company Profile, Kartu Nama, Plat Nomer',
            templates: "Desain Neon Box dan Plakat",
            view: "Layanan Percetakan",
            support: 'Dukungan Pelanggan VIP 24/7',
            category: 'yearly'
        },
        {
            heading: "Plat Nomer Mobil",
            price: 100000,
            user: 'Ukuran standar',
            button: "Pesan Sekarang",
            profiles: 'Neon Box, Map, Brosur Separasi, ID Card, Piagam',
            posts: 'Company Profile, Kartu Nama, Plat Mobil',
            templates: "Desain Neon Box dan Plakat",
            view: "Layanan Percetakan",
            support: 'Dukungan Pelanggan VIP 24/7',
            category: 'yearly'
        },
        {
            heading: "Tinta Isi Ulang Stempel Fles 5cc",
            price: 15000,
            user: 'Ukuran 5cc',
            button: "Pesan Sekarang",
            profiles: 'Tinta Stempel, Isi Ulang',
            posts: 'Tinta Isi Ulang Stempel',
            templates: "Desain Stempel",
            view: "Layanan Percetakan",
            support: 'Dukungan Pelanggan 24/7',
            category: 'monthly'
        },
        {
            heading: "Buku Yasin",
            price: 15000,
            user: 'Minimal 100 buku',
            button: "Pesan Sekarang",
            profiles: 'Buku Yasin',
            posts: 'Buku Yasin Percetakan',
            templates: "Desain Buku Yasin",
            view: "Layanan Percetakan",
            support: 'Dukungan Pelanggan VIP 24/7',
            category: 'monthly'
        },
        {
            heading: "Tinta 1 Botol 100cc",
            price: 100000,
            user: 'Ukuran 100cc',
            button: "Pesan Sekarang",
            profiles: 'Tinta Stempel, Isi Ulang',
            posts: 'Tinta Isi Ulang Stempel',
            templates: "Desain Stempel",
            view: "Layanan Percetakan",
            support: 'Dukungan Pelanggan VIP 24/7',
            category: 'monthly'
        },
    ];

    const filteredData = services.filter(items => items.category === selectedCategory);

    return (
        <div id="services-section">
            <div className='mx-auto max-w-7xl sm:py-20 lg:px-8 my-16'>
                <h3 className='text-center text-4xl sm:text-65xl font-black'>
                    Kelola Semua Layanan Percetakan <br /> dan Sablon Anda dari Satu Tempat.
                </h3>

                <div className='md:flex md:justify-around mt-20'>
                    <div className='flex gap-5 justify-center md:justify-start'>
                        <Image src="/images/manage/right.svg" alt="ikon-kanan" width={21} height={14} />
                        <h4 className='text-lg font-semibold'>Terpercaya</h4>
                    </div>
                    <div className='flex gap-5 justify-center md:justify-start'>
                        <Image src="/images/manage/right.svg" alt="ikon-kanan" width={21} height={14} />
                        <h4 className='text-lg font-semibold'>Cepat</h4>
                    </div>
                    <div className='flex gap-5 justify-center md:justify-start'>
                        <Image src="/images/manage/right.svg" alt="ikon-kanan" width={21} height={14} />
                        <h4 className='text-lg font-semibold'>Layanan Tak Terbatas</h4>
                    </div>
                </div>

                <div className='mt-6 relative'>
                    <div className='dance-text mb-5'>Daftar Harga Produk Kami</div>
                    <Image src="/images/manage/toggle.svg" alt="gambar-toggle" width={24} height={24} className="toggleImage" />
                    <div className='flex justify-center'>
                        <h3 className='text-sm font-medium mr-5'>Produk Kami</h3>
                        <Switch
                            checked={enabled}
                            onChange={toggleEnabled}
                            className={`${enabled ? 'bg-darkpurple' : 'bg-darkpurple'
                                } relative inline-flex h-6 w-11 items-center rounded-full`}
                        >
                            <span className="sr-only text-black">Aktifkan pemberitahuan</span>
                            <span className={`${enabled ? 'translate-x-6' : 'translate-x-1'
                                } inline-block h-4 w-4 transform rounded-full bg-white transition`}
                            />
                        </Switch>
                        <h3 className='text-sm font-medium ml-5'>Sedang Populer</h3>
                    </div>
                </div>

                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-16 mx-5 gap-14 manage'>
                    {filteredData.map((items, i) => (
                        <div className='manageTabs text-center p-10' key={i}>
                            <h4 className='text-2xl font-bold mb-3'>{items.heading}</h4>
                            <h2 className='text-5xl sm:text-65xl font-extrabold mb-3'>Rp {items.price.toLocaleString('id-ID')}</h2>
                            <p className='text-sm font-medium text-darkgrey mb-6'>{items.user}</p>
                            <button
                                onClick={() => window.location.href = "https://wa.me/6281385415232"}
                                className='text-sm font-bold text-blue bg-transparent hover:bg-blue hover:text-white border-2 border-blue rounded-full py-4 px-12 mb-6'
                            >
                                {items.button}
                            </button>
                            <hr style={{ color: "darkgrey", width: "50%", margin: "auto" }} />
                            <h3 className='text-sm font-medium text-darkgrey mb-3 mt-6'>{items.profiles}</h3>
                            <h3 className='text-sm font-medium text-darkgrey mb-3'>{items.posts}</h3>
                            <h3 className='text-sm font-medium text-darkgrey mb-3'>{items.templates}</h3>
                            <h3 className='text-sm font-medium text-darkgrey mb-3'>{items.view}</h3>
                            <h3 className='text-sm font-medium text-darkgrey'>{items.support}</h3>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Manage;
