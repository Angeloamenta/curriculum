"use client";

import { useEffect, useState } from "react";

export default function Cursor() {
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [hidden, setHidden] = useState(true);

    useEffect(() => {
        const updatePosition = (e) => {
            setPosition({ x: e.clientX, y: e.clientY });
            setHidden(false);
        };

        const handleMouseLeave = () => setHidden(true);
        const handleMouseEnter = () => setHidden(false);

        window.addEventListener("mousemove", updatePosition);
        document.body.addEventListener("mouseleave", handleMouseLeave);
        document.body.addEventListener("mouseenter", handleMouseEnter);

        return () => {
            window.removeEventListener("mousemove", updatePosition);
            document.body.removeEventListener("mouseleave", handleMouseLeave);
            document.body.removeEventListener("mouseenter", handleMouseEnter);
        };
    }, []);

    return (
        <div
            className="fixed top-0 left-0 pointer-events-none z-[9999] mix-blend-difference"
            style={{
                transform: `translate(${position.x}px, ${position.y}px)`,
                opacity: hidden ? 0 : 1,
            }}
        >
            <div className="w-6 h-6 bg-white -translate-x-1/2 -translate-y-1/2" />
        </div>
    );
}
