package com.example.fragmentnews;

import android.annotation.SuppressLint;
import android.content.Context;
import android.content.Intent;
import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;

@SuppressLint("Registered")
public class NewsContentActivity extends AppCompatActivity {
    public static void actionStart(Context context, String newsTitle,String newsContent){
        // 获取class
        Intent intent = new Intent(context, NewsContentActivity.class);
        // 添加到键值对中
        intent.putExtra("news_title",newsTitle);
        intent.putExtra("news_content",newsContent);
        // 创建
        context.startActivity(intent);
    }
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.news_content);
        // 获取新的标题
        String newsTitle = getIntent().getStringExtra("news_title");
        // 获取新的内容
        String newsContent = getIntent().getStringExtra("news_content");
        // 创建布局对象
        NewsContentFragment newContentFragment =(NewsContentFragment)
        // 获取内容控件
        getSupportFragmentManager().findFragmentById(R.id.news_content_fragment);
        // 刷新
        newContentFragment.refresh(newsTitle,newsContent);
    }
}
