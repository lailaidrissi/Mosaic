# Mosaic - Connect Through Events

Mosaic is a modern web application that helps people discover and join local events based on their interests. Built with Next.js, TypeScript, and Tailwind CSS, it features a beautiful UI and seamless user experience.

## Features

- 🎨 Animated splash screen with stained-glass logo
- 📍 Location-based event discovery
- 🎯 Personalized event recommendations based on interests
- 🎫 Easy RSVP and ticket purchasing
- 💬 Safe, moderated messaging between event attendees
- 🛡️ Comprehensive safety settings and user privacy controls
- 🏆 Achievement badges for event participation

## Tech Stack

- Next.js 14
- TypeScript
- Tailwind CSS
- React Icons
- Lottie for animations
- Google Maps API for location services

## Required Assets

Before running the application, make sure to add the following assets to the `public` directory:

1. `/public/images/default-avatar.jpg` - A default profile picture (recommended size: 256x256px)
2. `/public/images/art-walk.jpg` - Sample event image (recommended size: 800x600px)
3. `/public/animations/mosaic-logo.json` - Lottie animation file for the splash screen

You can use your own images or download placeholder images from services like [Unsplash](https://unsplash.com).

## Getting Started

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/mosaic.git
   cd mosaic
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env.local` file in the root directory and add your API keys:
   ```
   NEXT_PUBLIC_GOOGLE_MAPS_API_KEY=your_google_maps_api_key
   ```

4. Add the required assets as mentioned in the "Required Assets" section.

5. Run the development server:
   ```bash
   npm run dev
   ```

6. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
src/
├── app/                 # Next.js app directory
│   ├── explore/        # Event exploration page
│   ├── profile/        # User profile page
│   └── page.tsx        # Landing page with onboarding
├── components/         # Reusable React components
├── styles/            # Global styles and Tailwind config
└── types/             # TypeScript type definitions

public/
├── animations/        # Lottie animation files
└── images/           # Static images and assets
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
