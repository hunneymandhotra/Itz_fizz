"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Fuel, Gauge, Zap } from "lucide-react";
import Image from "next/image";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline();
      
      tl.from(".char", {
        opacity: 0,
        y: 100,
        rotateX: -90,
        stagger: 0.05,
        duration: 1,
        ease: "back.out(1.7)",
      })
      .from(statsRef.current?.children || [], {
        opacity: 0,
        y: 30,
        stagger: 0.2,
        duration: 0.8,
        ease: "power3.out",
      }, "-=0.5")
      .from(imageRef.current, {
        opacity: 0,
        scale: 0.5,
        rotate: -10,
        duration: 1.5,
        ease: "expo.out",
      }, "-=1");

      gsap.to(imageRef.current, {
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "bottom top",
          scrub: 1,
          pin: false,
        },
        y: 500,
        rotate: 20,
        scale: 1.3,
        ease: "none",
      });

      gsap.to(headlineRef.current, {
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "50% top",
          scrub: true,
        },
        opacity: 0,
        y: -100,
      });

    }, containerRef);

    return () => ctx.revert();
  }, []);

  const headline = "WELCOME ITZ FIZZ";

  return (
    <div ref={containerRef} className="relative min-h-[150vh] w-full overflow-hidden bg-black flex flex-col items-center">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/10 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="sticky top-0 h-screen w-full flex flex-col items-center justify-center px-6">
        <h1 
          ref={headlineRef}
          className="relative z-10 text-4xl md:text-7xl font-bold letter-spaced text-center mb-12 flex flex-wrap justify-center overflow-hidden"
        >
          {headline.split("").map((char, index) => (
            <span key={index} className="char inline-block min-w-[0.2em]">
              {char === " " ? "\u00A0" : char}
            </span>
          ))}
        </h1>

        <div 
          ref={statsRef}
          className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-16 mt-8"
        >
          <StatBox icon={<Zap className="w-6 h-6 text-accent" />} value="2.1s" label="0-60 MPH" />
          <StatBox icon={<Gauge className="w-6 h-6 text-accent" />} value="217mph" label="TOP SPEED" />
          <StatBox icon={<Fuel className="w-6 h-6 text-accent" />} value="500mi" label="MAX RANGE" />
        </div>

        <div 
          ref={imageRef}
          className="absolute top-[60%] w-[90%] max-w-[800px] pointer-events-none drop-shadow-[0_20px_50px_rgba(0,0,0,0.8)]"
        >
          <Image 
            src="/car.png" 
            alt="Futuristic Supercar" 
            width={1200} 
            height={800} 
            className="w-full h-auto object-contain"
            priority
          />
        </div>
      </div>

      <div className="relative z-20 w-full max-w-5xl px-6 py-32 space-y-32">
        <BenefitSection 
          title="Engineered for Silence" 
          description="Experience the raw power of electric propulsion in near total silence. Every curve is optimized for aerodynamic perfection."
        />
        <BenefitSection 
          title="Boundless Innovation" 
          description="Technology that anticipates your next move. The cabin is a sanctuary of digital precision and artisanal craft."
        />
      </div>
    </div>
  );
}

function StatBox({ icon, value, label }: { icon: React.ReactNode, value: string, label: string }) {
  return (
    <div className="flex flex-col items-center space-y-2 group">
      <div className="p-3 rounded-2xl glass group-hover:bg-accent/20 transition-colors duration-500">
        {icon}
      </div>
      <span className="text-3xl font-bold tabular-nums text-white">{value}</span>
      <span className="text-[10px] uppercase tracking-[0.3em] text-zinc-500 font-medium">{label}</span>
    </div>
  );
}

function BenefitSection({ title, description }: { title: string, description: string }) {
  return (
    <div className="flex flex-col items-start max-w-2xl opacity-80 hover:opacity-100 transition-opacity">
      <h2 className="text-3xl font-bold mb-4 text-gradient">{title}</h2>
      <p className="text-zinc-400 leading-relaxed text-lg">
        {description}
      </p>
    </div>
  );
}
