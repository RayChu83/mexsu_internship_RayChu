import React from "react";

export default function Home() {
  return (
    <div className="flex flex-col gap-3 items-center justify-center w-[100dvw] h-[100dvh]">
      <header className="absolute left-4 top-4 flex items-center gap-4">
        <img
          src="mexsu.png"
          alt="Mexican Student Union"
          width={40}
          height={40}
        />
        <h3 className="text-white text-xl">Mexican Student Union</h3>
      </header>
      <h1 className="text-5xl font-medium flex items-center gap-1 text-white">
        Hello, MEXSU
      </h1>
      <p className="px-4 py-1 bg-black/5 liquid-glass rounded-full text-white font-light">
        <span>Built by Ray Chu</span>
        <span className="wave-animation">👋</span>
      </p>
      <div
        aria-label="Background gradient"
        className="absolute w-full h-full bg-center bg-cover -z-10 brightness-75"
        style={{ backgroundImage: "url(/photo-gradient.avif)" }}
      />
    </div>
  );
}
