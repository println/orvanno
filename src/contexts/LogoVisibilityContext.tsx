import React, { createContext, useContext, useState } from "react";

interface LogoVisibilityContextType {
    heroLogoVisibilityPercentage: number;
    isHeroLogoVisible: boolean;
    setHeroLogoVisibilityPercentage: (percentage: number) => void;
}

const LogoVisibilityContext = createContext<LogoVisibilityContextType | undefined>(
    undefined
);

export const LogoVisibilityProvider: React.FC<{ children: React.ReactNode }> = ({
    children,
}) => {
    const [heroLogoVisibilityPercentage, setHeroLogoVisibilityPercentage] = useState(100);
    const isHeroLogoVisible = heroLogoVisibilityPercentage > 0;

    return (
        <LogoVisibilityContext.Provider
            value={{ heroLogoVisibilityPercentage, isHeroLogoVisible, setHeroLogoVisibilityPercentage }}
        >
            {children}
        </LogoVisibilityContext.Provider>
    );
};

export const useLogoVisibility = () => {
    const context = useContext(LogoVisibilityContext);
    if (context === undefined) {
        throw new Error(
            "useLogoVisibility must be used within a LogoVisibilityProvider"
        );
    }
    return context;
};
