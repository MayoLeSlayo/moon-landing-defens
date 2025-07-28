export default function Footer() {
  return (
    <footer className="space-gradient text-white mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Moon Landing Defense</h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              An evidence-based knowledge base dedicated to preserving the truth about humanity's greatest achievement - landing on the moon.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                  Evidence Library
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                  Common Conspiracies
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                  Scientific Sources
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                  AI Assistant
                </a>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Official Resources</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a 
                  href="https://www.nasa.gov/mission_pages/apollo/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  NASA Apollo Program
                </a>
              </li>
              <li>
                <a 
                  href="https://curator.jsc.nasa.gov/lunar/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Lunar Sample Lab
                </a>
              </li>
              <li>
                <a 
                  href="https://lroc.im-ldi.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  LRO Camera
                </a>
              </li>
              <li>
                <a 
                  href="https://www.jodrellbank.net/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Jodrell Bank Observatory
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-apollo-blue mt-8 pt-8 text-center">
          <p className="text-gray-300 text-sm">
            © 2024 Moon Landing Defense System. Dedicated to scientific truth and education.
          </p>
          <p className="text-gray-400 text-xs mt-2">
            "That's one small step for man, one giant leap for mankind." - Neil Armstrong, July 20, 1969
          </p>
        </div>
      </div>
    </footer>
  );
}