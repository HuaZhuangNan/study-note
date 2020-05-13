var APlayerMusic = new APlayer({
    container: document.getElementById('APlayerMusic'),
    fixed: true,
    audio: []
});

$(".tsok").click(function() {
    $.AMUI.utils.cookie.set("tishi", true, 6048000, "/");
})

if ($.AMUI.utils.cookie.get("tishi") == null) { $("#tishi").modal(); }

var offset = 0;

//音乐搜索
function search() {
    //if (event.keyCode == 13) {
        if ($(".s-input").val() != "") {
            offset = 0;
            search_api(1);
        }
   // }
}

$(".am-tabs").find("a").on("opened.tabs.amui", function(e) {
    if ($(this).text() == "单曲") {
        offset = 0;
        search_api(1);
    }
   // if ($(this).text() == "MV") {
      //offset = 0;
     //search_api(4);
   // }
});

function search_api($id) {
    if (id = 1) {
        $.ajax({
            type: "get",
            url: "https://api.imjad.cn/cloudmusic/",
            data: "type=search&search_type=1&limit=30&s=" + $(".s-input").val() + "&offset=" + offset,
            timeout: 10000,
            beforeSend: function() {
                $(".main").append('<div id="loader-wrapper"><div id="loader"></div></div>');
            },
            success: function(data) {
                var json = data.result.songs;
                //json数据 
                total = data.result.songCount;
                var moffset = total / 30;
                //记录总数 
                var tbody = '<div class="am-scrollable-horizontal"><table class="am-table"><thead><tr><th>歌名</th><th>歌手</th><th>时间</th><th>下载</th><th>试听</th></tr></thead><tbody>';
                $.each(json, function(n, value) {
                    var trs = "";
                    trs += "<tr><td>" + value.name;
                    if (value.alia.length > 0) {
                        trs += "(" + value.alia[0] + ")";
                    }
                    trs += "<br />" + value.al.name + "</td><td>" + value.ar[0].name + "</td><td>" + getLocalTime(value.dt) + '</td><td><button type="button" class="am-btn am-btn-primary" onclick="download(\'' + value.id + '\',\'' + value.name + '\');"><i class="am-icon-cloud-download"></i></button></td><td><button type="button" class="am-btn am-btn-primary" onclick="playMusic(\'' + value.id + '\',\'' + value.name + '\');"><i class="am-icon-play-circle" title="试听"></i></button></td></tr>';
                    tbody += trs;
                });
                tbody += '</tbody></table></div>';
                if (total / 30 > 1) {
                    tbody += '<ul class="am-pagination am-pagination-centered"><li';
                    if (offset == 0) {
                        tbody += ' class="am-disabled"';
                    }
                    tbody += '><span class="am-icon-angle-double-left prevPage"></span></li><li class="am-active"><a>';
                    tbody += offset / 30 + 1;
                    tbody += "</a></li><li";
                    if (offset / 30 >= moffset - 1) {
                        tbody += ' class="am-disabled"';
                    }
                    tbody += '><span class="am-icon-angle-double-right nextPage"></span></li></ul>';
                }
                $("#tab1").html(tbody);
                $(".prevPage").click(function() {
                    $('html,body').animate({ scrollTop: 0 }, 500);
                    offset = offset - 30;
                    if ($(".am-tabs-nav .am-active a").text() == "单曲") {
                        search_api(1);
                    }
                });
                $(".nextPage").click(function() {
                    $('html,body').animate({ scrollTop: 0 }, 500);
                    offset = offset + 30;
                    if ($(".am-tabs-nav .am-active a").text() == "单曲") {
                        search_api(1);
                    }
                });
                $(".am-tabs").css("display", "block");
                $("#loader-wrapper").remove();
            },
            error: function() {
                $("#loader-wrapper").remove();
            }
        });
    }
}

function download(id, name) {

    $.ajax({
        type: "get",
        url: "https://api.imjad.cn/cloudmusic/",
        data: "type=detail&id=" + id,
        timeout: 10000,
        beforeSend: function() {
            $(".main").append('<div id="loader-wrapper"><div id="loader"></div></div>');
        },
        success: function(data) {

            var download = '';

            //<button type="button" class="am-btn am-btn-primary b-copy" onclick="copy('+ id +',198000);"><i class="am-icon-copy"></i></button>

            if (data.songs[0].l != null) {
                download += '<button type="button" class="am-btn am-btn-primary b-br" onclick="downloadfile(' + id + ',128000,\'' + name + '\');">一般(128kbit/s)</button><button type="button" class="am-btn am-btn-primary b-qrcode" onclick="qrcode(' + id + ',128000);"><i class="am-icon-qrcode"></i></button>'
            }
            if (data.songs[0].m != null) {
                download += '<button type="button" class="am-btn am-btn-primary b-br" onclick="downloadfile(' + id + ',198000,\'' + name + '\');">标准(192kbit/s)</button><button type="button" class="am-btn am-btn-primary b-qrcode" onclick="qrcode(' + id + ',198000);"><i class="am-icon-qrcode"></i></button>'
            }
            if (data.songs[0].h != null) {
                download += '<button type="button" class="am-btn am-btn-primary b-br" onclick="downloadfile(' + id + ',320000,\'' + name + '\');">高品(320kbit/s)</button><button type="button" class="am-btn am-btn-primary b-qrcode" onclick="qrcode(' + id + ',320000);"><i class="am-icon-qrcode"></i></button>'
            }

            $(".download").html(download);
            $("#download").modal();



        },
        complete: function() {
            $("#loader-wrapper").remove();
        },
        error: function() {
            $("#loader-wrapper").remove();
        }
    });

}

function playMusic(id, name) {
    var musiclist = APlayerMusic.list.audios;
    if (musiclist.length > 0) {
        for(var i = 0; i < musiclist.length; i++){
            if (musiclist[i].music_id === id) {
                APlayerMusic.list.switch(i);
                APlayerMusic.play();
                return;
            }
        }
    }
    $.ajax({
        type: "get",
        url: "https://api.imjad.cn/cloudmusic/",
        data: "type=detail&id=" + id,
        timeout: 10000,
        beforeSend: function() {
            $(".main").append('<div id="loader-wrapper"><div id="loader"></div></div>');
        },
        success: function(music) {
            $.ajax({
                type: "get",
                url: "https://api.imjad.cn/cloudmusic/",
                data: "type=song&id=" + id + "&br=128000",
                timeout: 10000,
                
                success: function(musicUrl) {
                    if (musicUrl.data[0].url != null) {
                        addMusicToPlayerAndPlay({
                            name: music.songs[0].name,
                            artist: music.songs[0].ar[0].name,
                            url: musicUrl.data[0].url,
                            cover: music.songs[0].al.picUrl,
                            music_id: id
                        })
                    } else {
                        alert('抱歉无法解析该音乐');
                    }
                }
                
            });
        },
        complete: function() {
            $("#loader-wrapper").remove();
        },
        error: function() {
            $("#loader-wrapper").remove();
        }
    })
}

function downloadfile(id, br, name) {
    $.ajax({
        type: "get",
        url: "https://api.imjad.cn/cloudmusic/",
        data: "type=song&id=" + id + "&br=" + br,
        timeout: 10000,
        beforeSend: function() {
            $(".main").append('<div id="loader-wrapper"><div id="loader"></div></div>');
        },
        success: function(data) {
            if (data.data[0].url != null) {
                var a = document.createElement("a");
                a.href = data.data[0].url + '?filename=' + name + '.' + data.data[0].type + '&downloadtype=' + data.data[0].type;
                a.download = '';
                a.click();
            } else {
                alert('抱歉无法解析该音乐');
            }
        },
        complete: function() {
            $("#loader-wrapper").remove();
        },
        error: function() {
            $("#loader-wrapper").remove();
        }
    });

}


function qrcode(id, br) {
    $.ajax({
        type: "get",
        url: "https://api.imjad.cn/cloudmusic/",
        data: "type=song&id=" + id + "&br=" + br,
        timeout: 10000,
        beforeSend: function() {
            $(".main").append('<div id="loader-wrapper"><div id="loader"></div></div>');
        },
        success: function(data) {

            if (data.data[0].url != null) {
                $(".qrcode").html('<img src="https://api.imjad.cn/qrcode/?size=200&level=L&text=' + data.data[0].url + '">');
                $("#qrcode").modal();
            } else {
                alert('抱歉无法解析该音乐');
            }
        },
        complete: function() {
            $("#loader-wrapper").remove();
        },
        error: function() {
            $("#loader-wrapper").remove();
        }
    });
}

function copy(id, br) {

    $.ajax({
        type: "get",
        url: "https://api.imjad.cn/cloudmusic/",
        data: "type=song&id=" + id + "&br=" + br,
        timeout: 10000,
        beforeSend: function() {
            $(".main").append('<div id="loader-wrapper"><div id="loader"></div></div>');
        },
        success: function(data) {

            if (data.data[0].url != null) {

                $("#copy-b").remove();
                $(".main").append('<p id="copy-b">' + data.data[0].url + '</p>');
                copyToClipboard('copy-b');


            } else {
                alert('抱歉无法解析该音乐');
            }
        },
        complete: function() {
            $("#loader-wrapper").remove();
        },
        error: function() {
            $("#loader-wrapper").remove();
        }
    });

}

function copyToClipboard(elementId) {
    // 创建元素用于复制
    var aux = document.createElement("input");

    // 获取复制内容
    var content = document.getElementById(elementId).innerHTML || document.getElementById(elementId).value;

    // 设置元素内容
    aux.setAttribute("value", content);

    // 将元素插入页面进行调用
    document.body.appendChild(aux);

    // 复制内容
    aux.select();

    // 将内容复制到剪贴板
    document.execCommand("copy");

    // 删除创建元素
    document.body.removeChild(aux);
}

//数据容量转换
function bytesToSize(bytes) {
    if (bytes === 0) return '0 B';
    var k = 1024, // or 1024
        sizes = ['B', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'],
        i = Math.floor(Math.log(bytes) / Math.log(k));

    return (bytes / Math.pow(k, i)).toPrecision(3) + ' ' + sizes[i];
}

//时间戳转换
function getLocalTime(date) {
    var second = (date / 1e3).toFixed(0);
    if (second >= 60) {
        minute = Math.floor(second / 60);
        second = (second % 60).toFixed(0);
        if (second < 10) { second = "0" + second; }
    }
    return minute + ":" + second;
}



$(function() {


    $.getScript("//cdn.bootcss.com/clipboard.js/1.6.0/clipboard.min.js"); //剪贴板
});

/*一言
$(function() {
    $.post("https://sslapi.hitokoto.cn/?c=e", null, function(e) {
        $(".intro-siteinfo").html(e.hitokoto + " —— <strong>" + e.from + "</strong>");
    }, "JSON");
});
*/
function addMusicToPlayerAndPlay(music) {
    APlayerMusic.list.add([music]);
    APlayerMusic.list.switch(APlayerMusic.list.audios.length - 1)
    APlayerMusic.play();
}

APlayerMusic.on('error', function(e) {
    // alert('播放失败！')
    console.log(e)
})