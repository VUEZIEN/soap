const Beliefs = () => {
    return (
        <div className='mx-auto max-w-2xl lg:max-w-7xl sm:py-4 lg:px-8 rounded-3xl'>
            <div className='grid grid-cols-1 lg:grid-cols-2 my-16 mx-5 gap-5'>

                {/* COLUMN-1 */}

                <div className="bg-darkblue bg-beliefs pt-12 px-10 sm:px-24 pb-52 md:pb-70 rounded-3xl">
                    <h2 className="text-lg font-normal text-white tracking-widest mb-5 text-center sm:text-start">Lebih Mudah</h2>
                    <h3 className="text-4xl sm:text-65xl font-bold text-white leading-snug mb-5 text-center sm:text-start">Tanpa Repot  <span className="text-grey"> Proses Cuci Piring Lebih Cepat dengan Kualitas Terbaik.</span></h3>
                    <h5 className="text-offwhite pt-2 mb-5 text-center sm:text-start">Nikmati cuci piring yang cepat dan mudah, dengan KILAU SEGAR yang mengangkat lemak membandel.</h5>
                    <div className="text-center sm:text-start">
                        <button className="text-xl py-5 px-14 mt-5 font-semibold text-white rounded-full bg-blue border border-blue hover:bg-hoblue">Mulai Sekarang</button>
                    </div>
                </div>

                {/* COLUMN-2 */}

                <div className="bg-build pt-12 px-10 sm:px-24 pb-52 md:pb-70 rounded-3xl">
                    <h2 className="text-lg font-normal text-blue tracking-widest mb-5 text-center sm:text-start">Lebih Cepat</h2>
                    <h3 className="text-4xl sm:text-65xl font-bold text-black leading-snug mb-5 text-center sm:text-start"><span className="text-blue">Tanpa Hambatan </span> Bersih Seketika, Wangi Segar Tahan Lama.</h3>
                    <h5 className="bluish pt-2 mb-5 text-center sm:text-start">KILAU SEGAR membersihkan tanpa hambatan, menjaga piring bersih dan dapur wangi segar.</h5>
                    <div className="text-center sm:text-start">
                        <button className="text-xl py-5 px-14 mt-5 font-semibold text-white rounded-full bg-blue border border-blue hover:bg-hoblue">Lebih Lanjut</button>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Beliefs;
