import { useEffect, useState } from "react";

interface DynamicLogoProps {
    src: string;
    className?: string;
    alt?: string;
    id?: string;
}

const DynamicLogo = ({ src, className = "", alt = "Logo", id }: DynamicLogoProps) => {
    const [svgContent, setSvgContent] = useState<string | null>(null);

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

    if (!svgContent) {
        // Fallback or placeholder while loading
        return <span id={id} className={className}>{alt}</span>;
    }

    return (
        <div
            id={id}
            className={`inline-flex items-center justify-center [&>svg]:w-full [&>svg]:h-full [&>svg]:fill-current ${className}`}
            dangerouslySetInnerHTML={{ __html: svgContent }}
            role="img"
            aria-label={alt}
        />
    );
};

export default DynamicLogo;
