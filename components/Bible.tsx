import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Share2, ChevronDown, ChevronRight } from "lucide-react";

export default function AppLandingPage() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <h1 className="text-4xl font-bold mb-4">
              Santa Biblia RV60: Audio
            </h1>
            <p className="text-gray-400 mb-4">By Luis_Martinez</p>
            <div className="flex items-center space-x-4 mb-4">
              <div className="flex items-center">
                <Image
                  src="/placeholder.svg?height=24&width=24"
                  width={24}
                  height={24}
                  alt="Downloads icon"
                  className="mr-2"
                />
                <span>100+ Downloads</span>
              </div>
              <div className="flex items-center">
                <Image
                  src="/placeholder.svg?height=24&width=24"
                  width={24}
                  height={24}
                  alt="Everyone icon"
                  className="mr-2"
                />
                <span>Everyone</span>
              </div>
            </div>
            <div className="flex space-x-4 mb-8">
              <Button className="bg-green-600 hover:bg-green-700">
                Install on more devices
              </Button>
              <Button variant="outline" className="text-white border-white">
                <Share2 className="mr-2 h-4 w-4" /> Share
              </Button>
            </div>
            <p className="text-sm text-gray-400">
              This app is available for all of your devices
            </p>
            <p className="text-sm text-gray-400">
              You can share this with your family.{" "}
              <a href="#" className="text-blue-400 hover:underline">
                Learn more about Family Library
              </a>
            </p>
          </div>
          <div className="relative h-[400px] w-full">
            <Image
              src="/placeholder.svg?height=400&width=300"
              layout="fill"
              objectFit="contain"
              alt="App screenshot"
            />
          </div>
        </div>

        <div className="mt-16">
          <h2 className="text-2xl font-bold mb-4">App Screenshots</h2>
          <div className="flex overflow-x-auto space-x-4 pb-4">
            {[1, 2, 3, 4, 5].map((i) => (
              <Image
                key={i}
                src={`/placeholder.svg?height=300&width=150`}
                width={150}
                height={300}
                alt={`App screenshot ${i}`}
                className="rounded-lg"
              />
            ))}
          </div>
        </div>

        <div className="mt-16">
          <h2 className="text-2xl font-bold mb-4 flex items-center">
            App support <ChevronDown className="ml-2 h-6 w-6" />
          </h2>
        </div>

        <div className="mt-16">
          <h2 className="text-2xl font-bold mb-4 flex items-center justify-between">
            More apps to try
            <ChevronRight className="h-6 w-6" />
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {["Microsoft Outlook Lite: Email", "Evernote - Note Organizer"].map(
              (app, index) => (
                <Card key={index} className="bg-gray-800">
                  <CardContent className="flex items-center p-4">
                    <Image
                      src="/placeholder.svg?height=48&width=48"
                      width={48}
                      height={48}
                      alt={`${app} icon`}
                      className="mr-4"
                    />
                    <div>
                      <h3 className="font-semibold">{app}</h3>
                      <p className="text-sm text-gray-400">
                        {index === 0
                          ? "Microsoft Corporation"
                          : "Evernote Corporation"}
                      </p>
                      <div className="flex items-center mt-1">
                        <span className="text-yellow-400">★★★★☆</span>
                        <span className="ml-1 text-sm text-gray-400">
                          {index === 0 ? "4.8" : "4.4"}
                        </span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              )
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
