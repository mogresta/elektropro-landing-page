import React, { useState } from 'react';
import ElektroProLogo from '../Components/Logo';

const ElektroProLanding = () => {
    const [language, setLanguage] = useState('hr');

    // Language content
    const content = {
        hr: {
            nav: {
                services: 'Usluge',
                about: 'O nama',
                contact: 'Kontakt'
            },
            hero: {
                title: 'ElektroPro International',
                subtitle: 'Vaš partner za moderne elektroinstalacije u Hrvatskoj i EU',
                cta: 'Zatražite procjenu'
            },
            why: {
                title: 'Zašto odabrati ElektroPro International?',
                items: [
                    'Višegodišnje iskustvo u Hrvatskoj i inozemstvu',
                    'Kvaliteta, sigurnost i poštivanje rokova',
                    'Energetski učinkovita i ekološka rješenja',
                    'Fleksibilnost: od malih stanova do velikih industrijskih objekata'
                ]
            },
            services: {
                title: 'Naše usluge',
                items: [
                    {
                        title: 'Elektroinstalacije jake struje',
                        description: 'Projektiranje, izvedba i modernizacija instalacija u stambenim, poslovnim i industrijskim objektima'
                    },
                    {
                        title: 'Slaba struja i pametne instalacije',
                        description: 'Telekomunikacije, optičke mreže, video nadzor, alarmi, protupožarni sustavi, smart home'
                    },
                    {
                        title: 'Rasvjeta i automatika',
                        description: 'Unutarnja i vanjska rasvjeta, automatizacija objekata, štedljiva LED rješenja'
                    },
                    {
                        title: 'Solarni paneli i obnovljivi izvori',
                        description: 'Projektiranje i montaža solarnih sustava za kuće i poslovne objekte'
                    },
                    {
                        title: 'Održavanje i hitne intervencije',
                        description: 'Redovito i interventno održavanje, otklanjanje kvarova, nadogradnje sustava'
                    }
                ]
            },
            vision: {
                title: 'Naša vizija',
                text: 'ElektroPro International želi biti sinonim za dugotrajne, sigurne i ekološke elektroinstalacije. Naš cilj je graditi povjerenje, uvoditi inovacije i pružati podršku zajednici.'
            },
            experience: {
                title: 'Reference i iskustvo',
                items: [
                    'Projekti u Hrvatskoj, Njemačkoj, Nizozemskoj, Belgiji, Luksemburgu, Italiji',
                    'Rad na visokogradnji, industrijskim i poslovnim objektima',
                    'Solarni elektrane i pametni sustavi',
                    'Suradnja s renomiranim partnerima i tvrtkama'
                ]
            },
            contact: {
                title: 'Kontaktirajte nas',
                subtitle: 'Zatražite procjenu ili savjet!',
                phone: '+385 97 7576180',
                email: 'elektroprointernational@gmail.com',
                location: 'Zagreb, radimo po cijeloj Hrvatskoj i EU',
                cta: 'Kontaktirajte ElektroPro International danas!'
            }
        },
        en: {
            nav: {
                services: 'Services',
                about: 'About',
                contact: 'Contact'
            },
            hero: {
                title: 'ElektroPro International',
                subtitle: 'Your partner for modern electrical installations in Croatia and EU',
                cta: 'Request a quote'
            },
            why: {
                title: 'Why choose ElektroPro International?',
                items: [
                    'Years of experience in Croatia and abroad',
                    'Quality, safety and deadline compliance',
                    'Energy efficient and ecological solutions',
                    'Flexibility: from small apartments to large industrial facilities'
                ]
            },
            services: {
                title: 'Our services',
                items: [
                    {
                        title: 'High voltage electrical installations',
                        description: 'Design, implementation and modernization of installations in residential, commercial and industrial buildings'
                    },
                    {
                        title: 'Low voltage and smart installations',
                        description: 'Telecommunications, fiber optic networks, video surveillance, alarms, fire protection systems, smart home'
                    },
                    {
                        title: 'Lighting and automation',
                        description: 'Indoor and outdoor lighting, building automation, energy-efficient LED solutions'
                    },
                    {
                        title: 'Solar panels and renewable sources',
                        description: 'Design and installation of solar systems for homes and commercial buildings'
                    },
                    {
                        title: 'Maintenance and emergency interventions',
                        description: 'Regular and emergency maintenance, fault elimination, system upgrades'
                    }
                ]
            },
            vision: {
                title: 'Our vision',
                text: 'ElektroPro International wants to be synonymous with long-lasting, safe and ecological electrical installations. Our goal is to build trust, introduce innovations and support the community.'
            },
            experience: {
                title: 'References and experience',
                items: [
                    'Projects in Croatia, Germany, Netherlands, Belgium, Luxembourg, Italy',
                    'Work on high-rise buildings, industrial and commercial facilities',
                    'Solar power plants and smart systems',
                    'Cooperation with renowned partners and companies'
                ]
            },
            contact: {
                title: 'Contact us',
                subtitle: 'Request an assessment or advice!',
                phone: '+385 97 7576180',
                email: 'elektroprointernational@gmail.com',
                location: 'Zagreb, we work throughout Croatia and EU',
                cta: 'Contact ElektroPro International today!'
            }
        }
    };

    const currentContent = content[language];

    return (
        <div className="min-h-screen bg-white" style={{ fontFamily: 'Barlow, sans-serif' }}>
            {/* Google Fonts Import */}
            <link href="https://fonts.googleapis.com/css2?family=Barlow:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600;1,700&display=swap" rel="stylesheet" />

            {/* Navigation */}
            <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm shadow-sm z-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center h-16">
                        <div className="flex items-center">
                            <ElektroProLogo theme="light" variant="full" size="h-8" />
                        </div>
                        <div className="hidden md:flex items-center space-x-8">
                            <a href="#services" className="text-gray-700 hover:text-orange-500 transition-colors font-medium">
                                {currentContent.nav.services}
                            </a>
                            <a href="#about" className="text-gray-700 hover:text-orange-500 transition-colors font-medium">
                                {currentContent.nav.about}
                            </a>
                            <a href="#contact" className="text-gray-700 hover:text-orange-500 transition-colors font-medium">
                                {currentContent.nav.contact}
                            </a>
                            <div className="flex items-center space-x-2">
                                <button
                                    onClick={() => setLanguage('hr')}
                                    className={`px-3 py-1 rounded text-sm font-medium transition-colors ${
                                        language === 'hr' ? 'bg-orange-500 text-white' : 'text-gray-600 hover:text-orange-500'
                                    }`}
                                >
                                    HR
                                </button>
                                <button
                                    onClick={() => setLanguage('en')}
                                    className={`px-3 py-1 rounded text-sm font-medium transition-colors ${
                                        language === 'en' ? 'bg-orange-500 text-white' : 'text-gray-600 hover:text-orange-500'
                                    }`}
                                >
                                    EN
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>

            {/* Hero Section */}
            <section className="pt-16 bg-gradient-to-br from-gray-50 to-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
                    <div className="grid lg:grid-cols-2 gap-0 items-stretch min-h-[600px]">
                        <div className="flex flex-col justify-center p-12">
                            <h1 className="text-5xl lg:text-6xl font-bold mb-6"
                                style={{color: '#1a0e1c'}}>
                                {/* Mobile: Logo above text */}
                                <div className="flex flex-col items-center lg:hidden mb-4">
                                    <ElektroProLogo theme="light" variant="emblem" size="h-20"/>
                                </div>
                                {/* Desktop: Logo beside text */}
                                <div className="hidden lg:flex items-center gap-4">
                                    <ElektroProLogo theme="light" variant="emblem" size="h-20"/>
                                    <div>
                                        ElektroPro
                                        <span className="block" style={{color: '#f14e13'}}>International</span>
                                    </div>
                                </div>
                                {/* Mobile: Text only */}
                                <div className="text-center lg:hidden">
                                    ElektroPro
                                    <span className="block" style={{color: '#f14e13'}}>International</span>
                                </div>
                            </h1>
                            <p className="text-xl lg:text-2xl mb-8 font-light" style={{color: '#1a0e1c'}}>
                                {currentContent.hero.subtitle}
                            </p>
                            <button
                                className="px-8 py-4 rounded-xl text-white font-medium text-lg transition-all transform hover:scale-105 hover:shadow-lg"
                                style={{backgroundColor: '#f14e13'}}
                            >
                                {currentContent.hero.cta}
                            </button>
                        </div>
                        <div className="relative overflow-hidden">
                            <img
                                src="/images/SolarniPaneli.jpeg"
                                alt="Solar installation"
                                className="absolute inset-0 w-full h-full object-cover"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Why Choose Us */}
            <section className="py-20" style={{backgroundColor: '#f5ece5'}}>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-4xl lg:text-5xl font-bold text-center mb-16" style={{ color: '#1a0e1c' }}>
                        {currentContent.why.title}
                    </h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {currentContent.why.items.map((item, index) => (
                            <div key={index} className="text-center p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow">
                                <div className="w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center" style={{ backgroundColor: '#f14e13' }}>
                                    <span className="text-2xl text-white">⚡</span>
                                </div>
                                <p className="font-medium" style={{ color: '#1a0e1c' }}>{item}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Services */}
            <section id="services" className="py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-4xl lg:text-5xl font-bold text-center mb-16" style={{ color: '#1a0e1c' }}>
                        {currentContent.services.title}
                    </h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {currentContent.services.items.map((service, index) => (
                            <div key={index} className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow border-t-4" style={{ borderTopColor: '#f14e13' }}>
                                <div className="w-12 h-12 mb-6 rounded-lg flex items-center justify-center" style={{ backgroundColor: '#f14e13' }}>
                                    <span className="text-white text-xl">🔧</span>
                                </div>
                                <h3 className="text-xl font-semibold mb-4" style={{ color: '#1a0e1c' }}>
                                    {service.title}
                                </h3>
                                <p className="text-gray-600 font-light leading-relaxed">
                                    {service.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Vision */}
            <section className="py-20" style={{backgroundColor: '#b5cbc8'}}>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <img
                                src="/images/electrical_control_panel_2.avif"
                                alt="Electrical work"
                                className="rounded-xl shadow-lg w-full h-96 object-cover"
                            />
                        </div>
                        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                            <h2 className="text-4xl lg:text-5xl font-bold mb-8" style={{color: '#1a0e1c'}}>
                                {currentContent.vision.title}
                            </h2>
                            <p className="text-xl font-light leading-relaxed" style={{color: '#1a0e1c'}}>
                                {currentContent.vision.text}
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Experience */}
            <section id="about" className="py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-4xl lg:text-5xl font-bold mb-8" style={{color: '#1a0e1c'}}>
                                {currentContent.experience.title}
                            </h2>
                            <div className="space-y-4">
                                {currentContent.experience.items.map((item, index) => (
                                    <div key={index} className="flex items-start space-x-3">
                                        <div
                                            className="w-6 h-6 rounded-full flex-shrink-0 mt-1 flex items-center justify-center"
                                            style={{backgroundColor: '#f14e13'}}>
                                            <span className="text-white text-sm">✓</span>
                                        </div>
                                        <p className="text-lg font-light" style={{color: '#1a0e1c'}}>{item}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div>
                            <img
                                src="/images/Slavonska.jpg"
                                alt="Electrical work"
                                className="rounded-xl shadow-lg w-full h-96 object-cover"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Contact */}
            <section id="contact" className="py-20" style={{backgroundColor: '#1a0e1c'}}>
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-4xl lg:text-5xl font-bold mb-4" style={{color: '#f5ece5'}}>
                    {currentContent.contact.title}
                    </h2>
                    <p className="text-xl mb-12" style={{ color: '#b5cbc8' }}>
                        {currentContent.contact.subtitle}
                    </p>

                    <div className="grid md:grid-cols-3 gap-8 mb-12">
                        <div className="text-center">
                            <div className="w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center" style={{ backgroundColor: '#f14e13' }}>
                                <span className="text-2xl text-white">📞</span>
                            </div>
                            <p style={{ color: '#f5ece5' }} className="font-light">{currentContent.contact.phone}</p>
                        </div>
                        <div className="text-center">
                            <div className="w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center" style={{ backgroundColor: '#f14e13' }}>
                                <span className="text-2xl text-white">✉️</span>
                            </div>
                            <p style={{ color: '#f5ece5' }} className="font-light">{currentContent.contact.email}</p>
                        </div>
                        <div className="text-center">
                            <div className="w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center" style={{ backgroundColor: '#f14e13' }}>
                                <span className="text-2xl text-white">📍</span>
                            </div>
                            <p style={{ color: '#f5ece5' }} className="font-light">{currentContent.contact.location}</p>
                        </div>
                    </div>

                    <button
                        className="px-8 py-4 rounded-xl font-medium text-lg transition-all transform hover:scale-105 hover:shadow-lg"
                        style={{ backgroundColor: '#f14e13', color: '#f5ece5' }}
                    >
                        {currentContent.contact.cta}
                    </button>
                </div>
            </section>

            {/* Footer */}
            <footer className="py-8" style={{ backgroundColor: '#f5ece5' }}>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <ElektroProLogo theme="light"  variant="full" size="h-14" className="mx-auto mb-4" />
                    <p style={{ color: '#1a0e1c' }} className="font-light">
                        © 2025 ElektroPro International. {language === 'hr' ? 'Sva prava pridržana.' : 'All rights reserved.'}
                    </p>
                </div>
            </footer>
        </div>
    );
};

export default ElektroProLanding;