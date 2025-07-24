import React, { useEffect } from 'react';
import { I18nextProvider } from 'react-i18next';
import AppNavigation from '@/app/navigation';

import i18n from '@shared/lib/i18n';
import { initDatabase } from '@/entities/medicine/api/Database';

export default function App() {
    useEffect(() => {
        initDatabase();
    }, []);

    return (
        <I18nextProvider i18n={i18n}>
            <AppNavigation />
        </I18nextProvider>
    );
}
