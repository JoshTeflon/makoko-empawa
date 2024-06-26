import { SVGProps } from "react";

export interface SocialLinks {
  icon: React.ComponentType<SVGProps<SVGSVGElement>>
  href: string
  label?: string
}

export interface FooterLinks {
  header: string
  items: string[]
}