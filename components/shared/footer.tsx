import Link from "next/link";
import { Button } from "../interface";
import { footerLinks, socialLinks } from "@/lib";
import { FooterLinks, SocialLinks } from "@/types";

const Footer: React.FC = () => {

  return (
    <footer className="py-16 lg:pb-10 bg-primary text-white border-t border-t-white/20">
      <div className="width-balance">
        <div className="pb-9 lg:pb-11 w-full flex flex-col lg:flex-row justify-center lg:justify-between">
          <div className="mx-auto mb-[3.75rem] lg:mx-0 lg:mb-0 max-w-[24.75rem]">
            <h6 className="text-center lg:text-start text-[1.375rem] font-medium">Get Involved.</h6>
            <p className="mt-2 mb-6 text-center lg:text-start text-base">
              Join our community and be the first to receive updates, stories, and opportunities to make a difference in Makoko
            </p>
            <div className="w-full h-14 flex items-stretch">
              <input
                className="px-5 xl:px-6 w-full bg-white text-xs md:text-sm text-black placeholder:text-black/30 outline-none border-none"
                placeholder="Email"
              />
              <Button
                className="max-w-28 md:max-w-[7.5rem]"
                variant="secondary"
                size="sm"
              >Subscribe</Button>
            </div>
          </div>
          <div className="w-full lg:w-[45%] xl:w-1/2">
            <div className="w-full text-white font-medium flex justify-between">
              {
                footerLinks.map((link: FooterLinks) => (
                  <div
                    key={link.header}
                    className="flex flex-col"
                  >
                    <h6 className="mb-5 lg:mb-6 text-lg lg:text-[1.375rem]">{link.header}</h6>
                    <ul className="space-y-4 lg:space-y-[1.125rem]">
                      {
                        link.items.map((item: string) => (
                          <li key={item} className="text-sm">
                            <Link
                              href={'/'}
                              className="cursor-pointer hover:text-secondary"
                            >{item}</Link>
                          </li>
                        ))
                      }
                    </ul>
                  </div>
                ))
              }
            </div>
          </div>
        </div>
        <div className="pt-10 flex flex-col-reverse lg:flex-row items-center justify-between border-t border-t-white/20">
          <div className="text-sm">© { new Date().getFullYear() } | Designed by Harrison Ogunsemore</div>
          <div className="mb-9 lg:mb-0 flex flex-col lg:flex-row items-center">
            <span className="mb-3 lg:mb-0 lg:mr-3.5 text-white text-[0.8rem] font-medium">Follow Us:</span>
            <ul className="flex items-center space-x-2.5">
              {
                socialLinks.map((link: SocialLinks) => (
                  <li
                    key={link.label}
                    className="w-7 h-7 lg:w-8 lg:h-8 border border-white rounded-full hover:bg-secondary hover:text-primary hover:border-secondary duration-200"
                  >
                    <Link
                      href={link.href}
                      className="w-full h-full flex items-center justify-center rounded-full"
                    >
                      {<link.icon />}
                    </Link>
                  </li>
                ))
              }
            </ul>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer;