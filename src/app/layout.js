/* src/layout.js */

import "./globals.css";

export const metadata = {
  title: 'Euro Truck Service',
  description: 'Affordable truck service and parts',
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt">
      <body>
        {children}
      </body>
    </html>
  );
}
