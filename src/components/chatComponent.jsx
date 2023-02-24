import React, { Component } from "react";
import ChatBot from "react-simple-chatbot";
import { ThemeProvider } from "styled-components";
import Donation from "./donations";

const config = {
   width: "400px",
  height: "500px",
  floating: true,
  top: "50px",
  left: "10px"
  
};
const BotRedirect = ({ url, message }) => {
  return (
    <div>
      <a href={url} target="_blank">
        {message}
      </a>
    </div>
  );
};

const theme = {
  background: "  #cce0ff",
  fontFamily: "Helvetica Neue",
  headerBgColor: "#808080",
  headerFontColor: "#fff",
  headerFontSize: "15px",
  botBubbleColor: "#708090",
  botFontColor: "#fff",
  userBubbleColor: "white",
  userFontColor: "blue",

  

};

class ChatComponent extends Component {

 constructor(props) {
    super(props);
    this.state = {
      headerTitle: "Assistent",
    };
  }

  handleAcademicClick = () => {
    this.setState({ headerTitle: "Academic" });
  };
  
  
  render() {

    
    return (

      
      <ThemeProvider theme={theme}>
        <ChatBot
          //headerTitle={headerTitle}
          handleAcademicClick={this.handleAcademicClick}
          headerTitle={this.state.headerTitle}
          //speechSynthesis={{ enable: true, lang: 'en' }}

          //headerTitle="Speech Recognition"
          //recognitionEnable={true}
          botAvatar="https://cdn-icons-png.flaticon.com/512/6356/6356553.png"
          userAvatar="https://cdn-icons-png.flaticon.com/128/6322/6322388.png"
          steps={[
            {
              id: "intro",
              message: "hey there! Need help?",
              trigger: "intro-user",
            },
            {
              id: "intro-user",
              options: [
                {
                  value: "y",
                  label: "Yes, help me out please",
                  trigger: "yes-response",
                },
                { value: "n", label: "No,Thanks", trigger: "no-response" },
              ],
            },
            {
              id: "yes-response",
              message: "Okay, so what would you like to be able to do?",
              trigger: "intro-user1",
            },
            {
              id: "no-response",
              message: "Thank you join with us.",
              end: true,
            },
            {
              id: "intro-user1",
              options: [
                {
                  
                 value: "one1",
                  label: "Academic",
                  trigger: "discover acd",
                  onClick: this.handleAcademicClick,

                },
                {
                  value: "one2",
                  label: "Exames",
                  trigger: "join",
                },
                { value: "one3", label: "Staff", trigger: "support" },
                {
                  value: "one4",
                  label: "Students",
                  trigger: "details",
                },
                {
                  value: "one5",
                  label: "Send suggestions",
                  trigger: "suggestion",
                },
                { value: "n", label: "Exit", trigger: "no-response" },
              ],
            },
            {
              id: "discover acd",
              message:
                "This is Academic part",
              trigger: "intro-user1",
            },
            {
              id: "join",

              options: [
                {
                  value: "two1",
                  label: "End exam",
                  trigger: "partner",
                },
                {
                  value: "two2",
                  label: "Mid Exam",
                  trigger: "sponsor",
                },
              ],
            },
            {
              id: "partner",
              message:
                "student details",
              end: true,
            },
            {
              id: "sponsor",
              message:
                "We are happy that you want to contribute! We just need your name and email address to get in touch and discuss sponsorship schemes. Drop in your info here <get in touch link>",
              end: true,
            },
            {
              id: "support",

              options: [
                {
                  value: "two1",
                  label: "Place donations",
                  trigger: "donation",
                },
                { value: "two2", label: "Rate SMEs ", trigger: "rate" },
              ],
            },
            {
              id: "donation",

              component: <Donation />,

              trigger: "intro-user1",
            },
            {
              id: "rate",
              message:
                "Let’s show others what you think about our SMEs. All you have to do is select the SME you want to rate from here, and then give your rating",
              trigger: "intro-user1",
            },
            {
              id: "details",
              component: (
                <BotRedirect
                  message="Get to know more about RACUWU-Badulla ,Do you know that the Rotaract Club of Uva Wellassa University - Badulla is one of the most active Rotaract Clubs in the RI District 3220? Visit either the official Facebook page  to see the latest updates!"
                  url="https://www.facebook.com/RACUWUBadulla/"
                />
              ),
              trigger: "intro-user1",
            },
            {
              id: "suggestion",
              message: "Okay, so what would you like to be able to do?",
              trigger: "intro-user1",
            },
          ]}
          {...config}
        />
      </ThemeProvider>
    );
  }
}

export default ChatComponent;