import Search from '@/components/Search';

async function getData() {
    const res = await fetch('https://openmovies.onrender.com/api/movie', { cache: 'no-store' });

    if (!res.ok) {
        throw new Error('Failed to fetch data');
    }

    return res.json();
}

export default async function Home() {
    const data = await getData();

    return (
        <main>
            <Search movies={data.movies} />
        </main>
    );
}
