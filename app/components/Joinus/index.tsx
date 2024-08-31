"use client"
import React, { useState } from 'react';

const Join = () => {
    const [message, setMessage] = useState("");

    const handleJoinClick = () => {
        if (message) {
            const encodedMessage = encodeURIComponent(message);
            const url = `https://wa.me/6281385415232?text=${encodedMessage}`;
            window.location.href = url; // Mengarahkan pengguna ke URL WhatsApp
        } else {
            alert('Silakan masukkan pesan Anda.');
        }
    };

    return (
        <div className="bg-joinus my-32">
            <div className='mx-auto max-w-2xl lg:max-w-7xl sm:py-4 lg:px-8'>
                <div className="text-center">
                    <h3 className="text-blue text-lg font-normal tracking-widest">Ayo..Bergabung Bersama Kami...!!!</h3>
                    <h2 className="text-4xl sm:text-6xl font-bold my-6 leading-10"> Dalam membangun <br /> bisnis.</h2>
                    <p className="text-lightblack text-base font-normal">kami mengadakan berbagai Kursus dalam Dunia  <br /> Precetakan dan Sablon</p>
                </div>

                <div className="mx-auto max-w-4xl pt-5">
                    <div className="sm:flex items-center mx-5 p-5 sm:p-0 rounded-xl justify-between bg-lightgrey sm:rounded-full">
                        <div>
                            <input
                                type="text"
                                className="my-4 py-4 sm:pl-6 lg:text-xl text-black sm:rounded-full bg-lightgrey pl-1 focus:outline-none"
                                placeholder="Nama Kamu"
                                autoComplete="off"
                            />
                        </div>
                        <div>
                            <input
                                type="text"
                                className="my-4 py-4 sm:pl-6 lg:text-xl text-black sm:border-l border-linegrey bg-lightgrey focus:outline-none"
                                placeholder="Pesan Kamu"
                                autoComplete="off"
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                            />
                        </div>
                        <div className="sm:mr-3">
                            <button
                                type="button"
                                className="joinButton w-full sm:w-0 text-xl text-white font-semibold text-center rounded-xl sm:rounded-full bg-blue hover:bg-btnblue"
                                onClick={handleJoinClick}
                            >
                                Kirim
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Join;
