'use client'
import eventsData from '@/data/eventsDummy.json';


const page = () => {
  console.log(eventsData)
  
  return (
    <>
      <div className="max-w-4xl mx-auto py-10">
        <h1 className="text-2xl font-bold mb-6">Events</h1>
        <input
          type="text"
          // value={search}
          // onChange={(e) => setSearch(e.target.value)}
          placeholder="Search events..."
          className="block w-full border border-gray-300 rounded-md shadow-sm mb-6 p-2"
        />
        <ul>
          {/* {filteredEvents.map(event => (
            <li key={event.id} className="mb-4 p-4 border border-gray-200 rounded-md">
              <Link href={`/events/${event.id}`}>
                <a className="text-lg font-semibold">{event.name}</a>
              </Link>
              <p>{event.description}</p>
              <p className="text-sm text-gray-500">Deadline: {event.deadline}</p>
            </li>
          ))} */}
        </ul>
      </div>
    </>
  )
}

export default page
