// Collecting youtube video stats

import { YTStatsRequestError } from "../common/utils.js";
import request from 'superagent';

const fetchVideoStats = async (videoID) => {

    if (!videoID) {
        throw new YTStatsRequestError("No Video ID provided");
    }

    let res = await request.get('https://youtube.googleapis.com/youtube/v3/videos')
        .query({ key: process.env.YT_KEY })
        .query({ id: videoID })
        .query({ part: 'snippet,statistics,status' })
        .query({ maxResults: 1 })
        .set('Accept', 'application/json')

    if (res.statusCode == 200) {
        if (res.body.pageInfo.totalResults == 0) {
            throw new YTStatsRequestError("Could not fetch the video data", YTStatsRequestError.VIDEO_NOT_FOUND);
        }

        res = res.body.items[0];
        if (res.status.privacyStatus === "private") {
            throw new YTStatsRequestError("The following video is private", YTStatsRequestError.PRIVATE_VIDEO);
        }
        else if (res.status.uploadStatus === "deleted") {
            throw new YTStatsRequestError("The following video is deleted", YTStatsRequestError.VIDEO_DELETED);
        }
        else {
            const thumbnailTypes = ["maxres", "standard", "high", "medium"];
            let thumbnailURL = res.snippet.thumbnails.default.url;

            thumbnailTypes.every((thumbnailType) => {
                if (res.snippet.thumbnails[thumbnailType]) {
                    thumbnailURL = res.snippet.thumbnails[thumbnailType].url
                    return false;
                }
            });

            const stats = {
                title: res.snippet.title,
                videoPreviewURL: thumbnailURL,
                channelTitle: res.snippet.channelTitle,
                viewCount: res.statistics.viewCount,
                likeCount: res.statistics.likeCount,
                dislikeCount: res.statistics.dislikeCount,
                commentCount: res.statistics.commentCount,
                // publishedAt: res.snippet.publishedAt
            }
            return stats;
        }
    }
    else if (res.statusCode == 403 && res.statusMessage == "quotaExceeded") {
        throw new YTStatsRequestError("YouTube API quota exceeded for this day !!", YTStatsRequestError.QUOTA_EXCEEDED
        );
    }
    else {
        throw new YTStatsRequestError(`[ERR] API responded with ${res.statusCode} !!`, YTStatsRequestError.VIDEO_API_ERROR
        );
    }
}

export default fetchVideoStats;