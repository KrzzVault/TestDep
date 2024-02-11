/*
* ClapprNerdStats, ClapprStats, PlaybackRatePlugin, ClapprLevelSelectorPlugin
* watermark: "https://telegra.ph/file/800ed899115bc17f3acf7.png",
* position: 'top-right',
* watermarkLink: "https://telegra.ph/file/3d162a0d7c50c8ec28679.jpg",
*/

var player = new Clappr.Player({

    autoPlay: false,
    mute: true,
    poster: "DTVC.png",
    exitFullscreenOnEnd: true,

    height: "100%",
    width: "100%",

    source: "https://mdstrm.com/live-stream-playlist/6287fd84aec915083953e86b.m3u8",
    //source: "media.m3u8",

    parentId: "#player-container",
    plugins: [PlaybackRatePlugin, LevelSelector, ClapprPip.PipButton, ClapprPip.PipPlugin, HlsjsPlayback],
    levelSelectorConfig: {
        title: 'Calidad',
        labels: {
            3: '', // 655.6Kbps
            2: '', // 1205.6kbps
            1: '', // 2085kbps
            0: '', // 2855.6kbps
        },
        labelCallback: function (playbackLevel, customLabel) {
            return customLabel + playbackLevel.level.height + 'p'; // High 720p
        },/*
        onLevelsAvailable: function (levels) {
            return levels.reverse(); // reverse levels order
        },*/
    },

    playback: {
        disableContextMenu: true,
        controls: false,
    }
});