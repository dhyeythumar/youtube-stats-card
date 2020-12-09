// Collecting youtube channel stats

const { ChannelError } = require("../common/utils");
const request = require('superagent')
require("dotenv").config();

const getYoutubeChannelData = async (channelID) => {

    if (!channelID) {
        throw new ChannelError("No Channel ID provided");
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
            throw new ChannelError("Could not fetch the channel data", ChannelError.CHANNEL_NOT_FOUND);
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
    else {
        throw new ChannelError(`[ERR] API responded with ${res.statusCode}!!`,
            ChannelError.CHANNEL_API_ERROR
        );
    }
}

module.exports = getYoutubeChannelData;