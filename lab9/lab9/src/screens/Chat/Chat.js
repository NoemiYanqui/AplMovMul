import React, { Fragment } from 'react';
import { Modal, View, Button, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import { GiftedChat } from 'react-native-gifted-chat';
import Icon from 'react-native-ionicons';
import imageUser from '../../../assets/img/pollo.jpg';

export default class ChatScreen extends React.Component {
	state = {
		messages: [],
		userId: null,
		modalVisible: false
	};

	async componentDidMount() {
		this.socket = global.socket;
		this.socket.on('message', this.onRecivedMessage);
		const userId = await AsyncStorage.getItem('userId');
		this.setState({ userId: userId });
	}
	onRecivedMessage = messages => {
		this._storeMessages(messages);
	};
	onSend = (messages = []) => {
		console.log(this.socket);
		this.socket.emit('message', messages[0]);

		this._storeMessages(messages);
	};
	_storeMessages = messages => {
		this.setState(previousState => {
			return {
				messages: GiftedChat.append(previousState.messages, messages)
			};
		});
	};
	settingsHandler = () => {
		this.setState({ modalVisible: true });
	};
	chatHandler = () => {
		this.setState({ modalVisible: false });
	};
	backHandler = () => {
		this.setState({ modalVisible: false }, () => {
			this.props.navigation.navigate('Home');
		});
	};
	cameraHandler = () => {
		this.setState({ modalVisible: false }, () => {
			console.log('si hace click');
			this.props.navigation.navigate('Camera');
		});
	};

	render() {
		const user = {
			_id: this.state.userId || -1,
			name: this.state.name,
			avatar: imageUser
		};
		return (
			<Fragment>
				<Modal
					animationType="slide"
					transparent={true}
					visible={this.state.modalVisible}
				>
					<View
						style={{
							flex: 1,
							backgroundColor: 'rgba(0, 0, 0, 0.5)',
							justifyContent: 'center',
							alignItems: 'center'
						}}
					>
						<View>
							<Button
								onPress={this.chatHandler}
								title="Regresar al Chat"
								color="#841584"
							/>
							<Button
								onPress={this.cameraHandler}
								title="Tomar Foto"
								color="green"
							/>
							<Button
								onPress={this.backHandler}
								title="Regresar al Inicio"
								color="red"
							/>
						</View>
					</View>
				</Modal>

				<GiftedChat
					placeholder="Escribe algo..."
					renderActions={() => {
						return (
							<Icon
								color="#fff"
								style={{
									padding: 5,
									alignItems: 'center',
									backgroundColor: '#46494f',
									opacity: 0.8,
									height: 45
								}}
								size={25}
								name={'md-settings'}
								onPress={this.settingsHandler}
							/>
						);
					}}
					messages={this.state.messages}
					onSend={this.onSend}
					user={user}
				/>
			</Fragment>
		);
	}
}

const styles = StyleSheet.create({
	row: {
		flex: 1,
		flexDirection: 'row',
		justifyContent: 'space-between',
		marginBottom: 10
	},
	box: {
		flex: 1,
		height: 100,
		backgroundColor: '#333'
	},
	box2: {
		backgroundColor: 'green'
	},
	box3: {
		backgroundColor: 'orange'
	},
	two: {
		flex: 2
	}
});
