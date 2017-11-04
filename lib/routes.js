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
        triggersEnter: [trackRouteEntry],
        async action() {
            await Promise.all([
              import('../imports/ui/pages/home/home.js'),
              import('../imports/ui/components/header/header.js'),
              import('../imports/ui/components/footer/footer.js')
            ]);
            BlazeLayout.render('App_body', { top: "header", main: 'home', bottom: 'footer' });
        },
        // action() {
        //     BlazeLayout.render('App_body', { top: "header", main: 'home', bottom: 'footer' });
        // },
    });

    FlowRouter.route('/become-a-buddy', {
        name: 'App.become_a_buddy',
        triggersEnter: [trackRouteEntry],
        action() {
            //BlazeLayout.render('App_body', { top: "header", main: 'home', bottom: 'footer' });
            alert('ROUTE BECOME A BUDDY');
        },
    });

    function trackRouteEntry(context) {
        // context is the output of `FlowRouter.current()`
        //Mixpanel.track("visit-to-home", context.queryParams);
        console.log(context.route.name);
    }
    
}