import React from 'react';
import {StyleSheet, Text, View, Modal, Button} from 'react-native';

const Mymodal = ({hideModal, modalVisible}) => {
  return (
    <Modal visible={modalVisible} transparent={true}>
      <View style={styles.backdrop}>
        <View style={styles.content}>
          <Text>Hello</Text>
          <Button title="Hide Modal" onPress={hideModal} />
        </View>
      </View>
    </Modal>
  );
};

export default Mymodal;

const styles = StyleSheet.create({
  backdrop: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.4)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  content: {
    backgroundColor: 'white',
    width: '80%',
    height: '80%',
  },
});
