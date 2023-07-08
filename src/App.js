import {
  FlexBox,
  FlexBoxAlignItems,
  FlexBoxDirection,
  FlexBoxJustifyContent,
  Link,
  LinkDesign,
  ShellBar,
  Button
} from '@ui5/webcomponents-react';
import React, { useState, useEffect } from 'react';
import { Providers, MockProvider } from '@microsoft/mgt-element';
import { 
  Login,
  FileList,
  File,
  Agenda,
  Tasks,
  TeamsChannelPicker,
  PeoplePicker,
  GroupType,
  PersonType,
  Person,
  PersonCardInteraction,
  PersonViewType,
  Get,
  MgtTemplateProps,
  Chat
} from '@microsoft/mgt-react';

import './App.css';

Providers.globalProvider = new MockProvider(true);

const FileTemplate = ({ dataContext }) => {
  const { file } = dataContext;
  const click = (file) => {
    console.log('Clicked');
    console.log(file);
  };
  return <File key={file.id} fileDetails={file} onClick={click(file)} />;
};

const MyChat = (MgtTemplateProps) => {
  debugger;
  console.log("this is chat..");
  const chat = MgtTemplateProps.dataContext;
  console.log(chat);
  return <div>{chat.topic}
    <Chat />
  </div>;
};

const userDetails = () => {
  return {
    displayName: 'Dancing Lion',
    mail: 'kennystwork@gmail.com',
    personImage: '/dancinglion.png'
  }
}

function App() {

  

  debugger;
  return (
    <>
      <ShellBar primaryTitle="UI5 Web Components for React Templates" />
      <FlexBox
        style={{ width: '100%', height: '100vh' }}
        direction={FlexBoxDirection.Column}
        justifyContent={FlexBoxJustifyContent.Center}
        alignItems={FlexBoxAlignItems.Center}
      >
        <Link href="https://sap.github.io/ui5-webcomponents-react/" target="_blank" design={LinkDesign.Emphasized}>
          <h5>
            Getting Started with UI5 Web Component for React
          </h5>
          
        </Link>
        <small>
          This is a link to the UI5 Web Component tutorial....
        </small>
        <Person personImage='/dancinglion.png'/>
        <Login userDetails={userDetails} ></Login>
        <Get
          resource="/me/chats/yourID@unq.gbl.spaces"
          version="beta"
          scopes={[
            'chat.read, Chat.ReadWrite.All, channemessage.read.all, channelmessage.Read.Group','user.read'
          ]}
        >
          <MyChat />
        </Get>
        <FileList>
          <FileTemplate template="file"></FileTemplate>
        </FileList>
      </FlexBox>
    </>
  );
}
export default App;