import React, {useState} from 'react';
import ElektroproLanding from './Landing/ElektroproLanding'; // original modern design
import ElektroproLandingAlt from './Landing/ElektroproLandingAlt'; // alternative corporate design

function App() {
    const [theme, setTheme] = useState('modern');
    return (
        <div className="App">
            {/* Theme Toggle Button */}
            <div className="fixed bottom-6 right-6 z-50">
                <button
                    onClick={() => setTheme(theme === 'modern' ? 'corporate' : 'modern')}
                    className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-full font-medium shadow-lg transition-all transform hover:scale-105"
                >
                    {theme === 'modern' ? 'Corporate View' : 'Modern View'}
                </button>
            </div>

            {/* Conditionally render the components */}
            {theme === 'modern' ? <ElektroproLanding /> : <ElektroproLandingAlt />}
        </div>
    );
}

export default App;