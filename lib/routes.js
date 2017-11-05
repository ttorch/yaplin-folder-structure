if(Meteor.isClient){
    //FlowRouter.wait();
    import { FlowRouter } from 'meteor/kadira:flow-router';
    import { BlazeLayout } from 'meteor/kadira:blaze-layout';
    
    // Import needed templates
    import '../imports/ui/layouts/body/body.js';
    //import '../imports/ui/pages/home/home.js';
    //import '../imports/ui/components/header/header.js';
    //import '../imports/ui/components/footer/footer.js';

    // Set up all routes in the app
    FlowRouter.route('/', {
        name: 'App.home',
        triggersEnter: [trackRouteEntry,changePageTitle],
        async action() {
            await Promise.all([
              //import('../imports/lib/jquery-ui-1.12.1/jquery-ui.min.js'),
              //import('../imports/lib/jquery-ui-1.12.1/jquery-ui.min.css'),
              import('../imports/ui/pages/home/home.js'),
              import('../imports/ui/components/header/header.js'),
              import('../imports/ui/components/footer/footer.js')
            ]);
            
            //$(".datepicker").datepicker();
            BlazeLayout.render('App_body', { top: "header", main: 'home', bottom: 'footer' });
            
        },
        title: 'Home'
        // action() {
        //     BlazeLayout.render('App_body', { top: "header", main: 'home', bottom: 'footer' });
        // },
    });

    FlowRouter.route('/become-a-buddy', {
        name: 'App.become_a_buddy',
        triggersEnter: [trackRouteEntry,changePageTitle],
        async action() {
            await Promise.all([
                import('../imports/ui/pages/become_a_buddy/become_a_buddy.js'),
                import('../imports/ui/components/header/header.js'),
                import('../imports/ui/components/footer/footer.js')
            ]);
            
            BlazeLayout.render('App_body', { top: "header", main: 'become_a_buddy', bottom: 'footer' });
            //alert('ROUTE BECOME A BUDDY');
            
        },
        title: 'Become a Buddy'
    });

    function trackRouteEntry(context) {
        // context is the output of `FlowRouter.current()`
        //Mixpanel.track("visit-to-home", context.queryParams);
        console.log(context.route.name);
    }
    
    function changePageTitle(context){
        document.title = "Yaplin - "+context.route.options.title;
    }
}