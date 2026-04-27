
import "./globals.css";

export const metadata = {
  title: "Boutique Mihi - Arnaud Bain",
  description: "Partenaire Indépendant Mihi",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  );
}
