// !! This is a workaround to calculate the body's x position because javascripts in SVG won't execute on GitHub readmes. !!

// font-wight: 500;
// font-size: 16px;
// font-family: Ubuntu, 'Segoe UI', Sans-Serif

// The below char width are related with the above font styles
const widthMap = {
    "0": 9, "1": 9, "2": 9, "3": 9, "4": 9, "5": 9, "6": 9, "7": 9, "8": 9, "9": 9, " ": 4, ".": 4, "B": 10, "K": 10, "M": 14 
}

const getBodyXPos = (body, cardWidth) => {
    const strings = [
        body.subscribers.value,
        body.views.value,
        body.videos.value,
    ];
    let maxWidth = 0;
    let stringWidth = 0;
    for (const string of strings) {
        stringWidth = 0;
        for(const char of string){
            stringWidth += widthMap[char];
        }
        maxWidth = Math.max(maxWidth, stringWidth);
    }
    const bodyWidth = 210 + parseInt(maxWidth);
    return (cardWidth - bodyWidth) / 2;
};

export default getBodyXPos;
