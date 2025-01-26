/**
 * :: Usage Note ::
 * @file This script generates a theme preview for new entries in themes/index.js
 * @command pnpm run generate:theme-preview
 */

import { getInput, setFailed } from '@actions/core';
import { context, getOctokit } from '@actions/github';
import parse from 'parse-diff';

const getPrNumber = () => {
    const pullRequest = context.payload.pull_request;
    if (!pullRequest) return undefined;
    return pullRequest.number;
};

(async () => {
    try {
        const token = getInput('github_token') || process.env.PERSONAL_TOKEN;
        const octokit = getOctokit(token);
        const pullRequestId = getPrNumber();

        if (!pullRequestId) {
            console.error('PR not found');
            return;
        }

        const res = await octokit.rest.pulls.get({
            owner: 'dhyeythumar',
            repo: 'youtube-stats-card',
            pull_number: pullRequestId,
            mediaType: {
                format: 'diff',
            },
        });

        const diff = parse(res.data);
        const content = diff
            .find((file) => file.to === 'themes/index.js')
            .chunks.map((chunk) =>
                chunk.changes
                    .filter((c) => c.type === 'add')
                    .map((c) => c.content.replace('+', ''))
                    .join('')
            )
            .join('');
        console.log('diff content :: ', content);

        const matches = content.match(/(title_color:.*bg_color.*\")/);
        const colors = matches && matches[0].split(',');
        console.logs('colors :: ', colors);

        if (!colors) {
            await octokit.rest.issues.createComment({
                owner: 'dhyeythumar',
                repo: 'youtube-stats-card',
                issue_number: pullRequestId,
                body: `\rTheme preview generator\nCannot create theme preview`,
            });
            return;
        }

        const colorMap = colors.map((color) => color.replace(/.*\:\s/, '').replace(/\"/g, ''));
        const titleColor = colorMap[0];
        const iconColor = colorMap[1];
        const textColor = colorMap[2];
        const bgColor = colorMap[3];

        const url = `https://youtube-stats-card.vercel.app/api?channelid=UCpKizIKSk8ga_LCI3e3GUig&title_color=${titleColor}&icon_color=${iconColor}&text_color=${textColor}&bg_color=${bgColor}`;

        await octokit.rest.issues.createComment({
            owner: 'dhyeythumar',
            repo: 'youtube-stats-card',
            issue_number: pullRequestId,
            body: `
            \rTheme preview generator

            \ntitle-color: <code>#${titleColor}</code>
            \nicon-color: <code>#${iconColor}</code>
            \ntext-color: <code>#${textColor}</code>
            \nbg-color: <code>#${bgColor}</code>

            \r[![](${url})](${url})
            `,
        });
    } catch (err) {
        console.error(err);
        setFailed(err);
    }
})();
