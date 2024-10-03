import { ArrowLeft, ArrowRight, Facebook, Instagram, Linkedin, X } from "@/components/icons";
import { BrainItem, FooterLinks, GalleryItem, NavigationArrow, SocialLinks, Testimony, WorkflowItem } from "@/types";

import WorkflowFirst from "@/public/workflow[0].png";
import WorkflowSecond from "@/public/workflow[1].png";
import WorkflowThird from "@/public/workflow[2].png";
import GalleryFirst from "@/public/gallery[0].png";
import GallerySecond from "@/public/gallery[1].png";
import GalleryThird from "@/public/gallery[2].png";
import GalleryFourth from "@/public/gallery[3].png";
import GalleryFifth from "@/public/gallery[4].png";
import TestimonialFirst from "@/public/testimonial[0].png";
import TestimonialSecond from "@/public/testimonial[1].png";
import TestimonialThird from "@/public/testimonial[2].png";

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

export const workflowList: WorkflowItem[] = [
  {
    src: WorkflowFirst,
    title: 'SCHOLARSHIP',
    note: 'Opportunities'
  },
  {
    src: WorkflowSecond,
    title: 'TECH MENTORSHIP'
  },
  {
    src: WorkflowThird,
    title: 'FOOD BANK',
    note: 'Sponsored by Lagos State'
  },
];

export const galleryList: GalleryItem[] = [
  {
    src: GalleryFirst,
    title: 'SPORT BROADCAST',
  },
  {
    src: GallerySecond,
    title: 'A LOVE STORY'
  },
  {
    src: GalleryThird,
    title: 'A DAY IN IBADUN ZOO',
  },
  {
    src: GalleryFourth,
    title: 'LET THERE BE LIGHT',
  },
  {
    src: GalleryFifth,
    title: 'LET THERE BE LIGHT',
  },
];

export const BrainList: BrainItem[] = [
  {
    // src: _,
    name: 'Anthony Miracle',
    role: 'Head Logistics',
  },
  {
    // src: _,
    name: 'Durodula Damilola',
    role: 'Head Walfare',
  },
  {
    // src: _,
    name: 'Harrison Ogunsemore',
    role: 'Head Foodbank',
  },
  {
    // src: _,
    name: 'Enikele Joshua',
    role: 'Head Socials',
  },
];

export const navigationArrows: NavigationArrow[] = [
  {
    label: 'right-button',
    icon: ArrowRight,
    action: () => null
  },
  {
    label: 'left-button',
    icon: ArrowLeft,
    action: () => null
  }
];

export const testimonies: Testimony[] = [
  {
    id: 0,
    name: "Timothy Cruise",
    occupation: "Trader",
    src: TestimonialFirst,
    note: "Witnessing the dedication and passion of the team in bringing hope and renewal to our community has truly inspired me  Through their efforts, I've seen tangible improvements in our daily lives."
  },
  {
    id: 1,
    name: "Fatima Mohamad",
    occupation: "Trader",
    src: TestimonialSecond,
    note: "I've lived in Makoko for as long as I can remember, and I've seen the challenges we face every day. But since [Organization Name] stepped in, I've witnessed a remarkable change."
  },
  {
    id: 2,
    name: "Ali Salako",
    occupation: "Student",
    src: TestimonialThird,
    note: "From providing access to clean water and healthcare services to creating opportunities for education."
  }
]