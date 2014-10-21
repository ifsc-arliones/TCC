var UserView = Backbone.View.extend({
    tagName: 'div',
    className: 'user',

    events: {
        "click .icon.video" : "openVideo",
        "click .icon.audio" : "openAudio",
        "click .icon.chat" : "openChat"
    },

    initialize: function() {
        _.bindAll(this, 'render');

        this.template = $('#userTemplate').html();
    },

    render: function(x) {
        console.log("Rendering...");
        // this.$el.html(this.template({userStatus: "Disponível", userRamal: "2001"}));

        var content = {
            userStatus: "",
            userRamal: "2000"   
        };
        
        var rendered = Mustache.to_html(this.template, content);
        this.$el.html(rendered);
        $('.usersDiv').append(this.el);
    },

    openVideo: function() {
        var $el = $(this.el),
            x = $el.find('ul'),
            data = x.attr('data-ramal');

        window.alert("Abrindo comunicação de VÍDEO para o ramal "+data);
    },

    openAudio: function() {
        var $el = $(this.el),
            x = $el.find('ul'),
            data = x.attr('data-ramal');

        window.alert("Abrindo comunicação de ÁUDIO para o ramal "+data);
    },

    openChat: function() {
        var $el = $(this.el),
            x = $el.find('ul'),
            data = x.attr('data-ramal');

        window.alert("Abrindo comunicação de CHAT para o ramal "+data);
    }
});