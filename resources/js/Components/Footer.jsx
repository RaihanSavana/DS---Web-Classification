import React from "react";

const ContactSection = () => {
    return (
        <section id="contact" className="px-20 ">
            <div
                className="bg-center bg-cover"
                style={{
                    backgroundImage:
                        "url(assets/img/illustrations/footer-bg.png)",
                }}
            >
                {/* Background holder */}
            </div>
            <div className="container">
                <div className="flex flex-wrap justify-between pt-32 "></div>
                <hr className="text-gray-300 " />
                <div className="flex flex-wrap justify-center py-5">
                    <div className="w-full sm:w-2/3 md:w-1/2 text-center md:text-left">
                        <div className="flex items-center">
                            <img
                                src="img/logo.png"
                                alt="Logo"
                                className="mr-2 h-8  "
                            />
                            <h1 className="font-bold text-xl text-green-500">
                                Green
                            </h1>
                            <h1 className="font-bold text-xl text-black">
                                Guru
                            </h1>
                        </div>
                    </div>
                    <div className="w-full sm:w-2/3 md:w-1/2">
                        <p className="text-sm text-black text-center md:text-right">
                            &copy; GreenGuru 2024
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactSection;
