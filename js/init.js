/**
 * Created by Jay on 3-7-14.
 */
(function () {
    window.site = {};
    site.views = {};
    site.$document = $(document);
    site.models = {};
    site.collections = {};

    site.events = _.clone(Backbone.Events);
})()