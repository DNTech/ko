define( ['ko'], function( ko ){
    return function Controller(){
        this.name = ko.observable('You are on homepage')
    }
} );