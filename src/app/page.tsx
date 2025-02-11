import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="container mx-auto px-4 min-h-screen bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500">
      {/* Hero Section */}
      <section className="py-20 text-center backdrop-blur-lg bg-white/30 rounded-2xl my-8 shadow-lg">
        <h1 className="text-5xl font-bold mb-6">Welcome to Our Platform</h1>
        <p className="text-xl text-gray-600 mb-8">Discover amazing features and possibilities</p>
        <Link 
          href="/contact" 
          className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition duration-300"
        >
          Get Started
        </Link>
      </section>

      {/* Features Section */}
      <section className="py-16 backdrop-blur-lg bg-white/20 rounded-2xl my-8 shadow-lg">
        <h2 className="text-3xl font-bold text-center mb-12 text-white">Our Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-4">
          {/* Feature 1 */}
          <div className="p-6 rounded-lg backdrop-blur-lg bg-white/20 border border-white/30 shadow-lg hover:bg-white/30 transition">
            <div className="text-4xl mb-4">🚀</div>
            <h3 className="text-xl font-semibold mb-2 text-white">Fast Performance</h3>
            <p className="text-gray-100">Lightning-fast loading times and smooth interactions.</p>
          </div>
          {/* Feature 2 */}
          <div className="p-6 rounded-lg backdrop-blur-lg bg-white/20 border border-white/30 shadow-lg hover:bg-white/30 transition">
            <div className="text-4xl mb-4">🛡️</div>
            <h3 className="text-xl font-semibold mb-2 text-white">Secure</h3>
            <p className="text-gray-100">Enterprise-grade security for your peace of mind.</p>
          </div>
          {/* Feature 3 */}
          <div className="p-6 rounded-lg backdrop-blur-lg bg-white/20 border border-white/30 shadow-lg hover:bg-white/30 transition">
            <div className="text-4xl mb-4">💡</div>
            <h3 className="text-xl font-semibold mb-2 text-white">Innovative</h3>
            <p className="text-gray-100">Cutting-edge features and continuous updates.</p>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 backdrop-blur-lg bg-white/20 rounded-2xl my-8 shadow-lg">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8 text-white">About Us</h2>
          <p className="text-gray-100 text-center mb-8">
            We are dedicated to providing the best possible experience for our users.
            Our team works tirelessly to ensure quality and innovation in everything we do.
          </p>
          <div className="flex justify-center">
            <Image
              src="/placeholder-image.jpg"
              alt="About Us"
              width={600}
              height={400}
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 backdrop-blur-lg bg-white/20 rounded-2xl my-8 shadow-lg">
        <div className="max-w-2xl mx-auto text-center px-4">
          <h2 className="text-3xl font-bold mb-8 text-white">Get in Touch</h2>
          <p className="text-gray-100 mb-8">
            Have questions? We love to hear from you. Send us a message and we will respond as soon as possible.
          </p>
          <form className="space-y-4">
            <div>
              <input
                type="text"
                placeholder="Your Name"
                className="w-full px-4 py-2 rounded-lg bg-white/20 border border-white/30 backdrop-blur-sm text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-white/50"
              />
            </div>
            <div>
              <input
                type="email"
                placeholder="Your Email"
                className="w-full px-4 py-2 rounded-lg bg-white/20 border border-white/30 backdrop-blur-sm text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-white/50"
              />
            </div>
            <div>
              <textarea
                placeholder="Your Message"
                rows={4}
                className="w-full px-4 py-2 rounded-lg bg-white/20 border border-white/30 backdrop-blur-sm text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-white/50"
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-white/20 backdrop-blur-sm text-white px-8 py-3 rounded-lg hover:bg-white/30 transition duration-300 border border-white/30"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 backdrop-blur-lg bg-white/20 rounded-2xl my-8 shadow-lg">
        <div className="max-w-2xl mx-auto text-center px-4">
          <h2 className="text-3xl font-bold mb-4 text-white">Subscribe to Our Newsletter</h2>
          <p className="mb-8 text-gray-100">Stay updated with our latest news and updates.</p>
          <div className="flex gap-4 justify-center">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-4 py-2 rounded-lg bg-white/20 border border-white/30 backdrop-blur-sm text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-white/50 w-64"
            />
            <button className="bg-white/20 backdrop-blur-sm text-white px-6 py-2 rounded-lg hover:bg-white/30 transition duration-300 border border-white/30">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </div>
  );
} 
  
    