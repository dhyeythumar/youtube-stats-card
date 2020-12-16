<p align="center">
    <img width="160px" src="https://raw.githubusercontent.com/dhyeythumar/impression/master/youtube_stats_card_assets/icon.svg" align="center" alt="YouTube Stats Card" />
    <h2 align="center">YouTube Stats Card</h2>
    <p align="center">Get dynamically generated YouTube Stats Cards for your github readmes &amp; websites!</p>
</p>

<p align="center">
    <a href="https://youtube-stats-card.vercel.app/api?channelid=UCpKizIKSk8ga_LCI3e3GUig&layout=center&cache_seconds=14400">View Demo</a>
    ·
    <a href="https://github.com/Dhyeythumar/youtube-stats-card/issues/new/choose">Report Bug</a>
    ·
    <a href="https://github.com/Dhyeythumar/youtube-stats-card/issues/new/choose">Request Feature</a>
</p>

## What’s In This Document

- [YouTube Channel Stats Card](#youtube-channel-stats-card)
  - [Usage](#channel-usage)
  - [Layout Demos](#channel-layout-demos)
  - [Customization](#channel-customization)
  - [Overview](#channel-overview)
- [YouTube Video Stats Card](#youtube-video-stats-card)
  - [Usage](#video-usage)
  - [Layout Demos](#video-layout-demos)
  - [Customization](#video-customization)
  - [Overview](#video-overview)
- [Contribution](./CONTRIBUTING.md)
- [Support the project](#support-the-project)
- [License](#license)
- [Acknowledgements](#acknowledgements)

## YouTube Channel Stats Card

#### **<p id="channel-usage">Usage</p>**

```md
[![Dhyey's youtube stats](https://youtube-stats-card.vercel.app/api?channelid=UCpKizIKSk8ga_LCI3e3GUig)](https://www.youtube.com/channel/UCpKizIKSk8ga_LCI3e3GUig)
```

Change the `?channelid=` value to your YouTube Channel ID.

**[Check out this](https://github.com/Dhyeythumar/youtube-stats-card/discussions/1) to get your youtube channel id.**

<p style="font-weigth:700; font-size:10px;color:" align="center">
<br/> &bull; &bull; &bull; &bull;
</p>

#### **<p id="channel-layout-demos">Layout Demos</p>**

_Below layouts uses default parameters_\*

|            Layouts             |                                                                                                         Preview                                                                                                         |
| :----------------------------: | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: |
|         Default Layout         |        [![Dhyey's youtube stats](https://youtube-stats-card.vercel.app/api?channelid=UCpKizIKSk8ga_LCI3e3GUig&cache_seconds=86400)](https://www.youtube.com/channel/UCpKizIKSk8ga_LCI3e3GUig?sub_confirmation=1)        |
| Center Layout `&layout=center` | [![Dhyey's youtube stats](https://youtube-stats-card.vercel.app/api?channelid=UCpKizIKSk8ga_LCI3e3GUig&layout=center&cache_seconds=86400)](https://www.youtube.com/channel/UCpKizIKSk8ga_LCI3e3GUig?sub_confirmation=1) |

<p style="font-weigth:700; font-size:10px;color:" align="center">
<br/> &bull; &bull; &bull; &bull;
</p>

#### **<p id="channel-customization">Customization</p>**

_All the Customizations are applied to the default layout_\*

|                                             Parameters                                              |                                                                                                                                     Preview                                                                                                                                      |
| :-------------------------------------------------------------------------------------------------: | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: |
|                                    Hide Icons `&hide_icons=true`                                    |                            [![Dhyey's youtube stats](https://youtube-stats-card.vercel.app/api?channelid=UCpKizIKSk8ga_LCI3e3GUig&hide_icons=true&cache_seconds=86400)](https://www.youtube.com/channel/UCpKizIKSk8ga_LCI3e3GUig?sub_confirmation=1)                             |
|                                     Hide Logo `&hide_logo=true`                                     |                             [![Dhyey's youtube stats](https://youtube-stats-card.vercel.app/api?channelid=UCpKizIKSk8ga_LCI3e3GUig&hide_logo=true&cache_seconds=86400)](https://www.youtube.com/channel/UCpKizIKSk8ga_LCI3e3GUig?sub_confirmation=1)                             |
|                                   Color Theme `&theme=THEME_NAME`                                   |                            [![Dhyey's youtube stats](https://youtube-stats-card.vercel.app/api?channelid=UCpKizIKSk8ga_LCI3e3GUig&theme=dark_pink&cache_seconds=86400)](https://www.youtube.com/channel/UCpKizIKSk8ga_LCI3e3GUig?sub_confirmation=1)                             |
|                                   Hide Border `&hide_border=true`                                   |                            [![Dhyey's youtube stats](https://youtube-stats-card.vercel.app/api?channelid=UCpKizIKSk8ga_LCI3e3GUig&hide_border=true&cache_seconds=86400)](https://www.youtube.com/channel/UCpKizIKSk8ga_LCI3e3GUig?sub_confirmation=1)                            |
| Manual Color Theme `&title_color=cbf7db&icon_color=99ffbe`<br/>`&text_color=fffefe&bg_color=40423e` | [![Dhyey's youtube stats](https://youtube-stats-card.vercel.app/api?channelid=UCpKizIKSk8ga_LCI3e3GUig&title_color=cbf7db&icon_color=99ffbe&text_color=fffefe&bg_color=40423e&cache_seconds=86400)](https://www.youtube.com/channel/UCpKizIKSk8ga_LCI3e3GUig?sub_confirmation=1) |
|                           Custom Title `custom_title=My%20Channel%20Name`                           |                [![Dhyey's youtube stats](https://youtube-stats-card.vercel.app/api?channelid=UCpKizIKSk8ga_LCI3e3GUig&custom_title=My%20Channel%20Name%20Here&cache_seconds=86400)](https://www.youtube.com/channel/UCpKizIKSk8ga_LCI3e3GUig?sub_confirmation=1)                 |

[Check all the available color themes here](./themes/README.md) or checkout the [theme config file](./themes/index.js) & you can also contribute new themes if you like 🙂.

<p style="font-weigth:700; font-size:10px;color:" align="center">
<br/> &bull; &bull; &bull; &bull;
</p>

#### **<p id="channel-overview">Overview</p>**

You can customize the appearance of your `Channel Stats Card` with following URL params:

- `hide_icons` - Hide the icons from channel card _(boolean)_
- `hide_logo` - Hide the logo from channel card _(boolean)_
- `theme` - Name of the theme, choose from [all available themes](./themes/README.md)
- `hide_border` - Hides the card's border _(boolean)_
- `title_color` - Card's title color _(hex color)_
- `text_color` - Body text color _(hex color)_
- `icon_color` - Icons color if available _(hex color)_
- `bg_color` - Card's background color _(hex color)_
- `custom_title` - Add custom title to the channel card **_(use %20 to add space)_**
- `cache_seconds` - set the cache header manually _(min: 1800, max: 86400)_

> Note on cache: All cards have a default cache of 2 hours (7200 seconds). Also, note that the cache is clamped to a minimum of 2 hours and a maximum of 24 hours.

<p style="font-weigth:700; font-size:18px;color:" align="center">
<br/>&bull; &bull; &bull; &bull;
</p>

## YouTube Video Stats Card

#### **<p id="video-usage">Usage</p>**

```md
[![Dhyey's video stats](https://youtube-stats-card.vercel.app/api/video?videoid=4vwZNTagHsQ)](https://youtu.be/4vwZNTagHsQ)
```

Change the `?videoid=` value to your youtube video ID.

**[Check out this](https://github.com/Dhyeythumar/youtube-stats-card/discussions/2) to get your youtube video id.**

<p style="font-weigth:700; font-size:10px;color:" align="center">
<br/> &bull; &bull; &bull; &bull;
</p>

#### **<p id="video-layout-demos">Layout Demos</p>**

_Below layouts uses default parameters_\*

|             Layouts              |                                                                            Preview                                                                             |
| :------------------------------: | :------------------------------------------------------------------------------------------------------------------------------------------------------------: |
|          Default Layout          |        [![Dhyey's video stats](https://youtube-stats-card.vercel.app/api/video?videoid=4vwZNTagHsQ&cache_seconds=86400)](https://youtu.be/4vwZNTagHsQ)         |
| Compact Layout `&layout=compact` | [![Dhyey's video stats](https://youtube-stats-card.vercel.app/api/video?videoid=4vwZNTagHsQ&layout=compact&cache_seconds=86400)](https://youtu.be/4vwZNTagHsQ) |

<p style="font-weigth:700; font-size:10px;color:" align="center">
<br/> &bull; &bull; &bull; &bull;
</p>

#### **<p id="video-customization">Customization</p>**

_All the Customizations are applied to the default layout_\*

|                                             Parameters                                              |                                                                                                        Preview                                                                                                         |
| :-------------------------------------------------------------------------------------------------: | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: |
|                                    Hide Icons `&hide_icons=true`                                    |                            [![Dhyey's video stats](https://youtube-stats-card.vercel.app/api/video?videoid=4vwZNTagHsQ&hide_icons=true&cache_seconds=86400)](https://youtu.be/4vwZNTagHsQ)                             |
|                               Hide Video Preview `&hide_preview=true`                               |                           [![Dhyey's video stats](https://youtube-stats-card.vercel.app/api/video?videoid=4vwZNTagHsQ&hide_preview=true&cache_seconds=86400)](https://youtu.be/4vwZNTagHsQ)                            |
|                                   Color Theme `&theme=THEME_NAME`                                   |                            [![Dhyey's video stats](https://youtube-stats-card.vercel.app/api/video?videoid=4vwZNTagHsQ&theme=dark_pink&cache_seconds=86400)](https://youtu.be/4vwZNTagHsQ)                             |
|                                   Hide Border `&hide_border=true`                                   |                            [![Dhyey's video stats](https://youtube-stats-card.vercel.app/api/video?videoid=4vwZNTagHsQ&hide_border=true&cache_seconds=86400)](https://youtu.be/4vwZNTagHsQ)                            |
| Manual Color Theme `&title_color=cbf7db&icon_color=99ffbe`<br/>`&text_color=fffefe&bg_color=40423e` | [![Dhyey's video stats](https://youtube-stats-card.vercel.app/api/video?videoid=4vwZNTagHsQ&title_color=cbf7db&icon_color=99ffbe&text_color=fffefe&bg_color=40423e&cache_seconds=86400)](https://youtu.be/4vwZNTagHsQ) |
|                             Hide Channel Name `&hide_channelname=true`                              |                         [![Dhyey's video stats](https://youtube-stats-card.vercel.app/api/video?videoid=4vwZNTagHsQ&hide_channelname=true&cache_seconds=86400)](https://youtu.be/4vwZNTagHsQ)                          |

[Check all the available color themes here](./themes/README.md) or checkout the [theme config file](./themes/index.js) & you can also contribute new themes if you like 🙂.

<p style="font-weigth:700; font-size:10px;color:" align="center">
<br/> &bull; &bull; &bull; &bull;
</p>

#### **<p id="video-overview">Overview</p>**

You can customize the appearance of your `Video Stats Card` with following URL params:

- `hide_icons` - Hide the icons from video card _(boolean)_
- `hide_preview` - Hide the video preview from video card _(boolean)_
- `theme` - Name of the theme, choose from [all available themes](./themes/README.md)
- `hide_border` - Hides the card's border _(boolean)_
- `title_color` - Card's title color _(hex color)_
- `text_color` - Body text color _(hex color)_
- `icon_color` - Icons color if available _(hex color)_
- `bg_color` - Card's background color _(hex color)_
- `hide_channelname` - Hide the channel name in video card
- `cache_seconds` - set the cache header manually _(min: 1800, max: 86400)_

> Note on cache: All cards have a default cache of 2 hours (7200 seconds). Also, note that the cache is clamped to a minimum of 2 hours and a maximum of 24 hours.

## Support the project

If you are using this project and happy with it or just want to encourage me to continue creating stuff, there are few ways you can do it :-

- Giving proper credit when you use youtube-stats-card on your readme.
- Starring and sharing the project.

If you would like to see a feature implemented, don't hesitate to add it to the issues list, or better is to create pull request 😎

Contributions are welcome!

## License

Licensed under the [MIT License](./LICENSE).

## Acknowledgements

Inspired by anuraghazra's [**github-readme-stats**](https://github.com/anuraghazra/github-readme-stats)
