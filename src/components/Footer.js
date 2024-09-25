import React from 'react';

function Footer({ siteLinks, myEmailId, myAddress }) {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="text-center pt-4 pb-4">
        <p className="text-sm">&copy; {new Date().getFullYear()} Nikhil Singh. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
