const Footer = () => {
    return (
      <footer className="bg-gray-900 text-white py-6 text-center">
        <div className="container mx-auto">
          <p className="text-sm">© {new Date().getFullYear()} Your Website. All rights reserved.</p>
          <div className="flex justify-center gap-4 mt-2">
            <a href="#" className="hover:text-gray-400">Privacy Policy</a>
            <a href="#" className="hover:text-gray-400">Terms of Service</a>
            <a href="#" className="hover:text-gray-400">Contact</a>
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  