import React from "react";
import { Text, Image, TouchableOpacity } from "react-native";

import {
  Container,
  Header,
  Body,
  Title,
  Content,
  CardItem,
  Card,
  H1
} from "native-base";

class Home extends React.Component {
  showAlert = () => {
    alert("Hallo");
  };

  render() {
    return (
      <Container>
        <Header>
          <Body>
            <Title>Header</Title>
          </Body>
        </Header>
        <Content>
          <TouchableOpacity onPress={this.showAlert} activeOpacity={1}>
            <Card>
              <CardItem cardBody>
                <Image
                  source={{
                    uri:
                      "https://ajiprasetyoweb.files.wordpress.com/2017/01/react-native.png?w=816"
                  }}
                  style={{ height: 200, width: null, flex: 1 }}
                />
              </CardItem>
              <CardItem>
                <H1>React Native</H1>
              </CardItem>
              <CardItem>
                <Text>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting, remaining
                  essentially unchanged. It was popularised in the 1960s with
                  the release of Letraset sheets containing Lorem Ipsum
                  passages, and more recently with desktop publishing software
                  like Aldus PageMaker including versions of Lorem Ipsum.
                </Text>
              </CardItem>
            </Card>
          </TouchableOpacity>
        </Content>
      </Container>
    );
  }
}

export default Home;
