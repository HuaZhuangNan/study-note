/*
 * Copyright (C) 2014 The Android Open Source Project
 *
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except
 * in compliance with the License. You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under the License
 * is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express
 * or implied. See the License for the specific language governing permissions and limitations under
 * the License.
 */

package com.example.jxedu;

import android.app.Activity;
import android.content.Intent;
import android.os.Bundle;
import android.os.Parcelable;
import android.view.View;
import android.widget.Button;

/*
 * Main Activity class that loads {@link MainFragment}.
 */
public class MainActivity extends Activity {

    @Override
    public void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
        View  main = findViewById(R.id.main_body);
        Button mainVideo = findViewById(R.id.main_video);
        Button mainBook = findViewById(R.id.main_book);
        mainVideo.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                getBrowser("https://study.jxeduyun.com/");
            }
        });
        mainBook.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                getBrowser("http://bp.pep.com.cn/jc/ywjyjks/ywjygjkcjc/index.html");
            }
        });
    }
    public void  getBrowser(String url){
        Intent intent = new Intent();// 个是当前窗口context 第二个是要载入的窗口类
        intent.setClass(MainActivity.this,Browser.class);//第一
        intent.putExtra("url",url);//向另一个窗口传递参数键值对相当于map  可以传数组，对象什么的     Serializable这个是传对象的
        startActivity(intent);//启动intent
    }
}
