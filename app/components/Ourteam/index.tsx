import Image from "next/image";


const index = () => {
    return (
        <div className='mx-auto max-w-7xl sm:py-4 lg:px-8 m-32'>
            <h2 className="text-4xl sm:text-65xl font-bold text-center">Tim kami percaya Anda layak <br /> mendapatkan hasil sablon terbaik.</h2>
            <h3 className="text-2xl font-medium text-center pt-10 opacity-50">Kami berkomitmen untuk memberikan kualitas percetakan <br /> yang unggul dan memuaskan.</h3>
            <div className='grid grid-cols-1 my-16'>
                <Image src="/images/team/teamimg.png" alt="gambar-percetakan" height={684} width={1296} />
            </div>
        </div>
    )
}


export default index;
