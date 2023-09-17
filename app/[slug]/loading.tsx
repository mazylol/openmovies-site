import { CgSpinnerTwoAlt } from 'react-icons/cg';

export default function Loading() {
    return (
        <main className="flex h-screen items-center justify-center">
            <CgSpinnerTwoAlt className="animate-spin text-6xl" />
        </main>
    );
}
