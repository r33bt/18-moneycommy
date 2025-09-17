export default function HomePage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-24 text-center">
        <div className="inline-block px-3 py-1 mb-6 text-sm bg-blue-100 text-blue-800 rounded-full">
          ✨ Coming Soon
        </div>
        <h1 className="text-4xl md:text-6xl font-bold mb-6 text-gray-900">
          Money.com.my
        </h1>
        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
          Your trusted guide to personal finance in Malaysia. Practical advice, local insights, and tools to help Malaysians make smarter money decisions. Coming Q1 2026.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button className="px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-semibold">
            Get Notified
          </button>
          <button className="px-8 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
            Learn More
          </button>
        </div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-4 py-16 bg-gray-50">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">What&apos;s Coming</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We&apos;re building something special. Stay tuned for updates.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="text-center">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-blue-600 text-2xl">🚀</span>
            </div>
            <h3 className="text-xl font-semibold mb-2 text-gray-900">Fast</h3>
            <p className="text-gray-600">Built with modern technology for optimal performance.</p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-green-600 text-2xl">✨</span>
            </div>
            <h3 className="text-xl font-semibold mb-2 text-gray-900">Beautiful</h3>
            <p className="text-gray-600">Designed with attention to detail and user experience.</p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-purple-600 text-2xl">🎯</span>
            </div>
            <h3 className="text-xl font-semibold mb-2 text-gray-900">Powerful</h3>
            <p className="text-gray-600">Feature-rich and ready for your needs.</p>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="container mx-auto px-4 py-24 text-center">
        <h2 className="text-3xl font-bold mb-4 text-gray-900">Stay Updated</h2>
        <p className="text-gray-600 mb-8 max-w-md mx-auto">
          Be the first to know when we launch. No spam, just updates.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-md mx-auto">
          <input 
            type="email" 
            placeholder="Enter your email" 
            className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors whitespace-nowrap">
            Notify Me
          </button>
        </div>
      </section>
    </main>
  )
}
