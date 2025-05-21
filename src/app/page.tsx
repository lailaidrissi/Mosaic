'use client'

import { Player } from '@lottiefiles/react-lottie-player'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'

export default function Home() {
    return (
        <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-primary-500 via-primary-600 to-secondary-500">
            <div className="w-full max-w-md">
                <SplashScreen />
            </div>
        </div>
    )
}

function SplashScreen() {
    const router = useRouter()
    const [showQuiz, setShowQuiz] = useState(false)

    useEffect(() => {
        // Show quiz after animation completes (3 seconds)
        const timer = setTimeout(() => {
            setShowQuiz(true)
        }, 3000)

        return () => clearTimeout(timer)
    }, [])

    if (!showQuiz) {
        return (
            <div className="animate-fade-in px-8 text-center">
                <div className="mx-auto max-w-[250px]">
                    <Player
                        autoplay
                        loop={false}
                        src="/animations/mosaic-logo.json"
                        style={{ width: '100%', height: '100%' }}
                    />
                </div>
                <h1 className="mt-6 text-4xl font-bold text-white">Mosaic</h1>
                <p className="mt-3 text-lg text-white/90">Connect Through Events</p>
            </div>
        )
    }

    return <OnboardingQuiz />
}

function OnboardingQuiz() {
    const router = useRouter()
    const [step, setStep] = useState(0)
    const [preferences, setPreferences] = useState({
        timeOfDay: [] as string[],
        interests: [] as string[],
        ageRange: '',
        eventSize: '',
        travelDistance: '',
    })

    const handleTimeSelection = (time: string) => {
        setPreferences(prev => ({
            ...prev,
            timeOfDay: prev.timeOfDay.includes(time)
                ? prev.timeOfDay.filter(t => t !== time)
                : [...prev.timeOfDay, time]
        }))
    }

    const handleInterestToggle = (interest: string) => {
        setPreferences(prev => ({
            ...prev,
            interests: prev.interests.includes(interest)
                ? prev.interests.filter(i => i !== interest)
                : [...prev.interests, interest]
        }))
    }

    const handleComplete = () => {
        // Save preferences and redirect to explore page
        localStorage.setItem('userPreferences', JSON.stringify(preferences))
        router.push('/explore')
    }

    const renderStep = () => {
        switch (step) {
            case 0:
                return (
                    <div className="animate-slide-up mx-4 overflow-hidden rounded-2xl bg-white shadow-xl">
                        <div className="bg-gradient-to-r from-primary-500 to-primary-600 px-6 py-4">
                            <h2 className="text-xl font-semibold text-white">When are you most active?</h2>
                            <p className="mt-1 text-sm text-white/90">Select all that apply</p>
                        </div>
                        <div className="p-6">
                            <div className="grid gap-3">
                                {['Morning', 'Afternoon', 'Evening', 'Night'].map(time => (
                                    <button
                                        key={time}
                                        onClick={() => handleTimeSelection(time)}
                                        className={`flex items-center justify-center rounded-xl px-4 py-3.5 text-center transition-all ${preferences.timeOfDay.includes(time)
                                                ? 'bg-primary-500 text-white ring-2 ring-primary-500 ring-offset-2'
                                                : 'bg-gray-50 text-gray-700 hover:bg-gray-100'
                                            }`}
                                    >
                                        {time}
                                    </button>
                                ))}
                            </div>
                            <button
                                onClick={() => setStep(1)}
                                disabled={preferences.timeOfDay.length === 0}
                                className="mt-6 w-full rounded-xl bg-primary-500 py-3.5 font-medium text-white transition-colors hover:bg-primary-600 disabled:opacity-50"
                            >
                                Continue
                            </button>
                        </div>
                    </div>
                )

            case 1:
                return (
                    <div className="animate-slide-up mx-4 overflow-hidden rounded-2xl bg-white shadow-xl">
                        <div className="bg-gradient-to-r from-primary-500 to-primary-600 px-6 py-4">
                            <h2 className="text-xl font-semibold text-white">What interests you?</h2>
                            <p className="mt-1 text-sm text-white/90">Select all that apply</p>
                        </div>
                        <div className="p-6">
                            <div className="mb-6 grid grid-cols-2 gap-3">
                                {[
                                    'Artsy', 'Sporty', 'Foodie', 'Tech',
                                    'Music', 'Nature', 'Books', 'Games',
                                    'Fashion', 'Fitness', 'Photography', 'Crafts'
                                ].map(interest => (
                                    <button
                                        key={interest}
                                        onClick={() => handleInterestToggle(interest)}
                                        className={`rounded-xl px-4 py-3.5 text-center transition-all ${preferences.interests.includes(interest)
                                                ? 'bg-secondary-500 text-white ring-2 ring-secondary-500 ring-offset-2'
                                                : 'bg-gray-50 text-gray-700 hover:bg-gray-100'
                                            }`}
                                    >
                                        {interest}
                                    </button>
                                ))}
                            </div>
                            <div className="flex space-x-3">
                                <button
                                    onClick={() => setStep(0)}
                                    className="flex-1 rounded-xl border-2 border-gray-200 py-3.5 font-medium text-gray-700 transition-colors hover:bg-gray-50"
                                >
                                    Back
                                </button>
                                <button
                                    onClick={() => setStep(2)}
                                    disabled={preferences.interests.length === 0}
                                    className="flex-1 rounded-xl bg-primary-500 py-3.5 font-medium text-white transition-colors hover:bg-primary-600 disabled:opacity-50"
                                >
                                    Continue
                                </button>
                            </div>
                        </div>
                    </div>
                )

            case 2:
                return (
                    <div className="animate-slide-up mx-4 overflow-hidden rounded-2xl bg-white shadow-xl">
                        <div className="bg-gradient-to-r from-primary-500 to-primary-600 px-6 py-4">
                            <h2 className="text-xl font-semibold text-white">Event Preferences</h2>
                            <p className="mt-1 text-sm text-white/90">Help us find the perfect events for you</p>
                        </div>
                        <div className="space-y-6 p-6">
                            <div>
                                <label className="mb-2 block text-sm font-medium text-gray-700">Preferred event size</label>
                                <select
                                    value={preferences.eventSize}
                                    onChange={(e) => setPreferences(prev => ({
                                        ...prev,
                                        eventSize: e.target.value
                                    }))}
                                    className="w-full rounded-xl border border-gray-200 p-3 focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500"
                                >
                                    <option value="">Select size</option>
                                    <option value="intimate">Intimate (1-20 people)</option>
                                    <option value="small">Small (20-50 people)</option>
                                    <option value="medium">Medium (50-100 people)</option>
                                    <option value="large">Large (100+ people)</option>
                                </select>
                            </div>

                            <div>
                                <label className="mb-2 block text-sm font-medium text-gray-700">How far would you travel?</label>
                                <select
                                    value={preferences.travelDistance}
                                    onChange={(e) => setPreferences(prev => ({
                                        ...prev,
                                        travelDistance: e.target.value
                                    }))}
                                    className="w-full rounded-xl border border-gray-200 p-3 focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500"
                                >
                                    <option value="">Select distance</option>
                                    <option value="1">Within 1 mile</option>
                                    <option value="5">Up to 5 miles</option>
                                    <option value="10">Up to 10 miles</option>
                                    <option value="25">Up to 25 miles</option>
                                    <option value="50">Up to 50 miles</option>
                                </select>
                            </div>

                            <div>
                                <label className="mb-2 block text-sm font-medium text-gray-700">Age range for events</label>
                                <select
                                    value={preferences.ageRange}
                                    onChange={(e) => setPreferences(prev => ({
                                        ...prev,
                                        ageRange: e.target.value
                                    }))}
                                    className="w-full rounded-xl border border-gray-200 p-3 focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500"
                                >
                                    <option value="">Select age range</option>
                                    <option value="18-25">18-25</option>
                                    <option value="21-30">21-30</option>
                                    <option value="25-40">25-40</option>
                                    <option value="30-50">30-50</option>
                                    <option value="all">All ages</option>
                                </select>
                            </div>

                            <div className="flex space-x-3 pt-4">
                                <button
                                    onClick={() => setStep(1)}
                                    className="flex-1 rounded-xl border-2 border-gray-200 py-3.5 font-medium text-gray-700 transition-colors hover:bg-gray-50"
                                >
                                    Back
                                </button>
                                <button
                                    onClick={handleComplete}
                                    disabled={!preferences.eventSize || !preferences.travelDistance || !preferences.ageRange}
                                    className="flex-1 rounded-xl bg-primary-500 py-3.5 font-medium text-white transition-colors hover:bg-primary-600 disabled:opacity-50"
                                >
                                    Complete
                                </button>
                            </div>
                        </div>
                    </div>
                )
        }
    }

    return renderStep()
} 