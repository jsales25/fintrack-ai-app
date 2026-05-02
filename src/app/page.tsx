import { Sidebar } from './_components/sidebar';
import { Header } from './_components/header';

export default function Home() {
    return (
        <div className="flex min-h-screen bg-[#0f111a]">
            <Sidebar />
            <div className="flex flex-1 flex-col">
                <Header userName="João da Silva" date={new Date()} />
                <main className="flex-1 p-8"></main>
            </div>
        </div>
    );
}
