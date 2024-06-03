'use client'
import { useEffect, useState } from 'react';
import eventsData from '@/data/eventsDummy.json';
import Link from 'next/link';

const Page = () => {

  interface Events {
    id: number,
    name: string,
    description: string,
    deadline: string
  }

  const [filteredEvents, setFilteredEvents] = useState<Events[]>(eventsData);
  const [search, setSearch] = useState<string>('');
  const [isColumnFormat, setIsColumnFormat] = useState<boolean>(true);

  useEffect(() => {
    const filtered = eventsData.filter(event => 
      event.name.toLocaleLowerCase().includes(search.toLocaleLowerCase()) ||
      event.description.toLocaleLowerCase().includes(search.toLocaleLowerCase())
    )
    setFilteredEvents(filtered)
  }, [search])

  return (
    <>
      <div className="container mx-auto py-10">
        <h1 className="text-4xl font-extrabold mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-primary via-secondary to-accent dark:from-secondary dark:via-primary dark:to-accent">
          Upcoming Events
        </h1>
        <div className="flex justify-center mb-8">
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search events..."
            className="block w-full md:w-1/2 border border-gray-300 bg-white text-gray-900 rounded-full shadow-lg p-3 text-lg focus:outline-none focus:ring-2 focus:ring-primary transition duration-300 dark:bg-gray-900 dark:text-white dark:border-gray-700"
          />
        </div>
        <div className="flex justify-end mb-8">
          <button
            onClick={() => setIsColumnFormat(true)}
            className={`mr-4 px-4 py-2 rounded-full font-semibold ${isColumnFormat ? 'bg-primary text-white' : 'bg-gray-200 text-gray-800 dark:bg-gray-700 dark:text-gray-300'}`}
          >
            Column Format
          </button>
          <button
            onClick={() => setIsColumnFormat(false)}
            className={`px-4 py-2 rounded-full font-semibold ${!isColumnFormat ? 'bg-primary text-white' : 'bg-gray-200 text-gray-800 dark:bg-gray-700 dark:text-gray-300'}`}
          >
            Row Format
          </button>
        </div>
        <ul className={`grid ${isColumnFormat ? 'sm:grid-cols-2 lg:grid-cols-3 gap-10' : 'grid-cols-1'} transition-all duration-300`}>
          {filteredEvents.map(event => (
            <li key={event.id} className="bg-white dark:bg-gray-800 text-gray-900 dark:text-white rounded-xl shadow-lg transform hover:scale-105 transition duration-500 mb-4">
              <Link href={`/events/${event.id}`} className='block p-6'>
                <h2 className='text-2xl font-bold text-primary hover:text-secondary transition-colors duration-300 mb-2 dark:text-secondary dark:hover:text-primary'>
                  {event.name}
                </h2>
                <p className="text-gray-700 dark:text-gray-300 mb-4">{event.description}</p>
                <p className="text-sm text-gray-500 dark:text-gray-400">Deadline: {event.deadline}</p>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default Page;
