import Link from "next/link";

const Header = () => {
  const navItems: string[] = ['Gallery', 'Our Story', 'Become A Volunteer', 'Contact'];

  return (
    <header className="fixed top-0 w-full h-24 lg:h-[9.75rem]">
      <div className="width-balance h-full flex items-center justify-between">
        <span className="text-black/50 text-3xl font-bold uppercase">MAKOKO</span>
        <nav className="hidden lg:block">
          <ul className="flex items-center">
            {
              navItems?.map((item: string, idx: number) => (
                <li key={item} className="text-black/50 flex items-center">
                  <Link href="/" className="text-sm lg:text-base font-medium">{item}</Link>
                  {idx !== 3 && <div className="mx-6 xl:mx-7 h-5 border-l border-current"></div>}
                </li>
              ))
            }
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header;