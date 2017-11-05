import { Template } from 'meteor/templating';
import '../../../../imports/lib/jquery-ui-1.12.1/jquery-ui.min.js';
import '../../../../imports/lib/jquery-ui-1.12.1/jquery-ui.min.css';
import './home.html';
import '../../../../client/views/common/search_filter.html';

Template.search_filter.onRendered(function(){
    $(".datepicker").datepicker({
        "dateFormat":"dd M yy"
    });
});

