import React from 'react'
import { Link, usePage } from '@inertiajs/react'

const AppLayout = ({ children }) => {
  const { auth, flash } = usePage().props

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Navigation */}
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-xl font-bold">My App</h1>
          <nav className="space-x-4">
            <Link href="/" className="text-blue-600">Home</Link>
            <Link href="/dashboard" className="text-blue-600">Dashboard</Link>
            {auth.user ? (
              <span className="text-gray-600">Hi, {auth.user.name}</span>
            ) : (
              <Link href="/login" className="text-blue-600">Login</Link>
            )}
          </nav>
        </div>
      </header>

      {/* Flash Message */}
      {flash.message && (
        <div className="bg-green-100 text-green-800 p-3 text-center">
          {flash.message}
        </div>
      )}

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 py-6">
        {children}
      </main>
    </div>
  )
}

export default AppLayout
