import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Contact = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 flex flex-col items-center justify-center pt-24 pb-16 px-6">
        <h1 className="text-5xl font-display font-bold text-foreground mb-4">Contact</h1>
        <p className="text-xl text-muted-foreground">Coming Soon — full Contact page in Sprint 2.</p>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
