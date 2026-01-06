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
            className={`relative group inline-flex items-center justify-center [&_svg]:w-full [&_svg]:h-full [&_svg]:fill-current ${className}`}
            role="img"
            aria-label={alt}
            onMouseEnter={handleMouseEnter}
        >
            <div
                className="contents"
                dangerouslySetInnerHTML={{ __html: svgContent }}
            />
            {/* Shine effect container */}
            <div
                className="absolute inset-0 pointer-events-none"
                style={{
                    filter: "drop-shadow(0 0 2px hsl(var(--gold) / 0.6)) drop-shadow(0 0 5px hsl(var(--gold) / 0.4))",
                }}
            >
                <div
                    className="w-full h-full"
                    style={{
                        maskImage: `url(${src})`,
                        WebkitMaskImage: `url(${src})`,
                        maskSize: "contain",
                        WebkitMaskSize: "contain",
                        maskRepeat: "no-repeat",
                        WebkitMaskRepeat: "no-repeat",
                        maskPosition: "center",
                        WebkitMaskPosition: "center",
                    }}
                >
                    {/* Shine gradient - Moving Animation */}
                    <div
                        className={`absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/90 to-transparent -translate-x-full ${isAnimating ? 'animate-shine-once' : ''}`}
                        onAnimationEnd={() => setIsAnimating(false)}
                    />
                </div>
            </div>
        </div>
    );
};

export default DynamicLogo;
