import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export const metadata = {
  title: 'AutoVolo Project | Mohammed Mallahi',
  description: 'Detailed information about the AutoVolo web app project by Mohammed Mallahi. Built with Next.js and Tailwind CSS.'
};

export default function AutoVoloProject() {
  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white py-12 px-4">
      <div className="max-w-3xl mx-auto">
        <Link href="/" className="inline-flex items-center gap-2 text-blue-400 hover:underline mb-8">
          <ArrowLeft className="w-4 h-4" />
          Back to Home
        </Link>
        <h1 className="text-4xl md:text-5xl font-bold mb-6">AutoVolo</h1>
        <div className="w-full h-64 md:h-96 rounded-xl overflow-hidden mb-8 bg-gradient-to-br from-blue-500/20 to-purple-500/20 flex items-center justify-center">
          <Image src="/images/projects/autovolo.png" alt="AutoVolo project screenshot" width={800} height={400} className="object-cover w-full h-full" />
        </div>
        <p className="text-lg text-gray-300 mb-6">
          AutoVolo is a web app solution for car agencies to sell vehicles. The app displays rich technical details about each car in a UI/UX optimized and friendly way, and features a simple, clean scheduling process for test drives or appointments.
        </p>
        <div className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">Tech Stack</h2>
          <ul className="list-disc list-inside text-gray-300">
            <li>Next.js</li>
            <li>Tailwind CSS</li>
            <li>React</li>
          </ul>
        </div>
        <div className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">Key Features</h2>
          <ul className="list-disc list-inside text-gray-300">
            <li>Detailed car information with technical specs</li>
            <li>Modern, user-friendly UI/UX</li>
            <li>Simple and clean scheduling for test drives</li>
            <li>Responsive design for all devices</li>
          </ul>
        </div>
        {/* Case Study Section */}
        <div className="mb-6">
          <h2 className="text-2xl font-semibold mb-4 text-blue-400">Case Study</h2>
          <p className="text-gray-300 mb-2"><b>Business Problem:</b> The agency needed a modern, digital solution to showcase their car inventory and provide customers with comprehensive technical details, as well as a seamless way to schedule test drives.</p>
          <p className="text-gray-300 mb-2"><b>Solution:</b> We designed and developed AutoVolo, a web app built with Next.js and Tailwind CSS, focusing on a clean, intuitive UI/UX. The app allows users to browse cars, view detailed specifications, and easily book appointments.</p>
          <p className="text-gray-300 mb-2"><b>Process:</b> The project involved close collaboration with the agency to understand their workflow, wireframing and prototyping the user journey, and iterative development with regular feedback.</p>
          <p className="text-gray-300"><b>Impact:</b> The new platform increased customer engagement, reduced manual scheduling, and improved the agency's professional image, resulting in more test drive bookings and higher customer satisfaction.</p>
        </div>
      </div>
    </div>
  );
} 