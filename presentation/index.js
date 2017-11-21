// Import React
import React from "react";
import styled, { injectGlobal  } from 'styled-components';

// Inject font
injectGlobal`
@font-face {
  font-family: 'Brush Up';
  src: url(${require('../assets/brushup.woff2')});
  font-weight: normal;
  font-style: normal;
}
`


// Import Spectacle Core tags
import {
  BlockQuote,
  Cite,
  Deck,
  Heading,
  ListItem,
  List,
  Quote,
  Slide,
  Text,
  Image
} from "spectacle";

// Import theme
import createTheme from "spectacle/lib/themes/default";

// Knowit theme
import theme from "./theme/knowitTheme"

// Require CSS
require("normalize.css");

const images = {
  code: require('../assets/code.jpg'),
  diagram: require('../assets/reactdiagram.png'),
};


export default class Presentation extends React.Component {
  render() {
    return (
      <Deck contentWidth={1400} transition={["zoom", "slide"]} transitionDuration={500} theme={theme}>
        <Slide transition={["zoom"]} bgColor="primary">
          <Heading textFont="Brush Up" size={1} lineHeight={1} textColor="secondary">
          #Ruter Mobilitetsapp
          </Heading>
          <Text margin="10px 0 0" textColor="tertiary" textSize={32} bold italic>
            - By Christian Linchausen og Onur Hakbilen
          </Text>
        </Slide>

        <Slide transition={[ "slide"]} bgColor="tertiary">
          <Heading textFont="primary" size={1} lineHeight={1} textColor="secondary">
          Idé
          </Heading>
          <Text margin="10px 0 0" textColor="secondary" textSize={32} bold italic>
             Få varslinger før avtalene dine med hvordan du kan komme deg dit. 
          </Text>
        </Slide>

        <Slide transition={["slide"]} bgColor="tertiary">
          <Heading size={4} textColor="secondary" caps>Teknologiutvalg</Heading>
          <List>
            <ListItem textSize={38}>Native apps - Java/Kotlin og Swift/Objective-C</ListItem>
            <ListItem textSize={38}>Hybrid apps - Phonegap eller Ionic Framework</ListItem>
            <ListItem textSize={38}>"Native feeling" apps - React Native eller Xamarin</ListItem>
          </List>
        </Slide>

        <Slide transition={["slide"]} bgColor="primary">
          <Heading size={4} textColor="secondary" caps>Vårt valg - React Native</Heading>
          <List>
            <ListItem textSize={38}>"Lær det engang, bruk det overalt"</ListItem>
            <ListItem textSize={38}>Deklerative komponenter og alle kjente konsepter fra React ekosystemet</ListItem>
            <ListItem textSize={38}>Støtter ikke API spesifikke JavaScript biblioteker som Redux</ListItem>
          </List>
        </Slide>

        <Slide transition={["slide"]} bgColor="primary">
          <Heading size={6} textColor="secondary" caps>React Native komponenter</Heading>
          <Image style={{border: '3px solid #A0D1CA'}} src={images.code} />
        </Slide>

        <Slide transition={["slide"]} bgColor="primary" textColor="tertiary">
          <Heading size={6} textColor="secondary" caps>Hot-reloading</Heading>
          <Image style={{border: '3px solid #A0D1CA'}} src="https://raw.githubusercontent.com/AlanFoster/react-native-presentation/master/assets/hot-reload.gif" />
        </Slide>

        <Slide transition={["zoom"]} bgColor="secondary" textColor="primary">
          <Heading size={1} caps>Ytelse?</Heading>
        </Slide>

        <Slide transition={["slide"]} bgColor="primary" textColor="tertiary">
          <Heading size={6} textColor="secondary" caps>Hvordan funker React Native?</Heading>
          <Image width="1100px" style={{border: '3px solid #A0D1CA'}} src={images.diagram} />
        </Slide>

        <Slide transition={["slide"]} bgColor="tertiary">
          <Heading size={6} textColor="secondary" caps>Tips</Heading>
          <List>
            <ListItem textSize={38}>Bruk shouldComponentUpdate</ListItem>
            <ListItem textSize={38}>Bruk keys hvis du rendrer liste med komponenter</ListItem>
            <ListItem textSize={38}>Bruk native komponenter f. eks Native Navigation istedet for JS basert router</ListItem>
            <ListItem textSize={38}>Lag dine egne native komponenter hvis ytelse er viktigst</ListItem>
          </List>
        </Slide>

      </Deck>
    );
  }
}
