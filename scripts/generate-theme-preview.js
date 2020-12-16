// Working :: This is used to check the preview of new theme in PR

const core = require("@actions/core");
const github = require("@actions/github");
const parse = require("parse-diff");
require("dotenv").config();

const getPrNumber = () => {
    const pullRequest = github.context.payload.pull_request;
    if (!pullRequest) {
        return undefined;
    }
    return pullRequest.number;
}

const run = async () => {
    try {
        const token = core.getInput("token");
        const octokit = github.getOctokit(token || process.env.PERSONAL_TOKEN);
        const pullRequestId = getPrNumber();

        if (!pullRequestId) {
            console.log("PR not found");
            return;
        }

        let res = await octokit.pulls.get({
            owner: "dhyeythumar",
            repo: "youtube-stats-card",
            pull_number: pullRequestId,
            mediaType: {
                format: "diff",
            },
        });

        let diff = parse(res.data);
        let colorStrings = diff
            .find((file) => file.to === "themes/index.js")
            .chunks[0].changes.filter((c) => c.type === "add")
            .map((c) => c.content.replace("+", ""))
            .join("");

        let matches = colorStrings.match(/(title_color:.*bg_color.*\")/);
        let colors = matches && matches[0].split(",");

        if (!colors) {
            await octokit.issues.createComment({
                owner: "dhyeythumar",
                repo: "youtube-stats-card",
                body: `
                \rTheme preview generator
                Cannot create theme preview
                `,
                issue_number: pullRequestId,
            });
            return;
        }

        colors = colors.map((color) =>
            color.replace(/.*\:\s/, "").replace(/\"/g, "")
        );

        let titleColor = colors[0];
        let iconColor = colors[1];
        let textColor = colors[2];
        let bgColor = colors[3];

        const url = `https://youtube-stats-card.vercel.app/api?channelid=UCpKizIKSk8ga_LCI3e3GUig&title_color=${titleColor}&icon_color=${iconColor}&text_color=${textColor}&bg_color=${bgColor}`;

        await octokit.issues.createComment({
            owner: "dhyeythumar",
            repo: "youtube-stats-card",
            body: `
            \rTheme preview generator
            
            \ntitle-color: <code>#${titleColor}</code>
            \nicon-color: <code>#${iconColor}</code>
            \ntext-color: <code>#${textColor}</code>
            \nbg-color: <code>#${bgColor}</code>
      
            \r[![](${url})](${url})
            `,
            issue_number: pullRequestId,
        });
    } catch (error) {
        console.log(error);
    }
}

run();
