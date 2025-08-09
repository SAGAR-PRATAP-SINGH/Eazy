import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="border-t mt-10">
      <div className="container py-8 text-sm flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-muted-foreground">© {new Date().getFullYear()} Eazy</p>
        <div className="flex items-center gap-4">
          <Link to="#" className="hover:underline">Contact</Link>
          <Link to="#" className="hover:underline">Privacy</Link>
          <Link to="#" className="hover:underline">Terms</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
