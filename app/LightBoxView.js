import React, { Component } from 'react';
import { Image } from 'react-native';
var Lightbox = require('react-native-lightbox');

var LightboxView = React.createClass({
  
  render: function () {
    return (
      <Lightbox>
        <Image
          style={{ height: 300 }}
          source={{ uri: 'http://knittingisawesome.com/wp-content/uploads/2012/12/cat-wearing-a-reindeer-hat1.jpg' }}
        />
      </Lightbox>
    );
  },
});

export default LightboxView;
