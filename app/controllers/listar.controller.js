	(
		function () {
            
			// nao deixa criar variavel sem var
			'use strict';
            
            // aqui criamos a controller
			angular.module('app').controller('escreverController', escreverController);

            //aqui criamos as dependencias
			escreverController.$inject = ['$scope', 'mensagemService'];

            // function da controller
			function escreverController($scope, mensagemService) {
				
				var vm = this;

				vm.dadosMensagem = [];
                
                
                vm.enviarMensagem = function(){                    
                     vm.dadosMensagem.push (
                        {
                            nome : vm.nome, 
                            email : vm.email,
                            telefone : vm.telefone,
                            estado : vm.mySelect
                        }
                    );
                    
                    console.log(vm.dadosMensagem);
                    
                 }
				
                // chamamos o service e exibimos os dados com console.log
				/*
                mensagemService.listar().then(function(retorno){
					vm.escreverMensagem = retorno.data;
                    console.log(vm.escreverMensagem);
				});
                */

			}

		}
	)();