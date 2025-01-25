 import "./globals.css";
export const metadata = {
  title: "Right travel",
  description: "Affordable Custom Tours, Private Trips and Vacation Packages",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
