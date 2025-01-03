import {
  CodeIcon,
  LucideIcon,
  ZapIcon,
  BookIcon,
  GithubIcon,
} from "lucide-react";
import { Button } from "./components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "./components/ui/card";

type CardProps = {
  icon: LucideIcon;
  title: string;
  description: string;
};

const cards: CardProps[] = [
  {
    icon: CodeIcon,
    title: "TypeScript",
    description: "Strongly typed JavaScript for better developer experience",
  },
  {
    icon: ZapIcon,
    title: "Shadcn UI",
    description: "Modular and styled components for consistent UI",
  },
  {
    icon: BookIcon,
    title: "Zustand",
    description: "State management library",
  },
];

function App() {
  return (
    <>
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-100/50 via-purple-100/50 to-pink-100/50 dark:from-blue-950/50 dark:via-purple-950/50 dark:to-pink-950/50 blur-3xl opacity-70"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-100/40 via-transparent to-transparent dark:from-purple-950/40 blur-2xl"></div>
      </div>
      <div className="container mx-auto px-4 py-8 relative">
        <div className="flex items-center justify-between mb-12">
          <div>
            <h1 className="text-4xl font-bold text-gray-800">
              React-ts-shadtand Template
            </h1>
            <p className="text-gray-600 mt-2">
              React TypeScript Shadcn Zustand
            </p>
          </div>
          <Button asChild>
            <a
              href="https://github.com/blaiziken23/react-ts-shadtand-template"
              target="_blank"
            >
              <GithubIcon className="mr-1" />
              View on GitHub
            </a>
          </Button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {cards.map((card, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <card.icon className="h-6 w-6 mr-2 text-blue-500" />
                  {card.title}
                </CardTitle>
              </CardHeader>
              <CardContent>{card.description}</CardContent>
            </Card>
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
