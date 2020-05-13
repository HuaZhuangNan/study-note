package com.example.message;

import android.support.annotation.NonNull;
import android.support.v7.widget.RecyclerView;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.LinearLayout;
import android.widget.TextView;

import java.util.List;
public class MsgAdapter extends RecyclerView.Adapter<MsgAdapter.ViewHolder> {
    private List<Msg> mMsglist; // 消息列表变量
    MsgAdapter(List<Msg> mMsglist){
        this.mMsglist = mMsglist;
    } // 构建即赋值创建消息列表
    static class ViewHolder extends RecyclerView.ViewHolder {
        LinearLayout leftLayout,rightLayout;
        TextView leftMsg,rightMsg;
        ViewHolder(View view){ super(view);
            //  获取布局
            leftLayout = (LinearLayout) view.findViewById(R.id.left_layout);
            rightLayout = (LinearLayout) view.findViewById(R.id.right_layout);
            leftMsg = (TextView) view.findViewById(R.id.left_msg);
            rightMsg = (TextView) view.findViewById(R.id.right_msg);
        }
    }
    // 创建消息列表
    @NonNull @Override
    public ViewHolder onCreateViewHolder(@NonNull ViewGroup viewGroup, int viewType) {
        View view = LayoutInflater.from(viewGroup.getContext()).inflate
                (R.layout.msg_item, viewGroup , false);  // 给列表后一位添加视图
        return new ViewHolder(view);  // 返回这个视图
    }
    @Override
    public void onBindViewHolder(@NonNull ViewHolder holder, int position){
        Msg msg = mMsglist.get(position);
        if(msg.getType()==Msg.TYPE_ERCEIVED) {   // 判断是谁的消息
            holder.leftLayout.setVisibility(View.VISIBLE); // 左边显示
            holder.rightLayout.setVisibility(View.GONE);
            holder.leftMsg.setText(msg.getContent()); // 设置控件文本
        }else if(msg.getType()==Msg.TYPE_SENT){
            holder.leftLayout.setVisibility(View.GONE);
            holder.rightLayout.setVisibility(View.VISIBLE); // 右边显示
            holder.rightMsg.setText(msg.getContent());
        }
    }
    @Override
    public int getItemCount(){
        return mMsglist.size();
    } // 获取消息列表的大小
}
