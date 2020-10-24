import React from 'react';
import {
  View,
  Text,
  Image
} from 'react-native';

export default () => {
  return (
    <View style = {
      {
        "alignItems": "flex-start",
        "flex": 1
      }
    } >
    <View style = {
      {
        "alignItems": "flex-start",
        "paddingStart": 24,
        "paddingTop": 64,
        "width": 375,
        "height": 812,
        "backgroundColor": "#ffffff"
      }
    } >
    <View style = {
      {
        flexDirection: 'row',
        alignItems: 'flex-start'
      }
    } > <Image style = {
      {
        "width": 80,
        "height": 80,
        "borderRadius": 24,
        "borderWidth": 1.6,
        "borderColor": "rgba(255, 255, 255, 255)"
      }
    }
    source = {
      {
        /* add your source here */ }
    }
    />
    <Text style = {
      {
        "fontFamily": "Poppins",
        "fontWeight": "300",
        "fontSize": 14,
        "color": "rgba(255, 255, 255, 255)",
        "marginStart": 16
      }
    } > Hello, </Text>
    <Text style = {
      {
        "fontFamily": "Poppins",
        "fontSize": 24,
        "color": "rgba(255, 255, 255, 255)",
        "marginStart": -36,
        "marginTop": 18
      }
    } > Sara Khan </Text>
    <View style = {
      {
        "alignItems": "flex-start",
        "marginStart": 102,
        "marginTop": 7
      }
    } >
    <View style = {
      {
        "alignItems": "flex-start",
        "width": 4,
        "height": 4,
        "borderRadius": 2,
        "backgroundColor": "rgba(255, 255, 255, 255)"
      }
    }
    />
    <View style = {
      {
        "alignItems": "flex-start",
        "marginTop": 6,
        "width": 4,
        "height": 4,
        "borderRadius": 2,
        "backgroundColor": "rgba(255, 255, 255, 255)"
      }
    }
    />
    </View>
    </View>
    <View style = {
      {
        flexDirection: 'row',
        alignItems: 'flex-start'
      }
    } > {
      /* <Path /> {Path is not supported. It can be exported as Svg} */ }
    <View style = {
      {
        "width": 20,
        "height": 20,
        "backgroundColor": "#000000"
      }
    }
    />
    <Text style = {
      {
        "fontFamily": "Poppins",
        "fontSize": 12,
        "letterSpacing": 0.4,
        "color": "rgba(255, 255, 255, 255)",
        "marginStart": 12,
        "marginTop": -15
      }
    } > Make Up Artist </Text>

    {
      /* <Path /> {Path is not supported. It can be exported as Svg} */ }
    <View style = {
      {
        "width": 10.05,
        "height": 9.56,
        "backgroundColor": "#000000"
      }
    }
    />
    <Text style = {
      {
        "fontFamily": "Montserrat",
        "fontSize": 12,
        "letterSpacing": 0.4,
        "color": "rgba(255, 255, 255, 255)",
        "marginStart": 3.95,
        "marginTop": -14
      }
    } > 5.0 </Text>
    </View>
    <Text style = {
      {
        "fontFamily": "Poppins",
        "fontSize": 14,
        "letterSpacing": 0.8,
        "color": "rgba(255, 255, 255, 255)",
        "marginTop": 28
      }
    } > I 'm a professional make up artist having 3 years of professional experience. Lorm Ipsum el dolor.</Text>
    </View>
    </View>

  );
};