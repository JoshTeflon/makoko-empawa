import {
  AboutUs,
  Banner,
  Brains,
  Gallery,
  HelpAction,
  Landing,
  Services,
  Testimonials
} from "@/components/views";

export default function Home() {
  return (
    <main className="mt-32 lg:mt-[9.75rem] min-h-screen">
      <Landing />
      <Banner />
      <Services />
      <div className="section-border"></div>
      <AboutUs />
      <div className="section-border"></div>
      <Gallery />
      <div className="section-border"></div>
      <Brains />
      <div className="section-border"></div>
      <HelpAction />
      <Testimonials />
    </main>
  );
}
