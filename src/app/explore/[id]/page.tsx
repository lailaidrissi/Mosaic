import { FiMapPin, FiCalendar, FiUsers, FiDollarSign, FiChevronLeft, FiChevronRight } from 'react-icons/fi'
import Link from 'next/link'

interface EventDetailProps {
    params: {
        id: string
    }
}

export default function EventDetailPage({ params }: EventDetailProps) {
    // In a real app, fetch event details based on params.id
    const event = {
        id: params.id,
        title: 'Downtown Art Walk',
        date: '2024-03-15',
        time: '18:00',
        ageRequirement: '18+',
        price: 0,
        distance: 1.2,
        attendees: 45,
        images: ['/images/default-avatar.jpg'],
        description: 'Join us for a guided tour of downtown art galleries and street art. Our experienced guides will take you through the vibrant art scene, sharing stories and insights about local artists and their work. Perfect for art enthusiasts and anyone looking to discover the creative side of our city.',
        address: '123 Main St, Downtown',
        coordinates: { lat: 40.7128, lng: -74.0060 },
        attendeeAvatars: Array(6).fill('/images/default-avatar.jpg'),
    }

    return (
        <div className="min-h-screen bg-white">
            {/* Image Carousel */}
            <div className="relative h-64 md:h-96">
                <img
                    src={event.images[0]}
                    alt={event.title}
                    className="h-full w-full object-cover"
                />
                <div className="absolute left-4 right-4 top-4 flex justify-between">
                    <Link
                        href="/explore"
                        className="rounded-full bg-white/80 p-2 backdrop-blur-sm"
                    >
                        <FiChevronLeft className="h-6 w-6" />
                    </Link>
                    <div className="rounded-full bg-white/80 px-3 py-1 text-sm font-medium backdrop-blur-sm">
                        {event.ageRequirement}
                    </div>
                </div>
                {event.images.length > 1 && (
                    <div className="absolute bottom-4 left-4 right-4 flex justify-between">
                        <button className="rounded-full bg-white/80 p-2 backdrop-blur-sm">
                            <FiChevronLeft className="h-6 w-6" />
                        </button>
                        <button className="rounded-full bg-white/80 p-2 backdrop-blur-sm">
                            <FiChevronRight className="h-6 w-6" />
                        </button>
                    </div>
                )}
            </div>

            {/* Event Details */}
            <div className="p-4">
                <h1 className="text-2xl font-bold text-gray-900">{event.title}</h1>

                <div className="mt-4 space-y-3">
                    <div className="flex items-center text-gray-600">
                        <FiCalendar className="mr-2" />
                        <span>
                            {new Date(event.date).toLocaleDateString()} at {event.time}
                        </span>
                    </div>

                    <div className="flex items-center text-gray-600">
                        <FiMapPin className="mr-2" />
                        <span>{event.address}</span>
                    </div>

                    <div className="flex items-center text-gray-600">
                        <FiUsers className="mr-2" />
                        <span>{event.attendees} attending</span>
                    </div>

                    <div className="flex items-center text-gray-600">
                        <FiDollarSign className="mr-2" />
                        <span>{event.price === 0 ? 'Free' : `$${event.price}`}</span>
                    </div>
                </div>

                {/* Description */}
                <div className="mt-6">
                    <h2 className="text-lg font-semibold text-gray-900">About</h2>
                    <p className="mt-2 text-gray-600">{event.description}</p>
                </div>

                {/* Map */}
                <div className="mt-6">
                    <h2 className="mb-2 text-lg font-semibold text-gray-900">Location</h2>
                    <div className="h-48 rounded-lg bg-gray-100">
                        {/* Add Google Maps component here */}
                        <div className="flex h-full items-center justify-center text-gray-500">
                            Map loading...
                        </div>
                    </div>
                </div>

                {/* Attendees */}
                <div className="mt-6">
                    <h2 className="mb-2 text-lg font-semibold text-gray-900">Attendees</h2>
                    <div className="flex -space-x-2">
                        {event.attendeeAvatars.map((avatar, index) => (
                            <img
                                key={index}
                                src={avatar}
                                alt={`Attendee ${index + 1}`}
                                className="h-8 w-8 rounded-full border-2 border-white"
                            />
                        ))}
                        {event.attendees > event.attendeeAvatars.length && (
                            <div className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-white bg-gray-100 text-xs text-gray-600">
                                +{event.attendees - event.attendeeAvatars.length}
                            </div>
                        )}
                    </div>
                </div>

                {/* RSVP Button */}
                <div className="sticky bottom-4 mt-8">
                    <button className="btn-primary w-full">RSVP Now</button>
                </div>
            </div>
        </div>
    )
} 