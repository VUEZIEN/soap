import Image from "next/image";

const Dedicated = () => {
    return (
        <div className="relative">

            {/* <Image src="/images/dedicated/bp.jpeg" height={272} width={686} alt="spiral-design" className="absolute left-0 hidden lg:block -z-10" /> */}

            <div className='mx-auto max-w-7xl px-4 my-40 sm:py-20 lg:px-8'>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-16'> {/* Menambahkan gap untuk jarak antar kolom */}

                    {/* COLUMN-1 */}
                    <div className="flex justify-center md:justify-start">
                        <Image 
                            src="/images/dedicated/bp.jpeg" 
                            alt="gambar-pendiri" 
                            width={416} 
                            height={530} 
                            className="rounded-lg" /* Menambahkan border-radius pada gambar */
                        />
                    </div>

                    {/* COLUMN-2 */}
                    <div className="relative flex flex-col items-center md:items-start">
                        <Image 
                            src="/images/dedicated/comma.svg" 
                            alt="gambar-komma" 
                            width={200} 
                            height={106} 
                            className="absolute comma-pos hidden lg:block" 
                        />
                        <h2 className="text-4xl lg:text-6xl font-bold sm:leading-tight mt-5 text-center lg:text-start">
                            DEDIKASI UNTUK MEMENUHI KEBUTUHAN DESAIN
                        </h2>
                        <p className="font-medium text-lightblack text-2xl mt-5 text-center lg:text-start">
                            Kami berkomitmen untuk menyediakan solusi desain yang sesuai dengan kebutuhan Anda, dengan pelayanan dan kualitas terbaik.
                        </p>
                        <p className="text-2xl font-semibold mt-12 lg:ml-0 text-center lg:text-start">
                            Mardi Joni, Pemilik Percetakan
                        </p>
                    </div>

                </div>
            </div>

        </div>
    )
}

export default Dedicated;
