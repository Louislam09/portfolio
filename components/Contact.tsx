import mockData from "@/constants/data";
import { useLanguage } from "@/context/LanguageProvider";
import { Mail, MapPin, Phone } from "lucide-react";

export function Contact() {
  const { currentLanguage: language } = useLanguage();
  return (
    <section className="mb-8">
      <h2 className="text-2xl font-bold mb-4">Contact</h2>
      <div className="space-y-2">
        <div className="flex items-center space-x-2">
          <MapPin className="h-5 w-5" />
          <p>{mockData[language].profile.contact.location}</p>
        </div>
        <div className="flex items-center space-x-2">
          <Mail className="h-5 w-5" />
          <a
            href={`mailto:${mockData[language].profile.contact.email}`}
            // href={mockData[language].profile.contact.email}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center"
          >
            {mockData[language].profile.contact.email}
          </a>
        </div>
        <div className="flex items-center space-x-2">
          <Phone className="h-5 w-5" />
          <p>{mockData[language].profile.contact.phone}</p>
        </div>
      </div>
    </section>
  );
}
