import Image from "next/image";
import Link from "next/link";
import { Star, CalendarDays, UserPlus, Camera, MessageCircle } from "lucide-react";

const LINKS = {
  avis: "https://g.page/r/CRbGZYS76gDbEAE/review",
  reservation: "https://app.wtc91.fr/client/login",
  inscription: "https://app.wtc91.fr/client/signup",
  instagram: "https://www.instagram.com/wtc91?igsh=Nmh5c3J4NHphNWJ2",
  instagramHandle: "@wtc91",
  contact: "mailto:contact@wtc91.fr",
};

export default function HubPage() {
  return (
    <main className="flex justify-center px-4 py-10 pb-16">
      <div className="w-full max-w-sm flex flex-col gap-4">

        {/* Header */}
        <header className="flex flex-col items-center gap-3 pb-2">
          <div
            className="w-20 h-20"
          >
            <Image
              src="/logo.png"
              alt="WTC"
              width={80}
              height={80}
              className="w-full h-full object-cover"
              priority
            />
          </div>
          <div className="text-center">
            <h1
              className="text-3xl"
              style={{ fontFamily: "var(--font-playfair)", fontStyle: "italic", fontWeight: 400 }}
            >
              Wissous Tennis Club
            </h1>
            <p className="text-xs tracking-widest text-gray-400 font-light mt-1 uppercase">
              <span style={{ color: "#06b2e6" }}>Padel</span> / <span style={{ color: "#3db85a" }}>Badminton</span> / <span style={{ color: "#e84040" }}>Squash</span>
            </p>
          </div>
        </header>

        {/* Carte principale — Avis Google */}
        <Link
          href={LINKS.avis}
          target="_blank"
          rel="noopener noreferrer"
          className="relative rounded-2xl p-9 flex flex-col gap-2 overflow-hidden transition-transform hover:-translate-y-0.5 active:translate-y-0"
          style={{ backgroundColor: "var(--primary)" }}
        >
          <p className="text-xs tracking-widest uppercase text-white/70 font-light">Votre avis compte !</p>
          <h2
            className="text-4xl text-white"
            style={{ fontFamily: "var(--font-playfair)", fontStyle: "italic", fontWeight: 400 }}
          >
            Laisser un avis
          </h2>
          <p className="text-sm text-white/80">Ça nous aide vraiment ✨</p>
          <Star className="absolute top-4 right-4 text-white/20" size={48} strokeWidth={1} />
          <span className="absolute bottom-6 right-6 bg-white/15 text-white text-sm font-medium px-4 py-2 rounded-full">
            → Go
          </span>
        </Link>

        {/* Instagram + Contact */}
        <div className="grid grid-cols-2 gap-3">
          <Link
            href={LINKS.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white rounded-2xl p-4 flex flex-col items-center gap-2 shadow-sm text-center transition-transform hover:-translate-y-0.5 active:translate-y-0"
          >
            <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" stroke="#d4891a" strokeWidth="2"/>
                <circle cx="12" cy="12" r="4" stroke="#d4891a" strokeWidth="2"/>
                <circle cx="17.5" cy="6.5" r="1.2" fill="#d4891a"/>
              </svg>
            </div>
            <p className="font-medium text-sm">Instagram</p>
            <p className="text-xs text-gray-400">{LINKS.instagramHandle}</p>
          </Link>

          <Link
            href={LINKS.contact}
            className="bg-white rounded-2xl p-4 flex flex-col items-center gap-2 shadow-sm text-center transition-transform hover:-translate-y-0.5 active:translate-y-0"
          >
            <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center">
              <MessageCircle size={22} style={{ stroke: "var(--primary-dark)" }} />
            </div>
            <p className="font-medium text-sm">Contact</p>
            <p className="text-xs text-gray-400">Nous écrire</p>
          </Link>
        </div>

        {/* Réserver un terrain */}
        <Link
          href={LINKS.reservation}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-white rounded-2xl p-5 flex items-center gap-3 shadow-sm transition-transform hover:-translate-y-0.5 active:translate-y-0"
        >
          <div
            className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
            style={{ backgroundColor: "#e6f7fd" }}
          >
            <CalendarDays size={22} style={{ stroke: "#06b2e6" }} />
          </div>
          <div>
            <p className="font-medium text-base">Réservez votre séance !</p>
            <p className="text-sm text-gray-400">Choisissez votre créneau →</p>
          </div>
        </Link>

        {/* S'inscrire */}
        <Link
          href={LINKS.inscription}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-white rounded-2xl p-5 flex items-center gap-3 shadow-sm transition-transform hover:-translate-y-0.5 active:translate-y-0"
        >
          <div
            className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
            style={{ backgroundColor: "#fdf0e0" }}
          >
            <UserPlus size={22} style={{ stroke: "var(--primary-dark)" }} />
          </div>
          <div>
            <p className="font-medium text-base">S&apos;inscrire pour jouer !</p>
            <p className="text-sm text-gray-400">Rejoignez le club →</p>
          </div>
        </Link>

        <footer className="text-center text-xs text-gray-400 pt-2 flex flex-col gap-1">
          <p>© 2026 Wissous Tennis Club</p>
          <p>Développé par <a href="https://ouicansolutions.com" target="_blank" rel="noopener noreferrer" className="underline hover:text-gray-600 transition-colors">OuiCan Solutions</a></p>
        </footer>
      </div>
    </main>
  );
}
