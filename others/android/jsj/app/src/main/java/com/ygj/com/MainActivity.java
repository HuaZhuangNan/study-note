package com.ygj.com;

import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.widget.Button;
import android.widget.TextView;

import com.ygj.com.util.Buttonlistener;


public class MainActivity extends AppCompatActivity {
    private TextView  textView;
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
        // 获取显示文本框
        textView = findViewById(R.id.fruit_content);
        // 获取监听类
        Buttonlistener listener = new Buttonlistener(textView);

        // 数字按钮
        Button zero = findViewById(R.id.btn_0);
        zero.setOnClickListener(listener);
        Button one = findViewById(R.id.btn_1);
        one.setOnClickListener(listener);
        Button two = findViewById(R.id.btn_2);
        two.setOnClickListener(listener);
        Button three = findViewById(R.id.btn_3);
        three.setOnClickListener(listener);
        Button four = findViewById(R.id.btn_4);
        four.setOnClickListener(listener);
        Button five = findViewById(R.id.btn_5);
        five.setOnClickListener(listener);
        Button six = findViewById(R.id.btn_6);
        six.setOnClickListener(listener);
        Button seven = findViewById(R.id.btn_7);
        seven.setOnClickListener(listener);
        Button eight = findViewById(R.id.btn_8);
        eight.setOnClickListener(listener);
        Button nine = findViewById(R.id.btn_9);
        nine.setOnClickListener(listener);

        Button dian = findViewById(R.id.btn_dian); // 点


        // 运算按钮
        Button add = findViewById(R.id.btn_add);
        add.setOnClickListener(listener);
        Button jian = findViewById(R.id.btn_jian);
        jian.setOnClickListener(listener);
        Button chen = findViewById(R.id.btn_chen);
        chen.setOnClickListener(listener);
        Button cu = findViewById(R.id.btn_cu); // 除
        cu.setOnClickListener(listener);
        Button den = findViewById(R.id.btn_den);
        den.setOnClickListener(listener);

        Button brackets = findViewById(R.id.btn_brackets);
        brackets.setOnClickListener(listener);
        // 操作按钮
        Button clear = findViewById(R.id.btn_clear); // 清除
        clear.setOnClickListener(listener);
        Button out = findViewById(R.id.btn_out); // 退格
        out.setOnClickListener(listener);
    }
    @Override
    protected void onDestroy() {
        super.onDestroy();
        // 清空
        textView.setText("");
    }
}
