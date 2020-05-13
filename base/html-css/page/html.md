# HTML

- [W3cSchool](https://www.w3cschool.cn/html/)
- [菜鸟手册](https://www.runoob.com/html/html-tutorial.html)

## HTML5 语法

- 不允许写结束标记的元素: br,col,embed,hr,img,input,link,meta
- 可以省略结束标记的元素: li,dt,dd,p,option,colgroup,thead,tbody,tfoot,tr,td,th
- 可以省略全部标记的元素: html,head,body,colgroup,tbody
- 引号可以双引号也可以单引号

## HTML5 结构标签

![布局图](./img/html5-layout.png)

| 元素名                           | 语义                                                                         |
| -------------------------------- | ---------------------------------------------------------------------------- |
| section                          | 一个内容区块                                                                 |
| article 一块上下文无关的独立内容 |
| aside                            | 在`article`之外的，与`article`内容相关的辅助信息                             |
| header                           | 一个内容区块的标题                                                           |
| footer                           | 一个内容区块的脚注                                                           |
| nav                              | 导航链接部分                                                                 |
| figure                           | 一段独立的内容，使用`figcaption`元素为其添加标题(第一个或最后一个元素的位置) |
| main                             | 页面的主要内容(IE 不兼容)                                                    |
| haroup                           | 标题的分组                                                                   |
| mark                             | 定义高亮显示的文本(span)                                                     |
| time                             | 时间                                                                         |

## HTML5 文本标签语义化

| 元素名 | 语义               |
| ------ | ------------------ |
| a      | 超链接             |
| br     | 强制换行           |
| wbr    | 安全换行           |
| b      | 标记一段文字不强调 |
| strong | 重要强调           |
| i      | 外文或者科学术语   |
| em     | 强调               |
| code   | 计算机代码         |
| var    | 程序输出           |
| samp   | 变量               |
| kdb    | 用户输入           |
| abbr   | 缩写               |
| cite   | 其他作品的标题     |
| del    | 删除的文字         |

## HTML5 音频区块 `<audio src="">你的浏览器不支持的话显示这句话！</...>`

- 多音频资源 `<source src="./../m.mp3" type="auto/mpeg">`

### HTML5 音频格式兼容性

| 音频格式 | Chrome | Firefox | IE9    | Opera  | Safari |
| -------- | ------ | ------- | ------ | ------ | ------ |
| OGG      | 支持   | 支持    | 支持   | 不支持 | 不支持 |
| MP3      | 支持   | 不支持  | 支持   | 不支持 | 支持   |
| WAV      | 不支持 | 支持    | 不支持 | 支持   | 不支持 |

### HTML5 音频标签属性

| 属性     | 属性值   | 注释                                                                                            |
| -------- | -------- | ----------------------------------------------------------------------------------------------- |
| src      | url      | 播放的音乐的 url 地址（火狐只支持 ogg 的音乐，而 IE9 只支持 MP3 格式的音乐。chrome 貌似全支持） |
| preload  | preload  | 预加载（在页面被加载时进行加载或者说缓冲音频），如果使用了 autoplay 的话那么该属性失效。        |
| loop     | loop     | 循环播放                                                                                        |
| controls | controls | 是否显示默认控制条（控制按钮）                                                                  |
| autoplay | autoplay | 自动播放                                                                                        |

## HTML5 视频 `<video src="">你的浏览器不支持的话显示这句话！</...>`

- 多视频资源 `<source src="./../m.mp4" type="video/MPEG4">` |

### HTML5 视频格式兼容性

| 格式  | IE   | Firefox | Opera | Chrome | Safari |
| ----- | ---- | ------- | ----- | ------ | ------ |
| Ogg   | No   | 3.5+    | 10.5+ | 5.0+   | No     |
| MPEG4 | 9.0+ | No      | No    | 5.0+   | 3.0+   |
| WebM  | No   | 4.0+    | 10.6+ | 6.0+   | No     |

### HTML5 视频标签属性

| 属性     | 值                 | 描述                                                                                        |
| -------- | ------------------ | ------------------------------------------------------------------------------------------- |
| autoplay | autoplay           | 如果出现该属性，则视频在就绪后马上播放。                                                    |
| controls | controls           | 如果出现该属性，则向用户显示控件，比如播放按钮。                                            |
| height   | pixels             | 设置视频播放器的高度。                                                                      |
| loop     | loop               | 如果出现该属性，则当媒介文件完成播放后再次开始播放。                                        |
| muted    | muted              | 如果出现该属性，视频的音频输出为静音。                                                      |
| poster   | URL                | 规定视频正在下载时显示的图像，直到用户点击播放按钮。                                        |
| preload  | auto metadata none | 如果出现该属性，则视频在页面加载时进行加载，并预备播放。如果使用 "autoplay"，则忽略该属性。 |
| src      | URL                | 要播放的视频的 URL。                                                                        |
| width    | pixels             | 设置视频播放器的宽度。                                                                      |

## HTML5 音频、视频方法和属性

| 方法/属性                   | 作用                                                                                               |
| --------------------------- | -------------------------------------------------------------------------------------------------- |
| error                       | null:正常                                                                                          |
| error.code                  | 1.用户终止 2.网络错误 3.解码错误 4.URL 无效                                                        |
| **_网络状态_**              |                                                                                                    |
| currentSrc                  | 返回当前资源的 URL                                                                                 |
| src = value                 | 返回或设置当前资源的 URL                                                                           |
| canPlayType(type)           | 是否能播放某种格式的资源                                                                           |
| networkState                | 0.此元素未初始化 1.正常但没有使用网络 2.正在下载数据 3.没有找到资源                                |
| load()                      | 重新加载 src 指定的资源                                                                            |
| buffered                    | 返回已缓冲区域，TimeRanges                                                                         |
| preload                     | none:不预载 metadata:预载资源信息 auto:                                                            |
| **_准备状态_**              |                                                                                                    |
| readyState                  | 1:`HAVE_NOTHING` 2:`HAVE_METADATA` 3.`HAVE_CURRENT_DATA` 4.`HAVE_FUTURE_DATA` 5.`HAVE_ENOUGH_DATA` |
| seeking                     | 是否正在 seeking                                                                                   |
| **_回放状态_**              |                                                                                                    |
| currentTime = value         | 当前播放的位置，赋值可改变位置                                                                     |
| startTime                   | 一般为 0，如果为流媒体或者不从 0 开始的资源，则不为 0                                              |
| duration                    | 当前资源长度 流返回无限                                                                            |
| paused                      | 是否暂停                                                                                           |
| defaultPlaybackRate = value | 默认的回放速度，可以设置                                                                           |
| playbackRate = value        | 当前播放速度，设置后马上改变                                                                       |
| played                      | 返回已经播放的区域，TimeRanges，关于此对象见下文                                                   |
| seekable                    | 返回可以 seek 的区域 TimeRanges                                                                    |
| ended                       | 是否结束                                                                                           |
| autoPlay                    | 是否自动播放                                                                                       |
| loop                        | 是否循环播放                                                                                       |
| play()                      | 播放                                                                                               |
| pause()                     | 暂停                                                                                               |
| **_音、视频控制_**          |                                                                                                    |
| controls                    | 是否有默认控制条                                                                                   |
| volume = value              | 音量                                                                                               |
| muted = value               | 静音                                                                                               |
| **_TimeRanges(区域)对象_**  |                                                                                                    |
| TimeRanges.length           | 区域段数                                                                                           |
| TimeRanges.start(index)     | 第 index 段区域的开始位置                                                                          |
| TimeRanges.end(index)       | 第 index 段区域的结束位置                                                                          |

## HTML5 音频、视频事件

| 事件名称           | 事件作用                                                     |
| ------------------ | ------------------------------------------------------------ |
| onabort            | 当发生中止事件时                                             |
| oncanplay          | 当媒体资源能够开始播放但可能因缓冲而需要停止时               |
| oncanplaythrough   | 当媒体资源能够无需因缓冲而停止即可播放至结尾时               |
| ondurationchange   | 当媒体资源长度改变时                                         |
| onemptied          | 当媒体资源资源元素突然为空时（网络错误、加载错误等）         |
| onended            | 当媒体资源已抵达结尾时                                       |
| onerror            | 当在元素加载期间发生错误时                                   |
| onloadeddata       | 当加载媒体资源数据时                                         |
| onloadedmetadata   | 当媒体资源元素的持续时间以及其他媒体资源数据已加载时         |
| onloadstart        | 当浏览器开始加载媒体资源数据时                               |
| onpause            | 当媒体资源数据暂停时                                         |
| onplay             | 当媒体资源数据将要开始播放时                                 |
| onplaying          | 当媒体资源数据已开始播放时                                   |
| onprogress         | 当浏览器正在取媒体资源数据时                                 |
| onratechange       | 当媒体资源数据的播放速率改变时                               |
| onreadystatechange | 当就绪状态（ready-state）改变时                              |
| onseeked           | 当媒体资源元素的定位属性 [1] 不再为真且定位已结束时          |
| onseeking          | 当媒体资源元素的定位属性为真且定位已开始时                   |
| onstalled          | 当取回媒体资源数据过程中（延迟）存在错误时                   |
| onsuspend          | 当浏览器已在取媒体资源数据但在取回整个媒体资源文件之前停止时 |
| ontimeupdate       | 当媒体资源改变其播放位置时                                   |
| onvolumechange     | 当媒体资源改变音量亦或当音量被设置为静音时                   |
| onwaiting          | 当媒体资源已停止播放但                                       |

## Canvas 属性 `<canvas></...>`

| 属性   | 值     | 描述                 |
| ------ | ------ | -------------------- |
| height | pixels | 设置 canvas 的高度。 |
| width  | pixels | 设置 canvas 的宽度。 |

## Canvas 方法

| 方法         | 描述                             |
| ------------ | -------------------------------- |
| getContext() | 返回一个用于在画布上绘图的环境。 |

## HTML5 标记可交互内容或插件 `<embed></...>` 如 flash

## Embed 属性

| 属性   | 值     | 描述                 |
| ------ | ------ | -------------------- |
| height | pixels | 设置嵌入内容的高度。 |
| src    | url    | 嵌入内容的 URL。     |
| type   | type   | 定义嵌入内容的类型。 |
| width  | pixels | 设置嵌入内容的宽度。 |

## Embed 对象属性

| 属性   | 值     | 描述                 |
| ------ | ------ | -------------------- |
| height | pixels | 设置嵌入内容的高度。 |
| src    | url    | 嵌入内容的 URL。     |
| type   | type   | 定义嵌入内容的类型。 |
| width  | pixels | 设置嵌入内容的宽度。 |

## HTML5 状态标签 (IE 不兼容)

## `<meter></...>`

| 属性    | 值     | 描述                                                                                                                           |
| ------- | ------ | ------------------------------------------------------------------------------------------------------------------------------ |
| high    | number | 定义度量的值位于哪个点，被界定为高的值。                                                                                       |
| low     | number | 定义度量的值位于哪个点，被界定为低的值。                                                                                       |
| max     | number | 定义最大值。默认值是 1。                                                                                                       |
| min     | number | 定义最小值。默认值是 0。                                                                                                       |
| optimum | number | 定义什么样的度量值是最佳的值。 如果该值高于 "high" 属性，则意味着值越高越好。如果该值低于 "low" 属性的值，则意味着值越低越好。 |
| value   | number | 定义度量的值。                                                                                                                 |

## `<progress></...>`

| 属性  | 值     | 描述               |
| ----- | ------ | ------------------ |
| max   | number | 定义完成的值。     |
| value | number | 定义进程的当前值。 |

## HTML5 列表 (兼容性)

- 下拉框 `<datalist><option></...>*</...>`
- 展开框 `<details><summary></...></...>` `open="open" | 没有`

## HTML5 Menu (兼容性)

- `<menu></...>` 都不支持
- `<menuitem></...>` 只有 FireFox8.0+支持
- `<command></...>` 只有 IE9 支持

## HTML5 注释标签

- `<ruby></...>` 标注定义注释或音标
- `<rt></...>` 标记定义对 ruby 的注释内容文本
- `<rp></...>` 防止不支持

## SVG

- 是万维网联盟的标准，使用 XML 来描述二维图形和绘图程序的伸缩矢量图形 (Scalable Vector Graphics)
- 图像在放大或改变尺寸的情况下其图形质量不会有所损失
- [菜鸟手册](https://www.runoob.com/svg/svg-tutorial.html)

```html
<!-- 在(x轴60,y轴60)绘制一个半径50的红色背景，有6px宽的绿色边框的圆 -->
<svg xmlns="http://www.w3.org/2000/svg" version="1.1">
    <circle cx="60" cy="60" r="50" stroke="green"
    stroke-width="6" fill="red" />
</svg>
```

## WEB 储存(storage)

### localStorage 没有时间限制的数据储存

```js
// 存储
localStorage.data = "Gates";
// 取出
var data = localStorage.data;
// 删除值变回undefined
localStorage.removeItem("data");
```

### sessionStorage 关闭具体的浏览器标签页，数据也会被删除

```js
// 存储
sessionStorage.data = "Gates";
// 取出
var data = sessionStorage.data;
// 删除值变回undefined
sessionStorage.removeItem("data");
```

## WEB缓存

- [W3CSchool](https://www.w3school.com.cn/html/html5_app_cache.asp)

## Web Workers(IE10以上)

- 当在 HTML 页面中执行脚本时，页面是不可响应的，直到脚本已完成。
- Web worker 是运行在后台的 JavaScript，独立于其他脚本，不会影响页面的性能。您可以继续做任何愿意做的事情：点击、选取内容等等，而此时 web worker 运行在后台

## (Server-Sent)服务器推送 IE不支持

- 事件指的是网页自动从服务器获得更新

```js
var source = new EventSource("/demo");
source.onmessage = function(event) {
  console.log(event.data)
};
```
