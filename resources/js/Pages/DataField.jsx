import { useState } from 'react';
import { Link, Head } from "@inertiajs/react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import { Tab, Tabs, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

export default function DataField({}) {
    const [selectedTab, setSelectedTab] = useState(0);

    const handleTabSelect = (index) => {
        setSelectedTab(index);
    };

    return (
        <>
            <Head title="Welcome" />
            <Navbar />
            <div className="container mx-auto mt-20 flex">
                <div className="flex flex-col mr-4">
                    {['Nitrogen', 'Phosphorous', 'Potassium', 'Temperature', 'Humidity', 'PH', 'Rainfall'].map((item, index) => (
                        <div
                            key={index}
                            onClick={() => handleTabSelect(index)}
                            className={`cursor-pointer p-2 rounded-md border border-gray-300 mb-2 ${
                                selectedTab === index ? "bg-gray-200" : ""
                            }`}
                        >
                            <div className="text-center">{item}</div>
                        </div>
                    ))}
                </div>
                <div className="flex-grow">
                    <Tabs
                        className="mt-4"
                        selectedIndex={selectedTab}
                        onSelect={handleTabSelect}
                    ><div className='ml-2'>
                        <TabPanel>
                            <div className={`tab-content ${selectedTab === 0 ? 'active' : ''}`}>
                                <div className='font-semibold text-2xl mb-2 '><h2 >Nitrogen</h2></div>
                                <p>Test 123</p>
                            </div>
                        </TabPanel>
                        <TabPanel>
                            <div className={`tab-content ${selectedTab === 1 ? 'active' : ''}`}>
                            <div className='font-semibold text-2xl mb-2 '><h2>Phosphorous</h2></div>
                                <p>Test 123</p>
                            </div>
                        </TabPanel>
                        <TabPanel>
                            <div className={`tab-content ${selectedTab === 2 ? 'active' : ''}`}>
                            <div className='font-semibold text-2xl mb-2 '><h2 >Potassium</h2></div>
                                <p>Test 123</p>
                            </div>
                        </TabPanel>
                        <TabPanel>
                            <div className={`tab-content ${selectedTab === 3 ? 'active' : ''}`} >
                            <div className='font-semibold text-2xl mb-2 '><h2 >Temperature</h2></div>
                                <p>Test 123</p>
                            </div>
                        </TabPanel>
                        <TabPanel>
                            <div className={`tab-content ${selectedTab === 4 ? 'active' : ''}`}>
                            <div className='font-semibold text-2xl mb-2 '><h2 >Humidity</h2></div>
                                <p>Test 123</p>
                            </div>
                        </TabPanel>
                        <TabPanel>
                            <div className={`tab-content ${selectedTab === 5 ? 'active' : ''}`}>
                            <div className='font-semibold text-2xl mb-2 '><h2 >PH</h2></div>
                                <p>Test 123</p>
                            </div>
                        </TabPanel>
                        <TabPanel>
                            <div className={`tab-content ${selectedTab === 6 ? 'active' : ''}`}>
                            <div className='font-semibold text-2xl mb-2 '><h2>Rainfall</h2></div>
                                <p>Test 123</p>
                            </div>
                        </TabPanel>
                        </div >
                    </Tabs>
                </div>
            </div>
            <Footer />
        </>
    );
}
