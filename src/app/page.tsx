import Link from 'next/link';

export default function Home() {
  return (
    <div className="max-w-4xl mx-auto py-10">
      <h1 className="text-3xl font-bold mb-6 text-primary">Event Management</h1>
      <div className="space-x-4">
        <Link href="/new-event" className='bg-blue-500 text-white py-2 px-4 rounded-md shadow-md hover:bg-blue-600'>
            Create New Event
        </Link>
        <Link href="/events" className='bg-green-500 text-white py-2 px-4 rounded-md shadow-md hover:bg-green-600'>
            View Events
        </Link>
      </div>
    </div>
  );
}
