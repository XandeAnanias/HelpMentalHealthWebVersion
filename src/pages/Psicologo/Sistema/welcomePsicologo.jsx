import React from 'react';
import Sidebar from '../../../components/containers/psicologo/sidebar';
import WelcomeContainer from '../../../components/containers/psicologo/welcomeContainer';

export default function WelcomePsicologo() {
    return (
        <div className="flex min-h-screen">
            <Sidebar />
            <div className="flex-1">
                <WelcomeContainer />
            </div>
        </div>
    );
}
