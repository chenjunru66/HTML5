var player = document.querySelector('audio');
var main = document.querySelector('main');
// [0]表示获取到当前元素集合的第一个元素
var h1 = document.querySelectorAll('h1')[0];
var h2 = document.querySelectorAll('h2')[0];
var progress = document.querySelectorAll('progress')[0];
// [1]表示获取到当前元素集合的第二个元素
var volume = document.querySelectorAll('progress')[1];
var time = document.querySelector('time');
var current = 0;
// 设置音量的进度条为0.5
player.volume = 0.5;

function updateTime() {
    // 计算音乐播放的进度在progress的value中凸显出来
    // currentTime 属性设置或返回音频/视频播放的当前位置（以秒计）。
    // duration返回当前音频/视频的长度（以秒计）
    progress.value = player.currentTime / player.duration;
    
    // 计算下当前音乐播放的时间
    var seconds = Math.ceil(player.currentTime) % 60;
    var minutes = Math.floor((player.currentTime + 1) / 60);
    if (seconds < 10) seconds = '0' + seconds;
    // textContent 属性设置或返回指定节点的文本内容，以及它的所有后代。
    // 如果设置了 textContent 属性，会删除所有子节点，并被替换为包含指定字符串的一个单独的文本节点。
    time.textContent = minutes + ':' + seconds;
}

function updateVolume() {
    volume.value = player.volume;
}

function playPause() {
    // paused 属性返回视频是否已暂停。
    // 点击按钮的时候，如果视频暂停，点击则播放，否则点击则会暂停
    if (player.paused) {
        player.play();
        document.getElementsByClassName('glyphicon-play')[0].className = 'glyphicon glyphicon-pause';
    }
    else {
        player.pause();
        document.getElementsByClassName('glyphicon-pause')[0].className = 'glyphicon glyphicon-play';
    }
}

// 设置音量加减的按钮
function volumeDown() {
    if (player.volume > 0) player.volume -= 0.1;
}

function volumeUp() {
    if (player.volume < 1) player.volume += 0.1;
}

// 上一曲下一曲切换
function prev() {
    current--;
    start();
}

function next() {
    current++;
    start();
}

// 从数组中获取相对应的元素
function play(item) {
    player.src = item.src;
    h1.innerHTML = item.name;
    h2.innerHTML = item.singer;
    main.style.backgroundImage = 'url(' + item.pic + ')';
    main.style.animationName = 'slideBg';
    // 延迟五百秒清除下动画效果，否则下次切换不会出现效果
    setTimeout(function () { main.style.animationName = ''; }, 500);
    
    player.play();
    // 切换到下一曲自动播放
    document.getElementsByClassName('glyphicon-play')[0].className = 'glyphicon glyphicon-pause';
}

function start() {
    // 歌曲切换并从playList数组中获取内容
    if (current >= playList.length) current = 0;
    if (current < 0) current = playList.length - 1;
    var item = playList[current];
    // 将item参数传入到play中去
    if (item) {
        play(item);
    }
}
// ended 属性返回音频/视频是否已结束。
// 当视频播放结束的时候，自动向下跳转
player.addEventListener('ended', next);
// timeupdate 事件在音频/视频（audio/video）的播放位置发生改变时触发。
// 当拖动音频进度条的时候，执行updateTime函数更新下播放进度
player.addEventListener('timeupdate', updateTime);
// volumechange 事件在音频/视频（audio/video）的音量发生改变时触发。
// 当更改音量的时候，执行updateVolume函数更新音量
player.addEventListener('volumechange', updateVolume);

start();