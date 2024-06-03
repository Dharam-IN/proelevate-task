'use client'
import Image from 'next/image';
import { useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import eventData from '@/data/eventsDummy.json'
import Link from 'next/link';

export default function NewEvent() {
  const [eventName, setEventName] = useState<string>('');
  const [eventDescription, setEventDescription] = useState<string>('');
  const [submissionDeadline, setSubmissionDeadline] = useState<string>('');
  const [events, setEvents] = useState(eventData); // State to manage events data

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submit logic
    if (!eventName || !eventDescription || !submissionDeadline) {
      return toast.error("Please Fill All Fields")
    }
    
    const newEvent = {
      id: events.length + 1, // Generate unique ID (assuming IDs are sequential)
      name: eventName,
      description: eventDescription,
      deadline: submissionDeadline
    };

    // Update events data with the new event
    setEvents(prevEvents => [...prevEvents, newEvent]);

    // Reset form fields
    setEventName('');
    setEventDescription('');
    setSubmissionDeadline('');

    toast.success("Event added successfully!");
  }

  return (
    <>
      <div className="grid md:grid-cols-2 min-h-[100vh] items-center dark:bg-gray-900">
        <div className="flex justify-center items-center h-full bg-secondary dark:bg-primary">
          <div>
            <div className='text-white dark:text-white p-10'>
              <h3 className='text-4xl font-bold'>Welcome to <span className='text-primary dark:text-secondary underline'>ProElevate!</span></h3>
              <p className='mt-3 text-[16px] dark:text-gray-300'>Your personalized account awaits, ready to elevate your journey with exclusive benefits.</p>
            </div>
            <Image src={'/images/FormDesign.png'} alt='Form Design Img' width={500} height={500} className='md:block hidden' />
          </div>
        </div>
        <div className="mx-auto md:w-[80%] w-[90%] md:mt-0 my-10">
          <h1 className="text-3xl font-bold mb-6 text-center dark:text-white">Create New Event!</h1>
          <form onSubmit={handleSubmit} className="space-y-7">
            <div>
              <label className="block text-[15px] font-medium dark:text-white">Event Name</label>
              <input
                type="text"
                value={eventName}
                onChange={(e) => setEventName(e.target.value)}
                placeholder='Please Enter Event Name...'
                className="mt-1 block w-full border border-gray-300 px-5 rounded-full h-[40px] shadow-sm focus:ring focus:ring-opacity-50 dark:bg-gray-800 dark:text-white"
              />
            </div>
            <div>
              <label className="block text-[15px] font-medium dark:text-white">Event Description</label>
              <textarea
                value={eventDescription}
                onChange={(e) => setEventDescription(e.target.value)}
                placeholder='Please Enter Event Description...'
                className="mt-1 block w-full border border-gray-300 px-5 rounded-[20px] h-[140px] pt-2 shadow-sm focus:ring focus:ring-opacity-50 dark:bg-gray-800 dark:text-white"
              ></textarea>
            </div>
            <div>
              <label className="block text-[15px] font-medium dark:text-white">Submission Deadline</label>
              <input
                type="date"
                value={submissionDeadline}
                onChange={(e) => setSubmissionDeadline(e.target.value)}
                className="mt-1 block w-full border border-gray-300 px-5 rounded-full h-[40px] shadow-sm focus:ring focus:ring-opacity-50 dark:bg-gray-800 dark:text-white"
              />
            </div>
            <div className='flex gap-4'>
              <button type="submit" className="py-2 px-4 rounded-full shadow-md bg-blue-500 text-white hover:bg-blue-600 dark:bg-gray-700 dark:text-white dark:hover:bg-gray-600">
                Submit
              </button>
              <Link href={'/events'} className='py-2 px-4 rounded-full shadow-md bg-blue-500 text-white hover:bg-blue-600 dark:bg-gray-700 dark:text-white dark:hover:bg-gray-600'> View Events</Link>
            </div>
          </form>
        </div>
      </div>
      <Toaster />
    </>
  );
}
