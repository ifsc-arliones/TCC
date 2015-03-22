var UserView = Backbone.View.extend({
    tagName: 'div',
    className: 'user',

    events: {
        "click .icon.video" : "openVideo",
        "click .icon.audio" : "openAudio",
        "click .icon.chat" : "openChat"
    },

    peer: null,

    initialize: function() {
        _.bindAll(this, 'render');

        this.data = {
            ramalOcupado: false
        };

        this.template = $('#userTemplate').html();
    },

    render: function() {
        console.log("Rendering...");
        var data = $.extend(true, {}, this.peer, this.data);

        console.log('fooo', data);

        var rendered = Mustache.to_html(this.template, data);
        this.$el.html(rendered);
    },

    setPeer: function(peer) {
        this.peer = peer;
        
        this.data.ramalOcupado = peer.ipport != 0;
    },

    openVideo: function() {
        var $el = $(this.el),
            x = $el.find('ul'),
            data = x.attr('data-ramal');

            sipCall("call-audiovideo"); //função do pŕoprio sipML5. js/lib/index.js
            console.log('call-video: ', data);
    },


    openAudio: function() {
        var $el = $(this.el),
            x = $el.find('ul'),
            data = x.attr('data-ramal');

            sipCall("call-audio"); //função do pŕoprio sipML5. js/lib/index.js
            console.log('call-audio: ', data);
    },

    openChat: function() {
        var $el = $(this.el),
            x = $el.find('ul'),
            data = x.attr('data-ramal');

             console.log('foo x', x);

        window.alert("Abrindo comunicação de CHAT para o ramal "+data);
    }
});