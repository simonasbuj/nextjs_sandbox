import Link from "next/link";
import NavBar from "./components/NavBar";

export default function MoviesLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <NavBar />
      <div>{children}</div>
    </>

  )
}
