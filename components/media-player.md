# Media Player

A video or audio clip with native controls, a poster image and captions. Used for news video, live streams and podcast episodes.

## Props

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| src | string | — | Media file URL. Required. |
| type | `video` \| `audio` | `video` | What to render. |
| title | string | — | What the clip is, used as the accessible name. Required. |
| posterSrc | string | — | Still image shown before play. Video only. |
| duration | string | — | Length as `m:ss`, shown on the play button and as `2 minutes 14 seconds` for screen readers. |
| captionsSrc | string | — | WebVTT captions file. Required for speech. |
| transcriptHref | string | — | Link to a full transcript. |
| isLive | boolean | `false` | A live stream. Shows a live [badge.md](badge.md) instead of a duration. |
| isAutoplay | boolean | `false` | Only ever with `isMuted`, and never on a news article. |
| isMuted | boolean | `false` | Starts silent. |

## Variations

### Video

```emmet
div.media-player>video.media-player__video[controls preload=metadata poster=/img/news/flood-poster.jpg aria-label="Flood defences overwhelmed"]>source[src=/video/flood-report.mp4 type=video/mp4]+track[kind=captions src=/video/flood-report.vtt srclang=en label=English default]
```

### Video with duration and transcript

```emmet
div.media-player>video.media-player__video[controls preload=metadata poster=/img/news/flood-poster.jpg aria-label="Flood defences overwhelmed"]>source[src=/video/flood-report.mp4 type=video/mp4]+track[kind=captions src=/video/flood-report.vtt srclang=en label=English default]^p.media-player__meta>Icon[name=play]+span{2:14}+Link[href=/video/flood-report/transcript variant=subtle]{Read transcript}
```

### Live stream

```emmet
div.media-player[data-live]>video.media-player__video[controls preload=metadata poster=/img/news/live-poster.jpg aria-label="BBC News live stream"]>source[src=/video/live.m3u8 type=application/x-mpegURL]^p.media-player__meta>Badge[status=danger]{Live}+span{Watch live coverage}
```

### Audio

```emmet
div.media-player[data-type=audio]>audio.media-player__audio[controls preload=metadata aria-label="The flood, explained"]>source[src=/audio/flood-explained.mp3 type=audio/mpeg]^p.media-player__meta>Icon[name=play]+span{28:40}
```

## Examples

- **News video**: inside a [figure.md](figure.md), with a caption.
- **Live stream**: at the top of a live page, with `isLive`.
- **Podcast episode**: `type=audio` with a transcript link.

## Notes

- Native `controls` means it works with no JavaScript, and the browser handles keyboard, captions and full screen.
- Captions are required for anything with speech. A transcript is better again, because it can be read and searched.
- Never autoplay with sound. Autoplay at all is for silent background clips only.
- Uses [icon.md](icon.md), [badge.md](badge.md) and [link.md](link.md).
- Tokens: `--card-radius`, `--color-surface-inverse`, `--color-status-danger-background` for the live badge.
