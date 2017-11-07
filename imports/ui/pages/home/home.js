import { Template } from 'meteor/templating';
import { Session } from 'meteor/session';

import { Tours } from '../../../../imports/api/tours.js';

import '../../../../imports/lib/jquery-ui-1.12.1/jquery-ui.min.js';
import '../../../../imports/lib/jquery-ui-1.12.1/jquery-ui.min.css';
import '../../../../imports/lib/jquery-timepicker-1.3.5/jquery.timepicker.min.js';
import '../../../../imports/lib/jquery-timepicker-1.3.5/jquery.timepicker.min.css';

import './home.html';
import '../../../../client/views/common/search_filter.html';
import '../../../../client/views/common/tour.html';

Template.search_filter.onRendered(function(){
    $(".datepicker").datepicker({
        "dateFormat":"dd M yy"
    });
    
    $(".datepicker").datepicker("setDate",new Date());
    
    $('.timepicker').timepicker({
        timeFormat: 'HH:mm',
        dropdown: true,
        scrollbar: true
    });
});

Template.home.helpers({
  tours() {
    const selector = {};
    var date = Session.get("date");
    var timeFrom = Session.get("timeFrom");
    
    if(date!== undefined && date!=""){
        selector.date=date;
    }

    if(timeFrom!== undefined && timeFrom!=""){
        selector.time_from={"$gte":timeFrom};
    }
    
    return Tours.find(selector);
  },
});

Template.search_filter.events({
  'click #btnSearch'(event) {
    // Prevent default browser form submit
    event.preventDefault();
    
    var date=moment($("#date").val()).format("YYYY-MM-DD");
    
    var timeFrom=$("#timeFrom").val();
    
    Session.set("date",date);
    Session.set("timeFrom",timeFrom);
    
  },
});

