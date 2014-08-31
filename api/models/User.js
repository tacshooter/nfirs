/**
* User.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  attributes: {
    name: 'string',
    createdAt: {
      type: 'datetime',
      defaultsTo: new Date(),
    }
    updatedAt: {
      type: 'datetime',
      defaultsTo: new Date(),
    }
    email: 'string',
    type: 'string',
    fname: 'string',
    lname: 'string',
    dob: 'array',
    empnum: 'string',
    assignment: 'string',
    shift: 'string',
    rank: 'string'
  }
};

