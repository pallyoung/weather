package com.fan6.views;

import android.content.Context;
import android.graphics.Canvas;
import android.util.AttributeSet;
import android.widget.LinearLayout;

/**
 * Created by Spencer on 2017/5/31.
 */

public class LoadingView  extends LinearLayout {
    public LoadingView(Context context) {
        super(context);
    }

    public LoadingView(Context context, AttributeSet attrs) {
        super(context, attrs);
    }

    public LoadingView(Context context, AttributeSet attrs, int defStyleAttr) {
        super(context, attrs, defStyleAttr);
    }
    public void show(){
        post(new Runnable() {
            @Override
            public void run() {
                setVisibility(VISIBLE);
            }
        });
    }
    public void hide(){
        post(new Runnable() {
            @Override
            public void run() {
                setVisibility(INVISIBLE);
            }
        });
    }

}
