// Channel logo elements

const getClipPath = () => {
    return `<clipPath id="imgholder" transform="translate(0 0)">
        <circle class="card-logo" cx="40" cy="40" r="40"/>
    </clipPath>`;
}

const getLOGO = (url) => {
    return `<image transform="translate(0 0)" width="80" height="80" href="${url}" clip-path="url(#imgholder)"/>
    <g data-testid="card-logo" transform="translate(0 20)">
        <circle class="circle-rim" cx="40" cy="40" r="40"/>
    </g>`;
}

module.exports = { getClipPath, getLOGO };