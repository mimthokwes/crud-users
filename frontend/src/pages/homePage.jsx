import React from 'react'
import Navbar from '../components/Navbar.jsx'
function LandingPage() {
    return (
        <main className='h-screen w-screen bg-blue-600'>
            <div className='mb-24'>
                <Navbar />
            </div>
            <div>
                <h1>hello world</h1>
            </div>
        </main>
    )
}

export default LandingPage