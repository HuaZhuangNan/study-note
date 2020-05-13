package com.example.playaudiotest;

import android.Manifest;
import android.content.pm.PackageManager;
import android.media.MediaPlayer;
import android.os.Environment;
import android.support.annotation.NonNull;
import android.support.v4.app.ActivityCompat;
import android.support.v4.content.ContextCompat;
import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.view.View;
import android.widget.Button;
import android.widget.Toast;

import java.io.File;

public class MainActivity extends AppCompatActivity implements View.OnClickListener {

    // 音频对象
    private MediaPlayer mediaPlayer = new MediaPlayer();

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
        // 获取控件
        Button play = (Button) findViewById(R.id.main_play);
        Button pause = (Button) findViewById(R.id.main_pause);
        Button stop = (Button) findViewById(R.id.main_stop);
        // 设置监听事件
        play.setOnClickListener(this);
        pause.setOnClickListener(this);
        stop.setOnClickListener(this);
        // 权限申请
        if(ContextCompat.checkSelfPermission(MainActivity.this, Manifest.permission.
                WRITE_EXTERNAL_STORAGE) != PackageManager.PERMISSION_DENIED) {
            ActivityCompat.requestPermissions(MainActivity.this,new String[] {
                    Manifest.permission.WRITE_EXTERNAL_STORAGE},1);
        } else {
            // 初始化 MediaPlayer 对象
            initMediaPlayer();
        }
    }
    // 初始化 MediaPlayer 对象
    private void initMediaPlayer(){
        try{
            // 获取SD卡路径和音频文件拼接成完成文件路径
            File file = new File(Environment.getExternalStorageDirectory(),"music.mp3");
            // 指定文件的路径
            mediaPlayer.setDataSource(file.getPath());
            // 让 Meadia 进入准备状态
            mediaPlayer.prepare();
        }catch (Exception e){
            e.printStackTrace();
        }
    }

    @Override
    public void onRequestPermissionsResult(int requestCode, @NonNull String[]  permissions, @NonNull int[] grantResults){
        switch (requestCode) {
            case 1:
                if(grantResults.length >0 && grantResults[0] == PackageManager.PERMISSION_DENIED){
                    initMediaPlayer(); // 初始化
                }else {
                    Toast.makeText(this,"拒绝了权限无法使用本程序！",
                        Toast.LENGTH_LONG).show();
                    finish();
                }
                break;
             default:
        }
    }
    @Override
    public void onClick(View v){
        switch (v.getId()){
            case R.id.main_play:
                if(!mediaPlayer.isPlaying()){
                    mediaPlayer.start(); // 开始
                }
                break;
            case R.id.main_pause:
                if(mediaPlayer.isPlaying()){
                    mediaPlayer.pause(); // 暂停
                }
                break;
            case R.id.main_stop:
                if(!mediaPlayer.isPlaying()){
                    mediaPlayer.reset(); // 停止
                    initMediaPlayer(); // 初始化
                }
                break;
            default:
                break;
        }
    }
    @Override
    protected void onDestroy(){
        super.onDestroy();
        // 退出时音频对象不为空时暂停销毁播放器
        if(mediaPlayer != null){
            mediaPlayer.stop();
            mediaPlayer.release();
        }
    }
}
