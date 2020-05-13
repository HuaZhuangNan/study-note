package com.coolweather.android;

import android.content.Intent;
import android.content.SharedPreferences;
import android.preference.PreferenceManager;
import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;

public class MainActivity extends AppCompatActivity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        // 设置内容视图
        setContentView(R.layout.activity_main);
        // 读取数据对象
        SharedPreferences prefs = PreferenceManager.getDefaultSharedPreferences(this);
        // 如果有缓存数据就读取信息页面
        if (prefs.getString("weather", null) != null) {
            // 传递对象
            Intent intent = new Intent(this, WeatherActivity.class);
            // 设置当前对象
            startActivity(intent);
            // 完成结束本次生命周期
            finish();
        }
    }

}