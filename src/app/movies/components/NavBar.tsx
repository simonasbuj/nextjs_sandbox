'use client'

import NavLink from "./NavLink";

export default function NavBar() {

  return (
    <div className="text-center">
        <ul className="flex justify-center space-x-4">
            <NavLink href="/movies/home">Home</NavLink>
            <NavLink href="/movies/list">Movies</NavLink>
        </ul>
    </div>
  )
}
