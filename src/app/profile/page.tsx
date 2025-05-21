'use client'

import { useState, useRef } from 'react'
import { FiCamera, FiLock, FiShield, FiMessageCircle, FiEdit2 } from 'react-icons/fi'
import BottomNav from '@/components/BottomNav'

interface Badge {
    id: string
    name: string
    icon: string
    description: string
}

export default function ProfilePage() {
    const [isPublic, setIsPublic] = useState(true)
    const [profileImage, setProfileImage] = useState('/images/default-avatar.jpg')
    const fileInputRef = useRef<HTMLInputElement>(null)
    const [bio, setBio] = useState('')
    const [badges] = useState<Badge[]>([
        {
            id: '1',
            name: 'Early Bird',
            icon: '🌅',
            description: 'Attended 5 morning events',
        },
        {
            id: '2',
            name: 'Art Enthusiast',
            icon: '🎨',
            description: 'Attended 10 art events',
        },
        // Add more badges here
    ])

    const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0]
        if (file) {
            const reader = new FileReader()
            reader.onloadend = () => {
                setProfileImage(reader.result as string)
            }
            reader.readAsDataURL(file)
        }
    }

    return (
        <div className="flex min-h-screen flex-col bg-gray-50">
            <header className="sticky top-0 z-10 bg-white px-4 py-3 shadow-sm">
                <div className="mx-auto max-w-md">
                    <h1 className="text-center text-2xl font-bold text-gray-900">Profile</h1>
                </div>
            </header>

            <main className="flex-1 px-4 pb-20 pt-6">
                <div className="mx-auto max-w-md space-y-6">
                    {/* Profile Photo */}
                    <div className="flex flex-col items-center">
                        <div className="relative h-28 w-28 sm:h-36 sm:w-36">
                            <img
                                src={profileImage}
                                alt="Profile"
                                className="h-full w-full rounded-full object-cover ring-2 ring-primary-500 ring-offset-2"
                            />
                            <input
                                type="file"
                                ref={fileInputRef}
                                onChange={handleImageUpload}
                                accept="image/*"
                                className="hidden"
                            />
                            <button
                                onClick={() => fileInputRef.current?.click()}
                                className="absolute bottom-0 right-0 rounded-full bg-primary-500 p-2 text-white shadow-lg transition-transform hover:scale-110"
                            >
                                <FiCamera className="h-5 w-5" />
                            </button>
                        </div>
                    </div>

                    {/* Bio */}
                    <div className="card relative">
                        <textarea
                            value={bio}
                            onChange={(e) => setBio(e.target.value)}
                            placeholder="Write something about yourself..."
                            className="min-h-[120px] w-full resize-none rounded-lg border-0 bg-transparent p-3 text-gray-900 focus:outline-none focus:ring-2 focus:ring-primary-500"
                            maxLength={200}
                        />
                        <div className="absolute bottom-3 right-3 text-sm text-gray-500">
                            {bio.length}/200
                        </div>
                    </div>

                    {/* Privacy Toggle */}
                    <div className="card flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                            <FiLock className="h-5 w-5 text-gray-600" />
                            <span className="text-gray-900">Public Profile</span>
                        </div>
                        <label className="relative inline-flex cursor-pointer items-center">
                            <input
                                type="checkbox"
                                checked={isPublic}
                                onChange={() => setIsPublic(!isPublic)}
                                className="peer sr-only"
                            />
                            <div className="peer h-6 w-11 rounded-full bg-gray-200 after:absolute after:left-[2px] after:top-[2px] after:h-5 after:w-5 after:rounded-full after:border after:border-gray-300 after:bg-white after:transition-all after:content-[''] peer-checked:bg-primary-500 peer-checked:after:translate-x-full peer-checked:after:border-white peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-primary-300"></div>
                        </label>
                    </div>

                    {/* Badges */}
                    <div className="card">
                        <h2 className="mb-4 text-center text-lg font-semibold text-gray-900">Badges</h2>
                        <div className="grid grid-cols-2 gap-4">
                            {badges.map(badge => (
                                <div
                                    key={badge.id}
                                    className="flex items-center space-x-3 rounded-lg bg-gray-50 p-3"
                                >
                                    <span className="text-2xl">{badge.icon}</span>
                                    <div>
                                        <h3 className="font-medium text-gray-900">{badge.name}</h3>
                                        <p className="text-sm text-gray-600">{badge.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Safety Settings */}
                    <div className="card space-y-4">
                        <h2 className="text-center text-lg font-semibold text-gray-900">Safety Settings</h2>

                        <button className="flex w-full items-center justify-between rounded-lg p-3 text-left transition-colors hover:bg-gray-50">
                            <div className="flex items-center space-x-3">
                                <FiMessageCircle className="h-5 w-5 text-gray-600" />
                                <span className="text-gray-900">Anonymous Comments</span>
                            </div>
                            <div className="text-sm text-gray-600">Off</div>
                        </button>

                        <button className="flex w-full items-center justify-between rounded-lg p-3 text-left transition-colors hover:bg-gray-50">
                            <div className="flex items-center space-x-3">
                                <FiShield className="h-5 w-5 text-gray-600" />
                                <span className="text-gray-900">Blocked Users</span>
                            </div>
                            <div className="text-sm text-gray-600">0</div>
                        </button>
                    </div>
                </div>
            </main>

            <BottomNav />
        </div>
    )
} 