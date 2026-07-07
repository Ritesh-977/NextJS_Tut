"use client"

import { useTheme } from '../components/theme-provider';
import { clientSideFunction } from '@/src/utils/client-utils';

export default function ClientRoutePage() {
    const theme = useTheme();
    const result = clientSideFunction();
    return (
        <>
            <h1 style={{ color: theme.colors.primary }}>
                Client router Page
            </h1>
            <h2 style={{ color: theme.colors.secondary }}>
                Client router Page
            </h2>
            <p>{result}</p>
        </>
    );
}