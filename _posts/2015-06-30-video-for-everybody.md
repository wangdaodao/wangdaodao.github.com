---
date: 2015-06-30
layout: post
comments: yes
code: yes
title: 视频播放解决方案
categories: 笔记
tags: [front_end,video,html5]
---

## 视频格式

当前，video 元素支持三种视频格式：

<table>
<tbody>
<tr>
<th>格式</th>
<th style="width:16%">IE</th>
<th style="width:16%">Firefox</th>
<th style="width:16%">Opera</th>
<th style="width:16%">Chrome</th>
<th style="width:16%">Safari</th>
</tr>
<tr>
<td>Ogg</td>
<td>No</td>
<td>3.5+</td>
<td>10.5+</td>
<td>5.0+</td>
<td>No</td>
</tr>
<tr>
<td>MPEG 4</td>
<td>9.0+</td>
<td>No</td>
<td>No</td>
<td>5.0+</td>
<td>3.0+</td>
</tr>
<tr>
<td>WebM</td>
<td>No</td>
<td>4.0+</td>
<td>10.6+</td>
<td>6.0+</td>
<td>No</td>
</tr>
</tbody>
</table>

> Ogg = 带有 Theora 视频编码和 Vorbis 音频编码的 Ogg 文件  
> MPEG4 = 带有 H.264 视频编码和 AAC 音频编码的 MPEG 4 文件  
> WebM = 带有 VP8 视频编码和 Vorbis 音频编码的 WebM 文件  

## 一个通用的解决办法，在支持HTML5的浏览器下，使用video，不支持的使用FLASH

    <video width="640" height="360" controls="controls" autoplay="autoplay">
      <!-- Safari / iOS, IE9 -->
      <source src="movie.mp4" type="video/mp4"  />
      <!-- Chrome10+, Ffx4+, Opera10.6+ -->
      <source src="movie.webm" type="video/webm" />
      <!-- Firefox3.6+ / Opera 10.5+ -->
      <source src="movie.ogg" type="video/ogg"  />
      <!-- fallback to Flash: -->
      <object width="640" height="360" type="application/x-shockwave-flash" data="flvplayer.swf">
        <!-- Firefox uses the `data` attribute above, IE/Safari uses the param below -->
        <param name="movie" value="flvplayer.swf" />
        <param name='quality' value='high' />
        <param name='allowFullScreen' value='true' />
        <param name='FlashVars' value='vcastr_file=movie.flv&amp;IsAutoPlay=0&amp;IsContinue=0&amp;DefaultVolume=50' />
        <!-- fallback image -->
        <img src="movie.jpg" width="640" height="360" alt="movie" title="No video playback capabilities, please download the video below" />
      </object>
    </video>

播放器右键另存：[flvplayer.swf](/uploads/2015/06/flvplayer.swf)

注意的是，视频要存储为h.264文件！