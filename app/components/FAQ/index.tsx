"use client"
import { Disclosure } from '@headlessui/react'
import { ChevronUpIcon } from '@heroicons/react/20/solid'

const FAQ = () => {
    return (
        <div id="faq-section" className='mx-auto max-w-7xl py-24 lg:px-8 bg-faqblue rounded-2xl my-16 faq-bg'>
            <h3 className='text-xl font-normal text-white text-center mb-6'>FAQ</h3>
            <h2 className='text-4xl lg:text-6xl font-semibold text-center text-white'> Pertanyaan yang sering <br /> diajukan.</h2>
            <div className="w-full px-4 pt-16">
                <div className="mx-auto w-full max-w-5xl rounded-2xl bg-white py-8 px-6 mb-5">
                    <Disclosure>
                        {({ open }) => (
                            <>
                                <Disclosure.Button className="flex w-full justify-between rounded-lg px-4 py-2 text-left text-2xl font-medium">
                                    <span>Bisakah Anda mendesain produk kami?</span>
                                    <ChevronUpIcon
                                        className={`${open ? 'rotate-180 transform' : ''
                                            } h-5 w-5 text-purple-500`}
                                    />
                                </Disclosure.Button>
                                <Disclosure.Panel className="px-4 pt-4 pb-2 text-base text-black font-normal opacity-50">
                                Tentu saja, kami tidak hanya menawarkan produk kami, <br /> 
                                tetapi juga menyediakan layanan desain untuk kebutuhan produk Anda. <br />  Kami melayani desain untuk berbagai kebutuhan seperti stiker, banner, spanduk, plastik, dan lain sebagainya. 
                                </Disclosure.Panel>
                            </>
                        )}
                    </Disclosure>
                </div>

                <div className="mx-auto w-full max-w-5xl rounded-2xl bg-white py-8 px-6 mb-5">
                    <Disclosure as="div" className="mt-2">
                        {({ open }) => (
                            <>
                                <Disclosure.Button className="flex w-full justify-between rounded-lg px-4 py-2 text-left text-2xl font-medium">
                                    <span>Apakah di sini menjual alat alat untuk sablon?</span>
                                    <ChevronUpIcon
                                        className={`${open ? 'rotate-180 transform' : ''
                                            } h-5 w-5 text-purple-500`}
                                    />
                                </Disclosure.Button>
                                <Disclosure.Panel className="px-4 pt-4 pb-2 text-base text-black font-normal opacity-50">
                                Tentu, kami di sini menyediakan berbagai alat dan perlengkapan untuk sablon, seperti screen sablon, cet sablon, dan berbagai perlengkapan lainnya yang dibutuhkan dalam proses sablon.  <br /> 
                                Kami menawarkan berbagai jenis alat yang dapat membantu Anda dalam proses sablon, mulai dari alat untuk persiapan, aplikasi tinta, hingga perawatan dan pemeliharaan. Dengan berbagai pilihan yang kami tawarkan, <br /> kami bertujuan untuk memenuhi berbagai kebutuhan sablon Anda dengan kualitas yang terbaik. Jika Anda memiliki pertanyaan lebih lanjut atau memerlukan bantuan dalam memilih produk yang tepat, jangan ragu untuk menghubungi kami.
                                </Disclosure.Panel>
                            </>
                        )}
                    </Disclosure>
                </div>

                <div className="mx-auto w-full max-w-5xl rounded-2xl bg-white py-8 px-6">
                    <Disclosure as="div" className="mt-2">
                        {({ open }) => (
                            <>
                                <Disclosure.Button className="flex w-full justify-between rounded-lg px-4 py-2 text-left text-2xl font-medium">
                                    <span>Di mana lokasi Anda?</span>
                                    <ChevronUpIcon
                                        className={`${open ? 'rotate-180 transform' : ''
                                            } h-5 w-5 text-purple-500`}
                                    />
                                </Disclosure.Button>
                                <Disclosure.Panel className="px-4 pt-4 pb-2 text-base text-black font-normal opacity-50">
                                Jl. Jatapa No. 1
                                 <br />  Sebelah Utara Masjid As-Syuhada
                                  <br /> - Cikampek Timur
                                </Disclosure.Panel>
                            </>
                        )}
                    </Disclosure>
                </div>

            </div>
        </div>
    )
}

export default FAQ;