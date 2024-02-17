import { YouTube } from "mdx-embed";
interface EmbedProps {
  youTubeId: string;
}

export function Embed({ youTubeId }: EmbedProps) {
  return <YouTube youTubeId={youTubeId} />;
}
