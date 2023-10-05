async function getTicket(id: number){
    const res = await fetch("http://localhost:4000/tickets/" + id, {
        next: {
          revalidate: 60 // use 0 to opt out of using cache
        }
      })
    
    return res.json()
}

export default async function TicketDetails({ params }: { params: { id: number } }) {
  const ticket = await getTicket(params.id)
  console.log(ticket)
    return (
        <main>
            <nav>
                <div>
                    <h2>Ticket Details</h2>
                    <p><small>Full ticket information</small></p>
                </div>
            </nav>
            <div className="card">
                <h3>{ticket.title}</h3>
                <small>Created by {ticket.user_email}</small>
                <p>{ticket.body}</p>
                <div className={`pill ${ticket.priority}`}>
                    {ticket.priority} priority
                </div>
            </div>
        </main>
    
  )
}
