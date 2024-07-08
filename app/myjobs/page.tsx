'use client';

import { useState } from 'react';
import { BriefcaseIcon } from '@heroicons/react/outline'; // BriefcaseIcon for job listings

const MyJobsPage = () => {
  const [expandedJob, setExpandedJob] = useState<number | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const jobs = [
    {
      id: 1,
      title: 'Software Engineer (Frontend)',
      content: 'Looking for an experienced frontend developer proficient in React and TypeScript.',
      imageUrl: 'https://via.placeholder.com/150', // Replace with your image URL
      redirectUrl: '/job/software-engineer-frontend', // Replace with your redirect URL
      status: 'Approved',
    },
    {
      id: 2,
      title: 'UI/UX Designer',
      content: 'Seeking a creative UI/UX Designer with a strong portfolio in web and mobile app design.',
      imageUrl: 'https://via.placeholder.com/150',
      redirectUrl: '/job/ui-ux-designer',
      status: 'Denied',
    },
    {
      id: 3,
      title: 'Backend Developer',
      content: 'Join our backend team to build robust and scalable server-side applications.',
      imageUrl: 'https://via.placeholder.com/150',
      redirectUrl: '/job/backend-developer',
      status: 'Approved',
    },
    {
      id: 4,
      title: 'Data Scientist',
      content: 'Looking for a Data Scientist with expertise in machine learning and statistical analysis.',
      imageUrl: 'https://via.placeholder.com/150',
      redirectUrl: '/job/data-scientist',
      status: 'Denied',
    },
    {
      id: 5,
      title: 'Marketing Manager',
      content: 'Seeking a Marketing Manager with experience in digital marketing and brand management.',
      imageUrl: 'https://via.placeholder.com/150',
      redirectUrl: '/job/marketing-manager',
      status: 'Approved',
    },
  ];

  const toggleExpand = (index: number) => {
    setExpandedJob(index);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setExpandedJob(null);
  };

  return (
    <section className="py-16 md:py-20 lg:py-28 bg-gray-50 dark:bg-gray-800 flex flex-col items-center">
      <div className="container max-w-4xl">
        <div className="flex items-center mb-8">
          <BriefcaseIcon className="h-8 w-8 text-gray-600 dark:text-gray-400 mr-2" />
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">My Jobs</h2>
        </div>
        <div className="space-y-4 w-full">
          {jobs.map((job, index) => (
            <div
              key={job.id}
              className={`bg-white dark:bg-gray-700 shadow-lg rounded-lg p-4 flex items-center space-x-4 cursor-pointer ${
                expandedJob === index ? 'border-2 border-blue-500' : ''
              }`}
              onClick={() => toggleExpand(index)}
            >
              <BriefcaseIcon className="h-6 w-6 text-gray-600 dark:text-gray-400" />
              <div>
                <h3 className="text-lg font-bold text-gray-900 dark:text-white">{job.title}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Status: <span className={job.status === 'Approved' ? 'text-green-500' : 'text-red-500'}>{job.status}</span>
                </p>
                {expandedJob === index && (
                  <p className="mt-1 text-gray-600 dark:text-gray-400">{job.content}</p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {isModalOpen && expandedJob !== null && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg max-w-lg w-full">
            <img
              src={jobs[expandedJob].imageUrl}
              alt={jobs[expandedJob].title}
              className="w-full h-64 object-cover rounded-md"
            />
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-4">
              {jobs[expandedJob].title}
            </h2>
            <p className="mt-2 text-gray-600 dark:text-gray-400">
              {jobs[expandedJob].content}
            </p>
            <div className="mt-6 flex justify-end space-x-4">
              <button
                onClick={closeModal}
                className="px-4 py-2 bg-blue-500 text-white rounded-md"
              >
                Close
              </button>
              <a
                href={jobs[expandedJob].redirectUrl}
                className="px-4 py-2 bg-green-500 text-white rounded-md"
              >
                View Details
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default MyJobsPage;
