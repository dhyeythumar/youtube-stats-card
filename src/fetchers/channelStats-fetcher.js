// Collecting youtube channel stats

const { YTStatsRequestError } = require("../common/utils");
const request = require('superagent')
require("dotenv").config();

const fetchChannelStats = async (channelID) => {

    if (!channelID) {
        throw new YTStatsRequestError("No Channel ID provided");
    }

    let res = await request.get('https://youtube.googleapis.com/youtube/v3/channels')
        .query({ key: process.env.YT_KEY })
        // .query({ forUsername: username })
        .query({ id: channelID })
        .query({ part: 'snippet,statistics,status' })
        .query({ maxResults: 1 })
        .set('Accept', 'application/json')

    if (res.statusCode == 200) {
        if (res.body.pageInfo.totalResults == 0) {
            throw new YTStatsRequestError("Could not fetch the channel data", YTStatsRequestError.CHANNEL_NOT_FOUND);
        }

        res = res.body.items[0];
        const stats = {
            title: res.snippet.title,
            logoURL: res.snippet.thumbnails.default.url,
            viewCount: res.statistics.viewCount,
            subscriberCount: res.statistics.subscriberCount,
            videoCount: res.statistics.videoCount,
            publishedAt: res.snippet.publishedAt,
            channelStatus: res.status.privacyStatus
        }
        return stats;
    }
    else if (res.statusCode == 403 && res.statusMessage == "quotaExceeded") {
        throw new YTStatsRequestError("YouTube API quota exceeded for this day !!", YTStatsRequestError.QUOTA_EXCEEDED
        );
    }
    else {
        throw new YTStatsRequestError(`[ERR] API responded with ${res.statusCode} !!`, YTStatsRequestError.CHANNEL_API_ERROR
        );
    }
}

module.exports = fetchChannelStats;