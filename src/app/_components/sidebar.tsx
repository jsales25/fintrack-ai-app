import Image from 'next/image';
import { Inter } from 'next/font/google';

import dashboardIcon from '@/src/assets/dashboard-icon.png';
import transactionsIcon from '@/src/assets/transactions-icon.png';
import logoutIcon from '@/src/assets/logout-icon.png';
import logo from '@/src/assets/logo.png';

const inter = Inter({
    subsets: ['latin'],
    weight: ['400', '500', '700'],
});

export const Sidebar = () => {
    return (
        <aside
            className={`${inter.className} flex w-64 flex-col border-r border-[#1e293b] bg-[#0f111a] text-[#f1f5f9]`}
        >
            <div className="flex items-center gap-3 px-6 py-6">
                <div className="bg-[#9333ea] rounded-xl py-4 px-2.5">
                    <Image src={logo} alt="FinTrack" priority />
                </div>
                <p className="text-xl font-bold leading-5 tracking-[-0.025em]">
                    FinTrack
                </p>
            </div>

            <nav className="flex flex-1 flex-col gap-2 px-4 py-4">
                <a
                    href="#"
                    className="flex w-full items-center gap-3 rounded-xl bg-[#9333ea] px-4 py-3 text-white"
                >
                    <Image src={dashboardIcon} alt="icone dashboard" />
                    <span className="text-base font-medium leading-normal">
                        Dashboard
                    </span>
                </a>
                <a
                    href="#"
                    className="flex w-full items-center gap-3 rounded-xl px-4 py-3 text-[#94a3b8]"
                >
                    <Image src={transactionsIcon} alt="icone de transação" />
                    <span className="text-base font-medium leading-normal">
                        Transações
                    </span>
                </a>
            </nav>
            <div className="border-t border-[#1e293b] px-6 py-6">
                <a
                    href="#"
                    className="flex items-center gap-3 rounded-xl px-4 py-3 text-[#94a3b8]"
                >
                    <Image src={logoutIcon} alt="icone de logout" />
                    <span className="text-base font-medium leading-normal text-center">
                        Sair
                    </span>
                </a>
            </div>
        </aside>
    );
};
