import NavBar from "../components/NavBar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className={``}>
      <NavBar />
      {children}
    </main>
  );
}
