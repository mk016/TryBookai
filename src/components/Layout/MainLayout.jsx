import React from 'react';

const MainLayout = ({ children }) => {
    return (
        <div className="min-h-screen bg-[#0A0A0A]">
            <div className="absolute inset-0">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/30 to-purple-500/30 backdrop-blur-3xl" />
                <div className="absolute inset-0 bg-[url('/grid.svg')] bg-repeat [mask-image:linear-gradient(to_bottom,white,transparent)]" />
            </div>
            <div className="relative">
                {children}
            </div>
        </div>
    );
};

export default MainLayout; 