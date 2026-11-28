/**
 * Existing The Condo Files long-form videos, placed on the published guide
 * that best matches each topic. Metadata comes from YouTube oEmbed and the
 * channel Atom feed (retrieved 2026-11-27). Do not invent titles, dates, or
 * view counts. Shorts are deliberately omitted.
 */
export interface GuideVideo {
  id: string;
  title: string;
  uploadDate: string;
  thumbnailUrl: string;
  contentUrl: string;
  embedUrl: string;
  channelName: string;
  channelUrl: string;
}

const CHANNEL_NAME = 'The Condo Files';
const CHANNEL_URL = 'https://www.youtube.com/@TheCondoFiles';

function video(id: string, title: string, uploadDate: string): GuideVideo {
  return {
    id,
    title,
    uploadDate,
    thumbnailUrl: `https://i.ytimg.com/vi/${id}/hqdefault.jpg`,
    contentUrl: `https://www.youtube.com/watch?v=${id}`,
    embedUrl: `https://www.youtube.com/embed/${id}`,
    channelName: CHANNEL_NAME,
    channelUrl: CHANNEL_URL,
  };
}

/** slug → video. One long-form video per guide. */
export const guideVideos: Record<string, GuideVideo> = {
  'condo-special-assessments-illinois': video(
    'nB2-wqg-UQY',
    '120K ROOF / WHO PAYS-Bord meeting went WRONG!',
    '2026-10-20T06:04:28+00:00',
  ),
  'common-condo-rule-violations-chicago': video(
    'KZa0hPrQoL0',
    "Upstairs Neighbor Too Loud? What Your Condo Board Can (and Can't) Do",
    '2026-10-18T00:20:51+00:00',
  ),
  'who-pays-condo-water-leak-illinois': video(
    'b5Vm-u9_B8o',
    'Who Is Responsible for a Condo Leak? Board, Manager or Owner',
    '2026-10-17T12:47:47+00:00',
  ),
};

export function getGuideVideo(slug: string): GuideVideo | undefined {
  return guideVideos[slug];
}

export function videoObjectSchema(video: GuideVideo) {
  return {
    '@context': 'https://schema.org',
    '@type': 'VideoObject',
    name: video.title,
    thumbnailUrl: video.thumbnailUrl,
    uploadDate: video.uploadDate,
    embedUrl: video.embedUrl,
    contentUrl: video.contentUrl,
    publisher: {
      '@type': 'Organization',
      name: video.channelName,
      url: video.channelUrl,
    },
  };
}
