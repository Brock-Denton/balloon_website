export type VibeType = 'soft' | 'bright' | 'bold';

export interface VibeTheme {
  background: string;
  balloonGradient: string;
  accentColor: string;
  secondaryColor: string;
}

export interface GalleryItemProps {
  image: string;
  tags: string[];
  delay?: number;
}