"use client";

import { useRef, useEffect, useId } from "react";
import Image from "next/image";

export default function LiquidImage({ src, alt, className, priority, fill, sizes }) {
    const baseId = useId();
    // useId generates string with colons, which can be tricky in CSS URLs. 
    // We sanitize it to be safe for ID and URL usage.
    const filterId = `liquid-filter-${baseId.replace(/:/g, "")}`;

    const turbRef = useRef(null);
    const dispRef = useRef(null);

    useEffect(() => {
        let animationFrameId;
        let time = 0;

        const animate = () => {
            time += 0.005;
            if (turbRef.current && dispRef.current) {
                turbRef.current.setAttribute("baseFrequency", `${0.01 + Math.sin(time) * 0.002} ${0.02 + Math.cos(time) * 0.002}`);
                dispRef.current.setAttribute("scale", (30 + Math.sin(time * 2) * 10).toString());
            }
            animationFrameId = requestAnimationFrame(animate);
        };

        animate();

        return () => {
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return (
        <div className="absolute inset-0 w-full h-full overflow-hidden" style={{ filter: `url(#${filterId})` }}>

            {/* SVG Filter Definition */}
            <svg className="absolute w-0 h-0 pointer-events-none">
                <defs>
                    <filter id={filterId}>
                        <feTurbulence
                            ref={turbRef}
                            type="fractalNoise"
                            baseFrequency="0.01 0.02"
                            numOctaves="1"
                            result="warp"
                        />
                        <feDisplacementMap
                            ref={dispRef}
                            xChannelSelector="R"
                            yChannelSelector="G"
                            scale="30"
                            in="SourceGraphic"
                            in2="warp"
                        />
                    </filter>
                </defs>
            </svg>

            {/* Actual Image */}
            <Image
                src={src}
                alt={alt}
                fill={fill}
                sizes={sizes}
                priority={priority}
                className={className}
            />
        </div>
    );
}
