'use client'
import eventsData from '@/data/eventsDummy.json';
import { useParams } from 'next/navigation';


interface Event {
  id: number;
  name: string;
  description: string;
  deadline: string;
}

export default function EventDetail() {
  const router = useParams() as Record<string, string | string[]>;
  console.log(router);
  
  if (!router) {
    return (
      <>
        Event Not found
      </>
    );
  }

  const id = Array.isArray(router.id) ? router.id[0] : router.id;
  const event = eventsData.find(event => event.id === Number(id));
  console.log(event);


  if(!event){
    return(
      <>
        Event Not found
      </>
    )
  }

  return (
    <div className="min-h-screen flex items-center justify-center px-6 bg-gray-100 dark:bg-slate-900">
      <div className="bg-white rounded-lg shadow-md p-8 max-w-lg w-full">
        {event ? (
          <>
            <h1 className="text-3xl font-bold mb-4">{event.name}</h1>
            <p className="text-gray-700 mb-6">{event.description}</p>
            <p className="text-sm text-gray-500">Submission Deadline: {event.deadline}</p>
          </>
        ) : (
          <p className="text-red-500">Event not found</p>
        )}
      </div>
    </div>
  );
}