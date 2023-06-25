import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  SafeAreaView,
  FlatList,
 
} from "react-native";
import {
  TextInput,
  ScrollView,
  TouchableOpacity,
} from "react-native-gesture-handler";
import { Appbar } from 'react-native-paper';
import { Platform } from 'react-native';
import { Switch, List ,Button, Snackbar} from 'react-native-paper';
import colors from "../Style/colors";


const MyComponent = () => {
    //switch
    const [isSwitchOn, setIsSwitchOn] = useState(false);
    const onToggleSwitch = () => setIsSwitchOn(!isSwitchOn);
    //snackbar
    const [visible, setVisible] = React.useState(false);
    const onToggleSnackBar = () => setVisible(!visible);
    const onDismissSnackBar = () => setVisible(false);
    //end
    const onPressItem = () =>{
        // {onToggleSnackBar}>{visible ? 'Hide' : 'Show'}
        <View style={styles.container}>
            <Snackbar
                visible={visible}
                onDismiss={onDismissSnackBar}
                action={{
                label: 'Undo',
                onPress: () => {
                    // Do something
                },
                }}>
                Hey there! I'm a Snackbar.
            </Snackbar>
        </View>
    }
    return(
        <View style= {styles.container}>
            <View>
                <List.Section>
                    <List.Subheader>Danh sách thiết bị mượn</List.Subheader>
                    <List.Item 
                        title="Thiết bị A" left={() => <List.Icon icon="folder" />}
                        onPress={onToggleSnackBar}
                    />
                    <List.Item
                        title="Second Item" left={() => <List.Icon color={colors.blue} icon="folder" />}
                        onPress={onToggleSnackBar}
                    />

                </List.Section>
            </View>
            <View>
                <Switch value={isSwitchOn} onValueChange={onToggleSwitch} />
            </View>
            <View style={styles.container}>
                <Button onPress={onToggleSnackBar}>{visible ? 'Hide' : 'Show'}</Button>
                <Snackbar
                    visible={visible}
                    onDismiss={onDismissSnackBar}
                    action={{
                    label: 'Undo',
                    onPress: () => {
                        // Do something
                    },
                    }}>
                    Hey there! I'm a Snackbar.
                </Snackbar>
            </View>
        </View>        
    )};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'left',
        alignItems: 'center',
        
    },
    });
export default MyComponent;