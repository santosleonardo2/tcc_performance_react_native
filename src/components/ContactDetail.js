import React from 'react';
import { Text, View } from 'react-native';

const ContactDetail = (props) => {
  const { name, location, phone } = props.detail;

  return (
    <View style={{ marginTop: 10, marginLeft: 10 }}>
      <Text>{ name.title + ' ' + name.first + ' ' + name.last }</Text>
      <Text>{ location.street }</Text>
      <Text>{ phone }</Text>
    </View>
  );
};

export default ContactDetail;
