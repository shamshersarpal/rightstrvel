 import "./globals.css";
export const metadata = {
  title: "Right travel",
  description: "Affordable Custom Tours, Private Trips and Vacation Packages",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
       
      <script src="https://cdn.jsdelivr.net/npm/flowbite@3.0.0/dist/flowbite.min.js"></script>
        {children}
      </body>
    </html>
  );
}
