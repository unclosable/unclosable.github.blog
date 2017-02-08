var client = (function() {
    var messageAction = [],
        disconnectAction = [],
        socket;
    var init = function() {
        socket = io("http://139.129.12.185:5566");
        socket.on('connect', function() {
            console.log('connect success');
        });
        socket.on('message', function(data) {
            for (var i = messageAction.length - 1; i >= 0; i--) {
                messageAction[i](data);
            };
        });
        socket.on('disconnect', function(data) {
            for (var i = disconnectAction.length - 1; i >= 0; i--) {
                disconnectAction[i](data);
            };
        });
    }
    var isFunction = function(test) {
        return typeof test == 'function';
    }
    var addActor = function(actor, actorList) {
        if (isFunction(actor) && actorList) {
            return function() {
                actorList.push(actor);
            }
        };
    }
    var messageSender = function(message) {
        if (socket) {
            socket.emit('message', message);
        }
    }
    init();
    return {
        addMessageActor: function(actor) {
            addActor(actor, messageAction)();
        },
        addDisconnectActor: function(actor) {
            addActor(actor, disconnectAction)();
        },
        messageSender: messageSender
    }
})();
