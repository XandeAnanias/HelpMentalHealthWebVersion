import React from 'react';
import Sidebar from '../../../components/containers/usuario/sidebar.jsx';
import Doacao from '../../../components/containers/doacao.jsx';

export default function DonationUsuario() {
    return (
        <div className="flex min-h-screen">
            <Sidebar />
            <div className="flex-1">
            <Doacao />
            </div>
        </div>
    );
}
