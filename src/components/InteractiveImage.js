"use client";

import { useRef, useState } from "react";
import Image from "next/image";

export default function InteractiveImage({ src, alt, className, priority, fill, sizes }) {
    const containerRef = useRef(null);
    const [position, setPosition] = useState({ x: 0, y: 0 });

    const handleMouseMove = (e) => {
        if (!containerRef.current) return;

        const { left, top, width, height } = containerRef.current.getBoundingClientRect();
        const x = (e.clientX - left) / width - 0.5;
        const y = (e.clientY - top) / height - 0.5;

        // Movement intensity (20px max shift)
        setPosition({ x: x * 20, y: y * 20 });
    };

    const handleMouseLeave = () => {
        setPosition({ x: 0, y: 0 });
    };

    return (
        <div
            ref={containerRef}
            className={`relative overflow-hidden ${className}`}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
        >
            <div
                className="relative w-full h-full transition-transform duration-200 ease-out will-change-transform"
                style={{
                    transform: `scale(1.1) translate(${-position.x}px, ${-position.y}px)`
                }}
            >
                <Image
                    src={src}
                    alt={alt}
                    fill={fill}
                    sizes={sizes}
                    priority={priority}
                    className="object-cover object-top"
                    draggable={false}
                />
            </div>

        </div>
    );
}
