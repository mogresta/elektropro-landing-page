import React, { useState } from 'react';
import { Phone, Mail, MapPin, Zap, Shield, Clock, Leaf, Star, Menu, X } from 'lucide-react';
import ElektroProLogo from '../Components/Logo';

const ElektroproLanding = () => {
    const [language, setLanguage] = useState('hr');
    const [isMenuOpen, setIsMenuOpen] = useState(false);

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
                cta1: 'Zatražite besplatnu procjenu',
                cta2: 'Saznajte više'
            },
            why: {
                title: 'Zašto odabrati ElektroPro?',
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
                text: 'ElektroPro International želi biti sinonim za dugotrajne, sigurne i ekološke elektroinstalacije. Naš cilj je graditi povjerenje, uvoditi inovacije i pružati podršku zajednici -- od modernih stanova do velikih industrijskih pogona.'
            },
            references: {
                title: 'Reference i iskustvo',
                countries: 'Projekti u zemljama:',
                projects: 'Vrste projekata:',
                projectList: [
                    'Visokogradnja',
                    'Industrijski objekti',
                    'Poslovni objekti',
                    'Solarne elektrane',
                    'Pametni sustavi'
                ]
            },
            contact: {
                title: 'Kontaktirajte nas',
                subtitle: 'Zatražite besplatnu procjenu ili savjet!',
                phone: '+385 97 7576180',
                email: 'u izradi',
                location: 'Zagreb, radimo po cijeloj Hrvatskoj i EU',
                cta: 'Pošaljite upit'
            },
            finalCta: {
                title: 'Trebate sigurne, moderne i dugotrajne elektroinstalacije?',
                subtitle: 'Kontaktirajte ElektroPro International danas!',
                cta: 'Započnite projekt'
            },
            footer: 'Vaš partner za moderne elektroinstalacije u Hrvatskoj i EU'
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
                cta1: 'Request free quote',
                cta2: 'Learn more'
            },
            why: {
                title: 'Why choose ElektroPro?',
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
                text: 'ElektroPro International wants to be synonymous with long-lasting, safe and ecological electrical installations. Our goal is to build trust, introduce innovations and support the community -- from modern apartments to large industrial facilities.'
            },
            references: {
                title: 'References and experience',
                countries: 'Projects in countries:',
                projects: 'Project types:',
                projectList: [
                    'High-rise construction',
                    'Industrial facilities',
                    'Commercial buildings',
                    'Solar power plants',
                    'Smart systems'
                ]
            },
            contact: {
                title: 'Contact us',
                subtitle: 'Request a free assessment or advice!',
                phone: '+385 97 7576180',
                email: 'under development',
                location: 'Zagreb, we work throughout Croatia and EU',
                cta: 'Send inquiry'
            },
            finalCta: {
                title: 'Need safe, modern and long-lasting electrical installations?',
                subtitle: 'Contact ElektroPro International today!',
                cta: 'Start project'
            },
            footer: 'Your partner for modern electrical installations in Croatia and EU'
        }
    };

    const currentContent = content[language];

    const services = [
        {
            title: currentContent.services.items[0].title,
            description: currentContent.services.items[0].description,
            icon: <Zap className="w-8 h-8 text-accent" />
        },
        {
            title: currentContent.services.items[1].title,
            description: currentContent.services.items[1].description,
            icon: <Shield className="w-8 h-8 text-accent" />
        },
        {
            title: currentContent.services.items[2].title,
            description: currentContent.services.items[2].description,
            icon: <Clock className="w-8 h-8 text-accent" />
        },
        {
            title: currentContent.services.items[3].title,
            description: currentContent.services.items[3].description,
            icon: <Leaf className="w-8 h-8 text-accent" />
        },
        {
            title: currentContent.services.items[4].title,
            description: currentContent.services.items[4].description,
            icon: <Star className="w-8 h-8 text-accent" />
        }
    ];

    const countries = [
        "Hrvatska", "Njemačka", "Nizozemska", "Belgija", "Luksemburg", "Italija"
    ];

    return (
        <div className="min-h-screen bg-secondary font-barlow">
            {/* Navigation */}
            <nav className="bg-primary text-secondary p-4 sticky top-0 z-50">
                <div className="container mx-auto flex justify-between items-center">
                    <ElektroProLogo theme="dark" variant="full" size="h-10" />

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center space-x-6">
                        <a href="#services"
                           className="hover:text-accent transition-colors">{currentContent.nav.services}</a>
                        <a href="#reference" className="hover:text-accent transition-colors">Reference</a>
                        <a href="#contact"
                           className="hover:text-accent transition-colors">{currentContent.nav.contact}</a>
                        <div className="flex items-center space-x-2 ml-4">
                            <button
                                onClick={() => setLanguage('hr')}
                                className={`px-3 py-1 rounded text-sm font-medium transition-colors ${
                                    language === 'hr' ? 'bg-accent text-secondary' : 'text-secondary hover:text-accent'
                                }`}
                            >
                                HR
                            </button>
                            <button
                                onClick={() => setLanguage('en')}
                                className={`px-3 py-1 rounded text-sm font-medium transition-colors ${
                                    language === 'en' ? 'bg-accent text-secondary' : 'text-secondary hover:text-accent'
                                }`}
                            >
                                EN
                            </button>
                        </div>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                    >
                        {isMenuOpen ? <X className="w-6 h-6"/> : <Menu className="w-6 h-6"/>}
                    </button>
                </div>

                {/* Mobile Menu */}
                {isMenuOpen && (
                    <div className="md:hidden mt-4 space-y-2">
                        <a href="#services"
                           className="block py-2 hover:text-accent transition-colors">{currentContent.nav.services}</a>
                        <a href="#reference" className="block py-2 hover:text-accent transition-colors">Reference</a>
                        <a href="#contact"
                           className="block py-2 hover:text-accent transition-colors">{currentContent.nav.contact}</a>
                        <div className="flex items-center space-x-2 mt-4">
                            <button
                                onClick={() => setLanguage('hr')}
                                className={`px-3 py-1 rounded text-sm font-medium transition-colors ${
                                    language === 'hr' ? 'bg-accent text-secondary' : 'text-secondary hover:text-accent'
                                }`}
                            >
                                HR
                            </button>
                            <button
                                onClick={() => setLanguage('en')}
                                className={`px-3 py-1 rounded text-sm font-medium transition-colors ${
                                    language === 'en' ? 'bg-accent text-secondary' : 'text-secondary hover:text-accent'
                                }`}
                            >
                                EN
                            </button>
                        </div>
                    </div>
                )}
            </nav>

            {/* Hero Section */}
            <section className="bg-gradient-to-r from-primary via-dark to-primary text-secondary py-20">
                <div className="container mx-auto px-4 text-center">
                    <h1 className="text-5xl md:text-7xl font-bold mb-6">
                         <div className="flex flex-col items-center mb-4">
                            <ElektroProLogo theme="dark" variant="emblem" size="h-20"/>
                        </div>
                        {currentContent.hero.title}
                    </h1>
                    <p className="text-xl md:text-2xl font-light mb-8">
                        {currentContent.hero.subtitle}
                    </p>

                    <div className="flex flex-col md:flex-row gap-4 justify-center">
                        <button
                            className="bg-accent hover:bg-accent/90 text-secondary px-8 py-4 rounded-lg font-medium text-lg transition-all transform hover:scale-105">
                            {currentContent.hero.cta1}
                        </button>
                        <button
                            className="border border-accent text-accent hover:bg-accent/20 px-8 py-4 rounded-lg font-medium text-lg transition-all">
                            {currentContent.hero.cta2}
                        </button>
                    </div>
                </div>
            </section>

            {/* Why Choose Us */}
            <section className="py-16 bg-secondary">
                <div className="container mx-auto px-4">
                    <h2 className="text-4xl md:text-6xl font-bold text-primary text-center mb-12">
                        {currentContent.why.title}
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {currentContent.why.items.map((feature, index) => (
                            <div key={index}
                                 className="bg-neutral/20 p-6 rounded-lg text-center hover:shadow-lg transition-shadow">
                                <div
                                    className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                                    <Star className="w-8 h-8 text-secondary"/>
                                </div>
                                <p className="text-primary font-medium">{feature}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Services */}
            <section id="services" className="py-16 bg-gradient-to-r from-primary via-dark to-primary ">
                <div className="container mx-auto px-4">
                    <h2 className="text-4xl md:text-6xl font-bold text-secondary text-center mb-12">
                        {currentContent.services.title}
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {services.map((service, index) => (
                            <div key={index} className="bg-secondary p-6 rounded-lg hover:shadow-xl transition-shadow">
                                <div className="mb-4">{service.icon}</div>
                                <h3 className="text-xl font-semibold text-primary mb-3">{service.title}</h3>
                                <p className="text-primary/80 font-light">{service.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Vision */}
            <section className="bg-neutral/10">
                <div className="grid lg:grid-cols-2 gap-0 items-stretch min-h-[600px]">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex">
                        <div className="flex flex-col justify-center p-12">
                            <h2 className="text-4xl md:text-6xl font-bold text-primary mb-8">
                                {currentContent.vision.title}
                            </h2>
                            <div className="max-w-4xl mx-auto">
                                <p className="text-xl font-light text-primary/80 leading-relaxed">
                                    {currentContent.vision.text}
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="relative overflow-hidden hidden lg:block">
                        <img
                            src="/images/Multimetar.jpeg"
                            alt="Electrical work"
                            className="absolute inset-0 w-full h-full object-cover"
                        />
                    </div>
                </div>
            </section>

            {/* References */}
            <section id="reference" className="py-16 bg-gradient-to-r from-primary via-dark to-primary ">
                <div className="container mx-auto px-4">
                    <h2 className="text-4xl md:text-6xl font-bold text-secondary text-center mb-12">
                        {currentContent.references.title}
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">
                        <div className="text-secondary">
                            <h3 className="text-2xl font-semibold mb-6 text-center">{currentContent.references.countries}</h3>
                            <div className="grid grid-cols-2 gap-4">
                                {countries.map((country, index) => (
                                    <div key={index} className="bg-neutral/20 p-3 rounded-lg text-center">
                                        <span className="font-medium">{country}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="text-secondary">
                            <h3 className="text-2xl font-semibold mb-6 text-center">{currentContent.references.projects}</h3>
                            <ul className="space-y-3 font-light max-w-xs mx-auto">
                                {currentContent.references.projectList.map((project, index) => (
                                    <li key={index} className="flex items-center">
                                        <Star className="w-5 h-5 text-accent mr-3"/>
                                        {project}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Contact */}
            <section id="contact" className="py-16 bg-secondary">
                <div className="container mx-auto px-4">
                    <h2 className="text-4xl md:text-6xl font-bold text-primary text-center mb-12">
                        {currentContent.contact.title}
                    </h2>

                    <div className="max-w-2xl mx-auto">
                        <div className="bg-primary p-8 rounded-lg text-secondary">
                            <h3 className="text-2xl font-semibold mb-6 text-center">
                                {currentContent.contact.subtitle}
                            </h3>

                            <div className="space-y-4">
                                <div className="flex items-center">
                                    <Phone className="w-6 h-6 text-accent mr-4"/>
                                    <span className="text-lg">{currentContent.contact.phone}</span>
                                </div>

                                <div className="flex items-center">
                                    <Mail className="w-6 h-6 text-accent mr-4"/>
                                    <span className="text-lg">{currentContent.contact.email}</span>
                                </div>

                                <div className="flex items-center">
                                    <MapPin className="w-6 h-6 text-accent mr-4"/>
                                    <span className="text-lg">{currentContent.contact.location}</span>
                                </div>
                            </div>

                            <div className="mt-8 text-center">
                                <button
                                    className="bg-accent hover:bg-accent/90 text-secondary px-8 py-4 rounded-lg font-medium text-lg transition-all transform hover:scale-105">
                                    {currentContent.contact.cta}
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-16 bg-accent">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-4xl md:text-5xl font-bold text-secondary mb-6">
                        {currentContent.finalCta.title}
                    </h2>
                    <p className="text-xl text-secondary/90 font-light mb-8">
                        {currentContent.finalCta.subtitle}
                    </p>
                    <button
                        className="bg-primary hover:bg-primary/90 text-secondary px-10 py-5 rounded-lg font-semibold text-xl transition-all transform hover:scale-105">
                        {currentContent.finalCta.cta}
                    </button>
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-primary text-secondary py-8">
                <div className="container mx-auto px-4 text-center">
                    <ElektroProLogo theme="dark"  variant="full" size="h-14" className="mx-auto mb-4" />
                    <p className="text-secondary/80 font-light">
                        {currentContent.footer}
                    </p>
                </div>
            </footer>
        </div>
    );
};

export default ElektroproLanding;