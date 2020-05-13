package com.ygj.com.util;

import android.view.View;
import android.widget.Button;
import android.widget.TextView;

import com.ygj.com.R;


public class Buttonlistener implements View.OnClickListener {
    private TextView textView;

    public Buttonlistener(TextView textView) {
        this.textView = textView;
    }

    @Override
    public void onClick(View v) {
        Button button = (Button) v;
        String content = textView.getText().toString();
        // 如果上次有 \n 结果先清除
        if(content.contains("\n"))
            textView.setText(content.split("\n")[1]);
        // 获取点击对象
        switch (v.getId()){
            case R.id.btn_clear: textView.setText("");
                break;
            case R.id.btn_out:
                if(content.length() >=1)
                    textView.setText(content.substring(0,content.length()-1)+"");
                break;
            case R.id.btn_brackets:  // TODD 符号后面其实不可以加括号
                if(!content.contains("(") || content.indexOf(")")!=-1 )
                    textView.append("(");
                else
                    textView.append(")");
                break;
            case R.id.btn_den: Count(content);
                break;
                // 不可以两个符号
            case R.id.btn_add :
            case R.id.btn_jian :
            case R.id.btn_chen :
            case R.id.btn_cu :
                if(content.substring(content.length()-1).contains("+")) break;
                if(content.substring(content.length()-1).contains("-")) break;
                if(content.substring(content.length()-1).contains("*")) break;
                if(content.substring(content.length()-1).contains("/")) break;
            default:
                textView.append(button.getText());
                break;
        }

    }


    private void Count(String content){
        String s1,s2;
        double d1,d2;
        String result=null;
        if(content.contains("+")){
            s1 = content.substring(0,content.indexOf("+"));
            s2 = content.substring(content.indexOf("+"));

            d1 = Double.parseDouble(s1);
            d2 = Double.parseDouble(s2);

            result =(int)(d1+d2) +"";
        }
        if(content.contains("-")){
            s1 = content.substring(0,content.indexOf("-"));
            s2 = content.substring(content.indexOf("-"));

            d1 = Double.parseDouble(s1);
            d2 = Double.parseDouble(s2);

            result =(int)(d1+d2) +"";
        }
        if(content.contains("*")){
            s1 = content.substring(0,content.indexOf("*"));
            s2 = content.substring(content.indexOf("*"));

            d1 = Double.parseDouble(s1);
            d2 = Double.parseDouble(s2);

            result =(d1*d2) +"";
        }
        if(content.contains("/")){
            s1 = content.substring(0,content.indexOf("/"));
            s2 = content.substring(content.indexOf("/"));

            d1 = Double.parseDouble(s1);
            d2 = Double.parseDouble(s2);

            result =(d1/d2) +"";
        }
        textView.setText(content+"\n"+result);
    }
}
