import React, { useState, useEffect } from "react";
import { View, Platform } from "react-native";
import { style } from "../styles/HomeStyles/HStyleIndex";
import { ShortBar } from "../styles/ShortBar";
import { LogOutBtn, LogOutText } from "../styles/MypageStyles./logOutBtn";
import {
  EmailText,
  EmailView,
  Email,
  EditPWBtn,
} from "../styles/MypageStyles./EmailView";
import sendSignOutRequest from "../core/apis/logOut";
import useAuth from "../hooks/useAuth";
import { LoginValue } from "../models/LoginTypes";
const { UpperText } = style;

const Mypage = (): JSX.Element => {
  const { onLogOut } = useAuth();

  const handleLogOutBtnPress = async () => {
    try {
      await sendSignOutRequest();
      setTimeout(() => {
        onLogOut();
      }, 1000);
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <View style={{ backgroundColor: "#fff", flex: 1 }}>
      <UpperText OS={Platform.OS}>마이페이지</UpperText>
      <ShortBar />
      <EmailView>
        <EmailText>{"👤  이메일"}</EmailText>
        <Email>{"longeremail@longeremail.com"}</Email>
      </EmailView>
      <EditPWBtn onPress={() => console.log("비밀번호를 수정하시겠습니까?")}>
        <EmailText>{"🔐  비밀번호 수정"}</EmailText>
      </EditPWBtn>
      <LogOutBtn onPress={handleLogOutBtnPress}>
        <LogOutText>{"👋  로그아웃"}</LogOutText>
      </LogOutBtn>
    </View>
  );
};

export default Mypage;
