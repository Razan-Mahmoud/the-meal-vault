type MealVideoProps = {
  youtubeUrl: string;
  title: string;
};

function getYoutubeEmbedUrl(url: string): string | null {
  if (!url?.trim()) return null;
  try {
    const videoId = new URL(url).searchParams.get("v");
    return videoId ? `https://www.youtube.com/embed/${videoId}` : null;
  } catch {
    return null;
  }
}

export default function MealVideoPage({ youtubeUrl, title }: MealVideoProps) {
  const embedUrl = getYoutubeEmbedUrl(youtubeUrl);

  if (!embedUrl) return null;

  return (
    <div className="flex w-full items-center justify-center py-4">
      <div className="w-full md:w-3/4">
        <div className="relative aspect-video w-full">
          <iframe
            src={embedUrl}
            className="h-full w-full rounded-md"
            title={`Recipe of ${title}`}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            loading="lazy"
            allowFullScreen
          />
        </div>
      </div>
    </div>
  );
}
