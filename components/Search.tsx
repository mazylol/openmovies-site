'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';

import { BsArrowUpRight } from 'react-icons/bs';

export default function Search(props: any) {
    const [name, setName] = useState('');

    useEffect(() => {
        document.addEventListener('keydown', detectKeyDown, true);
    });

    const detectKeyDown = (e: any) => {
        if (e.key === '/') {
            e.preventDefault();
            document.querySelector('input')?.focus();
        } else if (e.key === 'Escape') {
            e.preventDefault();
            document.querySelector('input')?.blur();
        }
    };

    return (
        <div className="mx-16 justify-center pt-16">
            <input
                type="text"
                placeholder="Title..."
                className="h-12 w-full rounded-md border-2 px-2 focus:border-blue-500"
                onChange={(e) => setName(e.target.value)}
            />
            <ul className="mt-8 flex max-h-[80vh] w-full flex-col overflow-scroll rounded-md bg-white">
                {props.movies.map((title: any, key: number) => {
                    if (title.includes(name) && name !== '') {
                        return (
                            <li
                                key={key}
                                className="group mx-auto flex flex-row text-xl first-letter:uppercase"
                            >
                                <Link href={title}>{title}</Link>
                                <BsArrowUpRight className="translate-y-2 text-xs transition-all duration-100 group-hover:translate-y-1 group-hover:text-blue-500" />
                            </li>
                        );
                    }
                })}
            </ul>
        </div>
    );
}
