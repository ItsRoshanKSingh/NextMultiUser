import { prisma } from "../../db/prisma"

export default async function Home() {

  const movies = await prisma.movie.findMany({ orderBy: { id: "desc" } })
  return (
    <div>
      {movies.map((movie) => (
        <li>{movie.name}</li>
      ))}
    </div>
  )
}
