// export type ImageSrc = string | { [key: string]: string };

export interface CardData {
  imageSrc: string;
  title: string;
  description: string;
  githubLink: string;
  liveDemo: string;
  tools: string[];
}

export interface ProjectDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  project: CardData | null;
}
