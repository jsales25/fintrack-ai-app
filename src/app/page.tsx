import { Sidebar } from './_components/sidebar';

export default function Home() {
    return (
        <div className="flex min-h-screen">
            <Sidebar />
            <main className="flex-1 p-8">
                <h1 className="text-3xl font-bold text-white">
                    Bem-vindo ao FinTrack
                </h1>
                <p className="mt-4 text-slate-300">
                    Aqui você verá seu painel e as transações.
                </p>
            </main>
        </div>
    );
}
