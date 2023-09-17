async function getData(title: string): Promise<any> {
    const res = await fetch(
        `https://openmovies.onrender.com/api/movie/${title}`
    );

    if (!res.ok) {
        throw new Error('Falied to fetch data');
    }

    return res.json();
}

export default async function Page({ params }: { params: { slug: string } }) {
    if (params.slug == "peen") return;

    const data = await getData(params.slug);

    return (
        <main>
            <p>{data.cast[0].role}</p>
        </main>
    );
}
