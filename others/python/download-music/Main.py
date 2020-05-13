# 主函数

import os
# 自写
import Tools


# 设置需要爬取的页面
BASE_URL = 'http://www.9ku.com'
CHILD_URLS = ['/douyin/bang.htm','/douyin/new.htm','/douyin/zhongwen.htm','/douyin/bgm.htm',
              '/laoge/500shou.htm','/laoge/80.htm','/laoge/70.htm',
              '/wangluo/zuixin.htm','/wangluo/haoting.htm']
SAVE_PATH = os.path.abspath(os.curdir)+'/audios'
COUNT = 0
PAGES = 20
# http://www.9ku.com/x1/music/by_new.php?act=t_hits&page=3 最新
# http://www.9ku.com/x1/music/by_new.php?act=t_new&page= 页码

if __name__ == '__main__':

    for child_url in  CHILD_URLS:
        path = SAVE_PATH + child_url.split(".")[0] + '/'
        if not os.path.exists(path):
            os.makedirs(path)
            COUNT +=Tools.getAudios(Tools.getAudioIds(BASE_URL,child_url),path)
    print("共计下载："+ str(COUNT))