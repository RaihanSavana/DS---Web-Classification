import React, { useState } from "react";
import { Link, Head } from "@inertiajs/react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import {
    Card,
    CardFooter,
    Image,
    Button,
    Modal,
    ModalContent,
    ModalHeader,
    ModalBody,
    ModalFooter,
    useDisclosure,
} from "@nextui-org/react";

export default function CropLabel({ crops }) {
    const [openModalIndex, setOpenModalIndex] = useState(null);

    const openModal = (index) => {
        setOpenModalIndex(index);
    };

    const closeModal = () => {
        setOpenModalIndex(null);
    };

    return (
        <>
            <Head title="Welcome" />
            <Navbar />
            <div className="text-center mb-4 mt-20">
                <h5 className="font-bold text-3xl sm:text-5xl leading-snug mb-6">
                    List of Crops
                </h5>
                <p>List tanaman-tanaman</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 px-20">
                {crops.map((crop, index) => (
                    <Card
                        key={index}
                        isFooterBlurred
                        radius="lg"
                        className="border-none"
                    >
                        <Image
                            alt={`Crop ${index + 1}`}
                            className="object-cover rounded-t-lg rounded-bl-none rounded-br-none"
                            height={200}
                            src={crop.image}
                            width="100%"
                        />
                        <CardFooter className="justify-between before:bg-white/10 border-white/20 border-1 overflow-hidden py-3  before:rounded-xl rounded-lg bottom-1 w-full shadow-small z-10">
                            <p className="text-small text-semibold text-black text-left">
                                {crop.crop}
                            </p>
                            <Button
                                className="button1 bg-transparent rounded-3xl border border-white hover:border-transparent rounded transition-colors text-sm"
                                onPress={() => openModal(index)} // Pass index to openModal function
                            >
                                Description
                            </Button>
                            <Modal
                                backdrop="blur"
                                isOpen={openModalIndex === index} // Check if the current modal's index matches the openModalIndex
                                onOpenChange={closeModal} // Close modal when backdrop is clicked
                            >
                                <ModalContent>
                                    <ModalHeader className="flex flex-col gap-1">
                                        {crop.crop}
                                    </ModalHeader>
                                    <ModalBody>
                                        <p>{crop.description}</p>
                                    </ModalBody>
                                    <ModalFooter>
                                        <Button
                                            color="danger"
                                            variant="light"
                                            onPress={closeModal}
                                        >
                                            Close
                                        </Button>
                                    </ModalFooter>
                                </ModalContent>
                            </Modal>
                        </CardFooter>
                    </Card>
                ))}
            </div>
            <Footer />
        </>
    );
}
