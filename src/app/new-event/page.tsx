'use client'
import Image from 'next/image';
import { useState } from 'react';
import toast,{ Toaster } from 'react-hot-toast';

export default function NewEvent() {
  const [eventName, setEventName] = useState<string>('');
  const [eventDescription, setEventDescription] = useState<string>('');
  const [submissionDeadline, setSubmissionDeadline] = useState<string>('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submit logic yaha aayega
    if(!eventName || !eventDescription || !submissionDeadline){
      return toast.error("Please Fill All Fields")
    }
    console.log({ eventName, eventDescription, submissionDeadline });
  }

  return (
    <>
      <div className="grid md:grid-cols-2 min-h-[100vh] items-center">
        <div className="flex justify-center items-center h-full bg-secondary">
          <div>
            <div className='text-white p-10'>
              <h3 className='text-4xl font-bold'>Welcome to <span className='text-primary underline'>ProElevate!</span></h3>
              <p className='mt-3 text-[16px]'>Your personalized account awaits, ready to elevate your journey with exclusive benefits.</p>
            </div>
            <Image src={'/images/FormDesign.png'} alt='Form Design Img' width={500} height={500} className='md:block hidden'/>
          </div>
        </div>
        <div className="mx-auto md:w-[80%] w-[90%] md:mt-0 my-10">
          <h1 className="text-3xl font-bold mb-6 text-center">Create New Event!</h1>
          <form onSubmit={handleSubmit} className="space-y-7">
            <div>
              <label className="block text-[15px] font-medium">Event Name</label>
              <input
                type="text"
                value={eventName}
                onChange={(e) => setEventName(e.target.value)}
                placeholder='Please Enter Event Name...'
                className="mt-1 block w-full border border-gray-300 px-5 rounded-full h-[40px] shadow-sm focus:ring focus:ring-opacity-50"
              />
            </div>
            <div>
              <label className="block text-[15px] font-medium">Event Description</label>
              <textarea
                value={eventDescription}
                onChange={(e) => setEventDescription(e.target.value)}
                placeholder='Please Enter Event Description...'
                className="mt-1 block w-full border border-gray-300 px-5 rounded-[20px] h-[140px] pt-2 shadow-sm focus:ring focus:ring-opacity-50"
              ></textarea>
            </div>
            <div>
              <label className="block text-[15px] font-medium">Submission Deadline</label>
              <input
                type="date"
                value={submissionDeadline}
                onChange={(e) => setSubmissionDeadline(e.target.value)}
                className="mt-1 block w-full border border-gray-300 px-5 rounded-full h-[40px] shadow-sm focus:ring focus:ring-opacity-50"
              />
            </div>
            <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded-full shadow-md hover:bg-blue-600">
              Submit
            </button>
          </form>
        </div>
      </div>
      <Toaster/>
    </>
  );
}
