import Link from "next/link"

async function getTickets(){
    const res = await fetch("http://localhost:4000/tickets", {
        next: {
          revalidate: 0 // use 0 to opt out of using cache
        }
      })
    
    return res.json()
}


export default async function TicketList() {

    const tickets = await getTickets()
    tickets.map((t) => {
        console.log(t.id)
    })
    return (
        <>
            {tickets.map((t) => (
                <Link href={`/tickets/${t.id}`}>
                    <div key={t.id} className="card my-5">
                        <h3>{t.title}</h3>
                        <p>{t.body.slice(0, 200)}...</p>
                        <div className={`pill ${t.priority}`}>{t.priority} priority</div>
                    </div>
                </Link>
            ))}
            {tickets.length === 0 && (
                <p className="text-center">No Open Tickets</p>
            )}
        </>
    )
}
