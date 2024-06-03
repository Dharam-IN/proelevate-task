import Link from 'next/link';

export default function Home() {
  return (
    <div className="flex justify-center items-center flex-col min-h-[100vh] mx-auto py-10">
      <div className="flex items-center justify-between mb-6">
        <div className='text-center'>
          <h1 className="text-4xl font-bold text-primary mb-2">Welcome to ProElevate</h1>
          <p className="text-lg text-gray-600 dark:text-gray-300">Where every moment becomes an event.</p>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Link href="/new-event" className='bg-blue-500 text-white py-4 px-6 rounded-md shadow-md hover:bg-blue-600 block'>
            Create New Event
        </Link>
        <Link href="/events" className='bg-green-500 text-white py-4 px-6 rounded-md shadow-md hover:bg-green-600 block' >
            View Events
        </Link>
      </div>
    </div>
  );
}
