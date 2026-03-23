import Hero from "@/components/Hero";

export default function Home() {
  return (
    <main className="min-h-screen bg-black overflow-x-hidden">
      <Hero />
      
      <section className="h-screen bg-zinc-950 flex flex-col items-center justify-center relative p-12 text-center">
        <div className="absolute top-0 left-0 w-full h-[100px] bg-gradient-to-b from-black to-transparent" />
        <h3 className="text-4xl font-bold mb-6 text-white uppercase tracking-[0.5em] opacity-30">EXPERIENCE THE FUTURE</h3>
        <p className="max-w-xl text-zinc-500 text-lg leading-relaxed">
          The boundaries of performance have been redefined. Redesigned from the ground up to be the most aerodynamic production car in existence.
        </p>
      </section>

      <footer className="p-12 border-t border-zinc-900 bg-black flex flex-col md:flex-row justify-between items-center text-zinc-600 gap-6">
        <span className="font-bold letter-spaced text-xs">ITZ FIZZ</span>
        <div className="flex gap-8 text-[10px] uppercase tracking-[0.2em] font-medium">
          <a href="#" className="hover:text-white transition-colors">Twitter</a>
          <a href="#" className="hover:text-white transition-colors">Instagram</a>
          <a href="#" className="hover:text-white transition-colors">GitHub</a>
        </div>
        <span className="text-[10px]">&copy; 2026 ITZ FIZZ EXPERIENCE</span>
      </footer>
    </main>
  );
}
