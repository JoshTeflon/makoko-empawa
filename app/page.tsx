import { AboutUs, Banner, Landing, Services } from "@/components/views";

export default function Home() {
  return (
    <main className="mt-32 lg:mt-[9.75rem] min-h-screen">
      <Landing />
      <Banner />
      <Services />
      <div className="section-border"></div>
      <AboutUs />
      <div className="section-border"></div>
    </main>
  );
}
