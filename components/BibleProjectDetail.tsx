import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  ArrowLeft,
  ExternalLink,
  Book,
  Search,
  BookOpen,
  Smartphone,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export function BibleProjectDetail() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-100 to-white dark:from-gray-900 dark:to-gray-800 text-gray-900 dark:text-white">
      <div className="container mx-auto px-4 py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Link href="/" passHref>
            <Button variant="outline" className="mb-8">
              <ArrowLeft className="mr-2 h-4 w-4" /> Back to Portfolio
            </Button>
          </Link>

          <h1 className="text-4xl font-bold mb-4">Santa Escritura</h1>
          <p className="text-xl mb-8">Your Digital Spiritual Companion</p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="flex justify-center items-center">
              <Image
                src="/adaptive-icon.png"
                alt="Santa Escritura App Icon"
                width={300}
                height={300}
                className="rounded-lg shadow-lg"
              />
            </div>
            <div>
              <h2 className="text-2xl font-semibold mb-4">About the Project</h2>
              <p className="mb-4">
                {`\"Santa Escritura\"`} is your digital spiritual companion,
                providing easy and quick access to sacred texts. This intuitive
                and user-friendly application allows users to explore verses,
                search for books and chapters, and immerse themselves in a
                spiritual study experience.
              </p>
              <Button className="mb-4">
                <a
                  href="https://play.google.com/store/apps/details?id=com.louislam09.bible"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center"
                >
                  View on Google Play <ExternalLink className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </div>
          </div>

          <h2 className="text-2xl font-semibold mb-4">Key Features</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            {[
              {
                icon: <Book className="h-8 w-8 mb-2" />,
                title: "Extensive Library",
                description:
                  "Access a comprehensive collection of biblical texts",
              },
              {
                icon: <Search className="h-8 w-8 mb-2" />,
                title: "Powerful Search",
                description: "Easily find specific verses, books, or topics",
              },
              {
                icon: <BookOpen className="h-8 w-8 mb-2" />,
                title: "Study Tools",
                description: "Annotations, bookmarks, and cross-references",
              },
              {
                icon: <Smartphone className="h-8 w-8 mb-2" />,
                title: "Mobile Optimized",
                description: "Seamless experience on smartphones and tablets",
              },
            ].map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md"
              >
                {feature.icon}
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p>{feature.description}</p>
              </motion.div>
            ))}
          </div>

          <h2 className="text-2xl font-semibold mb-4">Technologies Used</h2>
          <ul className="list-disc list-inside mb-8">
            <li>React Native</li>
            <li>Expo</li>
            <li>JavaScript</li>
            <li>RESTful APIs for Bible text retrieval</li>
            <li>AsyncStorage for local data persistence</li>
          </ul>

          <h2 className="text-2xl font-semibold mb-4">Future Enhancements</h2>
          <ul className="list-disc list-inside mb-8">
            <li>Multiple language support</li>
            <li>Audio playback of verses</li>
            <li>Community features for sharing insights</li>
            <li>Integration with additional study resources</li>
          </ul>

          <Button className="mt-4">
            <a
              href="https://play.google.com/store/apps/details?id=com.louislam09.bible"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center"
            >
              Download Santa Escritura <ExternalLink className="ml-2 h-4 w-4" />
            </a>
          </Button>
        </motion.div>
      </div>
    </div>
  );
}
