define( ["ko", "jquery"], function( ko, $ ){

    return {
        app : function(){
            var self = this;


            self.data = {
                routes : [],
                loading : " <div class='w3-xlarge w3-center'><i class='mdi mdi-loading mdi-spin'></i></div> "
            };


            self.init = function(){
                $(function(){
                    $( window ).on( "hashchange", function( ev ){
                        ev.preventDefault();
                        self.hashChange();
                        return false;
                    } )
                });
                self.hashChange();
            };


            self.hashChange = function(){
                var hash = location.hash || "";
                hash = hash.startsWith( "#!/" ) ? hash.replace( "#!", "" ) : "/";
                location.hash = "#!" + hash;
                self.routeTo( hash );
            }

            
            self.routeTo = function( hash ){
                ko.cleanNode( document.getElementById( "main" ) )
                $( "#main" ).html( self.data.loading );
                var route = self.data.routes.filter( function( x ){
                    return x.url==hash;
                } )[0];
                if( !route )
                    return $( "#main" ).html( " <font color='red'> ERROR : 404 url not found </font> " );
                $.ajax( {
                    type : "GET",
                    url : route.view,
                    success : function( res ){
                        document.title = route.title || document.title;
                        $( "#main" ).html( res );
                        requirejs( [route.controller], function( Controller ){
                            ko.applyBindings( new Controller(), document.getElementById( "main" ) );
                        } );
                    },
                    error : function( err ){
                        $( "#main" ).html( " <font color='red'> ERROR : 404 url not found </font> " );
                    }
                } );
            };

            
            self.configRoutes = function( routes ){
                self.data.routes = routes;
            }
        }
    }

} );