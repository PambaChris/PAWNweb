'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

type Ripple = {
  x: number;
  y: number;
  id: number;
};

export default function Home() {
  const [ripples, setRipples] = useState<Ripple[]>([]);

  const smoothScrollTo = (elementId: string, duration: number) => {
    const target = document.getElementById(elementId);
    if (!target) return;

    const targetPosition = target.getBoundingClientRect().top;
    const startPosition = window.pageYOffset;
    const distance = targetPosition;
    let startTime: number | null = null;

    const animation = (currentTime: number) => {
      if (startTime === null) startTime = currentTime;
      const timeElapsed = currentTime - startTime;
      const run = ease(timeElapsed, startPosition, distance, duration);
      window.scrollTo(0, run);
      if (timeElapsed < duration) requestAnimationFrame(animation);
    };

    const ease = (t: number, b: number, c: number, d: number) => {
      t /= d / 2;
      if (t < 1) return c / 2 * t * t + b;
      t--;
      return -c / 2 * (t * (t - 2) - 1) + b;
    };

    requestAnimationFrame(animation);
  };

  const handleBannerClick = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const banner = event.currentTarget;
    const rect = banner.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    const newRipple = { x, y, id: Date.now() };

    setRipples(prevRipples => [...prevRipples, newRipple]);

    setTimeout(() => {
      setRipples(prevRipples => prevRipples.filter(r => r.id !== newRipple.id));
    }, 600);

    smoothScrollTo('empowering-women-heading', 1000);
  };

  return (
    <>
      {/* Hero Section */}
      <section className="relative">
          <div
            className="relative w-full h-[500px] md:h-[800px] cursor-pointer" // Increased specific height
            onClick={handleBannerClick}
          >
            <Image
              src="/banner.svg"
              alt="Pan-African Women's Network Banner"
              fill // Use fill to cover the parent
              className="object-cover object-center"
            />
          {ripples.map(ripple => (
            <span
              key={ripple.id}
              className="ripple"
              style={{
                left: ripple.x,
                top: ripple.y,
                width: '50px',
                height: '50px',
                marginTop: '-25px',
                marginLeft: '-25px',
                backgroundColor: 'rgba(128, 0, 128, 0.7)',
              }}
            />
          ))}
          <div className="absolute bottom-10 left-1/2 -translate-x-1/2">
            <div
              className="w-10 h-10 cursor-pointer bounce hidden md:block"
              onClick={() => smoothScrollTo('our-mission', 1000)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-10 h-10 text-white"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 5.25l-7.5 7.5-7.5-7.5"
                />
              </svg>
            </div>
          </div>
        </div>
        <div className="relative bg-muted py-28 md:py-36 container mx-auto px-4 h-full flex flex-col justify-center items-center text-center text-foreground">
          <h1 id="empowering-women-heading" className="text-4xl md:text-6xl font-bold font-heading mb-4">
            Empowering Pan-African Women
          </h1>
          <p className="text-lg md:text-xl font-body mb-6 max-w-2xl">
            Connecting, inspiring, and uplifting women of African descent across the globe.
          </p>
          <div className="absolute bottom-10 left-1/2 -translate-x-1/2 hidden md:block">
            <div
              className="w-10 h-10 cursor-pointer bounce"
              onClick={() => smoothScrollTo('our-mission', 1000)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-10 h-10 text-foreground"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 5.25l-7.5 7.5-7.5-7.5"
                />
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* Images Section */}
      <section className="py-20 bg-background">
        <div>
          <div className="grid grid-cols-1 md:grid-cols-4">
            <div className="relative flex justify-center w-full h-64">
              <Image src="/IMG_4384.jpg" alt="Image 1" fill className="object-cover transition-all hover:scale-105 hover:rounded-lg duration-300" />
            </div>
            <div className="relative flex justify-center w-full h-64">
              <Image src="/IMG_4523.jpg" alt="Image 2" fill className="object-cover transition-all hover:scale-105 hover:rounded-lg duration-300" />
            </div>
            <div className="relative flex justify-center w-full h-64">
              <Image src="/IMG_4678.jpg" alt="Image 3" fill className="object-cover transition-all hover:scale-105 hover:rounded-lg duration-300" />
            </div>
            <div className="relative flex justify-center w-full h-64">
              <Image src="/IMG_4533.jpg" alt="Image 4" fill className="object-cover transition-all hover:scale-105 hover:rounded-lg duration-300" />
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section id="our-mission" className="py-28 bg-background">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold font-heading mb-6 text-primary">Our Mission</h2>
          <p className="text-lg max-w-3xl mx-auto font-body text-muted-foreground">
            To build a strong, supportive, and collaborative network that fosters personal and professional growth, celebrates our heritage, and drives positive change in our communities and beyond.
          </p>
          <div className="absolute bottom-10 left-1/2 -translate-x-1/2 hidden md:block">
            <div
              className="w-10 h-10 cursor-pointer bounce"
              onClick={() => smoothScrollTo('featured-events', 1000)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-10 h-10 text-foreground"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 5.25l-7.5 7.5-7.5-7.5"
                />
              </svg>
            </div>
          </div>
        </div>
      </section>

      <section id="featured-events" className="py-28 bg-muted">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center font-heading mb-16 text-foreground">Featured Events</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* New Event Card 1 */}
            <div className="bg-background rounded-xl overflow-hidden shadow-md group transition-transform hover:scale-[1.02]">
              <div className="relative w-full h-48">
                <Image src="/WhatsApp Image 2025-12-03 at 4.19.43 PM.jpeg" alt="Solidarity With Palestine" fill className="object-cover" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold font-heading mb-2">Solidarity With Palestine</h3>
                <p className="text-muted-foreground font-body mb-4">Join us in a powerful display of solidarity and support for the people of Palestine.</p>
                <Link href="/events" className="text-primary font-body hover:underline group-hover:translate-x-1 transition-transform">
                  View Details
                </Link>
              </div>
            </div>
            {/* New Event Card 2 */}
            <div className="bg-background rounded-xl overflow-hidden shadow-md group transition-transform hover:scale-[1.02]">
              <div className="relative w-full h-48">
                <Image src="/KimojaMain.jpeg" alt="Social Justice: Githurai Kimoja Festival" fill className="object-cover" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold font-heading mb-2">Social Justice: Githurai Kimoja Festival</h3>
                <p className="text-muted-foreground font-body mb-4">A vibrant festival celebrating social justice and community empowerment in Githurai Kimoja.</p>
                <Link href="/events" className="text-primary font-body hover:underline group-hover:translate-x-1 transition-transform">
                  View Details
                </Link>
              </div>
            </div>
            {/* New Event Card 3 */}
            <div className="bg-background rounded-xl overflow-hidden shadow-md group transition-transform hover:scale-[1.02]">
              <div className="relative w-full h-48">
                <Image src="/internacionalvenezuela.jpeg" alt="Solidarity With Venezuela" fill className="object-cover" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold font-heading mb-2">Solidarity With Venezuela</h3>
                <p className="text-muted-foreground font-body mb-4">Stand in unity with Venezuela, advocating for justice and self-determination.</p>
                <Link href="/events" className="text-primary font-body hover:underline group-hover:translate-x-1 transition-transform">
                  View Details
                </Link>
              </div>
            </div>
            {/* New Event Card 4 */}
            <div className="bg-background rounded-xl overflow-hidden shadow-md group transition-transform hover:scale-[1.02]">
              <div className="relative w-full h-48">
                <Image src="/feministgrassroosts.jpeg" alt="Grassroots Feminist Women Education" fill className="object-cover" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold font-heading mb-2">Grassroots Feminist Women Education</h3>
                <p className="text-muted-foreground font-body mb-4">Empowering women through education on grassroots feminist movements and principles.</p>
                <Link href="/events" className="text-primary font-body hover:underline group-hover:translate-x-1 transition-transform">
                  View Details
                </Link>
              </div>
            </div>
            {/* New Event Card 5 */}
            <div className="bg-background rounded-xl overflow-hidden shadow-md group transition-transform hover:scale-[1.02]">
              <div className="relative w-full h-48">
                <Image src="/genz fahm.jpeg" alt="Solidarity With The Families Of Victims Of The Gen-Z Protests" fill className="object-cover" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold font-heading mb-2">Solidarity With The Families Of Victims Of The Gen-Z Protests</h3>
                <p className="text-muted-foreground font-body mb-4">Standing in solidarity with families affected by the Gen-Z Protests, advocating for justice and support.</p>
                <Link href="/events" className="text-primary font-body hover:underline group-hover:translate-x-1 transition-transform">
                  View Details
                </Link>
              </div>
            </div>
            {/* New Event Card 6 */}
            <div className="bg-background rounded-xl overflow-hidden shadow-md group transition-transform hover:scale-[1.02]">
              <div className="relative w-full h-48">
                <Image src="/studycircle.jpeg" alt="Study Circle" fill className="object-cover" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold font-heading mb-2">Study Circle</h3>
                <p className="text-muted-foreground font-body mb-4">Join our study circle to delve into critical topics and foster intellectual growth.</p>
                <Link href="/events" className="text-primary font-body hover:underline group-hover:translate-x-1 transition-transform">
                  View Details
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="mx-auto my-10 flex justify-center">
          <div
            className="w-10 h-10 cursor-pointer bounce mx-auto"
            onClick={() => smoothScrollTo('latest-news', 1000)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-10 h-10 text-foreground"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 5.25l-7.5 7.5-7.5-7.5"
              />
            </svg>
          </div>
        </div>
      </section>

      <section id="latest-news" className="py-28 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center font-heading mb-16 text-foreground">Latest News</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-muted p-6 rounded-xl shadow-md group transition-transform hover:scale-[1.02]">
              <h3 className="text-xl font-bold font-heading mb-2">Launches Mentorship Program</h3>
              <p className="text-muted-foreground font-body mb-4">Our new mentorship program connects experienced leaders with aspiring young professionals...</p>
              <Link href="/news" className="text-primary font-body hover:underline group-hover:translate-x-1 transition-transform">
                Read More
              </Link>
            </div>
            {/* News Item 2 */}
            <div className="bg-muted p-6 rounded-xl shadow-md group transition-transform hover:scale-[1.02]">
              <h3 className="text-xl font-bold font-heading mb-2">Member Spotlight: Caroline Moko, Earth Justice committee</h3>
              <p className="text-muted-foreground font-body mb-4">Meet Caroline Moko, a passionate advocate for Earth Justice and a valued member of our committee.</p>
              <Link href="/news" className="text-primary font-body hover:underline group-hover:translate-x-1 transition-transform">
                Read More
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
