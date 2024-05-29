import React from 'react';
import { HiOutlineMail, HiOutlinePhone, HiOutlineLocationMarker } from 'react-icons/hi';

function Contact() {
    return (
        <section id="contact" className="container mx-auto my-10 p-6">
            <h2 className="text-3xl font-bold mb-8 text-center">Get in Touch</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="p-6 bg-gradient-to-br from-blue-400 to-purple-600 rounded-lg flex flex-col items-center justify-center text-white">
                    <HiOutlineMail className="text-4xl mb-2" />
                    <h3 className="text-lg font-semibold mb-2">Email</h3>
                    <p className="text-base">example@example.com</p>
                </div>
                <div className="p-6 bg-gradient-to-br from-green-400 to-teal-600 rounded-lg flex flex-col items-center justify-center text-white">
                    <HiOutlinePhone className="text-4xl mb-2" />
                    <h3 className="text-lg font-semibold mb-2">Phone</h3>
                    <p className="text-base">+1234567890</p>
                </div>
                <div className="p-6 bg-gradient-to-br from-pink-400 to-red-600 rounded-lg flex flex-col items-center justify-center text-white">
                    <HiOutlineLocationMarker className="text-4xl mb-2" />
                    <h3 className="text-lg font-semibold mb-2">Address</h3>
                    <p className="text-base">123 Street Name, City, Country</p>
                </div>
            </div>
            <div className="flex justify-center mt-8">
                <a
                    href="#"
                    className="inline-block px-8 py-3 bg-yellow-500 text-white text-lg font-semibold rounded-md shadow-md hover:bg-yellow-600 transition duration-300"
                >
                    Say Hello
                </a>
            </div>
        </section>
    );
}

export default Contact;
