import React from 'react';
import Sidebar from '../../../components/containers/usuario/sidebar';
import WriteMensagem from '../../../components/containers/write';

export default function WriteMsgUsuario() {
    return (
        <div className="flex min-h-screen">
            <Sidebar />
            <div className="flex-1">
            <WriteMensagem />
            </div>
        </div>
    );
}
