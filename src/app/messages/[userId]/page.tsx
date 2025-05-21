'use client'

import { useState } from 'react'
import { FiSend, FiChevronLeft } from 'react-icons/fi'
import Link from 'next/link'

interface Message {
    id: string
    senderId: string
    text: string
    timestamp: Date
}

interface MessagePageProps {
    params: {
        userId: string
    }
}

export default function MessagePage({ params }: MessagePageProps) {
    const [messages] = useState<Message[]>([
        {
            id: '1',
            senderId: 'other',
            text: 'Hey! Looking forward to the art walk tomorrow!',
            timestamp: new Date('2024-03-14T15:30:00'),
        },
        {
            id: '2',
            senderId: 'me',
            text: "Me too! It's my first time attending one of these events.",
            timestamp: new Date('2024-03-14T15:31:00'),
        },
        // Add more sample messages here
    ])

    const otherUser = {
        id: params.userId,
        name: 'Sarah',
        avatar: '/images/default-avatar.jpg',
        event: 'Downtown Art Walk',
    }

    return (
        <div className="flex h-screen flex-col bg-gray-50">
            {/* Header */}
            <header className="sticky top-0 z-10 bg-white p-4 shadow-sm">
                <div className="flex items-center space-x-4">
                    <Link
                        href="/messages"
                        className="rounded-full p-1 hover:bg-gray-100"
                    >
                        <FiChevronLeft className="h-6 w-6" />
                    </Link>
                    <img
                        src={otherUser.avatar}
                        alt={otherUser.name}
                        className="h-10 w-10 rounded-full"
                    />
                    <div>
                        <h1 className="font-semibold text-gray-900">{otherUser.name}</h1>
                        <p className="text-sm text-gray-500">
                            Matched at: {otherUser.event}
                        </p>
                    </div>
                </div>
            </header>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4">
                <div className="space-y-4">
                    {messages.map(message => (
                        <div
                            key={message.id}
                            className={`flex ${message.senderId === 'me' ? 'justify-end' : 'justify-start'
                                }`}
                        >
                            <div
                                className={`max-w-[75%] rounded-2xl px-4 py-2 ${message.senderId === 'me'
                                    ? 'bg-primary-500 text-white'
                                    : 'bg-white text-gray-900'
                                    }`}
                            >
                                <p>{message.text}</p>
                                <p className="mt-1 text-right text-xs opacity-70">
                                    {message.timestamp.toLocaleTimeString([], {
                                        hour: '2-digit',
                                        minute: '2-digit',
                                    })}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Message Input */}
            <div className="border-t bg-white p-4">
                <form className="flex space-x-2">
                    <input
                        type="text"
                        placeholder="Type a message..."
                        className="flex-1 rounded-full border border-gray-300 px-4 py-2 focus:border-primary-500 focus:outline-none"
                    />
                    <button
                        type="submit"
                        className="rounded-full bg-primary-500 p-2 text-white hover:bg-primary-600"
                    >
                        <FiSend className="h-6 w-6" />
                    </button>
                </form>
            </div>
        </div>
    )
} 