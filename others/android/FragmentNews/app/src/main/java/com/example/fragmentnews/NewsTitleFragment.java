package com.example.fragmentnews;

import android.os.Bundle;
import android.support.annotation.NonNull;
import android.support.v4.app.Fragment;
import android.support.v7.widget.LinearLayoutManager;
import android.support.v7.widget.RecyclerView;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.TextView;

import java.util.ArrayList;
import java.util.List;
import java.util.Random;

public class NewsTitleFragment extends Fragment {
    private boolean isTwoPane;
    @Override
    public View onCreateView(@NonNull LayoutInflater inflater, ViewGroup container
            , Bundle savedInstanceState){
        View view =  inflater.inflate(R.layout.news_title_frag,container,false);
        RecyclerView newsTitleRecyclerView = view.findViewById(R.id.news_title_recycler_view); // 加载标题视图
        LinearLayoutManager layoutManager = new LinearLayoutManager(getActivity());
        newsTitleRecyclerView.setLayoutManager(layoutManager);
        NewsAdapter adapter = new NewsAdapter(getNews()); // 构建列表数据
        newsTitleRecyclerView.setAdapter(adapter);
        return view;
    }
    private List<News> getNews(){
        List<News> newsList = new ArrayList<>();
        for (int i=1;i<=50;i++){ // 创建50条新闻
            News news  = new News();
            news.setTitle("随机生成标题"+i);
            news.setContent(getRandomLengthContent("这是随机的内容哦"+i+"."));
            newsList.add(news);
        }

        return newsList;
    }
    private String getRandomLengthContent(String content){
        Random random = new Random();
        int length = random.nextInt(20)+1; // 生成随机数
        StringBuilder builder = new StringBuilder(); // 字符串生成器
        for (int i=0;i<length;i++){
            builder.append(content); // 添加到字符串中
        }
        return builder.toString();

    }
    @Override
    public void onActivityCreated(Bundle savedInstanceState){
        super.onActivityCreated(savedInstanceState);
        // 判断是否平板
        isTwoPane = getActivity().findViewById(R.id.news_content_layout) != null;
    }
    class NewsAdapter extends RecyclerView.Adapter<NewsAdapter.ViewHolder>{
        private List<News> mNewsList;
         class ViewHolder extends RecyclerView.ViewHolder {
            TextView newsTitleText;
            ViewHolder(View view){
                super(view);
                newsTitleText = view.findViewById(R.id.news_title);
            }
        }
        NewsAdapter(List<News> newsList) {
             mNewsList = newsList;
        }
        @NonNull
        @Override
        public ViewHolder onCreateViewHolder(@NonNull ViewGroup parent, int viewType) {
             View view = LayoutInflater.from(parent.getContext())
                     .inflate(R.layout.news_item,parent,false);
             final ViewHolder holder = new ViewHolder(view);
             view.setOnClickListener(new View.OnClickListener(){ // 视图添加事件
                 @Override
                 public void onClick(View v){
                     News news = mNewsList.get(holder.getAdapterPosition());
                     if(isTwoPane){
                         // 双页
                         NewsContentFragment newsContentFragment = (NewsContentFragment) getFragmentManager()
                                     .findFragmentById(R.id.news_content_fragment);
                             newsContentFragment.refresh(news.getTitle(),news.getContent());
                     }else {
                         // 单页
                         NewsContentActivity.actionStart(getActivity(),news.getTitle(),news.getContent());
                     }
                 }
             });
             return holder;
        }
        @Override
        public void onBindViewHolder(@NonNull ViewHolder holder, int position) {
             News news = mNewsList.get(position);
             holder.newsTitleText.setText(news.getTitle());
        }
        @Override
        public int getItemCount(){
             return mNewsList.size();
        }
    }

}
