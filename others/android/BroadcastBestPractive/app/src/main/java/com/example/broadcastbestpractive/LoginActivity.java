package com.example.broadcastbestpractive;

import android.content.Intent;
import android.os.Bundle;
import android.support.annotation.Nullable;
import android.view.View;
import android.widget.Button;
import android.widget.EditText;
import android.widget.Toast;

public class LoginActivity extends BaseActivity {
    private EditText accountEdit;
    private EditText passwordEdit;
    private Button login;

    @Override
    protected void onCreate(@Nullable Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_login);
        accountEdit=(EditText) findViewById(R.id.account);
        passwordEdit=(EditText) findViewById(R.id.password);
        login=(Button) findViewById(R.id.login);
        login.setOnClickListener(new View.OnClickListener(){
            @Override
            public void onClick(View v){
                String account = accountEdit.getText().toString();
                String password = passwordEdit.getText().toString();
                //如果是admin且密码是admin
                if(account.equals("admin")&&password.equals("admin")){  // 登录成功
                    Intent intent=new Intent(LoginActivity.this,MainActivity.class);  // 跳转
                    startActivity(intent);
                    finish();
                }else{
                    Toast.makeText(LoginActivity.this,"您的账号或者密码错误！",  // 登录失败
                            Toast.LENGTH_SHORT).show();
                }
            }
        });
    }
}
