import React from 'react';
import Sidebar from '../../../components/containers/usuario/sidebar';
import About from '../../../components/containers/about';

export default function AboutUsuario() {
    return (
        <div className="flex min-h-screen">
            <Sidebar />
            <div className="flex-1">
                <About />
            </div>
        </div>
    );
}
