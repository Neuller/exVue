new Vue({

    el: '#vue-app',
    data: {
    nome: 'Neuller',
    cidade: 'Contagem',
    ocupacao: 'Desenvolvedor',
    site: "https://www.imdb.com/",
    counter: 0,
    x: 0,
    y: 0,
    msgPositiva: "",
    mostra1: false,
    mostra2: false,
    items: [0, 1, 2, 3, 4, 5]
    },

    methods: {

    saudacao: function(hora){
        return 'Olá ' + this.nome;
    },

    soma: function(a, b){
        return a + b;
    },

    adicionar: function(){
        return this.counter ++;
    },

    excluir: function(){
        return this.counter --;
    },

    coordenadas:function(evt){
        this.x = evt.offsetX;
        this.y = evt.offsetY;
    },

    Disponivel:function(){
        if(this.counter >=10){
            this.msgPositiva = "Saldo Positivo!";
            return true
        }
        this.msgPositiva = "Necessário adicionar Saldo!";
        return false;
    },

    mostrar01:function(){
        this.mostra1 = true;
        this.mostra2 = false;
    },

    mostrar02:function(){
        this.mostra2 = true;
        this.mostra1 = false;
    }

}

});
