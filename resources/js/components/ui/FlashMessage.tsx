import { useState } from 'react';

type Props = {
    flash: {
        success?: string;
        error?: string;
    };
};

type MessageType = 'success' | 'error';

const messageStyles = {
    success: {
        border: 'border-green-500',
        bg: 'bg-green-100',
        text: 'text-green-800',
        iconColor: 'text-green-600',
        iconPath: "M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
    },
    error: {
        border: 'border-red-500',
        bg: 'bg-red-100',
        text: 'text-red-800',
        iconColor: 'text-red-600',
        iconPath: "M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
    }
};

export default function FlashMessage({ flash }: Props) {
    const [isVisible, setIsVisible] = useState(true);

    const handleClick = () => setIsVisible(false);

    const renderMessage = (type: MessageType, message: string) => {
        if (!isVisible) return

        const styles = messageStyles[type];

        setTimeout(() => {
            setIsVisible(false);
        }, 5000);

        return (
            <div className="fixed bottom-5 left-[50%] translate-x-[-50%] z-50 flex items-end justify-evenly mb-10">
                <div
                    className={`rounded-md border-2 ${styles.border} ${styles.bg} p-6 shadow-2xl cursor-pointer`}
                    onClick={handleClick}
                >
                    <div className="flex">
                        <div className="flex-shrink-0">
                            <svg className={`h-6 w-6 ${styles.iconColor}`} viewBox="0 0 20 20" fill="currentColor">
                                <path
                                    fillRule="evenodd"
                                    d={styles.iconPath}
                                    clipRule="evenodd"
                                />
                            </svg>
                        </div>
                        <div className="ml-3">
                            <p className={`text-base font-bold ${styles.text}`}>{message}</p>
                        </div>
                    </div>
                </div>
            </div>
        );
    };

    if (!isVisible) return null;

    return (
        <>
            {flash.success && renderMessage('success', flash.success)}
            {flash.error && renderMessage('error', flash.error)}
        </>
    );
}
