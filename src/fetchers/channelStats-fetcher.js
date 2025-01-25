// Collecting youtube channel stats

import { YTStatsRequestError } from '../common/utils.js';

const fetchChannelStats = async (channelId) => {
    if (!channelId) throw new YTStatsRequestError('No Channel ID provided');

    const params = new URLSearchParams({
        id: channelId,
        maxResults: 1,
        part: 'snippet,statistics,status',
        key: process.env.YT_KEY,
    }).toString();
    const res = await fetch(`https://youtube.googleapis.com/youtube/v3/channels?${params}`, {
        method: 'GET',
        headers: {
            Accept: 'application/json',
        },
    });

    if (res.status === 200) {
        const json = await res.json();
        if (json.pageInfo.totalResults === 0)
            throw new YTStatsRequestError('Could not fetch the channel data', YTStatsRequestError.CHANNEL_NOT_FOUND);

        const item = json.items[0];
        const stats = {
            title: item.snippet.title,
            logoURL: item.snippet.thumbnails.default.url,
            viewCount: item.statistics.viewCount,
            subscriberCount: item.statistics.subscriberCount,
            videoCount: item.statistics.videoCount,
            // publishedAt: item.snippet.publishedAt,
            // channelStatus: item.status.privacyStatus
        };
        return stats;
    } else if (res.status === 403 && res.statusText == 'quotaExceeded') {
        throw new YTStatsRequestError('YouTube API quota exceeded for this day !!', YTStatsRequestError.QUOTA_EXCEEDED);
    } else {
        throw new YTStatsRequestError(
            `[ERR] API responded with ${res.status} !!`,
            YTStatsRequestError.CHANNEL_API_ERROR
        );
    }
};

export default fetchChannelStats;
