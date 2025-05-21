'use client'

import { useState } from 'react'
import { FiMapPin, FiCalendar, FiUsers, FiDollarSign } from 'react-icons/fi'
import BottomNav from '@/components/BottomNav'

interface Event {
    id: string
    title: string
    date: string
    time: string
    ageRequirement: string
    price: number
    distance: number
    attendees: number
    image: string
    description: string
    address: string
}

export default function ExplorePage() {
    const [events] = useState<Event[]>([
        {
            id: '1',
            title: 'Downtown Art Walk',
            date: '2024-03-15',
            time: '18:00',
            ageRequirement: '18+',
            price: 0,
            distance: 1.2,
            attendees: 45,
            image: '/images/default-avatar.jpg',
            description: 'Join us for a guided tour of downtown art galleries and street art.',
            address: '123 Main St, Downtown',
        },
        // Add more sample events here
    ])

    return (
        <div className="flex min-h-screen flex-col bg-gray-50">
            <header className="sticky top-0 z-10 bg-white px-4 py-3 shadow-sm">
                <div className="mx-auto max-w-md">
                    <h1 className="text-center text-2xl font-bold text-gray-900">Explore Events</h1>
                </div>
            </header>

            <main className="flex-1 px-4 pb-20 pt-6">
                <div className="mx-auto max-w-md space-y-4">
                    {events.map(event => (
                        <EventCard key={event.id} event={event} />
                    ))}
                </div>
            </main>

            <BottomNav />
        </div>
    )
}

function EventCard({ event }: { event: Event }) {
    return (
        <div className="card overflow-hidden">
            <div className="relative h-48 w-full">
                <img
                    src={event.image}
                    alt={event.title}
                    className="h-full w-full object-cover"
                />
                <div className="absolute right-3 top-3 rounded-full bg-white/90 px-3 py-1 text-sm font-medium text-gray-700 shadow-sm backdrop-blur-sm">
                    {event.ageRequirement}
                </div>
            </div>

            <div className="p-4">
                <h3 className="text-xl font-semibold text-gray-900">{event.title}</h3>

                <div className="mt-3 space-y-2">
                    <div className="flex items-center text-gray-600">
                        <FiCalendar className="mr-2 h-5 w-5" />
                        <span>{new Date(event.date).toLocaleDateString()} at {event.time}</span>
                    </div>

                    <div className="flex items-center text-gray-600">
                        <FiMapPin className="mr-2 h-5 w-5" />
                        <span>{event.distance} miles away</span>
                    </div>

                    <div className="flex items-center text-gray-600">
                        <FiUsers className="mr-2 h-5 w-5" />
                        <span>{event.attendees} attending</span>
                    </div>

                    <div className="flex items-center text-gray-600">
                        <FiDollarSign className="mr-2 h-5 w-5" />
                        <span>{event.price === 0 ? 'Free' : `$${event.price}`}</span>
                    </div>
                </div>

                <div className="mt-4 flex space-x-3">
                    <button className="btn-primary flex-1 py-3">RSVP</button>
                    <button className="btn-secondary flex-1 py-3">Details</button>
                </div>
            </div>
        </div>
    )
} 