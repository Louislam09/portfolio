import { Mail, Phone, MapPin } from "lucide-react";
import meData from "@/constants/data";

export function Contact() {
  return (
    <section className="mb-8">
      <h2 className="text-2xl font-bold mb-4">Contact</h2>
      <div className="space-y-2">
        <div className="flex items-center space-x-2">
          <MapPin className="h-5 w-5" />
          <p>{meData.profile.contact.location}</p>
        </div>
        <div className="flex items-center space-x-2">
          <Mail className="h-5 w-5" />
          <p>{meData.profile.contact.email}</p>
        </div>
        <div className="flex items-center space-x-2">
          <Phone className="h-5 w-5" />
          <p>{meData.profile.contact.phone}</p>
        </div>
      </div>
    </section>
  );
}
