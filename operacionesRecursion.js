let operaciones = {
    dcm : function (n1, n2) {
            if ( ! n2) {
                return n1;
            }
            return this.dcm(n2, n1 % n2);
        },
    listaDeNumeros : function (n1, n2) {
        if (n2 < n1){
          return [];
        } else {
          let array = this.listaDeNumeros(n1, n2-1);
          array.push(n2);
          return array
        }
      }
};

module.exports = operaciones