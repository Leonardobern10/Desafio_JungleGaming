import HeaderNav from "./HeaderNav";
import HeaderLogo from "./HeaderLogo";

export default function Header() {
  return (
    <header className="w-full flex justify-between items-center px-6 md:px-40 py-4 bg-foreground/80">
      <HeaderLogo />
      <HeaderNav />
    </header>
  );
}
