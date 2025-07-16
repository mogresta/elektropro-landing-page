import React from 'react';

const ElektroProLogo = ({
                            theme = 'light',
                            variant = 'full',
                            size = 'h-8',
                            className = ''
                        }) => {

    const logoMap = {
        light: {
            full: '/logos_svg/EPI_logo1_dark.svg',
            emblem: '/logos_svg/EPI_emblem_dark.svg'
        },
        dark: {
            full: '/logos_svg/EPI_logo1_light.svg',
            emblem: '/logos_svg/EPI_emblem_light.svg'
        }
    };

    const selectedTheme = logoMap[theme] || logoMap.light;
    const logoSrc = selectedTheme[variant] || selectedTheme.full;

    return (
        <img
            src={logoSrc}
            alt="ElektroPro International"
            className={`${size} ${className}`}
        />
    );
};

export default ElektroProLogo;