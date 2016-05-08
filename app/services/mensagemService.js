	(
		function () {
            
			// nao deixa criar variavel sem var
			'use strict';

            // aqui criamos o service
			angular.module('app').service('mensagemService', mensagemService);

            // aqui injetamos as dependencias
			mensagemService.$inject = ['$http','url'];

            // function da service
			function mensagemService($http, url) {

				this.listar = function(){
                    
                    // request http para buscar os dados
					return $http(
						{
							url: url + 'mensagem',
                           
							method:  'GET'
						});
				}
                
                /*
				this.cadastrar = function(amigo){
					return $http(
						{
							url: url + 'amigo/cadastrar',
							method:  'POST',
							data: amigo
						});	
				}
                */

			}

		}
	)();