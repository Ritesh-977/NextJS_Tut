"use client";

import { useEffect } from "react";

export default function ErrorPage({
    error,
    reset,
}: {
    error: Error & { digest?: string };
    reset: () => void;
}) {
    useEffect(() => {
        console.error(error);
    }, [error]);

    return (
        <div className="flex flex-col items-center justify-center min-h-[70vh] px-4 text-center">
            <div className="space-y-4">
                <h2 className="text-3xl font-bold text-red-900">Something went wrong!</h2>
                <p className="text-gray-600 max-w-md mx-auto">
                    We encountered an unexpected error. You can try rendering this segment again.
                </p>
                <button
                    onClick={() => reset()}
                    className="px-6 py-2 mt-4 text-white bg-blue-600 rounded-md hover:bg-blue-700 transition-colors"
                >
                    Try again
                </button>
            </div>
        </div>
    );
}