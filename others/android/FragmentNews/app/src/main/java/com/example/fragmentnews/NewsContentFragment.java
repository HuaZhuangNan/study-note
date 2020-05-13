package com.example.fragmentnews;

import android.os.Bundle;
import android.support.annotation.NonNull;
import android.support.v4.app.Fragment;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.TextView;

public class NewsContentFragment extends Fragment {
    private View view;
    // 添加视图
    @Override
    public View onCreateView(@NonNull LayoutInflater inflater, ViewGroup container
                            , Bundle savedInstanceState){
        view = inflater.inflate(R.layout.news_content_frag,container,false);
        return view;
    }
    // 刷新视图
    public void refresh(String newsTitle,String newsContent){
        View visibilityLayout = view.findViewById(R.id.visibility_layout); // 获取内容视图
        visibilityLayout.setVisibility(View.VISIBLE); // 可见
        TextView newsTitleText =  view.findViewById(R.id.news_title);
        TextView newsContentText = view.findViewById(R.id.news_content);
        // 添加
        newsTitleText.setText(newsTitle); // 标题
        newsContentText.setText(newsContent);  // 内容
    }
}
