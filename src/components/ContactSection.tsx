import { Mail } from "lucide-react";

export const ContactSection = () => {
  return (
    <div className="text-center mt-12">
      <h2 className="text-xl font-semibold mb-4">Contact Us</h2>
      <div className="flex items-center justify-center gap-2 text-primary">
        <Mail size={20} />
        <a href="mailto:info@dubai-hospital.com" className="hover:underline">
          info@dubai-hospital.com
        </a>
      </div>
    </div>
  );
};