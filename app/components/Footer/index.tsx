import Image from "next/image";
import Link from "next/link";

// DATA TAHAPAN TENGAH
interface JenisProduk {
    id: number;
    bagian: string;
    tautan: string[];
}

const produk: JenisProduk[] = [
    {
        id: 1,
        bagian: "Menu",
        tautan: ['Beranda', 'Populer', 'Tentang', 'Kontak'],
    },
    {
        id: 2,
        bagian: "Kategori",
        tautan: ['Desain', 'Mockup', 'Lihat Semua', 'Masuk']
    },
    {
        id: 3,
        bagian: "Halaman",
        tautan: ['404', 'Instruksi', 'Lisensi']
    },
    {
        id: 4,
        bagian: "Lainnya",
        tautan: ['Panduan Gaya', 'Catatan Perubahan']
    }
]

const footer = () => {
    return (
        <div className="bg-black -mt-40" id="first-section">
            <div className="mx-auto max-w-2xl pt-48 pb-16 px-4 sm:px-6 lg:max-w-7xl lg:px-8">
                <div className="mt-24 grid grid-cols-1 gap-y-10 gap-x-16 sm:grid-cols-2 lg:grid-cols-12 xl:gap-x-8">

                    {/* KOLAM-1 */}

                    <div className='col-span-4'>
                        <h3 className='text-white text-4xl font-semibold leading-9 mb-4 lg:mb-20'>KILAU SEGAR</h3>
                        <div className='flex gap-4'>
                            <div className='footer-icons'>
                                <Link href="https://www.facebook.com/mardi.joni.5"><Image src={'/images/footer/vec.svg'} alt="facebook" width={15} height={20} /></Link>
                            </div>
                            <div className='footer-icons'>
                                <Link href="https://www.instagram.com/zizzz.dul_/?next=%2F"><Image src={'/images/footer/instagram.svg'} alt="instagram" width={20} height={20} /></Link>
                            </div>
                        </div>
                    </div>

                    {/* KOLAM-2/3 */}

                    {produk.map((item) => (
                        <div key={item.id} className="group relative col-span-2">
                            <p className="text-white text-xl font-extrabold mb-9">{item.bagian}</p>
                            <ul>
                                {item.tautan.map((tautan: string, index: number) => (
                                    <li key={index} className='mb-5'>
                                        <Link href="/" className="text-white text-lg font-normal mb-6 space-links">{tautan}</Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}

                </div>
            </div>

            {/* Hak Cipta */}

            <div className="mx-auto max-w-2xl lg:max-w-7xl">
                <div className="pt-5 pb-5 px-4 sm:px-6 lg:px-4 border-solid border-t border-footer">
                    <div className="mt-4 grid grid-cols-1 gap-y-10 gap-x-16 sm:grid-cols-2 xl:gap-x-8">
                        <div>
                            <h3 className='text-center md:text-start text-offwhite text-lg'>@2024 - Hak Cipta oleh <Link href="https://wa.me/6281385415232" target="_blank">KILAU SEGAR</Link></h3>
                        </div>
                        <div className="flex justify-center md:justify-end">
                            <Link href="/">
                                <h3 className="text-offwhite pr-6">Kebijakan Privasi</h3>
                            </Link>
                            <Link href="/">
                                <h3 className="text-offwhite pl-6 border-solid border-l border-footer">Syarat & Ketentuan</h3>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default footer;
