package com.example.hellworld;

import android.content.Context;
import android.view.View;
import android.view.View.OnClickListener;
import android.widget.TextView;

public class BtnEvent implements OnClickListener {
    protected  Context context;
    protected TextView textView;
    //构造函数
    public BtnEvent(TextView v,Context context) {
        this.context = context;
        this.textView =v;
    }
    public void onClick(View v){
        this.setViewText("888");
    }
    public void setViewText(String str){
        textView.setText(str);
    }

}
