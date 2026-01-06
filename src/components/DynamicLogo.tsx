import { useEffect, useState } from "react";

interface DynamicLogoProps {
    src: string;
    className?: string;
    alt?: string;
    id?: string;
}

const DynamicLogo = ({ src, className = "", alt = "Logo", id }: DynamicLogoProps) => {
    const [svgContent, setSvgContent] = useState<string | null>(null);
    const [isAnimating, setIsAnimating] = useState(false);

    useEffect(() => {
        const fetchSvg = async () => {
            try {
                const response = await fetch(src);
                if (!response.ok) throw new Error("Failed to fetch SVG");
                const text = await response.text();
                // Basic cleanup to remove XML declaration if present, though browser handles it usually.
                // Also ensuring width/height don't block CSS resizing if they are hardcoded.
                // Ideally, we depend on the SVG having no hardcoded w/h or overridden by CSS.
                setSvgContent(text);
            } catch (error) {
                console.error("Error loading SVG:", error);
            }
        };

        if (src) {
            fetchSvg();
        }
    }, [src]);

    const handleMouseEnter = () => {
        if (!isAnimating) {
            setIsAnimating(true);
        }
    };

    if (!svgContent) {
        // Fallback or placeholder while loading
        return <span id={id} className={className}>{alt}</span>;
    }

    return (
        <div
            id={id}
            className={`relative group inline-flex items-center justify-center [&_svg]:w-full [&_svg]:h-full ${className}`}
            role="img"
            aria-label={alt}
            onMouseEnter={handleMouseEnter}
        >
            {/* Base Layer - Original Color */}
            <div
                className="contents [&_svg]:fill-current"
                dangerouslySetInnerHTML={{ __html: svgContent }}
            />

            {/* Overlay Layer - White with Gold Glow + Gradient Mask Animation */}
            <div
                className={`absolute inset-0 [&_svg]:fill-white pointer-events-none ${isAnimating ? 'animate-shine-mask' : 'hidden'}`}
                style={{
                    filter: "drop-shadow(0 0 2px hsl(var(--gold) / 0.8)) drop-shadow(0 0 5px hsl(var(--gold) / 0.6))",
                    maskImage: "linear-gradient(110deg, transparent 35%, black 50%, transparent 65%)",
                    WebkitMaskImage: "linear-gradient(110deg, transparent 35%, black 50%, transparent 65%)",
                    maskSize: "200% 100%",
                    WebkitMaskSize: "200% 100%",
                    maskRepeat: "no-repeat",
                    WebkitMaskRepeat: "no-repeat",
                }}
                dangerouslySetInnerHTML={{ __html: svgContent }}
                onAnimationEnd={() => setIsAnimating(false)}
            />
        </div>
    );
};

export default DynamicLogo;
