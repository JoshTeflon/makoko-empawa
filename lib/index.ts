import { Facebook, Instagram, Linkedin, X } from "@/components/icons";
import { FooterLinks, SocialLinks, WorkflowItem } from "@/types";
import WorkflowFirst from "@/public/workflow[0].png";
import WorkflowSecond from "@/public/workflow[1].png";
import WorkflowThird from "@/public/workflow[2].png";

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