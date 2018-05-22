import React from 'react';
import { Text, View } from 'react-native';
import { Card, CardSession } from './common/';

const ContactDetail = (props) => {
  const { name, location, phone } = props.detail;

  return (
     <Card>
      <CardSession>
         <View>
            <Text style={styles.nameStyle}>
               { name.title + ' ' + name.first + ' ' + name.last }
            </Text>
            <Text>{ location.street }</Text>
            <Text>{ phone }</Text>
         </View>
      </CardSession>
     </Card>
  );
};

const styles = {
   nameStyle: {
      fontWeight: 'bold',
      fontSize: 18,
   }
};

export default ContactDetail;
