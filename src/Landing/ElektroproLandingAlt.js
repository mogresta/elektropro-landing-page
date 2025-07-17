import React, { useState } from 'react';
import { Phone, Mail, MapPin, Zap, Shield, Clock, Leaf, Star, Menu, X } from 'lucide-react';
import ElektroProLogo from '../Components/Logo';
import translations from '../Translations/Translations';

const ElektroproLanding = () => {
    const [language, setLanguage] = useState('hr');
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const currentContent = translations[language];

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
                        <a href={`mailto:elektroprointernational@gmail.com?subject=${currentContent.email.inquiry.subject}&body=${currentContent.email.inquiry.body}`}>
                            <button
                                className="bg-accent hover:bg-accent/90 text-secondary px-8 py-4 rounded-lg font-medium text-lg transition-all transform hover:scale-105">
                                {currentContent.hero.cta1}
                            </button>
                        </a>
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
                            <h3 className="text-2xl font-semibold mb-6 text-center">{currentContent.experience.projectCountries}</h3>
                            <div className="grid grid-cols-2 gap-4">
                                {currentContent.experience.countries.map((country, index) => (
                                    <div key={index} className="bg-neutral/20 p-3 rounded-lg text-center">
                                        <span className="font-medium">{country}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="text-secondary">
                            <h3 className="text-2xl font-semibold mb-6 text-center">{currentContent.experience.projects}</h3>
                            <ul className="space-y-3 font-light max-w-xs mx-auto">
                                {currentContent.experience.projectList.map((project, index) => (
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
                                <a href={`mailto:elektroprointernational@gmail.com?subject=${currentContent.email.inquiry.subject}&body=${currentContent.email.inquiry.body}`}>
                                    <button
                                        className="bg-accent hover:bg-accent/90 text-secondary px-8 py-4 rounded-lg font-medium text-lg transition-all transform hover:scale-105">
                                        {currentContent.contact.cta}
                                    </button>
                                </a>
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
                    <a href={`mailto:elektroprointernational@gmail.com?subject=${currentContent.email.estimate.subject}`}>
                        <button
                            className="bg-primary hover:bg-primary/90 text-secondary px-10 py-5 rounded-lg font-semibold text-xl transition-all transform hover:scale-105">
                            {currentContent.finalCta.cta}
                        </button>
                    </a>
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-primary text-secondary py-8">
                <div className="container mx-auto px-4 text-center">
                    <ElektroProLogo theme="dark"  variant="full" size="h-14" className="mx-auto mb-4" />
                    <p className="text-secondary/80 font-light">
                        {currentContent.footer.rights}
                    </p>
                </div>
            </footer>
        </div>
    );
};

export default ElektroproLanding;