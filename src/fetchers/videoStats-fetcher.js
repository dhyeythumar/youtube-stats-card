// Collecting youtube video stats

import { YTStatsRequestError } from '../common/utils.js';

const fetchVideoStats = async (videoId) => {
    if (!videoId) throw new YTStatsRequestError('No Video ID provided');

    const params = new URLSearchParams({
        id: videoId,
        maxResults: 1,
        part: 'snippet,statistics,status',
        key: process.env.YT_KEY,
    }).toString();
    const res = await fetch(`https://youtube.googleapis.com/youtube/v3/videos?${params}`, {
        method: 'GET',
        headers: {
            Accept: 'application/json',
        },
    });

    if (res.status === 200) {
        const json = await res.json();
        if (json.pageInfo.totalResults === 0)
            throw new YTStatsRequestError('Could not fetch the video data', YTStatsRequestError.VIDEO_NOT_FOUND);

        const item = json.items[0];
        if (item.status.privacyStatus === 'private') {
            throw new YTStatsRequestError('The following video is private', YTStatsRequestError.PRIVATE_VIDEO);
        } else if (item.status.uploadStatus === 'deleted') {
            throw new YTStatsRequestError('The following video is deleted', YTStatsRequestError.VIDEO_DELETED);
        } else {
            const thumbnailTypes = ['maxres', 'standard', 'high', 'medium'];
            let thumbnailURL = item.snippet.thumbnails.default.url;

            thumbnailTypes.every((thumbnailType) => {
                if (item.snippet.thumbnails[thumbnailType]) {
                    thumbnailURL = item.snippet.thumbnails[thumbnailType].url;
                    return false;
                }
            });

            const stats = {
                title: item.snippet.title,
                videoPreviewURL: thumbnailURL,
                channelTitle: item.snippet.channelTitle,
                viewCount: item.statistics.viewCount,
                likeCount: item.statistics.likeCount,
                dislikeCount: item.statistics.dislikeCount,
                commentCount: item.statistics.commentCount,
                // publishedAt: item.snippet.publishedAt
            };
            return stats;
        }
    } else if (res.status == 403 && res.statusText == 'quotaExceeded') {
        throw new YTStatsRequestError('YouTube API quota exceeded for this day !!', YTStatsRequestError.QUOTA_EXCEEDED);
    } else {
        throw new YTStatsRequestError(`[ERR] API responded with ${res.status} !!`, YTStatsRequestError.VIDEO_API_ERROR);
    }
};

export default fetchVideoStats;
