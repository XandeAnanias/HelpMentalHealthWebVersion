import React from 'react';
import Sidebar from '../../../components/containers/psicologo/sidebar';
import About from '../../../components/containers/about';

export default function AboutPsicologo() {
    return (
        <div className="flex min-h-screen">
            <Sidebar />
            <div className="flex-1">
            <About />
            </div>
        </div>
    );
}
