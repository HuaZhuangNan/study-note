package com.example.hellworld;

import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.widget.Button;
import android.widget.TextView;

public class MainActivity extends AppCompatActivity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState); // 继承
        init();// 初始化
    }
    // 这是初始化函数
    protected void init(){
        veiw();
    }
    // layout
    protected  void veiw(){
        setContentView(R.layout.activity_main);
        TextView mainView = (TextView) findViewById(R.id.main_text_view);
        event(mainView);
    }
    // event
    protected  void event(TextView v){
        Button truebtn = (Button) findViewById(R.id.main_btn_true);
        truebtn.setOnClickListener(new BtnEvent(v,this));
    }
    //
}
