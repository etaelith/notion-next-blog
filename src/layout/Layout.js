import Header from "@components/Header";

export default function Layout({ children }) {
  return (
    <>
      <html className="dark">
        <Header />

        <main>{children}</main>
      </html>
    </>
  );
}
