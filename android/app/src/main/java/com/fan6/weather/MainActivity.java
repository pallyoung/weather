package com.fan6.weather;

import android.app.ActionBar;
import android.os.Bundle;
import android.view.LayoutInflater;
import android.view.ViewGroup;

import com.facebook.react.ReactActivity;
import com.fan6.views.LoadingView;


public class MainActivity extends ReactActivity {
    LoadingView loadingView;
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        LayoutInflater inflater = LayoutInflater.from(this);
        loadingView = (LoadingView)inflater.inflate(R.layout.layout_view_loading,null);
        addContentView(loadingView,new ViewGroup.LayoutParams(ViewGroup.LayoutParams.MATCH_PARENT, ViewGroup.LayoutParams.MATCH_PARENT));
    }

    /**
     * Returns the name of the main component registered from JavaScript.
     * This is used to schedule rendering of the component.
     */
    @Override
    protected String getMainComponentName() {
        return "weather";
    }
}
