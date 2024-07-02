import Link from "next/link";
import { Button } from "../interface";

const Header: React.FC = () => {
  const navItems: string[] = ['Gallery', 'Our Story', 'Blog', 'Contact'];

  return (
    <header className="fixed top-0 z-50 w-full h-32 lg:h-[9.75rem] bg-main/95 backdrop-blur">
      <div className="width-balance h-full flex items-center justify-between">
        <Link href="/">
          <span className="text-black/50 text-2xl lg:text-3xl font-bold uppercase">MAKOKO</span>
        </Link>
        <nav className="w-full flex items-center justify-end">
          <ul className="hidden lg:flex items-center">
            {
              navItems?.map((item: string, idx: number) => (
                <li key={item} className="text-black/50 flex items-center">
                  <Link href="/" className="text-sm lg:text-base font-medium whitespace-nowrap">{item}</Link>
                  {idx !== 3 && <div className="mx-6 lg:mx-7 h-5 border-l border-current"></div>}
                </li>
              ))
            }
          </ul>
          <Button
            variant="primary"
            className="ml-6 lg:ml-7 max-w-[8.25rem] lg:max-w-[10.5rem]"
          >
            Donate Now
          </Button>
        </nav>
      </div>
    </header>
  )
}

export default Header;