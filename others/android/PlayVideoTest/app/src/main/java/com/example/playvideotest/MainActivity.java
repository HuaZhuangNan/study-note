package com.example.playvideotest;

import android.Manifest;
import android.content.pm.PackageManager;
import android.os.Environment;
import android.support.annotation.NonNull;
import android.support.v4.app.ActivityCompat;
import android.support.v4.content.ContextCompat;
import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.view.View;
import android.widget.Button;
import android.widget.Toast;
import android.widget.VideoView;

import java.io.File;

public class MainActivity extends AppCompatActivity implements View.OnClickListener {

    private VideoView videoView;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
        // 获取控件
        videoView = (VideoView) findViewById(R.id.video_view);
        Button play = (Button) findViewById(R.id.main_play);
        Button pause = (Button) findViewById(R.id.main_pause);
        Button replay = (Button) findViewById(R.id.main_replay);
        // 设置监听事件
        play.setOnClickListener(this);
        pause.setOnClickListener(this);
        replay.setOnClickListener(this);
        // 权限申请
        if(ContextCompat.checkSelfPermission(MainActivity.this, Manifest.permission.
                WRITE_EXTERNAL_STORAGE) != PackageManager.PERMISSION_DENIED) {
            ActivityCompat.requestPermissions(MainActivity.this,new String[] {
                    Manifest.permission.WRITE_EXTERNAL_STORAGE},1);
        } else {
            // 初始化 MediaPlayer 对象
            initVideoPath();
        }
    }
    private void initVideoPath(){
        // 获取SD卡路径和音频文件拼接成完成文件路径
        File file = new File(Environment.getExternalStorageDirectory(),"video.mp4");
        // 指定文件的路径
        videoView.setVideoPath(file.getPath());
    }
    @Override
    public void onRequestPermissionsResult(int requestCode, @NonNull String[]  permissions, @NonNull int[] grantResults){
        switch (requestCode) {
            case 1:
                if(grantResults.length >0 && grantResults[0] == PackageManager.PERMISSION_DENIED){
                    initVideoPath(); // 初始化
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
                if(!videoView.isPlaying()){
                    videoView.start(); // 开始
                }
                break;
            case R.id.main_pause:
                if(videoView.isPlaying()){
                    videoView.pause(); // 暂停
                }
                break;
            case R.id.main_replay:
                if(!videoView.isPlaying()){
                    videoView.resume(); // 重新播放
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
        if(videoView != null){
            videoView.suspend();
        }
    }

}
