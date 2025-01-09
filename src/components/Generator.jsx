import React, { useState } from 'react';
import Sidebar from './BookGenerator/Sidebar';
import BookGenerator from './BookGenerator/BookGenerator';

const Generator = () => {
    const [bookDetails, setBookDetails] = useState(null);

    const handleSidebarGenerate = (details) => {
        console.log('Received book details:', details);
        setBookDetails(details);
    };

    return (
        <div className="relative mt-[100px]">
            <div className="fixed top-0 left-0 w-full h-full -z-10 bg-[radial-gradient(125%_125%_at_50%_10%,_#000_40%,_#63e_100%)]"></div>
            <div className="flex w-full max-w-7xl mx-auto">
                <Sidebar onGenerate={handleSidebarGenerate} />
                <BookGenerator bookDetails={bookDetails} />
            </div>
        </div>
    );
};

export default Generator;
