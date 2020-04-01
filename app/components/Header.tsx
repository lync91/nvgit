import React from 'react';
import { Flex, Avatar } from '@fluentui/react-northstar';
import MenuHeader from './Menu';


const HeaderPanel = () => {
  return (
    <div className="admin__header">
    <Flex className="header-side">
      Hello
    </Flex>
    <Flex>
      <MenuHeader />
    </Flex>
    <Flex className="header-right" hAlign="end">
      <Avatar
        image={{
          src:
            'https://s3.amazonaws.com/uifaces/faces/twitter/samgrover/128.jpg',
          alt: 'Profile picture of Matt'
        }}
        status={{
          color: 'green',
          icon: 'icon-checkmark',
          title: 'Available'
        }}
      />
    </Flex>
  </div>
  );
};

export default HeaderPanel;
