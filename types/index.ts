import { StaticImageData } from "next/image";
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

export interface WorkflowItem {
  src: StaticImageData
  title: string
  note?: string
}

export interface GalleryItem {
  src: StaticImageData
  title?: string
}

export interface BrainItem {
  // src: StaticImageData
  name: string
  role: string
}