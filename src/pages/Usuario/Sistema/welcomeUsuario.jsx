import React from 'react';
import Sidebar from '../../../components/containers/usuario/sidebar';
import WelcomeContainer from '../../../components/containers/usuario/welcomeContainer';

export default function WelcomeUsuario() {
    return (
        <div className="flex min-h-screen">
            <Sidebar />
            <div className="flex-1">
                <WelcomeContainer />
            </div>
        </div>
    );
}
