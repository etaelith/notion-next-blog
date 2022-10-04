import Header from "@components/Header";
import useDarkMode from "hooks/useDarkMode";

export default function Layout({ children }) {
  
  return (
    <>
    
      <Header />

      <main>{children}</main>
    </>
  );
}
