package com.example.message;

import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.support.v7.widget.LinearLayoutManager;
import android.support.v7.widget.RecyclerView;
import android.view.View;
import android.widget.Button;
import android.widget.EditText;

import java.util.ArrayList;
import java.util.List;
public class MainActivity extends AppCompatActivity {
    private List<Msg> msgList = new ArrayList<>();
    private EditText inputText;
    private RecyclerView msgReyclearView;
    private MsgAdapter adapter;
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main); // 获取主布局
        initMsgs(); // 消息列表0数据初始化
        // 获取布局的控件
        inputText = (EditText) findViewById(R.id.input_text);
        Button send = (Button) findViewById(R.id.main_send);
        msgReyclearView = (RecyclerView) findViewById(R.id.msg_recyclear_view);
        // 创建视图对象
        LinearLayoutManager  layoutManager = new LinearLayoutManager(this);
        msgReyclearView.setLayoutManager(layoutManager); // 添加到主页
        adapter = new MsgAdapter(msgList);
        msgReyclearView.setAdapter(adapter); // 给视图添加消息列表
        send.setOnClickListener(new View.OnClickListener(){  // 按钮添加点击事件
            @Override
            public void onClick(View v){
                String content = inputText.getText().toString(); // 获取输入值
                if(!"".equals(content)){
                    Msg msg = new Msg(content,Msg.TYPE_SENT);
                    msgList.add(msg);
                    adapter.notifyItemChanged(msgList.size()-1); // 下标
                    msgReyclearView.scrollToPosition(msgList.size()-1);
                    inputText.setText("");
                }
            }
        });
    }
    private void initMsgs() {
       Msg msg1 = new Msg("你好呀,很高兴认识你",Msg.TYPE_ERCEIVED);
       msgList.add(msg1);
       Msg msg2 = new Msg("我也是",Msg.TYPE_SENT);
       msgList.add(msg2);
    }

}
