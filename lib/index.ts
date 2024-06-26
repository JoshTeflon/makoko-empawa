import { Facebook, Instagram, Linkedin, X } from "@/components/icons";
import { FooterLinks, SocialLinks } from "@/types";

export const socialLinks: SocialLinks[] = [
  {
    href: '/',
    icon: Facebook,
    label: 'Facebook',
  },
  {
    href: '/',
    icon: Linkedin,
    label: 'Linkedin',
  },
  {
    href: '/',
    icon: X,
    label: 'X',
  },
  {
    href: '/',
    icon: Instagram,
    label: 'Instagram',
  },
];

export const footerLinks: FooterLinks[] = [
  {
    header: 'Navigation',
    items: ['Gallery', 'Our Story', 'Blog', 'Contact']
  },
  {
    header: 'About Us',
    items: ['Services', 'Contact', 'Address']
  },
  {
    header: 'Help',
    items: ['Donate', 'Partner', 'Volunteer']
  },
];