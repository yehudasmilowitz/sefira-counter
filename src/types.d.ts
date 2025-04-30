declare module '*.css' {
  const content: { [className: string]: string };
  export default content;
}

declare module '*.svg' {
  const content: string;
  export default content;
}

declare module '*.png' {
  const content: string;
  export default content;
}

declare module '*.jpg' {
  const content: string;
  export default content;
}

declare module '*.jpeg' {
  const content: string;
  export default content;
}

declare module 'canvas-confetti' {
  interface ConfettiOptions {
    particleCount?: number;
    spread?: number;
    origin?: { x: number; y: number };
    angle?: number;
    startVelocity?: number;
    gravity?: number;
    ticks?: number;
    colors?: string[];
  }

  function confetti(options?: ConfettiOptions): Promise<void>;
  export default confetti;
} 
