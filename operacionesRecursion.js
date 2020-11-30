let operaciones = {
    dcm : function (n1, n2) {
            if ( ! n2) {
                return n1;
            }
            return this.dcm(n2, n1 % n2);
        },
      cuentaAdelante : function (n1, n2) {
        if (n2 < n1){
          return [];
        } else {
          let array = this.cuentaAdelante(n1, n2-1);
          array.push(n2);
          return array
        }
      },
      cuentaAtras : function (n1, n2) {
        if (n2 < n1){
          return [];
        } else {
          let array = this.cuentaAtras(n1, n2-1);
          array.unshift(n2);
          return array
        }
      }
};

module.exports = operaciones