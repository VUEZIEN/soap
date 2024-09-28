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
            heading: "KILAU SEGAR 450ml",
            price: 10000,
            user: 'Per botol',
            button: "Beli Sekarang",
            profiles: 'Lembut di Tangan',
            posts: 'Aroma Jeruk Nipis',
            templates: "Kemasan Praktis",
            view: "Membersihkan dengan Efektif",
            support: 'Dukungan Pelanggan 24/7',
            category: 'monthly'
        },
        {
            heading: "Paket Grosir KILAU SEGAR",
            price: 100000,
            user: '10 botol per paket',
            button: "Pesan Sekarang",
            profiles: 'Harga Spesial Grosir',
            posts: 'Aroma Jeruk Nipis',
            templates: "Kemasan Praktis",
            view: "Pembersihan Maksimal",
            support: 'Dukungan Pelanggan 24/7',
            category: 'yearly'
        },
        {
            heading: "KILAU SEGAR - Isi Ulang",
            price: 8500,
            user: 'Per refill pouch 450ml',
            button: "Beli Sekarang",
            profiles: 'Eco-friendly',
            posts: 'Mengurangi Sampah Plastik',
            templates: "Aroma Jeruk Nipis",
            view: "Efektif untuk Peralatan Dapur",
            support: 'Dukungan Pelanggan 24/7',
            category: 'monthly'
        }
    ];

    const filteredData = services.filter(items => items.category === selectedCategory);

    return (
        <div id="services-section">
            <div className='mx-auto max-w-7xl sm:py-20 lg:px-8 my-16'>
                <h3 className='text-center text-4xl sm:text-65xl font-black'>
                    Kelola Semua Produk Pembersih <br /> dari Satu Tempat.
                </h3>

                <div className='md:flex md:justify-around mt-20'>
                    <div className='flex gap-5 justify-center md:justify-start'>
                        <Image src="/images/manage/right.svg" alt="ikon-kanan" width={21} height={14} />
                        <h4 className='text-lg font-semibold'>Teruji</h4>
                    </div>
                    <div className='flex gap-5 justify-center md:justify-start'>
                        <Image src="/images/manage/right.svg" alt="ikon-kanan" width={21} height={14} />
                        <h4 className='text-lg font-semibold'>Aman</h4>
                    </div>
                    <div className='flex gap-5 justify-center md:justify-start'>
                        <Image src="/images/manage/right.svg" alt="ikon-kanan" width={21} height={14} />
                        <h4 className='text-lg font-semibold'>Bersih Efektif</h4>
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
                        <h3 className='text-sm font-medium ml-5'>Paket Grosir</h3>
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
