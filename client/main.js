import React from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';
import '../imports/api/tasks.js';
import App from '../imports/ui/App.js';
import '../imports/ui/accounts-config.js';


Meteor.startup(() => {
    render(<App/>, document.getElementById('render-target'));
});