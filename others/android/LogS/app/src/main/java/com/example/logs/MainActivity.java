package com.example.logs;

import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.view.View;
import android.widget.Button;

public class MainActivity extends AppCompatActivity implements View.OnClickListener {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
        Button button = (Button) findViewById(R.id.left_button);
        button.setOnClickListener(this);
        replaceFragment(new RightFragment());
    }

    private void replaceFragment(RightFragment rightFragment) {
    }

    @Override
    public void onClick(View v) {

    }
}
