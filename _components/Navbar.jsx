import { Button } from "@/components/ui/button";

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center p-5 bg-gray-900 shadow-md sticky top-0 z-50">
      <h2 className="text-2xl font-bold text-blue-400">Vivek Saha</h2>
      <div className="space-x-4">
        <Button variant="ghost" asChild>
          <a href="/">Home</a>
        </Button>
        <Button variant="ghost" asChild>
          <a href="/about">About</a>
        </Button>
        <Button variant="ghost" asChild>
          <a href="/projects">Projects</a>
        </Button>
        <Button variant="ghost" asChild>
          <a href="/skills">Skills</a>
        </Button>
        <Button variant="ghost" asChild>
          <a href="/contact">Contact</a>
        </Button>
      </div>
    </nav>
  );
}
