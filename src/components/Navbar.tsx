import Link from 'next/link';
import Image from 'next/image';

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-2xl font-bold flex items-center">
          <Image src="/path/to/logo.png" alt="Logo" width={50} height={50} className="mr-2" />
          Float Glass
        </div>
        <div className="space-x-4">
          <Link href="/" className="text-gray-300 hover:text-white">Home</Link>
          <Link href="/about" className="text-gray-300 hover:text-white">About</Link>
          <Link href="/services" className="text-gray-300 hover:text-white">Services</Link>
          <Link href="/contact" className="text-gray-300 hover:text-white">Contact</Link>
          <Link href="/login" className="text-gray-300 hover:text-white">Login</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;