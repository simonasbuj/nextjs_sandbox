'use client'

import Link from 'next/link';
import { usePathname, useSelectedLayoutSegment } from 'next/navigation';
import { use } from 'react';
import clsx from "clsx"


async function getMovies() {
    const res = await fetch("http://localhost:4001/movies/")

    return res.json()
}

export default async function MoviesListLayout({ children }: { children: React.ReactNode }) {
    
    const segment = useSelectedLayoutSegment()
    const movies = await getMovies()

    return (
        <div className="flex justify-center mt-4">
            <div className="w-2/3 border-black border-2 rounded-md p-2">
                <div className="flex">
                    <div className='w-1/6'>
                        {movies.map((movie: {id: number, Title: string}) => (
                            <div key={movie.id} className={clsx('cursor-pointer hover:text-black', movie.id === Number(segment) && `text-black font-bold`)}>
                                <Link href={`/movies/list/${movie.id}`}>
                                    {movie.Title}
                                </Link>
                            </div>
                        ))}
                    </div>
                
                    <div className='w-5/6'>
                        {children}
                    </div>

                </div>
                
            </div>
        </div>
  )
}
