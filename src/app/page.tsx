export default function HomePage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-cyan-50">
      <div className="text-center space-y-6 p-8">
        <div className="space-y-4">
          <h1 className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 bg-clip-text text-transparent">
            Hello World
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Welcome to your first Next.js application! This is a simple, clean, and modern Hello World page.
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-8">
          <div className="px-6 py-3 bg-white/80 backdrop-blur-sm rounded-lg shadow-lg border border-gray-200">
            <p className="text-gray-700 font-medium">Built with Next.js</p>
          </div>
          <div className="px-6 py-3 bg-white/80 backdrop-blur-sm rounded-lg shadow-lg border border-gray-200">
            <p className="text-gray-700 font-medium">Styled with Tailwind CSS</p>
          </div>
        </div>
        
        <div className="mt-12">
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
        </div>
      </div>
    </div>
  )
}